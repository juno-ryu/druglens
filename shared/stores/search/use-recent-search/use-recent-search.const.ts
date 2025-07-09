import { StateCreator } from 'zustand';
import { TypeKeywordStructure, TypeRecentSearchAction, TypeRecentSearchState } from '@/shared/stores/search/use-recent-search/use-recent-search.type';

export const RECENT_SEARCH_KEY = 'admin-recent-search';
export const RECENT_SEARCH_MAX_LENGTH = 10;

export const INITIAL_RECENT_SEARCH_STATE = {
  keywords: new Map<TypeKeywordStructure['key'], TypeKeywordStructure>([]),
};

export const createRecentSearchSlice: StateCreator<TypeRecentSearchState & TypeRecentSearchAction> = (set) => ({
  ...INITIAL_RECENT_SEARCH_STATE,
  keywordActions: {
    setKeywords: (value) => set(() => ({ keywords: new Map([...value]) })),
    resetKeywords: () => set(() => ({ keywords: new Map([]) })),
    updateKeyword: (value) =>
      set((state) => {
        const result = new Map([...state.keywords]);
        if (result.has(value)) result.delete(value);
        result.set(value, { key: value, date: new Date() });
        if (result.size > RECENT_SEARCH_MAX_LENGTH) result.delete(result.keys().next().value!);
        return { keywords: result };
      }),
    deleteKeyword: (value) =>
      set((state) => {
        const result = new Map([...state.keywords]);
        result.delete(value);
        return { keywords: result };
      }),
  },
});
