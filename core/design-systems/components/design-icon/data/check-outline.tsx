import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface CheckOutlineProps extends SvgIconProps {
  //
}

const CheckOutline = (props: CheckOutlineProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.9883 11.9901C19.9883 16.4084 16.4066 19.9901 11.9883 19.9901C7.57 19.9901 3.98828 16.4084 3.98828 11.9901C3.98828 7.57183 7.57 3.99011 11.9883 3.99011C16.4066 3.99011 19.9883 7.57183 19.9883 11.9901ZM21.9883 11.9901C21.9883 17.513 17.5111 21.9901 11.9883 21.9901C6.46543 21.9901 1.98828 17.513 1.98828 11.9901C1.98828 6.46726 6.46543 1.99011 11.9883 1.99011C17.5111 1.99011 21.9883 6.46726 21.9883 11.9901ZM16.7474 9.65448C17.1143 9.2417 17.0772 8.60962 16.6644 8.24271C16.2516 7.87579 15.6195 7.91297 15.2526 8.32575L10.6667 13.4849L8.74742 11.3258C8.3805 10.913 7.74843 10.8758 7.33565 11.2427C6.92286 11.6096 6.88568 12.2417 7.2526 12.6545L9.91927 15.6545C10.109 15.868 10.381 15.9901 10.6667 15.9901C10.9523 15.9901 11.2243 15.868 11.4141 15.6545L16.7474 9.65448Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default CheckOutline;
