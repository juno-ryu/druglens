import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface GoToDetailBoldProps extends SvgIconProps {
  //
}

const GoToDetailBold = (props: GoToDetailBoldProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 20.0463C16.343 20.0463 19.8636 16.5257 19.8636 12.1827C19.8636 7.83973 16.343 4.31906 12 4.31906C7.65703 4.31906 4.13636 7.83973 4.13636 12.1827C4.13636 16.5257 7.65703 20.0463 12 20.0463ZM12 22.1827C17.5228 22.1827 22 17.7055 22 12.1827C22 6.65985 17.5228 2.18269 12 2.18269C6.47715 2.18269 2 6.65985 2 12.1827C2 17.7055 6.47715 22.1827 12 22.1827ZM7.18254 12.1827C7.18254 11.6304 7.63025 11.1827 8.18254 11.1827H13.8293L11.9286 9.28193C11.538 8.8914 11.538 8.25824 11.9286 7.86771C12.3191 7.47719 12.9522 7.47719 13.3428 7.86771L16.95 11.4749C17.3405 11.8654 17.3405 12.4986 16.95 12.8891L13.3428 16.4963C12.9522 16.8868 12.3191 16.8868 11.9286 16.4963C11.538 16.1058 11.538 15.4726 11.9286 15.0821L13.828 13.1827H8.18254C7.63025 13.1827 7.18254 12.735 7.18254 12.1827Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default GoToDetailBold;
