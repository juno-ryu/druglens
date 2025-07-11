import styled from '@emotion/styled';
import { alpha } from '@mui/material';

export const LayoutGnbPrimaryRow = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: var(--layout-guard-workspace-inner-width);
  padding: 0 var(--layout-guard-gnb-side);
`;

export const LayoutGnbContainer = styled.header`
  /* position: sticky; */
  top: 0;
  padding: 20px 0;

  background: ${(props) => props.theme.palette['augment/gray/50']};
  z-index: ${(props) => props.theme.zIndex.header};
  box-shadow: 0px 1px 0px 0px ${(props) => alpha(props.theme.palette['gray/200'], 1)};

  ${(props) => props.theme.breakpoints.down('desktop')} {
    padding-top: 12px;
  }
  ${(props) => props.theme.breakpoints.down('tablet')} {
    padding-top: 10px;
  }
`;
