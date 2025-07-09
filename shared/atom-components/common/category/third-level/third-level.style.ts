import styled from '@emotion/styled';

export const CategoryThirdLevelContainer = styled.div`
  width: 100%;
  ${(props) => props.theme.breakpoints.up('tablet').replace('@media', '@container')} {
    width: 33.3333%;
  }

  > a,
  > button,
  > [role='button'] {
    display: flex;
    align-items: flex-start;
    width: 100%;
    gap: 7px;
    padding: 8px 0px 8px 10px;
    font-size: ${(props) => props.theme.typography['body/body5'].fontSize};
    line-height: ${(props) => props.theme.typography['body/body5'].lineHeight};
    font-weight: 500;
    color: ${(props) => props.theme.palette['gray/800']};
    white-space: pre;

    &:before {
      content: '-';
    }
  }
`;
