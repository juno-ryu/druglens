import styled from '@emotion/styled';

export const LayoutDrawerCategoryContainer = styled.div`
  width: var(--layout-guard-drawer-width);
  margin: 24px 0 48px;
  padding: 0 var(--layout-guard-workspace-content-side);
  ${(props) => props.theme.breakpoints.down('desktop')} {
    padding: 0 calc(var(--layout-guard-workspace-content-side) + 4px);
  }
`;
