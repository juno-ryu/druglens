import { BooleanAsString, UUIDAsString } from '@/core/utils/types/overridable/primitive';
import { Operation, request, requestWithAuth } from '@/core/utils/helpers/request';
import { InitOutputData, UploadedPart } from '@/core/utils/helpers/uploader';
import { COMMON_URIS } from '@/core/shared/service/common/common.const';
import { PostConfirmEmailVerifyCodePayload, PostSendEmailVerifyCodePayload } from '@/core/shared/service/common/type/auth';
import {
  GetCheckAlreadySocialLogin,
  PatchChangePasswordPayload,
  PostCheckMatchPasswordPayload,
  PostResetPasswordPayload,
  PostSendPasswordResetPayload,
  PostStorePasswordPayload,
  PostWithdrawalPayload,
} from '@/core/shared/service/common/type/auths';
import { EditorUploadImagePayload } from '@/core/shared/service/common/type/editor';
import { CheckoutCompleteInput } from '@/core/shared/service/input/checkout-complete-input';
import { ApplicationOutput } from '@/core/shared/service/output/application-output';
import { BrandStatusCountOutput } from '@/core/shared/service/output/brand-output/brand-status-count-output';
import { CategoryNodeOutput } from '@/core/shared/service/output/category-node-output';
import { ExtensionOutput } from '@/core/shared/service/output/extension-output';
import { ImageOutput } from '@/core/shared/service/output/image-output';
import { TagOutput } from '@/core/shared/service/output/tag-output';
import { UploadPresignedOutput } from '@/core/shared/service/output/upload-presigned-putput';

