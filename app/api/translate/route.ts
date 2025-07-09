import { NextResponse } from 'next/server';
import { cloneDeep } from 'lodash';
import { BlockToolData, OutputBlockData, OutputData } from '@editorjs/editorjs';
import * as deepl from 'deepl-node';
import { XMLBuilder, XMLParser } from 'fast-xml-parser';

const translator = new deepl.Translator(process.env.NEXT_PUBLIC_DEEPL_API_KEY || '');

const LANGUAGE_MAP: Record<string, deepl.TargetLanguageCode> = {
  ko: 'ko',
  en: 'en-US',
  ja: 'ja',
  zh: 'zh',
};
const jsonToXml = (jsonData: OutputBlockData['data']): string => {
  const copyData = cloneDeep(jsonData);
  // const isOrdered = Boolean(copyData?.style === 'ordered');
  // const isArrayItems = Boolean(copyData?.items && Array.isArray(copyData.items));

  // if (isOrdered && isArrayItems) {
  //   copyData.items = copyData.items.map((item: any) => {
  //     const { content, ...rest } = item;
  //     return { ...rest, text: content };
  //   });
  // }

  const builder = new XMLBuilder({
    // ignoreAttributes: false, // @로 시작하는 속성을 XML 속성으로 유지
    // format: true, // 보기 좋은 XML 포맷으로 변환
    // attributeNamePrefix: '@_', // 속성 앞에 @를 붙여 JSON과 XML을 매핑
  });

  return builder.build(copyData);
};

const xmlToJson = (xmlData: string) => {
  const parser = new XMLParser({ ignoreAttributes: false });
  const jsonData = parser.parse(xmlData);
  const copyData = cloneDeep(jsonData);
  // const isOrdered = Boolean(copyData?.style === 'ordered');
  // const isArrayItems = Boolean(copyData?.items && Array.isArray(copyData.items));

  // if (isOrdered && isArrayItems) {
  //   copyData.items = copyData.items.map((item: any) => {
  //     const { text, ...rest } = item;
  //     return { ...rest, content: text };
  //   });
  // }

  return copyData;
};

const syncMissingFields = (original: any, transformed: any): any => {
  if (Array.isArray(original) && Array.isArray(transformed)) {
    return original.map((origItem, idx) => syncMissingFields(origItem, transformed[idx] ?? {}));
  }

  if (typeof original === 'object' && typeof transformed === 'object') {
    const result: any = { ...transformed };

    for (const key in original) {
      if (!(key in transformed)) {
        result[key] = original[key];
      } else {
        result[key] = syncMissingFields(original[key], transformed[key]);
      }
    }

    return result;
  }

  return transformed ?? original;
};

export async function POST(req: Request) {
  try {
    const { text, lang, isEditor } = await req.json();
    if (!LANGUAGE_MAP[lang]) {
      return NextResponse.json({ error: 'Invalid target language' }, { status: 400 });
    }

    const targetText = isEditor ? JSON.parse(text) : text;
    const targetLang = LANGUAGE_MAP[lang];

    if (isEditor) {
      const xmlData = targetText.blocks.map((content: BlockToolData) => jsonToXml(content.data));
      const result = (await translator.translateText(xmlData, null, targetLang, {
        tagHandling: 'xml',
        ignoreTags: ['style', 'counterType', 'meta', 'service'],
      })) as deepl.TextResult[];

      const translatedResults = result.map((res) => xmlToJson(res.text));
      const translatedEditorFormat: OutputData = {
        time: targetText.time,
        blocks: targetText.blocks.map((item: BlockToolData<any>, index: number) => {
          return {
            ...targetText.blocks[index],
            data: syncMissingFields(item.data, translatedResults[index]),
          };
        }),
        version: targetText.version,
      };

      return NextResponse.json(translatedEditorFormat, { status: 200 });
    } else {
      // case : plain text
      const result = await translator.translateText(targetText, null, targetLang);
      return NextResponse.json(result, { status: 200 });
    }
  } catch (error) {
    console.error('Translation error:', error);
    return NextResponse.json({ error: 'Translation failed' }, { status: 500 });
  }
}
