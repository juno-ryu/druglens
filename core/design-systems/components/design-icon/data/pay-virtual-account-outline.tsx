import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface PayVirtualAccountOutlineProps extends SvgIconProps {
  //
}

const PayVirtualAccountOutline = (props: PayVirtualAccountOutlineProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.73016 6.23223C4.79331 6.02028 4.98819 5.875 5.20934 5.875H13.6386H21.3237C21.6582 5.875 21.8983 6.19706 21.8029 6.51764L19.2729 15.0176C19.2098 15.2296 19.0148 15.375 18.7936 15.375H2.67671C2.34217 15.375 2.102 15.0528 2.19753 14.7322L4.73016 6.23223ZM22.2499 10.2739L20.7105 15.4456C20.4581 16.2936 19.6785 16.875 18.7936 16.875H5.0274V17.625C5.0274 17.9011 5.25126 18.125 5.5274 18.125H21.7499C22.026 18.125 22.2499 17.9011 22.2499 17.625V10.2739ZM3.5274 16.875H2.67671C1.33855 16.875 0.377874 15.5863 0.759986 14.3039L3.29261 5.8039C3.54521 4.95613 4.32474 4.375 5.20934 4.375H13.6386H21.3237H21.7499C22.8544 4.375 23.7499 5.27043 23.7499 6.375V17.625C23.7499 18.7296 22.8544 19.625 21.7499 19.625H5.5274C4.42284 19.625 3.5274 18.7296 3.5274 17.625V16.875Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default PayVirtualAccountOutline;
