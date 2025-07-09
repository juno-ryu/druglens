import { TypeDialogStructure } from '@/shared/stores/layout/use-overlay/use-overlay.type';
import { TypeAugmentColorPalette } from '@/core/design-systems/theme/palette';

export type DialogConfirmProps = {
  title?: string;
  content?: string;
  successText?: string;
  cancelText?: string;
  successButtonColor?: TypeAugmentColorPalette;
  onSuccess: () => void;
  onCancel: () => void;
};
