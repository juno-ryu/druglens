'use client';

import { useEffect, useRef, useState } from 'react';
import { INITIAL_STRUCTURE, TOUCH_OBSERVE, TouchOptions, TouchStructure } from '@/core/shared/hooks/display/use-touch/use-touch.type';

const useTouch = (options?: TouchOptions) => {
  // options
  const observeTypes = options?.observeTypes ?? [TOUCH_OBSERVE.MOUSE, TOUCH_OBSERVE.TOUCH];
  const observeMouse = observeTypes.includes(TOUCH_OBSERVE.MOUSE);
  const observeTouch = observeTypes.includes(TOUCH_OBSERVE.TOUCH);

  // refs
  const containerRef = useRef<HTMLDivElement | null>(null);
  const childRef = useRef<HTMLDivElement | null>(null);
  const escapeRef = useRef<HTMLDivElement | null>(null);

  // states
  const [structure, setStructure] = useState<TouchStructure>(INITIAL_STRUCTURE);

  // events
  const onTouchStart = (e: TouchEvent | MouseEvent) => {
    const target = e?.target as HTMLDivElement;

    if (!containerRef.current) return;
    if (escapeRef.current?.contains(target)) return;
    if (e.cancelable) e.preventDefault();

    childRef.current = containerRef.current?.isEqualNode(target) ? null : target;

    setStructure((prev) => {
      if (!containerRef.current) return INITIAL_STRUCTURE;

      const currentTouch = e instanceof TouchEvent ? e.touches?.[0] : e;
      const touchX = currentTouch.clientX;
      const touchY = currentTouch.clientY;

      const { transform } = window.getComputedStyle(containerRef.current);

      const initialTransform = [0, 0, 0, 0, 0, 0];
      const [a, b, c, d, transformX, transformY] = (transform.match(/(-?[0-9.]+)/g) || initialTransform).map(Number);

      const { clientWidth, clientHeight, scrollWidth, scrollHeight } = containerRef.current;
      return {
        ...prev,
        isScrambled: true,
        isTouched: true,
        start: { touchX, touchY, transformX, transformY },
        container: { clientWidth, clientHeight, scrollWidth, scrollHeight, scrollX: Math.max(scrollWidth - clientWidth, 0), scrollY: Math.max(scrollHeight - clientHeight, 0) },
      };
    });
    if (observeMouse) document.addEventListener('mousemove', onTouchMove);
    if (observeMouse) document.addEventListener('mouseup', onTouchEnd, { once: true });
    if (observeTouch) document.addEventListener('touchmove', onTouchMove, { passive: false });
    if (observeTouch) document.addEventListener('touchend', onTouchEnd, { once: true });
  };

  const onTouchMove = (e: TouchEvent | MouseEvent) => {
    if (e.cancelable) e.preventDefault();
    if (!containerRef.current) return;
    setStructure((prev) => {
      const currentTouch = e instanceof TouchEvent ? e.touches?.[0] : e;
      const [prevX, prevY] = [prev?.start?.touchX || currentTouch.clientX, prev?.start?.touchY || currentTouch.clientY];
      const directionX = prevX > currentTouch.clientX ? -1 : 1;
      const directionY = prevY > currentTouch.clientY ? -1 : 1;
      const movedX = currentTouch.clientX - prevX;
      const movedY = currentTouch.clientY - prevY;
      return {
        ...prev,
        isScrambled: true,
        isTouched: true,
        moved: { directionX, directionY, movedX, movedY },
      };
    });
  };

  const onTouchEnd = (e: TouchEvent | MouseEvent) => {
    if (e.cancelable) e.preventDefault();
    if (!containerRef.current) return;
    setStructure((prev) => {
      return {
        ...prev,
        isTouched: false,
        isScrambled: true,
      };
    });
    document.removeEventListener('mousemove', onTouchMove);
    document.removeEventListener('mouseup', onTouchEnd);
    document.removeEventListener('touchmove', onTouchMove);
    document.removeEventListener('touchend', onTouchEnd);
  };

  const onInit = () => {
    if (!containerRef.current) return;
    if (observeMouse) containerRef.current.addEventListener('mousedown', onTouchStart);
    if (observeTouch) containerRef.current.addEventListener('touchstart', onTouchStart, { passive: false });
  };

  const onRemove = () => {
    if (!containerRef.current) return;
    containerRef.current.removeEventListener('mousedown', onTouchStart);
    containerRef.current.removeEventListener('touchstart', onTouchStart);
    document.removeEventListener('mousemove', onTouchMove);
    document.removeEventListener('mouseup', onTouchEnd);
    document.removeEventListener('touchmove', onTouchMove);
    document.removeEventListener('touchend', onTouchEnd);
  };

  useEffect(() => {
    options?.onTouched?.(structure);
  }, [structure]);

  useEffect(() => {
    if (structure.isScrambled && !structure.isTouched) {
      setStructure((prev) => {
        return {
          ...prev,
          isScrambled: false,
          isTouched: false,
          start: { touchX: 0, touchY: 0, transformX: 0, transformY: 0 },
          moved: { movedX: 0, movedY: 0, directionX: 0, directionY: 0 },
          container: { clientWidth: 0, scrollWidth: 0, scrollHeight: 0, scrollX: 0, scrollY: 0 },
        };
      });
    }
  }, [structure]);

  return {
    touchRefs: {
      containerRef,
      childRef,
      escapeRef,
    },
    touchStructure: structure,
    touchInit: onInit,
    touchRemove: onRemove,
  };
};

export default useTouch;
