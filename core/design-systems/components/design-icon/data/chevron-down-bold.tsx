import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface ChevronDownBoldProps extends SvgIconProps {
  //
}

const ChevronDownBold = (props: ChevronDownBoldProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.2318 9.35982C5.58537 8.93554 6.21593 8.87821 6.64021 9.23178L12 13.6983L17.3598 9.23178C17.7841 8.87821 18.4147 8.93554 18.7682 9.35981C19.1218 9.78409 19.0645 10.4147 18.6402 10.7682L12.6402 15.7682C12.2694 16.0773 11.7307 16.0773 11.3598 15.7682L5.35984 10.7682C4.93556 10.4147 4.87824 9.78409 5.2318 9.35982Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default ChevronDownBold;
