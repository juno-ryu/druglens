import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface CaretUpProps extends SvgIconProps {
  //
}

const CaretUp = (props: CaretUpProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path d="M15.29 12.29L12.7 9.7C12.31 9.31 11.68 9.31 11.29 9.7L8.70001 12.29C8.07001 12.92 8.52001 14 9.41001 14L14.59 14C15.48 14 15.92 12.92 15.29 12.29Z" />
      </svg>
    </SvgIcon>
  );
};

export default CaretUp;
