import { EnumGrantField, EnumOrderItemStatus, EnumOrderLicense, EnumPeriodField, OrdersSearchFilter } from '@/core/shared/service/hub/types/orders';
import { transformQueryUri } from '@/core/utils/helpers/transform-uri';
import { BASE_SERVICE, BASE_URL } from '@/core/shared/service/hub/hub.common';

/** @apis orders (판매 내역) */
export const ORDERS_URIS = {
  ['orders']: (searchFilter?: OrdersSearchFilter) => {
    const formattedSearchFilter = structuredClone({
      ...(searchFilter ?? {}),
      ...(searchFilter?.periodField === EnumPeriodField.ALL && { periodField: null }),
      ...(searchFilter?.grantField === EnumGrantField.ALL && { grantField: null }),
      ...(searchFilter?.status === EnumOrderItemStatus.ALL && { status: null }),
      ...(searchFilter?.license === EnumOrderLicense.ALL && { license: null }),
    });
    return {
      uri: transformQueryUri(`${BASE_URL}/orders`, formattedSearchFilter ?? {}),
      tag: `${BASE_SERVICE}/orders`,
      filter: transformQueryUri('', formattedSearchFilter ?? {}),
    };
  },
} as const;
