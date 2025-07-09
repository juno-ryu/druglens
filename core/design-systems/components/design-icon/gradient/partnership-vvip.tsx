import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface PartnershipVVIPProps extends SvgIconProps {
  //
}

const PartnershipVVIP = (props: PartnershipVVIPProps) => {
  const { id, ...restProps } = props;

  return (
    <SvgIcon {...restProps}>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id={id} x1="-1.42857" y1="2.28632" x2="24.1813" y2="5.15215" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFE584" />
            <stop offset="0.348958" stopColor="#F6AE34" />
            <stop offset="0.65625" stopColor="#F1CF4D" />
            <stop offset="0.916667" stopColor="#F08700" />
          </linearGradient>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default PartnershipVVIP;
