import { Stack, Typography } from '@/core/design-systems';
import { BackendError409, CustomNetworkError, ResponseBodyByStatus } from '@/core/utils/errors/custom-network-error';

type SnackbarErrorContentProps = {
  error: unknown;
};

const SnackbarError = ({ error }: SnackbarErrorContentProps) => {
  if (error instanceof CustomNetworkError) {
    if (error.metadata.responseStatus === 409) {
      const body = error.metadata.responseBody as ResponseBodyByStatus<409>;
      return (
        <Stack>
          <Typography variant="body/body5" fontWeight={500} color="white">
            {error.message}
          </Typography>
          <Typography variant="body/body6" fontWeight={400} color="gray/300" mb="12px">
            - {body.message}
          </Typography>
          <Stack gap="4px">
            <Typography variant="body/body5" fontWeight={500} color="white" sx={{ '& > b': { fontWeight: 800 } }}>
              <b>{body.status}</b> {body.exception.name}
            </Typography>
            <Typography variant="body/body6" fontWeight={400} color="gray/300">
              - {body.path}
            </Typography>
          </Stack>
          <Typography variant="body/body5" fontWeight={400} color="white"></Typography>
        </Stack>
      );
    }
  }

  return (
    <Typography variant="body/body5" fontWeight={600} color="white">
      {error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.'}
    </Typography>
  );
};

export default SnackbarError;
