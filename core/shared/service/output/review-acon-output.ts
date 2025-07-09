import { ISODateString } from 'next-auth';
import { IntAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { LanguageCode } from '@/core/shared/service/enum/language-code';
import { AssetProductOutput } from '@/core/shared/service/output/asset-product-output';
import { LocalizeOutput } from '@/core/shared/service/output/localize-output';
import { ReviewFavoriteOutput } from '@/core/shared/service/output/review-favorite-output';
import { ReviewImageOutput } from '@/core/shared/service/output/review-image-output';
import { ReviewReplyOutput } from '@/core/shared/service/output/review-reply-output';
import { ReviewUserAconOutput } from '@/core/shared/service/output/review-user-acon-output';

/** Acon에서 리뷰의 정보를 반환 */
export type ReviewAconOutput = {
  /** ID */
  id: UUIDAsString;
  /** 평점 */
  rating: IntAsNumber;
  /** 리뷰가 작성 된 언어 */
  language: LanguageCode;
  localizes: Nullable<Array<LocalizeOutput>>;
  /** 리뷰 내용(요청에 맞는 언어의 값으로 전달) */
  content: string;
  /** 작성자 정보 */
  user: ReviewUserAconOutput;
  /** 리뷰 이미지 (리뷰에 이미지가 없으면 빈배열 반환) */
  images: Nullable<Array<ReviewImageOutput>>;
  /** 관리자 댓글 (댓글이 없을 경우 빈배열 반환) */
  replies: Nullable<Array<ReviewReplyOutput>>;
  /** 좋아요 한 유저 목록 (좋아요 한 유저가 없을 경우 빈배열 반환 */
  favorites: Nullable<Array<ReviewFavoriteOutput>>;
  /** 베스트 리뷰 선정 여부 */
  isBest: boolean;
  /** 작성 시간 (UTC) */
  createdAt: ISODateString;
  product: Nullable<AssetProductOutput>;
};
