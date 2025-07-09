import { OutputData, ToolConstructable, ToolSettings } from '@editorjs/editorjs';
import striptags from 'striptags';
import { TypeEditorOptions } from '@/core/shared/hooks/display/use-editor/use-editor.type';
import COMMON_APIS from '@/core/shared/service/common/common.service';

export const EditorViewerClassNames = {
  header: {
    h1: 'ce-header',
    h2: 'ce-header',
    h3: 'ce-header',
    h4: 'ce-header',
    h5: 'ce-header',
    h6: 'ce-header',
  },
  paragraph: 'ce-paragraph cdx-block',
  image: {
    img: 'image-tool__image-picture',
    figure: 'cdx-block image-tool image-tool--filled',
    figcaption: 'cdx-input image-tool__caption',
  },
  list: {
    container: 'cdx-list',
    listItem: 'cdx-list__item cdx-list__item-content',
  },
  checklist: {
    container: 'cdx-list cdx-list-checklist',
    checkbox: 'cdx-list__item cdx-list__item-checkbox',
    label: 'cdx-checklist__label',
  },
  table: {
    table: 'tc-table',
    tr: 'tc-row',
    th: 'tc-cell tc-cell--header',
    td: 'tc-cell',
  },
};

export type EnumSupportEditorTool = (typeof EnumSupportEditorTool)[keyof typeof EnumSupportEditorTool];
export const EnumSupportEditorTool = {
  Header: 'header',
  Paragraph: 'paragraph',
  Image: 'image',
  Embed: 'embed',
  Checklist: 'checklist',
  Link: 'link',
  Underline: 'underline',
  Marker: 'marker',
  List: 'list',
  Table: 'table',
  Delimiter: 'delimiter',
  ColorPicker: 'colorpicker',
} as const;

export type TypeEditorTools = { [key in EnumSupportEditorTool]?: ToolConstructable | ToolSettings };
export const editorToolsConfigs: TypeEditorTools = {
  header: {
    inlineToolbar: true,
    shortcut: 'CMD+SHIFT+H',
    config: {
      placeholder: 'Enter a header',
      levels: [1, 2, 3, 4, 5],
      defaultLevel: 3,
      defaultAlignment: 'right',
    },
  },
  paragraph: {
    inlineToolbar: true,
    shortcut: 'CMD+SHIFT+P',
    config: {
      placeholder: 'Enter a text',
    },
  },
  image: {
    config: {
      caption: false,
      buttonContent: 'Select an Image',
      onPreview: (src: string) => {
        console.log(src);
      },

      uploader: {
        uploadByFile: async (file: File) => {
          const { data } = await COMMON_APIS['editor/upload-image'].post({ file });
          return { success: 1, file: { url: data.url } };
        },
        uploadByUrl: async (url: string) => {
          return {
            success: 1,
            file: {
              url: url,
            },
          };
        },
      },
    },
  },
  embed: {
    inlineToolbar: true,
    shortcut: 'CMD+E',
    config: {
      disableCaption: true,
      services: {
        youtube: true,
        vimeo: true,
        vine: true,
        instagram: true,
        dailymotion: true,
        youku: true,
        soundcloud: true,
      },
    },
  },
  checklist: {
    inlineToolbar: false,
    toolbox: false,
  },
  link: {
    inlineToolbar: false,
    toolbox: false,
    config: {
      endpoint: '/api/fetch-metadata',
    },
  },
  underline: {
    shortcut: 'CMD+U',
  },
  marker: {
    shortcut: 'CMD+E',
  },
  list: {
    inlineToolbar: true,
    shortcut: 'CMD+SHIFT+L',
    config: {
      defaultStyle: 'unordered',
      maxLevel: 6,
      enableLineBreaks: false,
    },
  },
  table: {
    inlineToolbar: true,
    shortcut: 'CMD+ALT+T',
    config: {
      rows: 2,
      cols: 3,
    },
  },
  delimiter: {
    config: {},
  },
  colorpicker: {},
};

export const editorSanitizerConfig = {
  //
};

export const getTools = async (input: TypeEditorOptions['tools'] = {}) => {
  if (typeof window === 'undefined') return {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toolModules: Record<EnumSupportEditorTool, () => Promise<any>> = {
    [EnumSupportEditorTool.Header]: () => import('@editorjs/header'),
    [EnumSupportEditorTool.Paragraph]: () => import('@editorjs/paragraph'),
    [EnumSupportEditorTool.Image]: () => import('@editorjs/image'),
    [EnumSupportEditorTool.Embed]: () => import('@editorjs/embed'),
    [EnumSupportEditorTool.Checklist]: () => import('@editorjs/checklist'),
    [EnumSupportEditorTool.Link]: () => import('@editorjs/link'),
    [EnumSupportEditorTool.Underline]: () => import('@editorjs/underline'),
    [EnumSupportEditorTool.Marker]: () => import('@editorjs/marker'),
    [EnumSupportEditorTool.List]: () => import('@editorjs/list'),
    [EnumSupportEditorTool.Table]: () => import('@editorjs/table'),
    [EnumSupportEditorTool.Delimiter]: () => import('@editorjs/delimiter'),
    [EnumSupportEditorTool.ColorPicker]: () => import('editorjs-color-picker'),
  };

  return Object.fromEntries(
    await Promise.all(
      (Object.keys(input) as EnumSupportEditorTool[])
        .filter((key) => input[key] && toolModules[key])
        .map(async (key) => [key, { ...editorToolsConfigs[key], class: (await toolModules[key]()).default }]),
    ),
  ) as TypeEditorTools;
};

/** editor로 보여줘야 하는 내용이 만약 editorJS에서 만들어주는 형식에 부합하지 않을 경우 강제로 해당 형식으로 변환하는 기능입니다 */
export const convertContentToEditorJSData = (content: string): OutputData => {
  try {
    const parsed = JSON.parse(content);
    const keys = Object.keys(parsed);
    if (!(keys.includes('version') && keys.includes('blocks'))) {
      throw new Error();
    }

    return parsed as OutputData;
  } catch {
    return {
      // TODO: `version: EditorJS.version`으로 싸야 하나, 그럴 경우 서버사이드에서 오류가 발생하므로 현재 버전을 문자열로 넣어둡니다.
      version: '2.31.0-rc.7',
      time: Date.now(),
      blocks: [
        {
          type: 'paragraph',
          data: {
            text: content ?? '',
          },
        },
      ],
    };
  }
};

/** EditorJS의 데이터에서 paragraph만 추출하는 기능입니다 */
export const extractParagraphFromEditorJSData = (data: OutputData, separator = '\n'): string => {
  const blocks = data.blocks || [];
  const paragraphs = blocks.filter((block) => block.type === 'paragraph');
  return paragraphs
    .map((block) => striptags(block.data.text).replace(/&lt;/g, '<').replace(/&gt;/g, '>'))
    .map((text) => text.replace(/&nbsp;/g, ' '))
    .join(separator);
};
