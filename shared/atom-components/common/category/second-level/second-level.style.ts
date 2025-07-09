import styled from '@emotion/styled';

export const CategorySecondLevelContainer = styled.div`
  > ul {
    display: flex;
    flex-wrap: wrap;
  }

  > ul:empty {
    display: none;
  }

  > a,
  > button,
  > [role='button'] {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 8px 0px 8px 8px;
    font-size: ${(props) => props.theme.typography['body/body5'].fontSize};
    line-height: ${(props) => props.theme.typography['body/body5'].lineHeight};
    font-weight: 700;
    color: ${(props) => props.theme.palette['gray/900']};
    white-space: pre;
  }
`;
