import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface FilterProps extends SvgIconProps {
  //
}

const Filter = (props: FilterProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.17071 10H4C3.44772 10 3 9.55228 3 9C3 8.44772 3.44772 8 4 8H5.17071C5.58254 6.83481 6.69378 6 8 6C9.30622 6 10.4175 6.83481 10.8293 8H20C20.5523 8 21 8.44772 21 9C21 9.55228 20.5523 10 20 10H10.8293C10.4175 11.1652 9.30622 12 8 12C6.69378 12 5.58254 11.1652 5.17071 10ZM3 15C3 14.4477 3.44772 14 4 14H13.1707C13.5825 12.8348 14.6938 12 16 12C17.3062 12 18.4175 12.8348 18.8293 14H20C20.5523 14 21 14.4477 21 15C21 15.5523 20.5523 16 20 16H18.8293C18.4175 17.1652 17.3062 18 16 18C14.6938 18 13.5825 17.1652 13.1707 16H4C3.44772 16 3 15.5523 3 15ZM16 14C15.4477 14 15 14.4477 15 15C15 15.5523 15.4477 16 16 16C16.5523 16 17 15.5523 17 15C17 14.4477 16.5523 14 16 14ZM7 9C7 8.44772 7.44772 8 8 8C8.55228 8 9 8.44772 9 9C9 9.55228 8.55228 10 8 10C7.44772 10 7 9.55228 7 9Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default Filter;
