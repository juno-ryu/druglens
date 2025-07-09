import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface NavSearchBoldProps extends SvgIconProps {
  //
}

const NavSearchBold = (props: NavSearchBoldProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.5 11C5.5 7.96243 7.96243 5.5 11 5.5C14.0376 5.5 16.5 7.96243 16.5 11C16.5 14.0376 14.0376 16.5 11 16.5C7.96243 16.5 5.5 14.0376 5.5 11ZM11 3.5C6.85786 3.5 3.5 6.85786 3.5 11C3.5 15.1421 6.85786 18.5 11 18.5C12.7105 18.5 14.2873 17.9274 15.5491 16.9633L18.7929 20.2071C19.1834 20.5976 19.8166 20.5976 20.2071 20.2071C20.5976 19.8166 20.5976 19.1834 20.2071 18.7929L16.9633 15.5491C17.9274 14.2873 18.5 12.7105 18.5 11C18.5 6.85786 15.1421 3.5 11 3.5Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default NavSearchBold;
