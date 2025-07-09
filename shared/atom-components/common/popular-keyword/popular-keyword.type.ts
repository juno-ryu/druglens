import { SxProps } from '@mui/material';
import { FlickingOptions, FlickingProps } from '@egjs/react-flicking';
import MOCK_APIS from '@/core/shared/service/mock/mock.service';

export interface PopularKeywordProps extends React.HTMLAttributes<HTMLDivElement> {
  dropdownStyle?: SxProps;
}

// ::TODO:: data type
export interface PopularKeywordFlickingProps extends React.HTMLAttributes<HTMLDivElement> {
  options?: Partial<FlickingProps & FlickingOptions>;
  data?: Awaited<ReturnType<(typeof MOCK_APIS)['search/popular-keyword']['get']>>;
}

// ::TODO:: data type
export interface PopularKeywordScoreBoardProps extends React.HTMLAttributes<HTMLDivElement> {
  headlineText: string;
  data?: Awaited<ReturnType<(typeof MOCK_APIS)['search/popular-keyword']['get']>>;
}
