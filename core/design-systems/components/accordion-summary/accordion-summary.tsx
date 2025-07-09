'use client';

import { forwardRef } from 'react';
import { AccordionSummary as MuiAccordionSummary } from '@mui/material';
import { AccordionSummaryComponent, AccordionSummaryProps } from '@/core/design-systems/components/accordion-summary';

// do: ref, component, children
// do-not: (empty)
const AccordionSummary = forwardRef<HTMLDivElement, AccordionSummaryProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <MuiAccordionSummary ref={ref} {...restProps}>
      {children}
    </MuiAccordionSummary>
  );
});

AccordionSummary.displayName = 'AccordionSummary';

export default AccordionSummary as AccordionSummaryComponent;
