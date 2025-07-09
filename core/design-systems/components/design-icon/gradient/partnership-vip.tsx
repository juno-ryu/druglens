import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface PartnershipVIPProps extends SvgIconProps {
  //
}

const PartnershipVIP = (props: PartnershipVIPProps) => {
  const { id, ...restProps } = props;

  return (
    <SvgIcon {...restProps}>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id={id} x1="-1.42857" y1="2.28632" x2="24.1813" y2="5.15215" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8AAAEE" />
            <stop offset="0.348958" stopColor="#5F85D7" />
            <stop offset="0.65625" stopColor="#84A6F2" />
            <stop offset="0.916667" stopColor="#345DB2" />
          </linearGradient>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default PartnershipVIP;
