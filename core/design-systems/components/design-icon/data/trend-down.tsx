import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface TrendDownProps extends SvgIconProps {
  //
}

const TrendDown = (props: TrendDownProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 12} height={height} {...restProps}>
      <svg viewBox="0 0 12 12">
        <path d="M10 3.5L6 9.5L2 3.5L10 3.5Z" />
      </svg>
    </SvgIcon>
  );
};

export default TrendDown;
