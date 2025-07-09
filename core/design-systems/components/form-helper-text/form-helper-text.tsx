'use client';

import { forwardRef } from 'react';
import { FormHelperText as MuiFormHelperText } from '@mui/material';
import { generatedClassList } from '@/core/utils/helpers/style';
import { toPascalCase } from '@/core/utils/helpers/text';
import { FormHelperTextComponent, FormHelperTextProps } from '@/core/design-systems/components/form-helper-text';

// do: ref, component, children
// do-not: (empty)
const FormHelperText = forwardRef<HTMLParagraphElement, FormHelperTextProps>((props, ref) => {
  const { success, children, ...restProps } = props;

  const rootClassList = Array.from(generatedClassList('MuiFormHelperText', { success }, toPascalCase));

  return (
    <MuiFormHelperText ref={ref} classes={{ root: rootClassList.join(' ') }} {...restProps}>
      {children}
    </MuiFormHelperText>
  );
});

FormHelperText.displayName = 'FormHelperText';

export default FormHelperText as FormHelperTextComponent;
