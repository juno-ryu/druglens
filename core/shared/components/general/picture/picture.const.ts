import { ImageLoader } from 'next/image';

/**
 * 상대경로에서 가져오는 asset들을 image optimizer에게 전달하기 위해 절대경로로 변환
 * @param src
 */
export const pathAbsolutifier = (src: string) => (src[0] === '/' ? 'https://www.acon3d.com' + src : src);

export const pictureLoader: ImageLoader = ({ src, width, quality }) => {
  return `${process.env.NEXT_PUBLIC_IMAGEOPTIMIZER ?? ''}/?image=${encodeURIComponent(pathAbsolutifier(src))}&width=${width}&quality=${quality || 85}`;
};

export const pictureLoaderWithWatermark: ImageLoader = (arg) => {
  return pictureLoader(arg) + '&watermark=true';
};
