import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface ChevronDownThinProps extends SvgIconProps {
  //
}

const ChevronDownThin = (props: ChevronDownThinProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.42385 9.51986C5.68903 9.20165 6.16195 9.15866 6.48016 9.42383L12 14.0237L17.5199 9.42383C17.8381 9.15866 18.311 9.20165 18.5762 9.51986C18.8414 9.83807 18.7984 10.311 18.4802 10.5762L12.4802 15.5762C12.202 15.8079 11.798 15.8079 11.5199 15.5762L5.51988 10.5762C5.20167 10.311 5.15868 9.83807 5.42385 9.51986Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default ChevronDownThin;
