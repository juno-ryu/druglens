import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface CheckboxOutlineProps extends SvgIconProps {
  //
}

const CheckboxOutline = (props: CheckboxOutlineProps) => {
  const { width, height, ...restProps } = props;
  return (
    <SvgIcon width={width ?? 20} height={height} {...restProps}>
      <svg viewBox="0 0 20 20">
        <rect x="2.5" y="2.5" width="15" height="15" rx="3.5" fill="white" stroke="currentColor" />
      </svg>
    </SvgIcon>
  );
};

export default CheckboxOutline;
