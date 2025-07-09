import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface PhotoreviewImgViewallProps extends SvgIconProps {
  //
}

const PhotoreviewImgViewall = (props: PhotoreviewImgViewallProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 18} height={height} {...restProps}>
      <svg viewBox="0 0 18 18">
        <rect x="1.80078" y="2.3999" width="6" height="6" rx="1" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="1.80078" y="10.8" width="6" height="6" rx="1" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="10.1992" y="2.3999" width="6" height="6" rx="1" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="10.1992" y="10.8" width="6" height="6" rx="1" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </SvgIcon>
  );
};

export default PhotoreviewImgViewall;
