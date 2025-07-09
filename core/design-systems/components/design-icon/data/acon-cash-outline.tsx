import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface AconCashOutlineProps extends SvgIconProps {
  //
}

const AconCashOutline = (props: AconCashOutlineProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58173 7.58173 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5229 22 22 17.5229 22 12C22 6.47716 17.5229 2 12 2C6.47716 2 2 6.47716 2 12C2 17.5229 6.47716 22 12 22ZM9.83331 7.75H14.1667L16 15.75L13.5 15.75L13.3333 14.25H10.6666L10.5 15.75H7.99998L9.83331 7.75ZM11.4444 10.0833H12.5555L13.0278 12.9167H10.9722L11.4444 10.0833Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default AconCashOutline;
