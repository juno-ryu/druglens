const BASE_URL = `${process.env.NEXT_PUBLIC_MOCK_URI ?? ''}`;
const BASE_SERVICE = 'mock';

export type EnumMockURI = (typeof EnumMockURI)[keyof typeof EnumMockURI];
export const EnumMockURI = {
  /** @apis search */
  ['search/popular-keyword']: () => ({
    uri: `${BASE_URL}/search/popular-keyword`,
    tag: `${BASE_SERVICE}/search/popular-keyword`,
  }),
  ['search/search-keyword']: () => ({
    uri: `${BASE_URL}/search/search-keyword`,
    tag: `${BASE_SERVICE}/search/search-keyword`,
  }),
} as const;
