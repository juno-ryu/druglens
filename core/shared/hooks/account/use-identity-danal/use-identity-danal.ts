'use client';

import { useEffect } from 'react';
import { IDENTITY_CHANNEL_CHANNEL_KEY } from '@/core/shared/hooks/account/use-identity-danal/use-identity-danal.const';
import { TypeIdentityOptions } from '@/core/shared/hooks/account/use-identity-danal/use-identity-danal.type';
import API_APIS from '@/core/shared/service/api/api.service';

const useIdentityDanal = (options?: TypeIdentityOptions) => {
  const { size, readyOptions, onFinally } = options ?? {};

  const makeSize = () => {
    const width = size?.width ?? 440;
    const height = size?.height ?? 720;

    return {
      width,
      height,
      top: (window.outerHeight - height) / 2,
      left: (window.outerWidth - width) / 2,
    };
  };

  const onReady = async () => {
    const { width, height, top, left } = makeSize();
    const newWindow = window.open('about:blank', '', `height=${height},width=${width},location=no,status=yes,dependent=no,scrollbars=yes,resizable=yes,top=${top},left=${left}`);
    if (!newWindow) return alert('팝업이 차단되었습니다.');

    const response = await API_APIS['identity-danal/ready'].get(readyOptions);
    const parser = new DOMParser();
    const doc = parser.parseFromString(response.data, 'text/html');
    const originalForm = doc.querySelector('form');

    if (originalForm) {
      const newForm = originalForm.cloneNode(true) as HTMLFormElement;
      newWindow.document.body.appendChild(newForm);
      newForm.submit();
      newWindow.focus();
    }
  };

  const onMessage = async (event: MessageEvent) => {
    const response = await API_APIS['identity-danal/finally'].get(readyOptions);
    if (!response.data) return;
    onFinally?.(event, response.data);
  };

  useEffect(() => {
    const channel = new BroadcastChannel(IDENTITY_CHANNEL_CHANNEL_KEY);
    channel.onmessage = onMessage;
    return () => {
      channel.close();
    };
  }, []);

  return {
    onReady,
  };
};

export default useIdentityDanal;
