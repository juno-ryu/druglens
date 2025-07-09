import { useShallow } from 'zustand/react/shallow';
import { useRecentSearchStore } from '@/shared/stores/search/use-recent-search/use-recent-search.store';

export const useRecentSearchState = () =>
  useRecentSearchStore(
    useShallow((state) => ({
      keywords: state.keywords,
    })),
  );

export const useRecentSearchActions = () => useRecentSearchStore((state) => state.keywordActions);
