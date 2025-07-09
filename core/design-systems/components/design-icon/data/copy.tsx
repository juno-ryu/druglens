import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface CopyProps extends SvgIconProps {
  //
}

const Copy = (props: CopyProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.32001 4.35999V15.8H8.16001V17.8H5.28001C4.19972 17.8 3.32001 16.9203 3.32001 15.84V4.31999C3.32001 3.2397 4.19972 2.35999 5.28001 2.35999H14.88C15.9603 2.35999 16.84 3.2397 16.84 4.31999V7.19999H14.84V4.35999H5.32001Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.16001 8.19999V19.64H18.68V8.19999H9.16001ZM7.16001 8.15999C7.16001 7.0797 8.03972 6.19999 9.12001 6.19999H18.72C19.8003 6.19999 20.68 7.0797 20.68 8.15999V19.68C20.68 20.7603 19.8003 21.64 18.72 21.64H9.12001C8.03972 21.64 7.16001 20.7603 7.16001 19.68V8.15999Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default Copy;
