import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface TrendStayProps extends SvgIconProps {
  //
}

const TrendStay = (props: TrendStayProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 12} height={height} {...restProps}>
      <svg viewBox="0 0 12 12">
        <rect x="4" y="5.5" width="4" height="1" />
      </svg>
    </SvgIcon>
  );
};

export default TrendStay;
