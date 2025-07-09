import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface ChevronRightBoldProps extends SvgIconProps {
  //
}

const ChevronRightBold = (props: ChevronRightBoldProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.35982 18.7682C8.93554 18.4147 8.87821 17.7841 9.23178 17.3598L13.6983 12L9.23178 6.64019C8.87822 6.21591 8.93554 5.58535 9.35982 5.23178C9.78409 4.87822 10.4147 4.93554 10.7682 5.35982L15.7682 11.3598C16.0773 11.7307 16.0773 12.2693 15.7682 12.6402L10.7682 18.6402C10.4147 19.0645 9.78409 19.1218 9.35982 18.7682Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default ChevronRightBold;
