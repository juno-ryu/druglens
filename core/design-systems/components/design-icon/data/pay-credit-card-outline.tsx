import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface PayCreditCardOutlineProps extends SvgIconProps {
  //
}

const PayCreditCardOutline = (props: PayCreditCardOutlineProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.5488 5.11902H3.45117C2.92585 5.11902 2.5 5.54487 2.5 6.07019V7.59888H21.5V6.07019C21.5 5.54487 21.0741 5.11902 20.5488 5.11902ZM1 7.59888V9.09888V17.9298C1 19.2835 2.09743 20.3809 3.45117 20.3809H20.5488C21.9026 20.3809 23 19.2835 23 17.9298V9.09888V7.59888V6.07019C23 4.71645 21.9026 3.61902 20.5488 3.61902H3.45117C2.09743 3.61902 1 4.71644 1 6.07019V7.59888ZM21.5 17.9298V9.09888H2.5V17.9298C2.5 18.4551 2.92585 18.8809 3.45117 18.8809H20.5488C21.0741 18.8809 21.5 18.4551 21.5 17.9298ZM15.6094 17.4799H19.7344V15.9799H15.6094V17.4799Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default PayCreditCardOutline;
