import styled from '@emotion/styled';

export const LayoutGnbSecondaryContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: var(--layout-guard-workspace-inner-width);

  [role='tablist']:before,
  [role='tablist']:after {
    content: '';
    display: block;
    flex: 0 0 calc(var(--layout-guard-gnb-side) - var(--tabs-gap-auto) + 4px);

    ${(props) => props.theme.breakpoints.down('desktop')} {
      flex: 0 0 calc(var(--layout-guard-gnb-side) - var(--tabs-gap-auto) + 1px);
    }
    ${(props) => props.theme.breakpoints.down('tablet')} {
      flex: 0 0 calc(var(--layout-guard-gnb-side) - var(--tabs-gap-auto) + 1px);
    }
  }
`;
