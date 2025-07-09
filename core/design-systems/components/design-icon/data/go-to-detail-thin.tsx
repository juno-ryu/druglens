import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface GoToDetailThinProps extends SvgIconProps {
  //
}

const GoToDetailThin = (props: GoToDetailThinProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 20.5427C16.6171 20.5427 20.36 16.7998 20.36 12.1827C20.36 7.56559 16.6171 3.82269 12 3.82269C7.3829 3.82269 3.64 7.56559 3.64 12.1827C3.64 16.7998 7.3829 20.5427 12 20.5427ZM12 22.1827C17.5228 22.1827 22 17.7055 22 12.1827C22 6.65985 17.5228 2.18269 12 2.18269C6.47715 2.18269 2 6.65985 2 12.1827C2 17.7055 6.47715 22.1827 12 22.1827ZM7.43254 12.1827C7.43254 11.7685 7.76832 11.4327 8.18254 11.4327H14.4329L12.1053 9.10515C11.8124 8.81226 11.8124 8.33738 12.1053 8.04449C12.3982 7.7516 12.8731 7.7516 13.166 8.04449L16.7732 11.6517C17.0661 11.9446 17.0661 12.4195 16.7732 12.7123L13.166 16.3195C12.8731 16.6124 12.3982 16.6124 12.1053 16.3195C11.8124 16.0266 11.8124 15.5518 12.1053 15.2589L14.4315 12.9327H8.18254C7.76832 12.9327 7.43254 12.5969 7.43254 12.1827Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default GoToDetailThin;
