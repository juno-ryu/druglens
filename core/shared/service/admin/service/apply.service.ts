import { ApplyOutput } from '@/core/shared/service/admin/types/apply';
import { Operation, request, requestWithAuth } from '@/core/utils/helpers/request';
import { ADMIN_URIS } from '@/core/shared/service/admin/admin.const';

/** @apis apply (관리자 등록) */
const APPLY_APIS = {
  ['apply']: {
    post: async () => {
      const { uri } = ADMIN_URIS['apply']();
      return await requestWithAuth<ApplyOutput>(Operation.POST, uri);
    },
  },
};

export default APPLY_APIS;
