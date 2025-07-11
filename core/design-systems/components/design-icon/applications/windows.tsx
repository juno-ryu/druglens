import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface WindowsProps extends SvgIconProps {
  //
}

const Windows = (props: WindowsProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 14} height={height} {...restProps}>
      <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="6.25616" height="6.25616" fill="inherit" />
        <rect x="7.24414" y="0.5" width="6.25616" height="6.25616" fill="inherit" />
        <rect x="0.5" y="7.24414" width="6.25616" height="6.25616" fill="inherit" />
        <rect x="7.24414" y="7.24414" width="6.25616" height="6.25616" fill="inherit" />
      </svg>
    </SvgIcon>
  );
};

export default Windows;
