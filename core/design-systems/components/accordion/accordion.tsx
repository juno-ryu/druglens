'use client';

import { forwardRef } from 'react';
import { Accordion as MuiAccordion } from '@mui/material';
import { AccordionComponent, AccordionProps } from '@/core/design-systems/components/accordion';

// do: ref, component, children
// do-not: (empty)
const Accordion = forwardRef<HTMLDivElement, AccordionProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <MuiAccordion ref={ref} {...restProps}>
      {children}
    </MuiAccordion>
  );
});

Accordion.displayName = 'Accordion';

export default Accordion as AccordionComponent;
