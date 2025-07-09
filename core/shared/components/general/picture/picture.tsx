'use client';

import Image from 'next/image';
import { pictureLoader, pictureLoaderWithWatermark } from '@/core/shared/components/general/picture/picture.const';
import { PictureProps } from '@/core/shared/components/general/picture/picture.type';

const Picture = (props: PictureProps) => {
  const { src, isUnoptimized = false, fill = true, alt, style = {}, sizes, watermark, objectFit, placeholder = 'blur', className, priority = false, ...restProps } = props;

  const unoptimized = isUnoptimized || src.endsWith('gif');

  return (
    <Image
      src={src}
      fill={fill}
      sizes={sizes}
      style={{ objectFit, ...style }}
      unoptimized={unoptimized}
      loader={watermark ? pictureLoaderWithWatermark : pictureLoader}
      placeholder={placeholder}
      blurDataURL={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8vAkAAl4Bh+J6dBIAAAAASUVORK5CYII='}
      alt={alt}
      className={'custom-img' + (className ? ' ' + className : '')}
      priority={priority}
      {...restProps}
    />
  );
};
export default Picture;
