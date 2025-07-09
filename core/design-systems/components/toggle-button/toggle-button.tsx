'use client';

import { forwardRef } from 'react';
import { ToggleButton as MuiToggleButton } from '@mui/material';
import { generatedClassList } from '@/core/utils/helpers/style';
import { toPascalCase } from '@/core/utils/helpers/text';
import { ToggleButtonComponent, ToggleButtonProps } from '@/core/design-systems/components/toggle-button';

// do: ref, component, children
// do-not: (empty)
const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>((props, ref) => {
  const { variant = 'outlined', children, ...restProps } = props;

  const rootClassList = Array.from(generatedClassList('MuiToggleButton', { variant }, toPascalCase));

  return (
    <MuiToggleButton ref={ref} classes={{ root: rootClassList.join(' ') }} data-variant={variant} {...restProps}>
      {children}
    </MuiToggleButton>
  );
});

ToggleButton.displayName = 'ToggleButton';

export default ToggleButton as ToggleButtonComponent;
