import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface CheckmarkProps extends SvgIconProps {
  //
}

const Checkmark = (props: CheckmarkProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.2071 7.29289C19.5976 7.68342 19.5976 8.31658 19.2071 8.70711L10.7071 17.2071C10.3166 17.5976 9.68342 17.5976 9.29289 17.2071L5.29289 13.2071C4.90237 12.8166 4.90237 12.1834 5.29289 11.7929C5.68342 11.4024 6.31658 11.4024 6.70711 11.7929L10 15.0858L17.7929 7.29289C18.1834 6.90237 18.8166 6.90237 19.2071 7.29289Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default Checkmark;
