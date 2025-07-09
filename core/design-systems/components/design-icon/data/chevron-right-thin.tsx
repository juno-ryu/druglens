import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface ChevronRightThinProps extends SvgIconProps {
  //
}

const ChevronRightThin = (props: ChevronRightThinProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.51986 18.5762C9.20165 18.311 9.15866 17.8381 9.42383 17.5199L14.0237 12L9.42383 6.48013C9.15866 6.16193 9.20166 5.689 9.51986 5.42383C9.83807 5.15866 10.311 5.20165 10.5762 5.51986L15.5762 11.5199C15.8079 11.798 15.8079 12.202 15.5762 12.4801L10.5762 18.4801C10.311 18.7983 9.83807 18.8413 9.51986 18.5762Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default ChevronRightThin;
