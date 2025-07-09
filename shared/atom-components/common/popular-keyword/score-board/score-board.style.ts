import styled from '@emotion/styled';

export const PopularKeywordScoreboardContainer = styled.div`
  /*  */
`;

export const PopularKeywordScoreboardHeadline = styled.strong`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 8px;
`;

export const PopularKeywordScoreboardList = styled.ul`
  margin-top: 4px;

  .item-link {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 8px;
    overflow: hidden;
    white-space: nowrap;
  }

  .item-ranking {
    flex: none;
    width: 20px;
  }

  .item-keyword {
    flex: 1 1 0px;
    margin-left: 4px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-trend {
    flex: none;
    margin-left: 8px;
  }
`;
