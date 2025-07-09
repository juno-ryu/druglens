import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface MoneyDollarOutlineProps extends SvgIconProps {
  //
}

const MoneyDollarOutline = (props: MoneyDollarOutlineProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V8H10.5C9.11929 8 8 9.11929 8 10.5C8 11.8807 9.11929 13 10.5 13H13.5C13.7761 13 14 13.2239 14 13.5C14 13.7761 13.7761 14 13.5 14L9 14C8.44771 14 8 14.4477 8 15C8 15.5523 8.44772 16 9 16L11 16V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V16H13.5C14.8807 16 16 14.8807 16 13.5C16 12.1193 14.8807 11 13.5 11H10.5C10.2239 11 10 10.7761 10 10.5C10 10.2239 10.2239 10 10.5 10H15C15.5523 10 16 9.55228 16 9C16 8.44772 15.5523 8 15 8H13V7Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default MoneyDollarOutline;
