import { ISODateString } from 'next-auth';
import { IntAsNumber, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { LanguageCode } from '@/core/shared/service/enum/language-code';
import { AssetProductOutput } from '@/core/shared/service/output/asset-product-output';
import { LocalizeOutput } from '@/core/shared/service/output/localize-output';
import { ReviewFavoriteOutput } from '@/core/shared/service/output/review-favorite-output';
import { ReviewImageOutput } from '@/core/shared/service/output/review-image-output';
import { ReviewReplyOutput } from '@/core/shared/service/output/review-reply-output';
import { UserOutput } from '@/core/shared/service/output/user-output';

/** Admin에서 리뷰의 정보를 반환 */
export type ReviewAdminOutput = {
  /** ID */
  id: UUIDAsString;
  /** 평점 */
  rating: IntAsNumber;
  /** 리뷰가 작성 된 언어 */
  language: LanguageCode;
  /** 리뷰 내용(요청에 맞는 언어의 값으로 전달) */
  content: string;
  /** 다국어 정보 */
  localizes: Nullable<Array<LocalizeOutput>>;
  /** 작성자 정보 */
  user: UserOutput;
  /** 리뷰 이미지 (목록 조회에서는 필요 없어서 null 반환) */
  images: Nullable<Array<ReviewImageOutput>>;
  /** 관리자 댓글 (댓글이 없을 경우 빈배열 반환) */
  replies: Nullable<Array<ReviewReplyOutput>>;
  /** 좋아요 한 유저 목록 (목록 조회에서는 필요 없어서 null 반환) */
  favorites: Nullable<Array<ReviewFavoriteOutput>>;
  /** 에이콘 노출 여부 */
  isVisible: boolean;
  /** 베스트 리뷰 선정 여부 */
  isBest: boolean;
  /** 관리자 스크랩 여부 */
  isScrapped: boolean;
  /** 작성 시간 (UTC) */
  createdAt: ISODateString;
  /** 상품 정보 */
  product: Nullable<AssetProductOutput>;
};
