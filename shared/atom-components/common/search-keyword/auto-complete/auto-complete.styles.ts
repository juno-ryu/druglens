import styled from '@emotion/styled';

export const SearchKeywordAutoCompleteContainer = styled.div`
  position: relative;

  & ~ & {
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid ${(props) => props.theme.palette['gray/dim/50']};
  }
`;

export const SearchKeywordAutoCompleteHeadline = styled.div`
  display: block;
  padding: 8px;
`;

export const SearchKeywordAutoCompleteList = styled.ul`
  .item {
    position: relative;
    :has(:focus) .item-keyword,
    :has(:hover) .item-keyword {
      background: ${(props) => props.theme.palette['gray/50']};
    }
  }

  .item-keyword {
    display: block;
    padding: 8px;
    border-radius: 4px;
    outline: none;
  }
`;
