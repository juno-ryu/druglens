import styled from '@emotion/styled';

export const SearchBarContainer = styled.div`
  position: relative;
  min-width: 300px;
`;

export const SearchBarForm = styled.form`
  /*  */
`;

export const SearchBarDropDown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 16px 16px 20px;
  background: ${(props) => props.theme.palette['white']};
  z-index: 1;
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.shadows[24]};

  &:empty {
    display: none;
  }
`;
