import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface TrendUpProps extends SvgIconProps {
  //
}

const TrendUp = (props: TrendUpProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 12} height={height} {...restProps}>
      <svg viewBox="0 0 12 12">
        <path d="M2 8.5L6 2.5L10 8.5H2Z" />
      </svg>
    </SvgIcon>
  );
};

export default TrendUp;
