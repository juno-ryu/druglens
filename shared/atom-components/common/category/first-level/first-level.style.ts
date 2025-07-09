import styled from '@emotion/styled';

export const CategoryFirstLevelSummary = styled.div`
  padding: 16px 0;

  > a,
  > button,
  > [role='button'] {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 8px 6px;
    font-size: ${(props) => props.theme.typography['body/body3'].fontSize};
    line-height: ${(props) => props.theme.typography['body/body3'].lineHeight};
    font-weight: 700;
    color: ${(props) => props.theme.palette['gray/900']};
    white-space: pre;
  }
`;

export const CategoryFirstLevelDetail = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding-bottom: 24px;

  &:empty {
    display: none;
  }
`;
