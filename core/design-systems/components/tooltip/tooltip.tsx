'use client';

import { forwardRef } from 'react';
import { Tooltip as MuiTooltip } from '@mui/material';
import { generatedClassList } from '@/core/utils/helpers/style';
import { toPascalCase } from '@/core/utils/helpers/text';
import { TooltipComponent, TooltipProps } from '@/core/design-systems/components/tooltip';

// do: ref, children
// do-not: component
const Tooltip = forwardRef<HTMLSpanElement, TooltipProps>((props, ref) => {
  const { children, frontBumper, backBumper, ...restProps } = props;

  const rootClassList = Array.from(generatedClassList('MuiTooltip', { frontBumper, backBumper }, toPascalCase));

  return (
    <MuiTooltip ref={ref} classes={{ tooltip: rootClassList.join(' ') }} {...restProps}>
      {children}
    </MuiTooltip>
  );
});

Tooltip.displayName = 'Tooltip';

export default Tooltip as TooltipComponent;
