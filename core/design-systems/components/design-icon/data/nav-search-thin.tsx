import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface NavSearchThinProps extends SvgIconProps {
  //
}

const NavSearchThin = (props: NavSearchThinProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.10002 11C5.10002 7.74154 7.74154 5.10002 11 5.10002C14.2585 5.10002 16.9 7.74154 16.9 11C16.9 14.2585 14.2585 16.9 11 16.9C7.74154 16.9 5.10002 14.2585 5.10002 11ZM11 3.90002C7.0788 3.90002 3.90002 7.0788 3.90002 11C3.90002 14.9212 7.0788 18.1 11 18.1C12.7446 18.1 14.3423 17.4708 15.5784 16.4269L19.0758 19.9243C19.3101 20.1586 19.69 20.1586 19.9243 19.9243C20.1586 19.69 20.1586 19.3101 19.9243 19.0758L16.4269 15.5784C17.4708 14.3423 18.1 12.7446 18.1 11C18.1 7.0788 14.9212 3.90002 11 3.90002Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default NavSearchThin;
