import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface TabNewProps extends SvgIconProps {
  //
}

const TabNew = (props: TabNewProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 20} height={height} {...restProps}>
      <svg viewBox="0 0 20 20">
        <rect x="2" y="2" width="16" height="16" rx="4" />
        <path d="M13.2959 6.05005V13.8274H11.7383L8.58008 9.26196H8.52637V13.8274H6.7002V6.05005H8.2793L11.4053 10.6155H11.4697V6.05005H13.2959Z" fill="white" />
      </svg>
    </SvgIcon>
  );
};

export default TabNew;
