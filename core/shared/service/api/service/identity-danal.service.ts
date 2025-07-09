import { Nullable } from '@/core/utils/types/selector/flexible';
import { Operation, request, requestWithAuth } from '@/core/utils/helpers/request';
import { API_URIS } from '@/core/shared/service/api/api.const';
import { IdentityFinallyOutput, IdentityReadyPayload } from '@/core/shared/service/api/type/identity-danal';

/** @apis identity-danal */
const IDENTITY_DANAL_APIS = {
  ['identity-danal/ready']: {
    get: async (options?: IdentityReadyPayload) => {
      const { uri } = API_URIS['identity-danal/ready'](options);
      return await request<{ data: string }>(Operation.GET, uri);
    },
  },
  ['identity-danal/finally']: {
    get: async (options?: IdentityReadyPayload) => {
      const { uri } = API_URIS['identity-danal/finally'](options);
      return await request<{ data: Nullable<IdentityFinallyOutput> }>(Operation.GET, uri);
    },
  },
};

export default IDENTITY_DANAL_APIS;
