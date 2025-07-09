'use client';

import { Skeleton, Stack } from '@/core/design-systems';

const ProductCardSkeleton = () => {
  return (
    <Stack direction="column">
      <Skeleton variant="rectangular" width="100%" height="159px" sx={(theme) => ({ background: theme.palette['gray/dim/200'] })} />
      <Skeleton
        variant="rectangular"
        width="120px"
        height="16px"
        sx={(theme) => ({
          background: theme.palette['gray/dim/200'],
          marginTop: '12px',
        })}
      />
      <Skeleton
        variant="rectangular"
        width="258px"
        height="20px"
        sx={(theme) => ({
          background: theme.palette['gray/dim/200'],
          marginTop: '6px',
        })}
      />
      <Skeleton
        variant="rectangular"
        width="160px"
        height="22px"
        sx={(theme) => ({
          background: theme.palette['gray/dim/200'],
          marginTop: '3px',
        })}
      />
      <Skeleton
        variant="rectangular"
        width="200px"
        height="20px"
        sx={(theme) => ({
          background: theme.palette['gray/dim/200'],
          marginTop: '4px',
        })}
      />
      <Skeleton
        variant="rectangular"
        width="100px"
        height="20px"
        sx={(theme) => ({
          background: theme.palette['gray/dim/200'],
          marginTop: '8px',
        })}
      />
    </Stack>
  );
};

export default ProductCardSkeleton;
