import styled from '@emotion/styled';

export const LayoutFooterContainer = styled.footer`
  position: relative;
  background: ${(props) => props.theme.palette['gray/50']};
`;

export const LayoutFooterNavigation = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 22px 32px;
  max-width: var(--layout-guard-workspace-inner-width);
  padding: 18px var(--layout-guard-footer-side);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 100vw;
    transform: translateX(-50vw);
    border-top: 1px solid ${(props) => props.theme.palette['gray/200']};
  }
`;

export const LayoutFooterSummary = styled.div`
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: var(--layout-guard-workspace-inner-width);
  padding: 41px var(--layout-guard-footer-side) 48px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 100vw;
    transform: translateX(-50vw);
    border-top: 1px solid ${(props) => props.theme.palette['gray/200']};
  }
`;
