import { ISODateString } from 'next-auth';
import { UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { CsStatus } from '@/core/shared/service/enum/cs-status';
import { CategoryNodeOutput } from '@/core/shared/service/output/category-node-output';
import { CsAnswerAdminOutput } from '@/core/shared/service/output/cs-answer-admin-output';
import { CsInquiryGrantOutput } from '@/core/shared/service/output/cs-inquiry-grant-output';
import { CsInquiryOrderOutput } from '@/core/shared/service/output/cs-inquiry-order-output';
import { MemoOutput } from '@/core/shared/service/output/memo-output';
import { UserOutput } from '@/core/shared/service/output/user-output';

/** 어드민에서 1:1 문의하기 정보를 반환 */
export type CsInquiryAdminOutput = {
  /** ID */
  id: UUIDAsString;
  /** 유저 정보 */
  user: Nullable<UserOutput>;
  /** 이메일 */
  email: string;
  /** 상태 */
  status: CsStatus;
  /** 문의 유형(카테고리) 정보 */
  categoryNode: Nullable<CategoryNodeOutput>;
  /** 답변 정보 */
  answers: Nullable<Array<CsAnswerAdminOutput>>;
  /** 문의 주문 정보 */
  inquiryOrders: Nullable<Array<CsInquiryOrderOutput>>;
  /** 라이센스 정보 */
  inquiryGrant: Nullable<CsInquiryGrantOutput>;
  /** 메모 */
  memos: Nullable<Array<MemoOutput>>;
  /** 생성일 */
  createdAt: ISODateString;
  /** 문의 내용 */
  content: string;
};
