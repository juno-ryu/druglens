import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface ArrowLeftThinProps extends SvgIconProps {
  //
}

const ArrowLeftThin = (props: ArrowLeftThinProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L6.81066 11.25L19 11.25C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75L6.81066 12.75L11.5303 17.4697C11.8232 17.7626 11.8232 18.2374 11.5303 18.5303C11.2374 18.8232 10.7626 18.8232 10.4697 18.5303L4.46967 12.5303C4.17678 12.2374 4.17678 11.7626 4.46967 11.4697L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default ArrowLeftThin;
