import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface ProdCardScrapFillProps extends SvgIconProps {
  //
}

const ProdCardScrapFill = (props: ProdCardScrapFillProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path d="M4.5 5.41667C4.5 4.49619 5.24619 3.75 6.16667 3.75H17.8333C18.7538 3.75 19.5 4.49619 19.5 5.41667V18.3343C19.5 19.2369 18.5727 19.842 17.7466 19.4785L12.6712 17.2453C12.2435 17.0572 11.7565 17.0572 11.3288 17.2453L6.25342 19.4785C5.42729 19.842 4.5 19.2369 4.5 18.3343V5.41667Z" />
      </svg>
    </SvgIcon>
  );
};

export default ProdCardScrapFill;
