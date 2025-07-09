import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface MenuKebabProps extends SvgIconProps {
  //
}

const MenuKebab = (props: MenuKebabProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path d="M11.9921 13.8C11.0088 13.7921 10.2079 12.9912 10.2 11.9921C10.2079 11.0088 11.0088 10.2079 11.9921 10.2C12.9912 10.2079 13.7921 11.0088 13.8 11.9921C13.7921 12.9912 12.9912 13.7921 11.9921 13.8Z" />
        <path d="M11.9921 20.8C11.0088 20.7921 10.2079 19.9912 10.2 18.9921C10.2079 18.0088 11.0088 17.2079 11.9921 17.2C12.9912 17.2079 13.7921 18.0088 13.8 18.9921C13.7921 19.9912 12.9912 20.7921 11.9921 20.8Z" />
        <path d="M11.9921 6.80001C11.0088 6.79208 10.2079 5.9912 10.2 4.99208C10.2079 4.00882 11.0088 3.20794 11.9921 3.20001C12.9912 3.20794 13.7921 4.00882 13.8 4.99208C13.7921 5.9912 12.9912 6.79208 11.9921 6.80001Z" />
      </svg>
    </SvgIcon>
  );
};

export default MenuKebab;
