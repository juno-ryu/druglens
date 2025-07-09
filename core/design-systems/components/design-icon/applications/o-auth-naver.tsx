import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface OAuthNaverProps extends SvgIconProps {
  //
}

const OAuthNaver = (props: OAuthNaverProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M15.2885 12.6504L8.43395 2.82713H2.75V21.1703H8.71151V11.347L15.5661 21.1703H21.25V2.82713H15.2885V12.6504Z" />
      </svg>
    </SvgIcon>
  );
};

export default OAuthNaver;
