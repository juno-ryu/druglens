import SvgIcon, { SvgIconProps } from '@/core/design-systems/components/svg-icon';

interface InteractionClassProps extends SvgIconProps {
  //
}

const InteractionClass = (props: InteractionClassProps) => {
  const { id, ...restProps } = props;

  return (
    <SvgIcon {...restProps}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="class">
          <rect width="24" height="24" fill="white"></rect>
          <path
            id="frame"
            d="M2.35 7C2.35 5.81259 3.31259 4.85 4.5 4.85H19.5C20.6874 4.85 21.65 5.81259 21.65 7V17C21.65 18.1874 20.6874 19.15 19.5 19.15H4.5C3.31259 19.15 2.35 18.1874 2.35 17V7Z"
            stroke="black"
            strokeWidth="1.7"
            strokeLinejoin="round"
          >
            <animate
              attributeName="d"
              dur="2400ms"
              repeatCount="indefinite"
              values="M2.35 7C2.35 5.81259 3.31259 4.85 4.5 4.85C19.5 4.85 19.5 4.85 19.5 4.85C20.6874 4.85 21.65 5.81259 21.65 7C21.65 17 21.65 17 21.65 17C21.65 18.1874 20.6874 19.15 19.5 19.15C4.5 19.15 4.5 19.15 4.5 19.15C3.31259 19.15 2.35 18.1874 2.35 17C2.35 7 2.35 7 2.35 7Z;M4.85 5C4.85 3.81259 5.81259 2.85 7 2.85C17 2.85 17 2.85 17 2.85C18.1874 2.85 19.15 3.81259 19.15 5C19.15 19 19.15 19 19.15 19C19.15 20.1874 18.1874 21.15 17 21.15C7 21.15 7 21.15 7 21.15C5.81259 21.15 4.85 20.1874 4.85 19C4.85 5 4.85 5 4.85 5Z;M4.85 5C4.85 3.81259 5.81259 2.85 7 2.85C17 2.85 17 2.85 17 2.85C18.1874 2.85 19.15 3.81259 19.15 5C19.15 19 19.15 19 19.15 19C19.15 20.1874 18.1874 21.15 17 21.15C7 21.15 7 21.15 7 21.15C5.81259 21.15 4.85 20.1874 4.85 19C4.85 5 4.85 5 4.85 5Z;M2.35 7C2.35 5.81259 3.31259 4.85 4.5 4.85C19.5 4.85 19.5 4.85 19.5 4.85C20.6874 4.85 21.65 5.81259 21.65 7C21.65 17 21.65 17 21.65 17C21.65 18.1874 20.6874 19.15 19.5 19.15C4.5 19.15 4.5 19.15 4.5 19.15C3.31259 19.15 2.35 18.1874 2.35 17C2.35 7 2.35 7 2.35 7Z;M2.35 7C2.35 5.81259 3.31259 4.85 4.5 4.85C19.5 4.85 19.5 4.85 19.5 4.85C20.6874 4.85 21.65 5.81259 21.65 7C21.65 17 21.65 17 21.65 17C21.65 18.1874 20.6874 19.15 19.5 19.15C4.5 19.15 4.5 19.15 4.5 19.15C3.31259 19.15 2.35 18.1874 2.35 17C2.35 7 2.35 7 2.35 7Z"
              calcMode="spline"
              keyTimes="0; 0.25; 0.50; 0.75; 1"
              keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
            ></animate>
          </path>
          <path id="3" d="M15 12L10.4746 14.75" stroke="black" strokeWidth="1.7" strokeLinecap="round">
            <animate
              attributeName="d"
              dur="2400ms"
              repeatCount="indefinite"
              values="M15 12C10.4746 14.75 10.4746 14.75 10.4746 14.75;M15 12C10.4746 14.75 10.4746 14.75 10.4746 14.75;M12.75 14.5C8.25 14.5 8.25 14.5 8.25 14.5;M12.75 15C8.25 15 8.25 15 8.25 15;M15 12C10.4746 14.75 10.4746 14.75 10.4746 14.75"
              calcMode="spline"
              keyTimes="0; 0.25; 0.50; 0.75; 1"
              keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
            ></animate>
          </path>
          <path id="2" d="M10.4746 9.25V14.75" stroke="black" strokeWidth="1.7" strokeLinecap="round">
            <animate
              attributeName="d"
              dur="2400ms"
              repeatCount="indefinite"
              values="M10.4746 9.25C10.4746 14.75 10.4746 14.75 10.4746 14.75;M10.4746 9.25C10.4746 14.75 10.4746 14.75 10.4746 14.75;M8.25 11C15.75 11 15.75 11 15.75 11;M8.25 12C15.75 12 15.75 12 15.75 12;M10.4746 9.25C10.4746 14.75 10.4746 14.75 10.4746 14.75"
              calcMode="spline"
              keyTimes="0; 0.25; 0.50; 0.75; 1"
              keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
            ></animate>
          </path>
          <path id="1" d="M15 12L10.4746 9.25" stroke="black" strokeWidth="1.7" strokeLinecap="round">
            <animate
              attributeName="d"
              dur="2400ms"
              repeatCount="indefinite"
              values="M15 12C10.4746 9.25 10.4746 9.25 10.4746 9.25;M15 12C10.4746 9.25 10.4746 9.25 10.4746 9.25;M15.75 7.5C8.25 7.5 8.25 7.5 8.25 7.5;M15.75 9C8.25 9 8.25 9 8.25 9;M15 12C10.4746 9.25 10.4746 9.25 10.4746 9.25"
              calcMode="spline"
              keyTimes="0; 0.25; 0.50; 0.75; 1"
              keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
            ></animate>
          </path>
        </g>
      </svg>
    </SvgIcon>
  );
};

export default InteractionClass;
