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
    // ::NOTE:: The Persist Store does not need to be initialized
    setKeywords: (keywords: TypeRecentSearchState['keywords']) => void;
    updateKeyword: (keyword: TypeKeywordStructure['key']) => void;
    deleteKeyword: (keyword: TypeKeywordStructure['key']) => void;
    resetKeywords: () => void;
  };
};
