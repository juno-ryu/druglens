'use client';

import React from 'react';
import dayjs from 'dayjs';
import { Typography } from '@/core/design-systems';
import useCountdownTimer from '@/core/shared/hooks/display/use-countdown-timer/use-countdown-timer';
import { ProductCardTimerProps } from '@/shared/atom-components/common/product-card/product-card.type';
import { TimerContainer } from '@/shared/atom-components/common/product-card/timer/timer.styles';

export default function ProductCardTimer(props: ProductCardTimerProps) {
  const { time, className = '', ...restProps } = props;
  const { totalTime, formattedTime } = useCountdownTimer({ targetTime: dayjs(time) });

  if (!totalTime) return null;

  return (
    <TimerContainer className={`${className}`} {...restProps}>
      <Typography variant="label/label1" fontWeight={600} color="white">
        남은시간 {formattedTime}
      </Typography>
    </TimerContainer>
  );
}