const COMMON_APIS = {
  /** @apis auth (인증 공통) */
  /** @apis send-email-verify-code (이메일 인증 코드 발송) */
  ['auth/send-email-verify-code']: {
    post: async (payload: PostSendEmailVerifyCodePayload) => {
      const { uri } = COMMON_URIS['auth/send-email-verify-code']();
      return request<{ data: BooleanAsString }>(Operation.POST, uri, payload);
    },
  },
  /** @apis confirm-email-verify-code (이메일 인증 코드 확인) */
  ['auth/confirm-email-verify-code']: {
    post: async (payload: PostConfirmEmailVerifyCodePayload) => {
      const { uri } = COMMON_URIS['auth/confirm-email-verify-code']();
      return request<{ data: BooleanAsString }>(Operation.POST, uri, payload);
    },
  },

  /** @apis auths (인증) */
  /** @apis auths/check-has-password (비밀번호 등록 여부 확인) */
  ['auths/check-has-password']: {
    get: async () => {
      const { uri } = COMMON_URIS['auths/check-has-password']();
      return requestWithAuth<{ data: boolean }>(Operation.GET, uri, undefined);
    },
  },
  /** @apis auths/change-password (비밀번호 변경) */
  ['auths/change-password']: {
    patch: async (payload: PatchChangePasswordPayload) => {
      const { uri } = COMMON_URIS['auths/change-password']();
      return requestWithAuth<{ data: BooleanAsString }>(Operation.PATCH, uri, payload);
    },
  },
  /** @apis auths/check-already-social-login (소셜 로그인 가입 여부 확인) */
  ['auths/check-already-social-login']: {
    get: async (payload: GetCheckAlreadySocialLogin) => {
      const { uri } = COMMON_URIS['auths/check-already-social-login'](payload);
      return await request<{ data: BooleanAsString }>(Operation.GET, uri, undefined);
    },
  },
  /** @apis auths/check-match-password (비밀번호 확인) */
  ['auths/check-match-password']: {
    post: async (payload: PostCheckMatchPasswordPayload) => {
      const { uri } = COMMON_URIS['auths/check-match-password']();
      return requestWithAuth<{ data: BooleanAsString }>(Operation.POST, uri, payload);
    },
  },
  /** @apis auths/reset-password (비밀번호 재설정) */
  ['auths/reset-password']: {
    post: async (payload: PostResetPasswordPayload) => {
      const { uri } = COMMON_URIS['auths/reset-password']();
      return request<{ data: BooleanAsString }>(Operation.POST, uri, payload);
    },
  },
  /** @apis auths/send-password-reset (비밀번호 재설정 메일 발송) */
  ['auths/send-password-reset']: {
    post: async (payload: PostSendPasswordResetPayload) => {
      const { uri } = COMMON_URIS['auths/send-password-reset']();
      return request<{ data: BooleanAsString }>(Operation.POST, uri, payload);
    },
  },
  /** @apis auths/store-password (비밀번호 등록) */
  ['auths/store-password']: {
    post: async (payload: PostStorePasswordPayload) => {
      const { uri } = COMMON_URIS['auths/store-password']();
      return requestWithAuth<{ data: BooleanAsString }>(Operation.POST, uri, payload);
    },
  },
  /** @apis auths/withdrawal (회원 탈퇴) */
  ['auths/withdrawal']: {
    post: async (payload: PostWithdrawalPayload) => {
      const { uri } = COMMON_URIS['auths/withdrawal']();
      return requestWithAuth<{ data: BooleanAsString }>(Operation.POST, uri, payload);
    },
  },

  /** @apis brands (브랜드)*/
  ['brands']: {
    get: async () => {
      const { uri, tag } = COMMON_URIS['brands']();
      return await requestWithAuth<{ data: BrandStatusCountOutput }>(Operation.GET, uri, undefined, { next: { tags: [tag] } });
    },
  },

  /** @apis applications (프로그램) */
  ['applications']: {
    get: async () => {
      const { uri } = COMMON_URIS['applications']();
      return await request<{ data: ApplicationOutput[] }>(Operation.GET, uri, undefined, { cache: 'force-cache' });
    },
  },

  /** @apis extensions (확장자) */
  ['extensions']: {
    get: async () => {
      const { uri } = COMMON_URIS['extensions']();
      return await request<{ data: ExtensionOutput[] }>(Operation.GET, uri, undefined, { cache: 'force-cache' });
    },
  },

  /** @apis category (카테고리) */
  ['category']: {
    get: async (code: string) => {
      const { uri, tag } = COMMON_URIS['category'](code);
      return await request<{ data: CategoryNodeOutput[] }>(Operation.GET, uri, undefined, { next: { tags: [tag] } });
    },
  },
  ['category/node/:categoryNodeId']: {
    get: async (categoryNodeId: string) => {
      const { uri } = COMMON_URIS['category/node/:categoryNodeId'](categoryNodeId);
      return await request<{ data: CategoryNodeOutput }>(Operation.GET, uri, undefined, { cache: 'force-cache' });
    },
  },

  /** @apis checkout/:orderId/complete (결제 완료) */
  ['checkout/:orderId/complete']: {
    post: async (orderId: UUIDAsString, payload: Pick<CheckoutCompleteInput, 'contact' | 'deposit' | 'mileage' | 'payment'>) => {
      const { uri } = COMMON_URIS['checkout/:orderId/complete'](orderId);
      return await requestWithAuth(Operation.POST, uri, payload);
    },
  },

  /** @apis s3-single-upload (5MB 미만 파일업로드) */
  ['upload/presigned']: {
    post: async (clientname: string) => {
      const { uri } = COMMON_URIS['upload/presigned']();
      return await requestWithAuth<{ data: UploadPresignedOutput }>(Operation.POST, uri, { clientname });
    },
    put: async (signedUrl: string, file: File) => {
      // signURl 을 받아서 파일을 업로드한다.
      const uri = signedUrl;
      return await request(Operation.PUT, uri, file, { headers: { 'Content-Type': file.type } });
    },
  },

  /** @apis s3-multipart-upload (5MB 이상 파일업로드) */
  ['multipart-upload/init']: {
    post: async (fileName: string, partCount: number) => {
      const { uri } = COMMON_URIS['multipart-upload/init']();
      return await requestWithAuth<{ data: InitOutputData }>(Operation.POST, uri, { clientname: fileName, partCount: partCount });
    },
  },
  ['multipart-upload/complete']: {
    post: async (fileKey: string, uploadId: string, parts: UploadedPart[]) => {
      const { uri } = COMMON_URIS['multipart-upload/complete']();
      return await requestWithAuth<void>(Operation.POST, uri, { fileKey: fileKey, uploadId: uploadId, parts: parts });
    },
  },

  /** @apis editor (에디터 이미지 업로드) */
  ['editor/upload-image']: {
    post: async (payload: EditorUploadImagePayload) => {
      const { uri } = COMMON_URIS['editor/upload-image']();
      const formData = new FormData();
      formData.append('file', payload.file);
      return requestWithAuth<{ data: ImageOutput }>(Operation.POST, uri, formData);
    },
  },

  /** @apis asssets (에셋)*/
  ['assets/:assetId/download-url']: {
    post: async (assetId: string) => {
      const { uri } = COMMON_URIS['assets/:assetId/download-url'](assetId);
      return requestWithAuth<{ data: Record<UUIDAsString, string> }>(Operation.POST, uri);
    },
  },

  /** @apis tag (태그) */
  ['tag/ac']: {
    get: async (text: string) => {
      const { uri } = COMMON_URIS['tag/ac'](text);
      return await request<{ data: TagOutput[] }>(Operation.GET, uri);
    },
  },
  ['tag/pick']: {
    get: async (ids: string[]) => {
      const { uri } = COMMON_URIS['tag/pick'](ids);
      return await request<{ data: TagOutput[] }>(Operation.GET, uri);
    },
  },
};

export default COMMON_APIS;
