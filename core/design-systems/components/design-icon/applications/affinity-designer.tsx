import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface AffinityDesignerProps extends SvgIconProps {
  //
}

const AffinityDesigner = (props: AffinityDesignerProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 14} height={height} {...restProps}>
      <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_938_63194)">
          <path
            d="M13.999 1.36715C13.999 0.6126 13.3864 0 12.6318 0H1.36632C0.611723 0 -0.000976562 0.6126 -0.000976562 1.36715V12.6327C-0.000976562 13.3873 0.611723 14 1.36632 14H12.6319C13.3864 14 13.999 13.3873 13.999 12.6327V1.36715Z"
            fill="#134881"
          />
          <path
            d="M12.9746 12.432C12.9722 12.7318 12.728 12.9746 12.4277 12.9746H6.90854L4.54944 8.88849H12.9746V12.432ZM1.02539 12.4277V10.0285L6.22329 1.02539H8.25464L3.86339 8.63154L6.37074 12.9746H1.57224C1.27039 12.9746 1.02539 12.7295 1.02539 12.4277ZM7.68589 8.42249H5.63214C5.40279 8.42249 5.19094 8.30219 5.07644 8.10354C4.96164 7.90504 4.96164 7.66034 5.07644 7.46184L6.10379 5.68214L7.68589 8.42249ZM12.4277 1.02539C12.7281 1.02539 12.9722 1.26819 12.9746 1.56809V8.42249H8.22394L6.37269 5.21649L8.79239 1.02539H12.4277Z"
            fill="url(#paint0_radial_938_63194)"
          />
        </g>
        <defs>
          <radialGradient id="paint0_radial_938_63194" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.1637 -1.22785) scale(14.194)">
            <stop stopColor="#6BE1FB" />
            <stop offset="1" stopColor="#38BDFA" />
          </radialGradient>
          <clipPath id="clip0_938_63194">
            <rect width="14" height="14" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default AffinityDesigner;
