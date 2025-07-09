'use client';

import { forwardRef } from 'react';
import { Rating as MuiRating } from '@mui/material';
import { RatingComponent, RatingProps } from '@/core/design-systems/components/rating';

// do: ref, children
// do-not: component
const Rating = forwardRef<HTMLSpanElement, RatingProps>((props, ref) => {
  const { ...restProps } = props;

  return <MuiRating ref={ref} {...restProps} />;
});

Rating.displayName = 'FormGroup';

export default Rating as RatingComponent;
