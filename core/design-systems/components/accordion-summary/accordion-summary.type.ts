import { AccordionSummaryProps as MuiAccordionSummaryProps, AccordionSummaryTypeMap as MuiAccordionSummaryTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type AccordionSummaryComponent = OverridableComponent<MuiAccordionSummaryTypeMap<AccordionSummaryProps>>;

export type AccordionSummaryProps<RootComponent extends React.ElementType = MuiAccordionSummaryTypeMap['defaultComponent']> = MuiAccordionSummaryProps<RootComponent> & {
  //
};
