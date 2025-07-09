import { CSSProperties, ReactEventHandler } from 'react';

export interface PictureProps {
  src: string;
  alt: string;
  fill?: boolean;
  quality?: number;
  isUnoptimized?: boolean;
  style?: CSSProperties;
  sizes?: string;
  priority?: boolean;
  watermark?: boolean;
  onLoad?: ReactEventHandler<HTMLImageElement>;
  placeholder?: 'blur' | 'empty';
  width?: number;
  height?: number;
  onClick?: ReactEventHandler<HTMLImageElement>;
  className?: string;
  objectFit?: CSSProperties['objectFit'];
}
