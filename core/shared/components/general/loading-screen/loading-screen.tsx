'use client';

import { Container, Item, RootStyle, SpinnerBox } from '@/core/shared/components/general/loading-screen/loading-screen.style';
import { LoadingScreenProps } from '@/core/shared/components/general/loading-screen/loading-screen.type';

const LoadingScreen = (props: LoadingScreenProps) => {
  const { className = '', ...restProps } = props;

  return (
    <RootStyle className={`${className}`} {...restProps}>
      <SpinnerBox>
        <Container>
          <Item second={0} />
          <Item second={0.2} />
          <Item second={0.4} />
        </Container>
      </SpinnerBox>
    </RootStyle>
  );
};

export default LoadingScreen;
