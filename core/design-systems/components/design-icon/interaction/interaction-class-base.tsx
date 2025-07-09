import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface InteractionClassBaseProps extends SvgIconProps {
  //
}

const InteractionClassBase = (props: InteractionClassBaseProps) => {
  const { id, ...restProps } = props;

  return (
    <SvgIcon {...restProps}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.35 7C2.35 5.81259 3.31259 4.85 4.5 4.85H19.5C20.6874 4.85 21.65 5.81259 21.65 7V17C21.65 18.1874 20.6874 19.15 19.5 19.15H4.5C3.31259 19.15 2.35 18.1874 2.35 17V7Z"
          stroke="black"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path d="M15 12L10.4746 14.75" stroke="black" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M10.4746 9.25V14.75" stroke="black" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M15 12L10.4746 9.25" stroke="black" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    </SvgIcon>
  );
};

export default InteractionClassBase;
