import { OverridableComponent } from '@/core/utils/types/overridable/component';
import { BottomNavigationProps } from '@/core/design-systems/components/bottom-navigation';

export type NavigationBarProps<C extends React.ElementType> = OverridableComponent<
  C,
  BottomNavigationProps & {
    //
  }
>;
