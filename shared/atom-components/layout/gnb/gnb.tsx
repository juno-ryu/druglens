'use client';

import LayoutGnbPrimary from '@/shared/atom-components/layout/gnb/gnb-primary';
import LayoutGnbUtility from '@/shared/atom-components/layout/gnb/gnb-utility';
import {
  LayoutGnbContainer,
  LayoutGnbPrimaryRow,
} from '@/shared/atom-components/layout/gnb/gnb.style';
import { LayoutGnbProps } from '@/shared/atom-components/layout/layout.type';

const LayoutGnb = (props: LayoutGnbProps) => {
  const { className = '', ...restProps } = props;

  return (
    <LayoutGnbContainer className={`${className}`} {...restProps}>
      <LayoutGnbPrimaryRow>
        <LayoutGnbPrimary />
        <LayoutGnbUtility />
      </LayoutGnbPrimaryRow>
    </LayoutGnbContainer>
  );
};

export default LayoutGnb;
