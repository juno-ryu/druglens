import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface TabDividerProps extends SvgIconProps {
  //
}

const TabDivider = (props: TabDividerProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 6} height={height} {...restProps}>
      <svg viewBox="0 0 6 24">
        <path d="M3.75 4.75V19.25H2.25V4.75H3.75Z" />
      </svg>
    </SvgIcon>
  );
};

export default TabDivider;
