import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface DataFileProps extends SvgIconProps {
  //
}

const DataFile = (props: DataFileProps) => {
  const { width, height, ...restProps } = props;

  return (
    <SvgIcon width={width ?? 14} height={height} {...restProps}>
      <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.5748 0.7C2.5748 0.672386 2.59719 0.65 2.6248 0.65H8.16059C8.25342 0.65 8.34244 0.686875 8.40808 0.752513L11.3223 3.66673C11.3879 3.73236 11.4248 3.82139 11.4248 3.91421V13.3C11.4248 13.3276 11.4024 13.35 11.3748 13.35H2.62481C2.59719 13.35 2.5748 13.3276 2.5748 13.3V0.7Z"
          stroke="#313135"
          strokeWidth="1.3"
        />
        <path d="M8.7 3V1.68995L9.50503 2.49497L10.3101 3.3H9C8.83431 3.3 8.7 3.16569 8.7 3Z" fill="#D2D2D3" stroke="#313135" strokeWidth="1.4" />
        <path d="M5.96758 6.54297L4.83008 7.76172L5.96758 8.98047" stroke="#313135" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.03242 6.54297L9.16992 7.80234L8.03242 9.06172" stroke="#313135" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </SvgIcon>
  );
};

export default DataFile;
