import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface IllustratorProps extends SvgIconProps {
  //
}

const Illustrator = (props: IllustratorProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 14} height={height} {...restProps}>
      <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_938_63245)">
          <path
            d="M11.4857 0.314453H2.51427C1.12568 0.314453 0 1.41519 0 2.77303V11.229C0 12.5868 1.12568 13.6876 2.51427 13.6876H11.4857C12.8743 13.6876 14 12.5868 14 11.229V2.77303C14 1.41519 12.8743 0.314453 11.4857 0.314453Z"
            fill="#2D0402"
          />
          <path d="M10.6405 5.25H9.36914V9.82768H10.6405V5.25Z" fill="#FF9A00" />
          <path
            d="M10.0051 4.77556C10.4087 4.77556 10.7358 4.45329 10.7358 4.05575C10.7358 3.65821 10.4087 3.33594 10.0051 3.33594C9.60157 3.33594 9.27441 3.65821 9.27441 4.05575C9.27441 4.45329 9.60157 4.77556 10.0051 4.77556Z"
            fill="#FF9A00"
          />
          <path
            d="M6.51572 3.79688H4.87789C4.87789 4.06807 4.83012 4.33728 4.7367 4.59246L2.82031 9.82853H4.16209L4.64418 8.38582L6.79428 8.37047L7.28557 9.82853H8.70427L6.51572 3.79688ZM4.99676 7.20514L5.69585 4.86355L6.42925 7.20514H4.99676Z"
            fill="#FF9A00"
          />
        </g>
        <defs>
          <clipPath id="clip0_938_63245">
            <rect width="14" height="13.3731" fill="white" transform="translate(0 0.314453)" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default Illustrator;
