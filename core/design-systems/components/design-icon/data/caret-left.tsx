import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface CaretLeftProps extends SvgIconProps {
  //
}

const CaretLeft = (props: CaretLeftProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path d="M12.29 8.40997L9.7 11C9.31 11.39 9.31 12.02 9.7 12.41L12.29 15C12.92 15.63 14 15.18 14 14.29L14 9.10997C14 8.21997 12.92 7.77997 12.29 8.40997Z" />
      </svg>
    </SvgIcon>
  );
};

export default CaretLeft;
