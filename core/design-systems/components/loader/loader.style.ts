'use client';

import { alpha, keyframes, Box as MuiBox } from '@mui/material';
import { styled } from '@mui/material/styles';
import { shouldNotForwardPropsWithKeys } from '@/core/utils/helpers/style';
import CircularProgress from '@/core/design-systems/components/circular-progress';
import { LoaderOwnProps } from '@/core/design-systems/components/loader/loader.type';
import { TypeAugmentColorPalette } from '@/core/design-systems/theme/palette';

export const AnimationDotFlash = (color: TypeAugmentColorPalette, spasing: string) => keyframes`
  0% {
    background-color: ${alpha(color, 0.5)};
    box-shadow: ${spasing} 0 ${alpha(color, 0.5)}, -${spasing} 0 ${color};
  }
  50% {
    background-color: ${color};
    box-shadow: ${spasing} 0 ${alpha(color, 0.5)}, -${spasing} 0 ${alpha(color, 0.5)};
  }
  100% {
    background-color: ${alpha(color, 0.5)};
    box-shadow: ${spasing} 0 ${color}, -${spasing} 0 ${alpha(color, 0.5)};
  }
`;

export const MuiLoaderRoot = styled(MuiBox, {
  name: 'MuiLoader',
  slot: 'root',
  overridesResolver: (props, styles) => [styles.root],
  shouldForwardProp: shouldNotForwardPropsWithKeys<{ ownerState: LoaderOwnProps }>(['ownerState']),
})<{ ownerState: LoaderOwnProps }>(({ theme, ownerState }) => ({
  // Don't Touch Anything
}));

export const MuiLoaderDot = styled(MuiBox, {
  name: 'MuiLoader',
  slot: 'dot',
  overridesResolver: (props, styles) => [styles.dot],
  shouldForwardProp: shouldNotForwardPropsWithKeys<{ ownerState: LoaderOwnProps }>(['ownerState']),
})<{ ownerState: LoaderOwnProps }>(({ theme, ownerState }) => ({
  // Don't Touch Anything
}));

export const MuiLoaderCircle = styled(CircularProgress, {
  name: 'MuiLoader',
  slot: 'circle',
  overridesResolver: (props, styles) => [styles.circle],
  shouldForwardProp: shouldNotForwardPropsWithKeys<{ ownerState: LoaderOwnProps }>(['ownerState']),
})<{ ownerState: LoaderOwnProps }>(({ theme, ownerState }) => ({
  // Don't Touch Anything
}));
