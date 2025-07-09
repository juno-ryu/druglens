import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface ScrapProps extends SvgIconProps {
  //
}

const Scrap = (props: ScrapProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 4C5 3.44772 5.44772 3 6 3H18C18.5523 3 19 3.44772 19 4V20C19 20.3617 18.8047 20.6953 18.4892 20.8722C18.1737 21.0491 17.7872 21.0419 17.4785 20.8533L12 17.5053L6.52145 20.8533C6.2128 21.0419 5.82634 21.0491 5.51084 20.8722C5.19535 20.6953 5 20.3617 5 20V4ZM7 5V18.2169L11.4785 15.4801C11.7987 15.2844 12.2013 15.2844 12.5215 15.4801L17 18.2169V5H7Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default Scrap;
