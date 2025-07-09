import { DEEPL_TRANSLATE_URIS } from '@/core/shared/service/api/consts/deepl-translate.const';
import { FETCH_METADATA_URIS } from '@/core/shared/service/api/consts/fetch-metadata.const';
import { IDENTITY_DANAL_URIS } from '@/core/shared/service/api/consts/identity-danal.const';

export type EnumApiURI = (typeof API_URIS)[keyof typeof API_URIS];
export const API_URIS = {
  /** @apis fetch-metadata */
  ...FETCH_METADATA_URIS,
  /** @apis deepl-translate */
  ...DEEPL_TRANSLATE_URIS,
  /** @apis identity-danal */
  ...IDENTITY_DANAL_URIS,
} as const;
