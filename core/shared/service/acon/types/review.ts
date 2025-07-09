import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { LanguageCode } from '@/core/shared/service/enum/language-code';
import { PageableInput } from '@/core/shared/service/input/common/pageable';
import { SortInput } from '@/core/shared/service/input/common/sort';
import { ReviewAconFilterInput } from '@/core/shared/service/input/review-acon-filter-input';

export type ReviewSearchFilter = ReviewAconFilterInput & PageableInput & SortInput;

export type PostProductReviewPayload = {
  content: {
    lang: LanguageCode;
    text: string;
  };
  rating: number;
  imageIds?: Nullable<Array<UUIDAsString>>;
};

export type ReviewUploadImagePayload = {
  file: File;
};
