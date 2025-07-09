import { EnumLanguageCode } from '@/shared/consts/common/language';
import { Operation, request } from '@/core/utils/helpers/request';
import { ACON_URIS } from '@/core/shared/service/acon/acon.const';

/** @apis policy (정책 화면) */
const POLICY_APIS = {
  /** @apis get 이용약관 */
  ['policy/terms']: {
    get: async (lang: EnumLanguageCode) => {
      const { uri, tag } = ACON_URIS['policy/terms'](lang);
      return await request<string>(Operation.GET, uri, undefined, {
        isText: true,
      });
    },
  },
  ['policy/privacy']: {
    get: async (lang: EnumLanguageCode) => {
      const { uri, tag } = ACON_URIS['policy/privacy'](lang);
      return await request<string>(Operation.GET, uri, undefined, {
        isText: true,
      });
    },
  },
  ['policy/eula']: {
    get: async (lang: EnumLanguageCode) => {
      const { uri, tag } = ACON_URIS['policy/eula'](lang);
      return await request<string>(Operation.GET, uri, undefined, {
        isText: true,
      });
    },
  },
};

export default POLICY_APIS;
