import { Operation, request, requestWithAuth } from '@/core/utils/helpers/request';
import { HUB_URIS } from '@/core/shared/service/hub/hub.const';

/** @apis organizations (조직) */
const ORGANIZATIONS_APIS = {
  ['organizations']: {
    post: async (data: any) => {
      const { uri } = HUB_URIS['organizations']();
      return await requestWithAuth<any>(Operation.POST, uri, data);
    },
  },
};

export default ORGANIZATIONS_APIS;
