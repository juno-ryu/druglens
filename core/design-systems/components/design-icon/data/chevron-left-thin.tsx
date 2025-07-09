import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface ChevronLeftThinProps extends SvgIconProps {
  //
}

const ChevronLeftThin = (props: ChevronLeftThinProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.4801 5.42384C14.7983 5.68901 14.8413 6.16193 14.5762 6.48014L9.97628 12L14.5762 17.5199C14.8413 17.8381 14.7983 18.311 14.4801 18.5762C14.1619 18.8413 13.689 18.7983 13.4238 18.4801L8.42383 12.4801C8.19206 12.202 8.19206 11.798 8.42383 11.5199L13.4238 5.51987C13.689 5.20166 14.1619 5.15866 14.4801 5.42384Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default ChevronLeftThin;
