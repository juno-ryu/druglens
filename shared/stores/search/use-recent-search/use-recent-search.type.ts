export type TypeKeywordStructure = {
  key: string;
  date: Date;
};

export type TypeRecentSearchStore = TypeRecentSearchState & TypeRecentSearchAction;
export type TypeRecentSearchState = {
  keywords: Map<TypeKeywordStructure['key'], TypeKeywordStructure>;
};
export type TypeRecentSearchAction = {
  keywordActions: {
    setKeywords: (keywords: TypeRecentSearchState['keywords']) => void;
    updateKeyword: (keyword: TypeKeywordStructure['key']) => void;
    deleteKeyword: (keyword: TypeKeywordStructure['key']) => void;
    resetKeywords: () => void;
  };
};
