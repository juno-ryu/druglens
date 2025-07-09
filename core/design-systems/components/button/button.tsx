'use client';

import { forwardRef } from 'react';
import { Button as MuiButton } from '@mui/material';
import { generatedClassList } from '@/core/utils/helpers/style';
import { toPascalCase } from '@/core/utils/helpers/text';
import { ButtonComponent, ButtonProps } from '@/core/design-systems/components/button';

// do: ref, component, children
// do-not: (empty)
const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, disabled: originDisabled, inactivated, frontBumper, backBumper, relaxBorder, ...restProps } = props;

  const disabled = inactivated ? true : originDisabled;
  const rootClassList = Array.from(generatedClassList('MuiButton', { inactivated, frontBumper, backBumper, relaxBorder }, toPascalCase));
  const childClassList = Array.from(generatedClassList('MuiButton', { child: true }, toPascalCase));

  return (
    <MuiButton ref={ref} disabled={disabled} classes={{ root: rootClassList.join(' ') }} {...restProps}>
      {children && <span className={childClassList.join(' ')}>{children}</span>}
    </MuiButton>
  );
});

Button.displayName = 'Button';

export default Button as ButtonComponent;
