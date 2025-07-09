import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface SocialXProps extends SvgIconProps {
  //
}

const SocialX = (props: SocialXProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22C17.5229 22 22 17.5229 22 12ZM16.8792 7H15.1822L12.3855 10.1966L9.96764 7H6.46582L10.65 12.4714L6.68439 17.004H8.38251L11.4432 13.5066L14.1181 17.004H17.5334L13.1716 11.2376L16.8792 7ZM15.5269 15.9882H14.5865L8.4477 7.96249H9.45672L15.5269 15.9882Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default SocialX;
