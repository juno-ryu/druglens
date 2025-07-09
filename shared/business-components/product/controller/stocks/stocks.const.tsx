import { groupBy } from 'lodash';

export const groupByAssetIds = <T extends { assetIds: string[] }>(data: T[]): Record<string, T[]> => {
  return groupBy(data, (item) => item.assetIds.sort().join('/'));
};
