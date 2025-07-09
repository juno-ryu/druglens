import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface PayUnionpayFillProps extends SvgIconProps {
  //
}

const PayUnionpayFill = (props: PayUnionpayFillProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.9284 5.39269C3.97879 5.16337 4.18195 5 4.41675 5H8.22559C8.20525 5.05767 8.18824 5.11709 8.17484 5.17807L5.2583 18.4508C5.19531 18.7375 5.21846 19.0194 5.30844 19.2727H1.5002C1.18081 19.2727 0.943303 18.9774 1.01185 18.6654L3.9284 5.39269ZM6.72334 19.2727H9.13143H11.8529C11.7629 19.0194 11.7397 18.7375 11.8027 18.4508L14.7193 5.17807C14.7327 5.11709 14.7497 5.05767 14.77 5H12.4875H9.63989C9.4051 5 9.20193 5.16337 9.15154 5.39269L6.23499 18.6654C6.16645 18.9774 6.40395 19.2727 6.72334 19.2727ZM13.2678 19.2727L13.2668 19.2727C12.9479 19.2721 12.711 18.977 12.7794 18.6654L15.696 5.39269C15.7464 5.16337 15.9495 5 16.1843 5H17.7122H23.0129C23.3323 5 23.5698 5.2954 23.5012 5.60736L20.5833 18.8801C20.5329 19.1094 20.3297 19.2727 20.095 19.2727L14.3546 19.2727L13.2678 19.2727Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default PayUnionpayFill;
