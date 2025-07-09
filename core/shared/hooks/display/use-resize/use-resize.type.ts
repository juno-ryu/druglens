export type TypeResizeOptions = {
  debounce?: number;
  onInit?: (options: { entries: ResizeObserverEntry[] }) => void;
  onResize?: (options: { entries: ResizeObserverEntry[] }) => void;
  onRemove?: () => void;
};
