import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface ProdCardScrapOutlineProps extends SvgIconProps {
  //
}

const ProdCardScrapOutline = (props: ProdCardScrapOutlineProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          d="M5.1 5.41667C5.1 4.82756 5.57756 4.35 6.16667 4.35H17.8333C18.4224 4.35 18.9 4.82756 18.9 5.41667V18.3343C18.9 18.8037 18.4178 19.1183 17.9882 18.9293L12.9129 16.6962C12.3312 16.4402 11.6688 16.4402 11.0871 16.6962L6.01178 18.9293C5.58219 19.1183 5.1 18.8037 5.1 18.3343V5.41667Z"
          stroke="currentColor"
          fill="none"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default ProdCardScrapOutline;
