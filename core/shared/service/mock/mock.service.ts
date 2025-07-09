import { ISODateString } from 'next-auth';
import { GetSearchPopularKeywordData, GetSearchSearchKeywordData } from '@/core/shared/service/mock/types/search';
import { Operation, request } from '@/core/utils/helpers/request';
import { EnumMockURI } from '@/core/shared/service/mock/mock.const';

const MOCK_APIS = {
  /** @apis search */
  ['search/popular-keyword']: {
    get: (data: GetSearchPopularKeywordData) => {
      const { uri, tag } = EnumMockURI['search/popular-keyword']();
      return request<{ createdAt: ISODateString; keywords: Array<{ name: string; rank: 'increased' | 'unchanged' | 'decreased' }> }>(Operation.GET, uri, undefined, {
        // next: { tags: [tag] },
      });
    },
  },
  ['search/search-keyword']: {
    get: (params: GetSearchSearchKeywordData) => {
      const { uri, tag } = EnumMockURI['search/search-keyword']();
      return request<{ brand: Array<{ id: string; name: string }>; keywords: Array<{ name: string }> }>(Operation.GET, uri, undefined, {
        // next: { tags: [tag] },
      });
    },
  },
};

export default MOCK_APIS;
