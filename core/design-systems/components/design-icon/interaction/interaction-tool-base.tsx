import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface InteractionToolBaseProps extends SvgIconProps {
  //
}

const InteractionToolBase = (props: InteractionToolBaseProps) => {
  const { id, ...restProps } = props;

  return (
    <SvgIcon {...restProps}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.31543 10.6903V7.42672C4.31543 6.30006 5.22877 5.38672 6.35543 5.38672H9.62M14.32 5.38672H17.5754C18.7021 5.38672 19.6154 6.30006 19.6154 7.42672V10.6903M19.6154 15.3903V18.6467C19.6154 19.7734 18.7021 20.6867 17.5754 20.6867H14.32M9.62 20.6867H6.35543C5.22877 20.6867 4.31543 19.7734 4.31543 18.6467V15.3903"
          stroke="black"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path d="M4.31543 10.6914H5.1C5.1 10.6914 7.39 10.6914 7.39 13.0378C7.39 15.3842 5.1 15.3914 5.1 15.3914H4.31543" stroke="black" strokeWidth="1.7" strokeLinecap="round" />
        <path
          d="M9.62012 5.38672V4.61C9.62012 4.61 9.61098 2.32031 11.9655 2.32031C14.3201 2.32031 14.3201 4.61 14.3201 4.61V5.38672"
          stroke="black"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M19.6152 10.6914H20.3998C20.3998 10.6914 22.6898 10.6914 22.6898 13.0378C22.6898 15.3842 20.3998 15.3914 20.3998 15.3914H19.6152"
          stroke="black"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M14.3201 20.6878V19.9111C14.3201 19.9111 14.3201 17.6211 11.9655 17.6211C9.61098 17.6211 9.62012 19.9111 9.62012 19.9111V20.6878"
          stroke="black"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default InteractionToolBase;
