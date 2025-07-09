import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface BoxProps extends SvgIconProps {
  //
}

const Box = (props: BoxProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V7C22 7.74028 21.5978 8.38663 21 8.73244V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V8.73244C2.4022 8.38663 2 7.74028 2 7V5ZM5 9V19H19V9H5ZM20 5H4V7H20V5ZM9 13C9 12.4477 9.44772 12 10 12H14C14.5523 12 15 12.4477 15 13C15 13.5523 14.5523 14 14 14H10C9.44772 14 9 13.5523 9 13Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default Box;
