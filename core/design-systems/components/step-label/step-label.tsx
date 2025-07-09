'use client';

import { forwardRef } from 'react';
import { StepLabel as MuiStepLabel } from '@mui/material';
import { generatedClassList } from '@/core/utils/helpers/style';
import { toPascalCase } from '@/core/utils/helpers/text';
import { StepLabelComponent, StepLabelProps } from '@/core/design-systems/components/step-label';

// do: ref, children
// do-not: component
const StepLabel = forwardRef<HTMLSpanElement, StepLabelProps>((props, ref) => {
  const { size = 'small', children, ...restProps } = props;

  const rootClassList = Array.from(generatedClassList('MuiStepLabel', { size }, toPascalCase));

  return (
    <MuiStepLabel ref={ref} classes={{ root: rootClassList.join(' ') }} data-size={size} {...restProps}>
      {children}
    </MuiStepLabel>
  );
});

StepLabel.displayName = 'StepLabel';

export default StepLabel as StepLabelComponent;
