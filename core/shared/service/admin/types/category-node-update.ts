import { TreeViewItemReorderPosition } from '@mui/x-tree-view-pro/internals/plugins/useTreeViewItemsReordering/useTreeViewItemsReordering.types';

export type CategoryNodeReorderingPayload = Omit<TreeViewItemReorderPosition, 'index'> & {
  position: number;
};

export type CategoryNodeReorderingOutput = {
  data: {
    id: string;
    categoryId: string;
    name: string;
    enabled: boolean;
  };
};

// ------------------------------------------------------------

export type CategoryNodeUpdatePayload = {
  enabled: boolean;
  description: string;
  name: {
    lang: string;
    text: string;
  }[];
};

export type CategoryNodeUpdateOutput = {
  data: {
    id: string;
    categoryId: string;
    name: string;
    enabled: boolean;
  };
};
