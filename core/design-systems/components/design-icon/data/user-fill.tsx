import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface UserFillProps extends SvgIconProps {
  //
}

const UserFill = (props: UserFillProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.74315 14.9574C7.37998 13.7297 9.59541 13 12 13C14.4046 13 16.62 13.7297 18.2569 14.9574C19.894 16.1852 21 17.9578 21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20C3 17.9578 4.10601 16.1852 5.74315 14.9574Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default UserFill;
