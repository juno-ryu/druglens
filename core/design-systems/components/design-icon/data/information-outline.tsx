import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface InformationOutlineProps extends SvgIconProps {
  //
}

const InformationOutline = (props: InformationOutlineProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 17C11.4477 17 11 16.5523 11 16V11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11L13 16C13 16.5523 12.5523 17 12 17ZM12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default InformationOutline;
