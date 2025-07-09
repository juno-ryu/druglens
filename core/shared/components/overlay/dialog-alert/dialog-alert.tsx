import parse from 'html-react-parser';
import { Button, Stack, Typography } from '@/core/design-systems';
import { DEFAULT_ALERT_DIALOG_KEY } from '@/core/shared/components/overlay/dialog-alert/dialog-alert.const';
import { DialogAlertProps } from '@/core/shared/components/overlay/dialog-alert/dialog-alert.type';

const DialogAlert = (props: DialogAlertProps) => {
  const { title, content, successText, onSuccess } = props;

  return (
    <Stack direction="column" p="20px" pt="30px" justifyContent="center" alignItems="center" minWidth={360}>
      {title && (
        <Typography variant="title/title5" fontWeight={700}>
          {parse(title.replaceAll(/\n/g, '<br />'))}
        </Typography>
      )}
      {content && (
        <Typography variant="body/body3" textAlign="center" mt={1}>
          {typeof content === 'string' ? parse(content.replaceAll(/\n/g, '<br />')) : content}
        </Typography>
      )}
      <Button fullWidth variant="contained" size="extraLarge" color="augment/purple/600" onClick={() => onSuccess()} sx={{ mt: 3 }}>
        {successText || '확인'}
      </Button>
    </Stack>
  );
};

export default DialogAlert;
