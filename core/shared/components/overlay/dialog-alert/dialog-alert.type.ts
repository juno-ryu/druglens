import { TypeDialogStructure } from '@/shared/stores/layout/use-overlay/use-overlay.type';

export type DialogAlertProps = {
  title?: string;
  content?: string | React.ReactNode;
  successText?: string;
  onSuccess: () => void;
};
