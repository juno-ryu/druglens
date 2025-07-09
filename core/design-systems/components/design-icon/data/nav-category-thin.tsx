import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface NavCategoryThinProps extends SvgIconProps {
  //
}

const NavCategoryThin = (props: NavCategoryThinProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.40002 6.00002C3.40002 5.66865 3.66865 5.40002 4.00002 5.40002H20C20.3314 5.40002 20.6 5.66865 20.6 6.00002C20.6 6.3314 20.3314 6.60002 20 6.60002H4.00002C3.66865 6.60002 3.40002 6.3314 3.40002 6.00002ZM3.40002 12C3.40002 11.6687 3.66865 11.4 4.00002 11.4H20C20.3314 11.4 20.6 11.6687 20.6 12C20.6 12.3314 20.3314 12.6 20 12.6H4.00002C3.66865 12.6 3.40002 12.3314 3.40002 12ZM4.00002 17.4C3.66865 17.4 3.40002 17.6687 3.40002 18C3.40002 18.3314 3.66865 18.6 4.00002 18.6H20C20.3314 18.6 20.6 18.3314 20.6 18C20.6 17.6687 20.3314 17.4 20 17.4H4.00002Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default NavCategoryThin;
