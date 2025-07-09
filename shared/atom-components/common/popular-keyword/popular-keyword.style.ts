import styled from '@emotion/styled';

export const PopularKeywordContainer = styled.div`
  position: relative;
`;

export const PopularKeywordDropDown = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px 16px 20px;
  background: ${(props) => props.theme.palette['white']};
  z-index: 1;
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.shadows[24]};
`;
