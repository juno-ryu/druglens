import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface OAuthGoogleProps extends SvgIconProps {
  //
}

const OAuthGoogle = (props: OAuthGoogleProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.56 12.2273C21.56 11.5182 21.4964 10.8364 21.3782 10.1818H11.96V14.05H17.3418C17.11 15.3 16.4055 16.3591 15.3464 17.0682L18.5782 19.5773C20.4691 17.8364 21.56 15.2727 21.56 12.2273Z"
          fill="#4285F4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.96 22C14.66 22 16.9237 21.1045 18.5782 19.5773L15.3464 17.0682C14.4509 17.6682 13.3055 18.0227 11.96 18.0227C9.35545 18.0227 7.1509 16.2636 6.36454 13.9L3.02363 16.4909C4.66908 19.7591 8.0509 22 11.96 22Z"
          fill="#34A853"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.36454 13.9C6.16454 13.3 6.0509 12.6591 6.0509 12C6.0509 11.3409 6.16454 10.7 6.36454 10.1L3.02363 7.50908C2.34636 8.85908 1.95999 10.3864 1.95999 12C1.95999 13.6136 2.34635 15.1409 3.02363 16.4909L6.36454 13.9Z"
          fill="#FBBC05"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.96 5.97727C13.4282 5.97727 14.7464 6.48182 15.7828 7.47273L18.6509 4.60455C16.9191 2.99091 14.6555 2 11.96 2C8.0509 2 4.66908 4.2409 3.02363 7.50908L6.36454 10.1C7.1509 7.73635 9.35545 5.97727 11.96 5.97727Z"
          fill="#EA4335"
        />
      </svg>
    </SvgIcon>
  );
};

export default OAuthGoogle;
