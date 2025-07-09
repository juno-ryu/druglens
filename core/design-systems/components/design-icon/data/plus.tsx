import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface PlusProps extends SvgIconProps {
  //
}

const Plus = (props: PlusProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path d="M11.0001 10.9999V5.50085C11.0001 4.94857 11.4478 4.50085 12.0001 4.50085C12.5523 4.50085 13.0001 4.94857 13.0001 5.50085V10.9999H18.4995C19.0518 10.9999 19.4995 11.4476 19.4995 11.9999C19.4995 12.5522 19.0518 12.9999 18.4995 12.9999H13.0001V18.4991C13.0001 19.0514 12.5523 19.4991 12.0001 19.4991C11.4478 19.4991 11.0001 19.0514 11.0001 18.4991V12.9999H5.50055C4.94826 12.9999 4.50055 12.5522 4.50055 11.9999C4.50055 11.4476 4.94826 10.9999 5.50055 10.9999H11.0001Z" />
      </svg>
    </SvgIcon>
  );
};

export default Plus;
