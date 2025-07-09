import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface ProdCardVipProps extends SvgIconProps {
  //
}

const ProdCardVip = (props: ProdCardVipProps) => {
  const { width, height, fill, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 20} height={height} {...restProps}>
      <svg viewBox="0 0 20 16">
        <rect y="0.000610352" width="20" height="16" rx="8" fill={fill} />
        <path
          d="M5.82604 5.18526C5.73968 5.10507 5.61401 5.08368 5.50599 5.13079C5.39796 5.17789 5.32812 5.28453 5.32812 5.40238V10.502C5.32812 10.6656 5.46078 10.7983 5.62442 10.7983H14.3744C14.5381 10.7983 14.6707 10.6656 14.6707 10.502V5.40238C14.6707 5.28453 14.6009 5.17789 14.4929 5.13079C14.3848 5.08368 14.2592 5.10507 14.1728 5.18526L12.1235 7.0882L10.2079 5.19181C10.0924 5.07751 9.90643 5.07751 9.79097 5.19181L7.87536 7.0882L5.82604 5.18526Z"
          fill="white"
        />
      </svg>
    </SvgIcon>
  );
};

export default ProdCardVip;
