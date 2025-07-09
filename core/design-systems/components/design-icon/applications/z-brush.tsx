import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface ZBrushProps extends SvgIconProps {
  //
}

const ZBrush = (props: ZBrushProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 14} height={height} {...restProps}>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.59484 1.21824C8.51981 0.00597971 9.80552 0 9.80552 0C9.80552 0 9.99676 1.13982 9.07803 2.238C8.09687 3.41048 6.98182 3.21867 6.98182 3.21867C6.98182 3.21867 6.77254 2.29665 7.59484 1.21847V1.21824Z"
          fill="#B3B3B3"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.09977 4.01759C7.57567 4.01759 8.45855 3.36719 9.60806 3.36719C11.5866 3.36719 12.3649 4.76735 12.3649 4.76735C12.3649 4.76735 10.8427 5.54148 10.8427 7.41979C10.8427 9.53866 12.7391 10.2689 12.7391 10.2689C12.7391 10.2689 11.4134 13.9799 9.62286 13.9799C8.80033 13.9799 8.16117 13.4287 7.29448 13.4287C6.42778 13.4287 5.53518 14.0004 4.96448 14.0004C3.32936 14.0006 1.26367 10.4805 1.26367 7.6507C1.26367 4.82094 3.0121 3.40629 4.65207 3.40629C5.7181 3.40629 6.54548 4.01782 7.09977 4.01782V4.01759Z"
          fill="#B3B3B3"
        />
      </svg>
    </SvgIcon>
  );
};

export default ZBrush;
