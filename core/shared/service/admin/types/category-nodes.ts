export type CategoryNodesOutput = {
  data: Nodes[];
};

export interface Nodes {
  id: string;
  categoryId: string;
  name: string;
  enabled: boolean;
  children?: Nodes[];
}

// ------------------------------------------------------------

export type CreateCategoryNodePayload = {
  parentId?: string;
  name: {
    lang: string;
    text: string;
  }[];
};

export type CreateCategoryNodeOutput = {
  data: {
    id: string;
    categoryId: string;
    name: string;
    enabled: boolean;
  };
};
