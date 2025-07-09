import parse from 'html-react-parser';
import { Button, Stack, Typography } from '@/core/design-systems';
import { DEFAULT_CONFIRM_DIALOG_KEY } from '@/core/shared/components/overlay/dialog-confirm/dialog-confirm.const';
import { DialogConfirmProps } from '@/core/shared/components/overlay/dialog-confirm/dialog-confirm.type';

const DialogConfirm = (props: DialogConfirmProps) => {
  const { title, content, successText, cancelText, successButtonColor, onSuccess, onCancel } = props;

  return (
    <Stack direction="column" p="20px" pt="30px" justifyContent="center" alignItems="center" minWidth={360}>
      {title && (
        <Typography variant="title/title5" fontWeight={700}>
          {parse(title.replace(/\n/g, '<br />'))}
        </Typography>
      )}
      {content && (
        <Typography variant="body/body3" textAlign="center" mt={1}>
          {parse(content.replace(/\n/g, '<br />'))}
        </Typography>
      )}
      <Stack direction="row" gap={1} mt="20px" width="100%">
        <Button fullWidth variant="contained" size="extraLarge" color={successButtonColor ? successButtonColor : 'augment/primary/600'} onClick={() => onSuccess()}>
          {successText || '확인'}
        </Button>
        <Button fullWidth variant="outlined" size="extraLarge" color="gray/800" onClick={() => onCancel()}>
          {cancelText || '취소'}
        </Button>
      </Stack>
    </Stack>
  );
};
export default DialogConfirm;
