import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface EyeProps extends SvgIconProps {
  //
}

const Eye = (props: EyeProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 12C2 11.1975 5.33333 5.5 12 5.5C18.6667 5.5 22 11.1975 22 12C22 12.8025 18.4962 18.5 12 18.5C5.5038 18.5 2 12.8025 2 12ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79087 14.2091 8.00001 12 8.00001C9.79086 8.00001 8 9.79087 8 12C8 14.2091 9.79086 16 12 16Z"
        />
        <path d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z" />
      </svg>
    </SvgIcon>
  );
};

export default Eye;
