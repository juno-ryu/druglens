import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface MinusProps extends SvgIconProps {
  //
}

const Minus = (props: MinusProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path d="M19 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13Z" />
      </svg>
    </SvgIcon>
  );
};

export default Minus;
