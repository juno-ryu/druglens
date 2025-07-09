import { Dayjs } from 'dayjs';
import { PutProductAssetsDetailInput } from '@/core/shared/service/admin/types/product';
import { LongAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { StockInput } from '@/core/shared/service/input/asset-product-input/stock-input';
import { ProductImageInput } from '@/core/shared/service/input/product-input/product-image-input';
import { AssetProductCopyrightOutput } from '@/core/shared/service/output/asset-product-copyright-output';
import { AssetProductStockAssetOutput } from '@/core/shared/service/output/asset-product-stock-asset-output';
import { ProductImageOutput } from '@/core/shared/service/output/product-image-output';

export enum EnumCategoryCode {
  PRODUCT_GENRE = 'product-genre',
  PRODUCT = 'product',
}
export type NoticeType = 'notice' | 'guide' | 'event' | 'tip';

export type NoticesType = {
  id: number;
  type: NoticeType;
  title: string;
  date: Dayjs;
};

export enum ChangeProductStatus {
  START_REVIEW = 'start-review',
  REJECT_REVIEW = 'reject-review',
  DENIED_REVIEW = 'denied-review',
  APPROVE_REVIEW = 'approve-review',
  // PUBLISH = 'publish',
  SUSPEND = 'suspend',
  RESUME = 'resume',
}

export interface ProductImageCombined extends ProductImageInput {
  // input과 output의 모든 필드는 nullable이다.
  // isMain은 항상 필수이다.
  mime: Nullable<ProductImageOutput['mime']>;
  size: Nullable<ProductImageOutput['size']>;
  url: Nullable<ProductImageOutput['url']>;
}

// export interface ProductStockCombined extends StockInput {
//   assets: Nullable<Array<AssetProductStockAssetOutput>>;
// }

export type ProductFormValues = Omit<PutProductAssetsDetailInput, 'images'> & {
  copyright: AssetProductCopyrightOutput;
  images: ProductImageCombined[];
  // stocks: ProductStockCombined[];
};
