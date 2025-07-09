import { AccordionDetailsProps as MuiAccordionDetailsProps } from '@mui/material';

export type AccordionDetailsComponent = React.ComponentType<AccordionDetailsProps>;

export type AccordionDetailsProps = Omit<MuiAccordionDetailsProps, 'component'> & {
  //
};
