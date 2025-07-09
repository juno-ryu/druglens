import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface ChevronUpThinProps extends SvgIconProps {
  //
}

const ChevronUpThin = (props: ChevronUpThinProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.5761 14.4801C18.311 14.7983 17.8381 14.8413 17.5198 14.5762L12 9.97628L6.48012 14.5762C6.16191 14.8413 5.68899 14.7983 5.42381 14.4801C5.15864 14.1619 5.20164 13.689 5.51984 13.4238L11.5198 8.42383C11.798 8.19206 12.202 8.19206 12.4801 8.42383L18.4801 13.4238C18.7983 13.689 18.8413 14.1619 18.5761 14.4801Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default ChevronUpThin;
