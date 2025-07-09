import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface StarProps extends SvgIconProps {
  //
}

const Star = (props: StarProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path d="M12 2.25L15.4394 8.40738L22.5 9.69834L17.565 14.7948L18.4894 21.75L12 18.7424L5.51064 21.75L6.435 14.7948L1.5 9.69834L8.56064 8.40738L12 2.25Z" />
      </svg>
    </SvgIcon>
  );
};

export default Star;
