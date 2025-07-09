import { useRef } from 'react';
import { debounce } from 'lodash';
import { TypeResizeOptions } from '@/core/shared/hooks/display/use-resize/use-resize.type';

const useResize = (options?: TypeResizeOptions) => {
  // refs
  const isInitializedRef = useRef<boolean>(false);
  const observerRef = useRef<ResizeObserver | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // events
  const onInit = () => {
    if (isInitializedRef.current) return;
    const io = new ResizeObserver(
      debounce((entries) => {
        if (!isInitializedRef.current) {
          isInitializedRef.current = true;
          options?.onInit?.({ entries });
        } else {
          options?.onResize?.({ entries });
        }
      }, options?.debounce ?? 100),
    );
    io.observe(containerRef?.current ?? document?.body);
    observerRef.current = io;
  };

  const onRemove = () => {
    if (!isInitializedRef.current) return;
    isInitializedRef.current = false;
    options?.onRemove?.();
    observerRef?.current?.disconnect?.();
  };

  return {
    resizeRef: {
      isInitializedRef,
      containerRef,
      observerRef,
    },
    resizeInit: onInit,
    resizeRemove: onRemove,
  };
};

export default useResize;
