import DEEPL_TRANSLATE_APIS from '@/core/shared/service/api/service/deepl-translate.service';
import FETCH_METADATA_APIS from '@/core/shared/service/api/service/fetch-metadata.service';
import IDENTITY_DANAL_APIS from '@/core/shared/service/api/service/identity-danal.service';

const API_APIS = {
  /** @apis fetch-metadata */
  ...FETCH_METADATA_APIS,
  /** @apis deepl-translate */
  ...DEEPL_TRANSLATE_APIS,
  /** @apis identity-danal */
  ...IDENTITY_DANAL_APIS,
};

export default API_APIS;
