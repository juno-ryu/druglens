'use client';

import { forwardRef } from 'react';
import { AccordionDetails as MuiAccordionDetails } from '@mui/material';
import { AccordionDetailsComponent, AccordionDetailsProps } from '@/core/design-systems/components/accordion-details';

// do: ref, children
// do-not: component
const AccordionDetails = forwardRef<HTMLDivElement, AccordionDetailsProps>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <MuiAccordionDetails ref={ref} {...restProps}>
      {children}
    </MuiAccordionDetails>
  );
});

AccordionDetails.displayName = 'AccordionDetails';

export default AccordionDetails as AccordionDetailsComponent;
