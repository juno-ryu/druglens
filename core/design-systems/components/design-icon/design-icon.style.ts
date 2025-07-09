import { Box as MuiBox, SvgIcon as MuiSvgIcon } from '@mui/material';
import { styled } from '@mui/material/styles';
import { shouldNotForwardPropsWithKeys } from '@/core/utils/helpers/style';
import { DesignIconOwnProps } from '@/core/design-systems/components/design-icon';

export const MuiDesignIconRoot = styled(MuiBox, {
  name: 'MuiDesignIcon',
  slot: 'root',
  overridesResolver: (props, styles) => [styles.root],
  shouldForwardProp: shouldNotForwardPropsWithKeys<{ ownerState: DesignIconOwnProps }>(['ownerState']),
})<{ ownerState: DesignIconOwnProps }>(({ theme, ownerState }) => ({
  // Don't Touch Anything
}));

export const MuiDesignIconSvgIcon = styled(MuiSvgIcon, {
  name: 'MuiDesignIcon',
  slot: 'svgIcon',
  overridesResolver: (props, styles) => [styles.svgIcon],
  shouldForwardProp: shouldNotForwardPropsWithKeys<{ ownerState: DesignIconOwnProps }>(['ownerState']),
})<{ ownerState: DesignIconOwnProps }>(({ theme, ownerState }) => ({
  // Don't Touch Anything
}));
