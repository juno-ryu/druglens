import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/api/api.common';

/** @apis deepl-translate */
export const DEEPL_TRANSLATE_URIS = {
  ['deepl-translate']: {
    uri: `${BASE_URL}/translate`,
    tag: `${BASE_SERVICE}/translate`,
  },
} as const;
