import { Box as MuiBox, Typography as MuiTypography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { shouldNotForwardPropsWithKeys } from '@/core/utils/helpers/style';
import { DesignStatOwnProps } from '@/core/design-systems/components/design-stat';

export const DesignStatRoot = styled(MuiBox, {
  name: 'MuiDesignStat',
  slot: 'root',
  overridesResolver: (props, styles) => [styles.root],
  shouldForwardProp: shouldNotForwardPropsWithKeys<{ ownerState: DesignStatOwnProps }>(['ownerState']),
})<{ ownerState: DesignStatOwnProps }>(({ theme, ownerState }) => ({
  // Don't Touch Anything
}));

export const DesignStatTypography = styled(MuiTypography, {
  name: 'MuiDesignStat',
  slot: 'typography',
  overridesResolver: (props, styles) => [styles.typography],
  shouldForwardProp: shouldNotForwardPropsWithKeys<{ ownerState: DesignStatOwnProps }>(['ownerState']),
})<{ ownerState: DesignStatOwnProps }>(({ theme, ownerState }) => ({
  // Don't Touch Anything
}));

export const DesignStatUnit = styled(MuiTypography, {
  name: 'MuiDesignStat',
  slot: 'unit',
  overridesResolver: (props, styles) => [styles.unit],
  shouldForwardProp: shouldNotForwardPropsWithKeys<{ ownerState: DesignStatOwnProps }>(['ownerState']),
})<{ ownerState: DesignStatOwnProps }>(({ theme, ownerState }) => ({
  // Don't Touch Anything
}));
