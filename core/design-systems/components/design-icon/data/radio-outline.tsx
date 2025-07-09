import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface RadioOutlineProps extends SvgIconProps {
  //
}

const RadioOutline = (props: RadioOutlineProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 20} height={height} {...restProps}>
      <svg viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="7.25" strokeWidth="1.5" fill="none" stroke="currentColor" />
      </svg>
    </SvgIcon>
  );
};

export default RadioOutline;
