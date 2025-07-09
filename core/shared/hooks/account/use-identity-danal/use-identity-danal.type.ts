import { IdentityFinallyOutput, IdentityReadyPayload } from '@/core/shared/service/api/type/identity-danal';

export type TypeIdentityOptions = {
  size?: { width: number; height: number };
  readyOptions?: IdentityReadyPayload;
  onFinally?: (event: MessageEvent, data: IdentityFinallyOutput) => void;
};
