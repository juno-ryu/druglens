import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TimerContainer = styled.div`
  border-radius: 3px;
  ${(props) => css`
    background-color: ${props.theme.palette['state/sale']};
  `}
  padding: 0 8px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
`;
