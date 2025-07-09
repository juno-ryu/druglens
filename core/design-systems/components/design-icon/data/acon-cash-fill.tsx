import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface AconCashFillProps extends SvgIconProps {
  //
}

const AconCashFill = (props: AconCashFillProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 12C22 17.5229 17.5229 22 12 22C6.47716 22 2 17.5229 2 12C2 6.47716 6.47716 2 12 2C17.5229 2 22 6.47716 22 12ZM8 15.75L9.83333 7.75H14.1667L16 15.75L13.5 15.75L13.3333 14.25H10.6667L10.5 15.75H8ZM11.4445 10.0833H12.5556L13.0278 12.9167H10.9722L11.4445 10.0833Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default AconCashFill;
