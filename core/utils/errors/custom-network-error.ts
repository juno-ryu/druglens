import { ISODateString } from 'next-auth';
import SuperJSON from 'superjson';

export interface BackendError {
  /** 호출 한 URI */
  path: string;
  /** Exception 종류 */
  status: string;
  /** 에러 메시지 */
  message: string;
  /** 에러 발생 시간 */
  timestamp: ISODateString;
}

export interface BackendError409 extends BackendError {
  exception: {
    /** Exception 클래스 이름 */
    name: string;
    /** Exception 패키지 이름 */
    type: string;
    /** 추가 데이터 */
    data?: Record<string, unknown>;
  };
}

export interface BackendError422 extends BackendError {
  errors: {
    /** 문제가 발생한 파라미터 이름 */
    field: string;
    /** 상세 메세지 */
    message: string;
    /** 필요한 type */
    code?: string;
    /** 전달 한 값 */
    value?: unknown;
  }[];
}

export type ResponseBodyByStatus<S extends number | undefined> =
  // 409
  S extends 409
    ? BackendError409
    : //  422
      S extends 422
      ? BackendError422
      : BackendError;

export interface NetworkMetadata<S extends number | undefined> {
  requestUrl: string;
  requestMethod: string;
  requestData: unknown;
  responseStatus?: S;
  responseBody?: ResponseBodyByStatus<S>;
}

export class CustomNetworkError<S extends number | undefined> extends Error {
  public status: S;
  public metadata: NetworkMetadata<S>;

  constructor(status: S, message: string, metadata: NetworkMetadata<S>) {
    super(message);
    this.name = 'CustomNetworkError';
    this.status = status;
    this.metadata = metadata;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomNetworkError);
    }
  }
}

export const serializeError = <S extends number | undefined>(error: CustomNetworkError<S>) => {
  return SuperJSON.stringify({
    name: error.name,
    message: error.message,
    status: error.status,
    metadata: error.metadata,
    stack: error.stack,
  });
};

export const deserializeError = <S extends number | undefined>(errorString: string): CustomNetworkError<S> => {
  const obj = SuperJSON.parse(errorString) as CustomNetworkError<S>;
  const error = new CustomNetworkError(obj.status, obj.message, obj.metadata);
  error.name = obj.name;
  error.stack = obj.stack;
  return error;
};
