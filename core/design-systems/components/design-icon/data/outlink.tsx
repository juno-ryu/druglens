import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface OutlinkProps extends SvgIconProps {
  //
}

const Outlink = (props: OutlinkProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path d="M10 5C10.5523 5 11 5.44772 11 6C11 6.55228 10.5523 7 10 7H6V18H17V14C17 13.4477 17.4477 13 18 13C18.5523 13 19 13.4477 19 14V19C19 19.5523 18.5523 20 18 20H5C4.44772 20 4 19.5523 4 19V6C4 5.44772 4.44772 5 5 5H10ZM20 3C20.5523 3 21 3.44772 21 4V10C21 10.5523 20.5523 11 20 11C19.4477 11 19 10.5523 19 10L18.9999 6.413L12.9142 12.4999C12.5237 12.8905 11.8905 12.8905 11.4999 12.4999C11.1094 12.1094 11.1094 11.4763 11.4999 11.0858L17.5849 5H14C13.4477 5 13 4.55228 13 4C13 3.44772 13.4477 3 14 3H20Z" />
      </svg>
    </SvgIcon>
  );
};

export default Outlink;
