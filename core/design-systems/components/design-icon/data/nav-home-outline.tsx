import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface NavHomeOutlineProps extends SvgIconProps {
  //
}

const NavHomeOutline = (props: NavHomeOutlineProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.8206 4.6608C11.9257 4.57977 12.0743 4.57977 12.1794 4.66079L12.3265 4.46996L12.1795 4.6608L19.2906 10.1413L19.2906 10.1413C19.3607 10.1954 19.4 10.2769 19.4 10.3613V19.6192C19.4 19.7692 19.2759 19.9 19.1111 19.9H12.6V15C12.6 14.6687 12.3314 14.4 12 14.4C11.6687 14.4 11.4 14.6687 11.4 15V19.9H4.88891C4.72417 19.9 4.60002 19.7692 4.60002 19.6192V10.3613C4.60002 10.2768 4.63933 10.1953 4.70945 10.1413M11.4 21.1H4.88891C4.07182 21.1 3.40002 20.4422 3.40002 19.6192V10.3613C3.40002 9.90216 3.614 9.47052 3.97693 9.19081L11.0881 3.71032C11.6249 3.29659 12.3752 3.29659 12.912 3.71032L20.0231 9.19082C20.386 9.47049 20.6 9.90212 20.6 10.3613V19.6192C20.6 20.4422 19.9283 21.1 19.1111 21.1H12.6H11.4Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default NavHomeOutline;
