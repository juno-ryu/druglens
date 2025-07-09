import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface OrderingTableProps extends SvgIconProps {
  //
}

const OrderingTable = (props: OrderingTableProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 6.66536C10.9167 6.66536 11.6667 5.91536 11.6667 4.9987C11.6667 4.08203 10.9167 3.33203 10 3.33203C9.08333 3.33203 8.33333 4.08203 8.33333 4.9987C8.33333 5.91536 9.08333 6.66536 10 6.66536ZM10 8.33203C9.08333 8.33203 8.33333 9.08203 8.33333 9.9987C8.33333 10.9154 9.08333 11.6654 10 11.6654C10.9167 11.6654 11.6667 10.9154 11.6667 9.9987C11.6667 9.08203 10.9167 8.33203 10 8.33203ZM10 13.332C9.08333 13.332 8.33333 14.082 8.33333 14.9987C8.33333 15.9154 9.08333 16.6654 10 16.6654C10.9167 16.6654 11.6667 15.9154 11.6667 14.9987C11.6667 14.082 10.9167 13.332 10 13.332Z"
          fill="black"
          fillOpacity="0.56"
        />
      </svg>
    </SvgIcon>
  );
};

export default OrderingTable;
