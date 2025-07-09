import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface CaretRightProps extends SvgIconProps {
  //
}

const CaretRight = (props: CaretRightProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path d="M11.71 14.9975L14.3 12.4075C14.69 12.0175 14.69 11.3875 14.3 10.9975L11.71 8.40751C11.08 7.77751 10 8.22751 10 9.11751L10 14.2975C10 15.1875 11.08 15.6275 11.71 14.9975Z" />
      </svg>
    </SvgIcon>
  );
};

export default CaretRight;
