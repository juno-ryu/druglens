import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { onLocalStorage } from '@/core/utils/storage/local-storage';
import { createRecentSearchSlice, RECENT_SEARCH_KEY } from '@/shared/stores/search/use-recent-search/use-recent-search.const';
import { TypeRecentSearchState, TypeRecentSearchStore } from '@/shared/stores/search/use-recent-search/use-recent-search.type';

export const recentSearchStorage = onLocalStorage<TypeRecentSearchState>();

export const useRecentSearchStore = create<TypeRecentSearchStore>()(
  persist((...a) => ({ ...createRecentSearchSlice(...a) }), {
    name: RECENT_SEARCH_KEY,
    storage: recentSearchStorage,
    partialize: (state) => ({ keywords: state.keywords }),
  }),
);
