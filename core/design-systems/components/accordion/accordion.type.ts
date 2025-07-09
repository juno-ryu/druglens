import { AccordionProps as MuiAccordionProps, AccordionTypeMap as MuiAccordionTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type AccordionComponent = OverridableComponent<MuiAccordionTypeMap<AccordionProps>>;

export type AccordionProps<RootComponent extends React.ElementType = MuiAccordionTypeMap['defaultComponent']> = MuiAccordionProps<RootComponent> & {
  //
};
