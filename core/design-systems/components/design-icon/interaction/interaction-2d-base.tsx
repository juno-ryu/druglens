import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface Interaction2dBaseProps extends SvgIconProps {
  //
}

const Interaction2dBase = (props: Interaction2dBaseProps) => {
  const { id, ...restProps } = props;

  return (
    <SvgIcon {...restProps}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.85 5C2.85 3.81259 3.81259 2.85 5 2.85H19C20.1874 2.85 21.15 3.81259 21.15 5V19C21.15 20.1874 20.1874 21.15 19 21.15H5C3.81259 21.15 2.85 20.1874 2.85 19V5Z"
          stroke="black"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M7.40039 10.9423C7.40039 10.3008 8.05 9.4017 9.05 9.40234C10.2 9.40226 10.7004 10.21 10.7004 10.9008C10.7004 11.7 9.90039 12.3008 9.90039 12.3008L7.50039 14.3008V14.5662H11.7308"
          stroke="black"
          strokeWidth="1.5"
        />
        <path
          d="M13.3008 8.80078V14.5708L14.7004 14.569C16.1814 14.5227 17.2004 13.98 17.2004 12.0508C17.2004 10.95 16.95 9.55078 14.7004 9.55078H14.0006"
          stroke="black"
          strokeWidth="1.5"
        />
      </svg>
    </SvgIcon>
  );
};

export default Interaction2dBase;
