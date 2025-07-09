import styled from '@emotion/styled';

export const PopularKeywordFlickingContainer = styled.div`
  --popular-keyword-flicking-height: 36px;

  flex: 1 1 0px;
  min-width: 0px;

  .flicking-viewport:has(.list) {
    height: var(--popular-keyword-flicking-height);
    overflow: hidden;
  }

  .item-link {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: var(--popular-keyword-flicking-height);
    padding: 0 8px;
    line-height: var(--popular-keyword-flicking-height);
    overflow: hidden;
    white-space: nowrap;
  }

  .item-ranking {
    flex: none;
  }

  .item-keyword {
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
