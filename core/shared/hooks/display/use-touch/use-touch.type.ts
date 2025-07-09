export const TOUCH_OBSERVE = {
  MOUSE: 'mouse',
  TOUCH: 'touch',
} as const;

export type TouchObserve = (typeof TOUCH_OBSERVE)[keyof typeof TOUCH_OBSERVE];

export type TouchOptions = {
  observeTypes?: TouchObserve[];
  onTouched?: (structure: TouchStructure) => void;
};

export type TouchStructure = {
  isScrambled: boolean;
  isTouched: boolean;
  start: { touchX: number; touchY: number; transformX: number; transformY: number };
  moved: { movedX: number; movedY: number; directionX: -1 | 0 | 1; directionY: -1 | 0 | 1 };
  container: { clientWidth: number; scrollWidth: number; scrollHeight: number; scrollX: number; scrollY: number };
};

export const INITIAL_STRUCTURE: TouchStructure = {
  isScrambled: false,
  isTouched: false,
  start: { touchX: 0, touchY: 0, transformX: 0, transformY: 0 },
  moved: { movedX: 0, movedY: 0, directionX: 0, directionY: 0 },
  container: { clientWidth: 0, scrollWidth: 0, scrollHeight: 0, scrollX: 0, scrollY: 0 },
};
