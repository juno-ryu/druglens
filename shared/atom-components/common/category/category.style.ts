'use client';

import styled from '@emotion/styled';

export const CategoryContainer = styled.nav`
  container-type: inline-size;
  background-color: inherit;
  > ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  > ul:empty {
    display: none;
  }
`;
