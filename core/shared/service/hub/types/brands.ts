import { LanguageCode } from '@/core/shared/service/enum/language-code';
import { CreateBrandInput } from '@/core/shared/service/input/brand-input/create-brand-input';
import { CreateBrandSettleInput } from '@/core/shared/service/input/brand-input/create-brand-settle-input';
import { LanguageSet } from '@/core/shared/service/input/common/language-set';
import { PageableInput } from '@/core/shared/service/input/common/pageable';
import { SortInput } from '@/core/shared/service/input/common/sort';

export interface BrandsSearchFilter extends PageableInput, SortInput {
  //
}

export type PostBrandIdIntroducePayload = {
  language: LanguageCode;
  introduce: Array<LanguageSet>;
};

export type PostBrandIdReapplyPayload = {
  brand: CreateBrandInput;
  settle: CreateBrandSettleInput;
};

export type PostBrandWithSettlePayload = {
  brand: CreateBrandInput;
  settle: CreateBrandSettleInput;
};

export type PostBrandIdSettlesPayload = CreateBrandSettleInput & {
  //
};
