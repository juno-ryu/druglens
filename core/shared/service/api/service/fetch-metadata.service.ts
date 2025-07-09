import { Operation, request, requestWithAuth } from '@/core/utils/helpers/request';
import { API_URIS } from '@/core/shared/service/api/api.const';

/** @apis fetch-metadata */
const FETCH_METADATA_APIS = {
  ['fetch-metadata']: {
    get: async (url: string) => {
      const { uri } = API_URIS['fetch-metadata']();
      const params = new URLSearchParams({ url });
      return await request<{ data: Record<string, string> }>(Operation.GET, `${uri}?${params.toString()}`);
    },
  },
};

export default FETCH_METADATA_APIS;
