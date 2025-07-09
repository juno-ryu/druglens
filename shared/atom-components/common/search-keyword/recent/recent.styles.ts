import styled from '@emotion/styled';

export const SearchKeywordRecentContainer = styled.div`
  position: relative;
`;

export const SearchKeywordRecentHeadline = styled.div`
  display: block;
  padding: 8px;
  padding-right: 72px;
`;

export const SearchKeywordRecentReset = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px;
  transform: translateY(calc(11.5px - 8px));
`;

export const SearchKeywordRecentList = styled.ul`
  margin-top: 4px;

  .item {
    position: relative;
    :has(:focus) .item-keyword,
    :has(:hover) .item-keyword {
      background: ${(props) => props.theme.palette['gray/50']};
    }
  }

  .item-keyword {
    display: block;
    padding: 8px 32px 8px 8px;
    border-radius: 4px;
    outline: none;
  }

  .item-delete {
    position: absolute;
    top: 50%;
    right: 4px;
    transform: translateY(-50%);
  }
`;
