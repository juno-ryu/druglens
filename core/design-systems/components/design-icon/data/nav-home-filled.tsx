import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface NavHomeFilledProps extends SvgIconProps {
  //
}

const NavHomeFilled = (props: NavHomeFilledProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.912 3.71032C12.3752 3.29659 11.6249 3.29659 11.0881 3.71032L3.97692 9.19082C3.614 9.47052 3.40002 9.90216 3.40002 10.3613V19.6192C3.40002 20.4422 4.07182 21.1 4.88891 21.1H11.4V15C11.4 14.6687 11.6687 14.4 12 14.4C12.3314 14.4 12.6 14.6687 12.6 15V21.1H19.1111C19.9283 21.1 20.6 20.4422 20.6 19.6192V10.3613C20.6 9.90212 20.386 9.47049 20.0231 9.19082L12.912 3.71032Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default NavHomeFilled;
