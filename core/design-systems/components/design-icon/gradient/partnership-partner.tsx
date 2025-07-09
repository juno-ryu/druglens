import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface PartnershipPartnerProps extends SvgIconProps {
  //
}

const PartnershipPartner = (props: PartnershipPartnerProps) => {
  const { id, ...restProps } = props;

  return (
    <SvgIcon {...restProps}>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id={id} x1="-1.42857" y1="2.28632" x2="24.1813" y2="5.15215" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A6A6FC" />
            <stop offset="0.348958" stopColor="#7777FF" />
            <stop offset="0.65625" stopColor="#A3A3FF" />
            <stop offset="0.916667" stopColor="#4E4EFF" />
          </linearGradient>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default PartnershipPartner;
