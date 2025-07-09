import styled from '@emotion/styled';

export const LayoutGnbUtilityContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 4px;
  gap: 16px;

  > li {
    position: relative;
  }

  ${(props) => props.theme.breakpoints.down('desktop')} {
    gap: 12px;
  }

  ${(props) => props.theme.breakpoints.down('tablet')} {
    gap: 10px;
  }
`;

export const LayoutGnbUtilityDefaultButton = styled.button`
  .MuiDesignIcon-root {
    width: 24px;
  }
  .item-button-badge {
    position: absolute;
    top: -4px;
    right: 2px;
    min-width: 16px;
    padding: 0 5px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    border-radius: 999px;
    transform: translateX(50%);
  }

  ${(props) => props.theme.breakpoints.down('desktop')} {
    .MuiDesignIcon-root {
      width: 24px;
    }
    .item-button-badge {
      /*  */
    }
  }

  ${(props) => props.theme.breakpoints.down('tablet')} {
    .MuiDesignIcon-root {
      width: 22px;
    }
    .item-button-badge {
      min-width: 15px;
      height: 15px;
      line-height: 15px;
    }
  }
`;

export const LayoutGnbUtilityCashButton = styled.button`
  display: flex;
  flex-direction: row;
  gap: 2px;
  align-items: center;
  padding: 3px 7px 3px 5px;
  border: 1px solid ${(props) => props.theme.palette['gray/200']};
  border-radius: 999px;

  .MuiDesignIcon-root {
    width: 18px;
  }

  ${(props) => props.theme.breakpoints.down('tablet')} {
    padding: 2px 6px 2px 4px;

    .MuiDesignIcon-root {
      /*  */
    }
  }
`;

export const LayoutGnbUtilityUserDropdown = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 50%;
  width: max-content;
  min-width: 118px;
  padding-top: ${(props) => (props.$isOpen ? '4px' : '0px')};
  transform: translateX(-50%);
  transform-origin: top center;
  z-index: 1;

  ul {
    display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
    flex-direction: column;
    gap: 4px;
    padding: 6px;
    background: ${(props) => props.theme.palette['white']};
    border-radius: 8px;
    box-shadow: ${(props) => props.theme.shadows[16]};
  }

  li {
    display: flex;
    align-items: center;
  }

  a,
  button {
    flex: 1 1 0px;
    padding: 8px;
    text-align: center;
  }

  ${(props) => props.theme.breakpoints.up('desktop')} {
    transform: translateX(-50%) scale(0.8);
    transform-origin: top center;
  }
  ${(props) => props.theme.breakpoints.down('desktop')} {
    transform: translateX(-50%) scale(0.68);
    transform-origin: top center;
  }
`;
