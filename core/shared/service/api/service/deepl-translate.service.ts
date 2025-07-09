import { EnumLanguageCode } from '@/shared/consts/common/language';
import { Operation, request, requestWithAuth } from '@/core/utils/helpers/request';
import { API_URIS } from '@/core/shared/service/api/api.const';

/** @apis deepl-translate */
const DEEPL_TRANSLATE_APIS = {
  ['deepl-translate']: {
    post: async <Result>(text: string | string[], lang: EnumLanguageCode, isEditor: boolean) => {
      const { uri } = API_URIS['deepl-translate'];
      return await request<Result>(Operation.POST, uri, { text, lang, isEditor });
    },
  },
};

export default DEEPL_TRANSLATE_APIS;
