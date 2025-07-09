import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const PulseKeyFrame = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: .25;
    transform: scale(.75);
  }
`;

export const RootStyle = styled.div`
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: 1;
  z-index: 99999;
`;

export const Container = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SpinnerBox = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const Item = styled.div<{ second: number }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #7c17f8;
  animation: ${PulseKeyFrame} 0.4s ease ${(props) => props.second}s infinite alternate;
`;
