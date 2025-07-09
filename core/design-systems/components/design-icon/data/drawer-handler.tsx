import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface DrawerHandlerProps extends SvgIconProps {
  //
}

const DrawerHandler = (props: DrawerHandlerProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg width="36" height="4" viewBox="0 0 36 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="4" rx="2" fill="#D2D2D3" />
      </svg>
    </SvgIcon>
  );
};

export default DrawerHandler;
