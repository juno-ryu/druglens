import { OverridableComponent } from '@/core/utils/types/overridable/component';
import { CategoryNodeOutput } from '@/core/shared/service/output/category-node-output';
import { StackProps } from '@/core/design-systems/components/stack';

export interface LayoutProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  nestData: {
    categoryData: { data: CategoryNodeOutput[] };
  };
}

export interface LayoutGnbProps extends React.HTMLAttributes<HTMLElement> {
  //
}

export interface LayoutGnbPrimaryProps extends React.HTMLAttributes<HTMLDivElement> {
  //
}

export interface LayoutGnbSecondaryProps extends React.HTMLAttributes<HTMLDivElement> {
  //
}

export interface LayoutGnbUtilityProps extends React.HTMLAttributes<HTMLUListElement> {
  //
}

export interface LayoutBottomNavigationProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLElement>> {
  //
}

export interface LayoutFooterProps extends React.HTMLAttributes<HTMLElement> {
  //
}

export type LayoutFooterQuickLinkProps<C extends React.ElementType> = OverridableComponent<
  C,
  StackProps & {
    //
  }
>;

export type LayoutFooterSocialProps<C extends React.ElementType> = OverridableComponent<
  C,
  StackProps & {
    //
  }
>;

export type LayoutFooterCompanyProps<C extends React.ElementType> = OverridableComponent<
  C,
  StackProps & {
    //
  }
>;

export interface LayoutDrawerCategoryProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  category: { data: CategoryNodeOutput[] };
  render: (children: React.ReactNode) => React.ReactNode;
  toggleDrawer: (value?: boolean) => void;
}
