import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

// 위아래로 움직이는 애니메이션 정의
export const bounceUpDown = keyframes`
  0%, 100% {
    transform: translateY(-5px); /* 기본 위치 */
  }
  50% {
    transform: translateY(5px); /* 위로 10px 이동 */
  }
`;

export const Tag = styled.div`
  display: flex;
  padding: 4px 7px 5px 7px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 0.8px solid #d2d2d3;
  color: #a2a2a4;
  font-size: 11px;
  font-weight: 400;
  line-height: 100%;
  max-height: 19px;
  cursor: pointer;
  &:hover {
    background-color: #e7e7e8;
  }
`;

export const TagInner = styled.div`
  display: flex;
  gap: 4px;
  white-space: nowrap;
  transition: transform 0.2s;
`;

export const TagContainer = styled.div<{ isDark?: boolean; draggableBefore?: boolean; draggableAfter?: boolean }>`
  position: relative;
  margin-top: 8px;
  height: 20px;
  overflow: hidden;

  ${(props) =>
    props.isDark &&
    `
    & ${Tag} {
      border: 0.8px solid #6d6d70;
      color: #a2a2a4;
    }
  `}

  ${(props) =>
    props.draggableBefore && props.draggableAfter
      ? 'mask-image: linear-gradient(90deg, transparent, #fff 18px, #fff calc(100% - 18px), transparent 100%);'
      : props.draggableBefore
        ? 'mask-image: linear-gradient(90deg, transparent, #fff 18px, #fff calc(100% - 0px), transparent 100%);'
        : props.draggableAfter
          ? 'mask-image: linear-gradient(90deg, transparent, #fff 0px, #fff calc(100% - 18px), transparent 100%);'
          : null}

  ${(props) => props.theme.breakpoints.down('tablet')} {
    margin-top: 6px;
  }
`;
