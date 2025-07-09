import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface PayCreditCardFillProps extends SvgIconProps {
  //
}

const PayCreditCardFill = (props: PayCreditCardFillProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 6.07022C1 4.71648 2.09743 3.61905 3.45117 3.61905H20.5488C21.9026 3.61905 23 4.71648 23 6.07022V7.59903H1V6.07022ZM1 9.09903H23V17.9298C23 19.2835 21.9026 20.381 20.5488 20.381H3.45117C2.09743 20.381 1 19.2835 1 17.9298V9.09903ZM15.6094 17.4799H19.7344V15.9799H15.6094V17.4799Z"
        />
      </svg>
    </SvgIcon>
  );
};

export default PayCreditCardFill;
