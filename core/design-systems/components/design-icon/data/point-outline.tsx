import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface PointOutlineProps extends SvgIconProps {
  //
}

const PointOutline = (props: PointOutlineProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.25 7H9.75C9.19772 7 8.75 7.44772 8.75 8V12V16C8.75 16.5523 9.19772 17 9.75 17C10.3023 17 10.75 16.5523 10.75 16V13H13.25C14.9069 13 16.25 11.6569 16.25 10C16.25 8.34315 14.9069 7 13.25 7ZM14.25 10C14.25 10.5523 13.8023 11 13.25 11H10.75V9H13.25C13.8023 9 14.25 9.44772 14.25 10Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default PointOutline;
