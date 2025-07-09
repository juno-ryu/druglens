import { OverridableComponent } from '@/core/utils/types/overridable/component';
import { StackProps } from '@/core/design-systems/components/stack';

export type IdentityDanalProps<C extends React.ElementType> = OverridableComponent<
  C,
  StackProps & {
    onStart?: () => void;
  }
>;
