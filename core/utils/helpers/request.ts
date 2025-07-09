import { isRedirectError } from 'next/dist/client/components/redirect';
import { generateLanguage } from '@/shared/consts/common/language';
import { CustomNetworkError, NetworkMetadata } from '@/core/utils/errors/custom-network-error';
import { Logger } from '@/core/utils/helpers/Logger';
import { getClientLang, getClientUUID } from '@/core/utils/helpers/request-helper.client';
import { getServerLang, getServerUUID } from '@/core/utils/helpers/request-helper.server';
import { getSession } from '@/shared/configs/next-auth/next-auth.server';

enum Operation {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch',
  DELETE = 'delete',
}

type RequestConfig = RequestInit & {
  isBlob?: boolean; // Blob 응답을 처리하기 위한 옵션
  isText?: boolean; // 텍스트 응답을 처리하기 위한 옵션
};

const createHeaders = async (): Promise<HeadersInit> => {
  const isServer = typeof window === 'undefined';
  const uuid = isServer ? await getServerUUID() : getClientUUID();
  const lang = isServer ? await getServerLang() : getClientLang();
  const { currencyCode, languageCode, regionCode } = generateLanguage(lang);

  return {
    'X-Acon-St': uuid,
    'X-Acon-Language': languageCode.value,
    'X-Acon-Currency': currencyCode.name,
    'X-Acon-Region': regionCode.name,
  };
};

const request = async <T>(method: Operation, url: string, body?: unknown, config: RequestConfig = {}): Promise<T> => {
  const headers = await createHeaders();

  const isFile = body instanceof File;
  const isFormData = body instanceof FormData;
  const isBlob = config.isBlob ?? false;
  const isText = config.isText ?? false;

  let processedBody: BodyInit | undefined;
  if (isFile || isFormData) {
    processedBody = body as BodyInit;
  } else if (body) {
    processedBody = JSON.stringify(body);
  }

  const initialMetadata: NetworkMetadata<undefined> = {
    requestUrl: url,
    requestMethod: method,
    requestData: processedBody,
  };

  try {
    const response = await fetch(url, {
      method: method.toUpperCase(),
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: processedBody,
      ...config,
    });

    let responseBody = undefined;

    if (isBlob) {
      const blob = await response.blob();
      const contentDisposition = response.headers.get('Content-Disposition') ?? '';
      const matches = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);

      const filename = matches?.[1]?.replace(/['"]/g, '') ?? 'unknown_filename.xlsx';
      responseBody = { blob, filename } as unknown as T;
    } else if (isText) {
      const text = await response.text();
      responseBody = text as unknown as T; // 텍스트 응답 처리
    } else {
      responseBody = await response.json().catch(() => null); // JSON 파싱 실패 대비
    }

    if (!response.ok) {
      const metadata: NetworkMetadata<number> = {
        ...initialMetadata,
        responseStatus: response.status,
        responseBody,
      };
      throw new CustomNetworkError(response.status, `Request Failed: [${response.status} ${responseBody}]`, metadata);
    }
    return response.headers.get('content-length') === '0' ? ({} as T) : responseBody;
  } catch (error) {
    requestErrorHandler(error);
    throw error;
  }
};

const requestWithAuth = async <T>(method: Operation, url: string, body?: unknown, config: RequestConfig = {}): Promise<T> => {
  const session = await getSession();
  const headers = await createHeaders();

  const isFile = body instanceof File;
  const isFormData = body instanceof FormData;
  const isBlob = config.isBlob ?? false;
  const isText = config.isText ?? false;

  let processedBody: BodyInit | undefined;
  if (isFile || isFormData) {
    processedBody = body as BodyInit;
  } else if (body) {
    processedBody = JSON.stringify(body);
  }

  const initialMetadata: NetworkMetadata<undefined> = {
    requestUrl: url,
    requestMethod: method,
    requestData: processedBody,
  };

  try {
    if (!session) {
      // session은 반드시 존재하여야 함
      throw new Error(`Session Not Found - ${session}`);
    }

    if (!session.accessToken) {
      // access token은 반드시 존재하여야 함
      throw new Error(`accessToken Not Found - ${session.accessToken}`);
    }

    const response = await fetch(url, {
      method: method.toUpperCase(),
      headers: {
        // 변경 금지 - 멀티파트 업로드시 'Content-Type' 헤더 자동으로 세팅되려면 비어있어야함.
        ...(!isFormData ? { 'Content-Type': 'application/json' } : {}),
        ...headers,
        Authorization: `Bearer ${session.accessToken}`,
      },
      body: processedBody,
      ...config,
    });

    let responseBody = undefined;

    if (isBlob) {
      const blob = await response.blob();
      const contentDisposition = response.headers.get('Content-Disposition') ?? '';
      const matches = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);

      const filename = matches?.[1]?.replace(/['"]/g, '') ?? 'unknown_filename.xlsx';
      responseBody = { blob, filename } as unknown as T;
    } else if (isText) {
      const text = await response.text();
      responseBody = text as unknown as T; // 텍스트 응답 처리
    } else {
      responseBody = await response.json().catch(() => null);
      Response
    }

    if (!response.ok) {
      const metadata: NetworkMetadata<number> = {
        ...initialMetadata,
        responseStatus: response.status,
        responseBody,
      };
      throw new CustomNetworkError(response.status, `Request Failed: [${response.status} ${responseBody}]`, metadata);
    }
    return response.headers.get('content-length') === '0' ? ({} as T) : responseBody;
  } catch (error) {
    requestErrorHandler(error);
    throw error;
  }
};

const requestErrorHandler = (error: unknown) => {
  const logger = new Logger('RequestErrorHandler');
  if (error instanceof CustomNetworkError) {
    logger.error(`(${error.status}) ${error.name}
      ${error.message}
      [${error.metadata.requestMethod}] ${error.metadata.requestUrl}`);
    console.error('CustomNetworkError:', error.status, error.metadata);
  } else {
    console.error('Unexpected Error:', error);
    logger.error(`${error}`);
    if (isRedirectError(error)) {
      logger.error(`RedirectError`);
    }
  }
};

export { Operation, request, requestWithAuth, createHeaders };
