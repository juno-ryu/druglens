import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface CaretDownProps extends SvgIconProps {
  //
}

const CaretDown = (props: CaretDownProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path d="M8.70999 11.71L11.3 14.3C11.69 14.69 12.32 14.69 12.71 14.3L15.3 11.71C15.93 11.08 15.48 10 14.59 10H9.40999C8.51999 10 8.07999 11.08 8.70999 11.71Z" />
      </svg>
    </SvgIcon>
  );
};

export default CaretDown;
