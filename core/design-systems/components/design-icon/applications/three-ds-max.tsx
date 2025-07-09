import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface ThreeDsMaxProps extends SvgIconProps {
  //
}

const ThreeDsMax = (props: ThreeDsMaxProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 14} height={height} {...restProps}>
      <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_938_63162)">
          <path
            d="M6.9029 2.78392L9.80592 0M6.9029 2.78392H6.90363M6.9029 2.78392L6.87879 9.412M6.9029 2.78392L13.2993 6.9715L9.80592 0M9.80592 0H3.33788L2.12568 2.76785M2.12568 2.76785L6.90363 2.78392M2.12568 2.76785L5.54748 4.06775L6.90363 2.78392M6.89633 4.59457L5.54675 4.06848L2.33246 7.05115L5.47514 9.96221M5.47514 9.96221L6.87879 9.412M5.47514 9.96221L9.81396 13.9978M5.47514 9.96221L2.10156 11.2307L3.32985 13.9985H9.81396V13.9978M6.87879 9.412L6.86272 11.2548M6.89706 4.59457L13.3001 6.9715L6.87952 9.412M9.81396 13.9978L13.2993 6.97077L6.86272 11.2541"
            stroke="#231815"
            strokeWidth="0.00219206"
            strokeMiterlimit="22.93"
          />
          <path d="M6.86345 11.2539L2.10156 11.2305" stroke="#231815" strokeWidth="0.0160751" strokeMiterlimit="22.93" />
          <path fillRule="evenodd" clipRule="evenodd" d="M6.89648 4.5958L13.3002 6.97273L6.90306 2.78516L6.89648 4.5958Z" fill="#0B100F" />
          <path fillRule="evenodd" clipRule="evenodd" d="M13.2999 6.97266L6.87863 9.41316L6.86328 11.2545L6.86401 11.2552L13.2999 6.97266Z" fill="#0D1313" />
          <path fillRule="evenodd" clipRule="evenodd" d="M6.90332 2.78393L13.3005 6.9715L9.80634 0L6.90332 2.78393Z" fill="#006260" />
          <path fillRule="evenodd" clipRule="evenodd" d="M13.3001 6.97266L6.86426 11.2552L9.81404 13.999L13.3001 6.97266Z" fill="#004242" />
          <path fillRule="evenodd" clipRule="evenodd" d="M6.87891 9.41314L13.3002 6.97263L6.89644 4.5957L6.87891 9.41314Z" fill="#005353" />
          <path fillRule="evenodd" clipRule="evenodd" d="M6.87836 9.41262L6.8959 4.59519L5.54632 4.06836L2.33203 7.05176L5.47471 9.96283L6.87836 9.41262Z" fill="#006C6C" />
          <path fillRule="evenodd" clipRule="evenodd" d="M5.54688 4.06898L6.89645 4.5958L6.90303 2.78516L5.54688 4.06898Z" fill="#0A2020" />
          <path fillRule="evenodd" clipRule="evenodd" d="M6.87923 9.41211L5.47559 9.96232L6.86389 11.2534L6.87923 9.41211Z" fill="#0D1F20" />
          <path fillRule="evenodd" clipRule="evenodd" d="M6.86345 11.2539L2.10156 11.2305L3.32985 13.9976H9.81396L6.86418 11.2539H6.86345Z" fill="#006667" />
          <path fillRule="evenodd" clipRule="evenodd" d="M2.12598 2.76785L6.90321 2.78392L9.80622 0H3.33819L2.12598 2.76785Z" fill="#00787C" />
          <path fillRule="evenodd" clipRule="evenodd" d="M6.90321 2.78561L2.12598 2.76953L5.54705 4.06943L6.90321 2.78561Z" fill="#053637" />
          <path fillRule="evenodd" clipRule="evenodd" d="M5.47514 9.96289L2.10156 11.2314L6.86345 11.2547V11.254L5.47514 9.96289Z" fill="#102B2B" />
        </g>
        <defs>
          <clipPath id="clip0_938_63162">
            <rect width="14" height="14" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default ThreeDsMax;
