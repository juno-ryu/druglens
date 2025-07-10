import styled from '@emotion/styled';

import { PopularKeywordContainer, PopularKeywordDropDown } from '@/shared/atom-components/common/popular-keyword/popular-keyword.style';

export const LayoutGnbPrimaryContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 48px;

  ${PopularKeywordContainer} {
    margin-left: 20px;
    width: 240px;
    ${(props) => props.theme.breakpoints.down('desktop')} {
      display: none;
    }
  }

  ${PopularKeywordDropDown} {
    width: 320px;
    ${(props) => props.theme.breakpoints.down('desktop')} {
      display: none;
    }
  }
`;

export const LayoutGnbPrimaryLogo = styled.h1`
  /*  */
`;
