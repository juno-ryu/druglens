import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface NavProfileFillProps extends SvgIconProps {
  //
}

const NavProfileFill = (props: NavProfileFillProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 3.90002C10.0118 3.90002 8.40002 5.5118 8.40002 7.50002C8.40002 9.48825 10.0118 11.1 12 11.1C13.9882 11.1 15.6 9.48825 15.6 7.50002C15.6 5.5118 13.9882 3.90002 12 3.90002ZM12 12.9C9.67362 12.9 7.54436 13.6065 5.98317 14.7774C4.4218 15.9484 3.40002 17.612 3.40002 19.5C3.40002 19.8314 3.66865 20.1 4.00002 20.1H20C20.3314 20.1 20.6 19.8314 20.6 19.5C20.6 17.612 19.5782 15.9484 18.0169 14.7774C16.4557 13.6065 14.3264 12.9 12 12.9Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default NavProfileFill;
