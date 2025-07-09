import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface ThumbsUpFillProps extends SvgIconProps {
  //
}

const ThumbsUpFill = (props: ThumbsUpFillProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 24} height={height} {...restProps}>
      <svg viewBox="0 0 24 24">
        <path d="M6 21H4C2.89548 21 2.00005 20.1046 2 19V11.0996C2.00019 9.99523 2.89557 9.09964 4 9.09961H6V21ZM11.084 1C12.0653 1 13.0063 1.3901 13.7002 2.08398C14.3941 2.77786 14.7842 3.71891 14.7842 4.7002V7.2998H18.873C19.2767 7.29614 19.6766 7.37964 20.0449 7.54492C20.4152 7.71112 20.7454 7.9564 21.0117 8.2627C21.2779 8.56893 21.4748 8.92965 21.5879 9.31934C21.7009 9.70889 21.7278 10.1185 21.667 10.5195L20.4248 18.6201C20.3234 19.2873 19.9839 19.8959 19.4697 20.333C18.9568 20.769 18.3039 21.0061 17.6309 21H7.5V7.60059L10.1699 1.59375C10.3304 1.23267 10.6889 1.00006 11.084 1Z" />
      </svg>
    </SvgIcon>
  );
};

export default ThumbsUpFill;
