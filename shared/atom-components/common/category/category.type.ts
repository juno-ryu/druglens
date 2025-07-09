import { OverridableComponent } from '@/core/utils/types/overridable/component';
import { CategoryNodeOutput } from '@/core/shared/service/output/category-node-output';
import { AccordionProps } from '@/core/design-systems/components/accordion';
import { BoxProps } from '@/core/design-systems/components/box';
import { TypographyProps } from '@/core/design-systems/components/typography';

export type CategoryProps<C extends React.ElementType> = OverridableComponent<
  C,
  BoxProps & {
    isSingle: boolean;
    isDrawer: boolean;
    category: { data: CategoryNodeOutput[] };
    headlineStyle?: TypographyProps;
    toggleDrawer: (value?: boolean) => void;
  }
>;

export type CategoryFirstLevelProps<C extends React.ElementType> = OverridableComponent<
  C,
  AccordionProps & {
    isSingle: boolean;
    data?: CategoryNodeOutput;
    toggleExpended: () => void;
  }
>;

export type CategorySecondLevelProps<C extends React.ElementType> = OverridableComponent<
  C,
  {
    isSingle: boolean;
    data?: CategoryNodeOutput;
    href?: string;
    closeDrawer: () => void;
  }
>;

export type CategoryThirdLevelProps<C extends React.ElementType> = OverridableComponent<
  C,
  {
    isSingle: boolean;
    data?: CategoryNodeOutput;
    href?: string;
    closeDrawer: () => void;
  }
>;
