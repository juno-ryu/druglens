import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get('url');
    if (!url) {
      return NextResponse.json({ error: 'URL이 필요합니다.' }, { status: 400 });
    }

    const response = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!response.ok) throw new Error('웹사이트 요청 실패');

    const html = await response.text();

    const getMetaTag = (name: string) => {
      const match = html.match(new RegExp(`<meta[^>]+${name}[^>]+content=["']([^"']+)["']`, 'i'));
      return match ? match[1] : '';
    };

    const meta = {
      title: html.match(/<title>(.*?)<\/title>/)?.[1] || '', // `<title>` 태그 추출
      description: getMetaTag('name="description"'), // `<meta name="description">`
      image: getMetaTag('property="og:image"'), // `<meta property="og:image">`
      url: getMetaTag('property="og:url"') || url, // `<meta property="og:url">`
    };

    return NextResponse.json({ success: 1, meta });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: 0, error: '메타데이터를 가져오지 못했습니다.' }, { status: 500 });
  }
}
