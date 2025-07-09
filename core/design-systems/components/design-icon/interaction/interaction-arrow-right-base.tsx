import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface InteractionArrowRightBaseProps extends SvgIconProps {
  //
}

const InteractionArrowRightBase = (props: InteractionArrowRightBaseProps) => {
  const { id, ...restProps } = props;

  return (
    <SvgIcon {...restProps}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.4694 12.7993H4V11.1993H16.471L13.0359 7.76418L14.1672 6.63281L18.9672 11.4328L19.5329 11.9985L18.9672 12.5642L14.1672 17.3642L13.0359 16.2328L16.4694 12.7993Z"
          fill="#313135"
        />
      </svg>
    </SvgIcon>
  );
};

export default InteractionArrowRightBase;
