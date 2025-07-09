import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface CaretSortingDownProps extends SvgIconProps {
  //
}

const CaretSortingDown = (props: CaretSortingDownProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path d="M9.53217 14.4075L11.4747 16.35C11.7672 16.6425 12.2397 16.6425 12.5322 16.35L14.4747 14.4075C14.9472 13.935 14.6097 13.125 13.9422 13.125H10.0572C9.38967 13.125 9.05967 13.935 9.53217 14.4075Z" />
        <path
          d="M14.473 9.5925L12.5305 7.65C12.238 7.3575 11.7655 7.3575 11.473 7.65L9.53046 9.5925C9.05796 10.065 9.39546 10.875 10.063 10.875L13.948 10.875C14.6155 10.875 14.9455 10.065 14.473 9.5925Z"
          fill="#D2D2D3"
        />
      </svg>
    </SvgIcon>
  );
};

export default CaretSortingDown;
