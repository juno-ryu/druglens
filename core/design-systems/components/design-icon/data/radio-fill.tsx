import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface RadioFillProps extends SvgIconProps {
  //
}

const RadioFill = (props: RadioFillProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 20} height={height} {...restProps}>
      <svg viewBox="0 0 20 20">
        <path d="M10 5.83333C7.69882 5.83333 5.83334 7.69881 5.83334 9.99999C5.83334 12.3012 7.69882 14.1667 10 14.1667C12.3012 14.1667 14.1667 12.3012 14.1667 9.99999C14.1667 7.69881 12.3012 5.83333 10 5.83333Z" />
        <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    </SvgIcon>
  );
};

export default RadioFill;
