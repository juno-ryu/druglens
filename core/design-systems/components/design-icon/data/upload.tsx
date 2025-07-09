import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface UploadProps extends SvgIconProps {
  //
}

const Upload = (props: UploadProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5786 4.18003C12.4086 4.06136 12.2059 3.99845 11.9986 4.00003C11.7822 4.00003 11.5717 4.07021 11.3986 4.20003L7.39857 8.20003C6.95674 8.5314 6.8672 9.1582 7.19857 9.60003C7.52994 10.0419 8.15674 10.1314 8.59857 9.80003L10.9986 7.28709L10.9986 14C10.9986 14.5523 11.4463 15 11.9986 15C12.5509 15 12.9986 14.5523 12.9986 14V7.23126L15.4186 9.63003C15.6357 9.78502 15.9057 9.84686 16.1686 9.80179C16.4315 9.75672 16.6655 9.60848 16.8186 9.39003C17.1346 8.93958 17.0274 8.31841 16.5786 8.00003L12.5786 4.18003ZM5 18C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19C20 18.4477 19.5523 18 19 18H5Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default Upload;
