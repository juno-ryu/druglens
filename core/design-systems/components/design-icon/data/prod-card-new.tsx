import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface ProdCardNewProps extends SvgIconProps {
  //
}

const ProdCardNew = (props: ProdCardNewProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 35} height={height} {...restProps}>
      <svg viewBox="0 0 35 18">
        <rect width="35" height="18" rx="3" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.4458 12.8008V5.2002H10.6611V9.66187H10.5981L7.54321 5.2002H6V12.8008H7.78467V8.33911H7.83716L10.9236 12.8008H12.4458ZM13.6006 12.8008V5.2002H18.8601V6.65942H15.3853V8.26562H18.5872V9.72485H15.3853V11.3416H18.8706V12.8008H13.6006ZM21.7996 12.8008L19.6055 5.2002H21.5791L22.7444 10.2393H22.8074L24.1301 5.2002H25.7573L27.0906 10.2498H27.1431L28.3188 5.2002H30.2925L28.0879 12.8008H26.3662L24.9805 8.11865H24.9175L23.5317 12.8008H21.7996Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default ProdCardNew;
