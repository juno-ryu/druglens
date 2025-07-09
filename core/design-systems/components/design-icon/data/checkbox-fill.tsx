import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface CheckboxFillProps extends SvgIconProps {
  //
}

const CheckboxFill = (props: CheckboxFillProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 20} height={height} {...restProps}>
      <svg viewBox="0 0 20 20">
        <rect x="2" y="2" width="16" height="16" rx="4" />
        <rect x="2.5" y="2.5" width="15" height="15" rx="3.5" stroke="black" strokeOpacity="0.12" />
        <path d="M13.364 8L9.12132 12.2426L7 10.1213" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </SvgIcon>
  );
};

export default CheckboxFill;
