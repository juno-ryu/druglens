import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface ArrowUpThinProps extends SvgIconProps {
  //
}

const ArrowUpThin = (props: ArrowUpThinProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 4.25C12.1989 4.25 12.3897 4.32902 12.5303 4.46967L18.5303 10.4697C18.8232 10.7626 18.8232 11.2374 18.5303 11.5303C18.2374 11.8232 17.7626 11.8232 17.4697 11.5303L12.75 6.81066L12.75 19C12.75 19.4142 12.4142 19.75 12 19.75C11.5858 19.75 11.25 19.4142 11.25 19L11.25 6.81066L6.53033 11.5303C6.23744 11.8232 5.76256 11.8232 5.46967 11.5303C5.17678 11.2374 5.17678 10.7626 5.46967 10.4697L11.4697 4.46967C11.6103 4.32902 11.8011 4.25 12 4.25Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default ArrowUpThin;
