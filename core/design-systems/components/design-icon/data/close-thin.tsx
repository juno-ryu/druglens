import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface CloseThinProps extends SvgIconProps {
  //
}

const CloseThin = (props: CloseThinProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path d="M17.4801 7.58079C17.773 7.2879 17.773 6.81302 17.4801 6.52013C17.1872 6.22724 16.7123 6.22724 16.4194 6.52013L12 10.9395L7.58057 6.52013C7.28768 6.22724 6.8128 6.22724 6.51991 6.52013C6.22702 6.81303 6.22702 7.2879 6.51991 7.58079L10.9393 12.0002L6.5199 16.4196C6.22701 16.7125 6.22701 17.1874 6.5199 17.4803C6.81279 17.7732 7.28767 17.7732 7.58056 17.4803L12 13.0609L16.4194 17.4803C16.7123 17.7732 17.1872 17.7732 17.4801 17.4803C17.773 17.1874 17.773 16.7125 17.4801 16.4196L13.0606 12.0002L17.4801 7.58079Z" />
      </svg>
    </SvgIcon>
  );
};

export default CloseThin;
