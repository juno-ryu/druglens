import { TypeSearchBarForm } from '@/shared/atom-components/form/search-bar/search-bar.type';
import { TypeKeywordStructure, TypeRecentSearchState } from '@/shared/stores/search/use-recent-search/use-recent-search.type';

export interface SearchKeywordRecentProps extends React.HTMLAttributes<HTMLDivElement> {
  headlineText: string;
  highlight: TypeSearchBarForm['keyword'];
  data?: TypeRecentSearchState['keywords'];
  onReset?: () => void;
  onDelete?: (keyword: TypeKeywordStructure['key']) => void;
  makeItemLink?: (string: string) => string;
}

// ::TODO:: data type
export interface SearchKeywordAutoCompleteProps extends React.HTMLAttributes<HTMLDivElement> {
  headlineText: string;
  highlight: TypeSearchBarForm['keyword'];
  // data?: Awaited<ReturnType<(typeof MOCK_APIS)['search/search-keyword']['get']>>[keyof Awaited<ReturnType<(typeof MOCK_APIS)['search/search-keyword']['get']>>];
  data?: any[];
  makeItemLink?: (string: string) => string;
}
