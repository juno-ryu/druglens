import SvgIcon, { SvgIconComponent, SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface CircleLoaderProps extends SvgIconProps {
  id: string;
}

const CircleLoader = (props: CircleLoaderProps) => {
  const { id, ...restProps } = props;

  return (
    <SvgIcon width="0" height="0" {...restProps}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="currentColor" />
          <stop offset="100%" stopColor="currentColor" stopOpacity={0} />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
};

export default CircleLoader;
