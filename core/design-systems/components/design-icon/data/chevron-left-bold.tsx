import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface ChevronLeftBoldProps extends SvgIconProps {
  //
}

const ChevronLeftBold = (props: ChevronLeftBoldProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.6402 5.23177C15.0645 5.58534 15.1218 6.2159 14.7682 6.64018L10.3017 12L14.7682 17.3598C15.1218 17.7841 15.0645 18.4147 14.6402 18.7682C14.2159 19.1218 13.5853 19.0645 13.2318 18.6402L8.23178 12.6402C7.92274 12.2693 7.92274 11.7307 8.23178 11.3598L13.2318 5.35981C13.5853 4.93553 14.2159 4.87821 14.6402 5.23177Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default ChevronLeftBold;
