import { Paper } from '@mui/material';
import { DesignLabel, Stack, Typography } from '@/carpen-products/design-systems';
import { EnumLanguageCode } from '@/shared/consts/common/language';
import { getSession } from '@/shared/configs/next-auth/next-auth.server';
import FormClient from '@/shared/business-components/promotions/controller/form.client';
import { getPromotionStatusLabel } from '@/shared/business-components/promotions/promotions.const';

interface CreatePromotionPageProps {
  params: Promise<{ lang: EnumLanguageCode }>;
}

const PromotionPage = async (props: CreatePromotionPageProps) => {
  const {} = props;
  const { color, label, status } = getPromotionStatusLabel();
  const session = await getSession();

  return (
    <Stack direction="column" gap="40px">
      <Typography variant="title/title3" fontWeight={700}>
        신규 기획전 추가
      </Typography>
      <Paper elevation={4} sx={{ p: '24px', flexDirection: 'column', gap: '24px', display: 'flex', borderRadius: '16px' }}>
        <Typography variant="body/body1" fontWeight={700}>
          기획전 정보
        </Typography>
        <Stack direction="column" gap="8px">
          <Typography variant="body/body5" color="gray/600" fontWeight={700}>
            상태
          </Typography>
          <Typography variant="body/body5" fontWeight={400}></Typography>
          <DesignLabel variant={'filled'} color={color}>
            {label}
          </DesignLabel>
        </Stack>
        <Stack direction="column" gap="8px">
          <Typography variant="body/body5" color="gray/600" fontWeight={700}>
            담당자
          </Typography>
          <Typography variant="body/body5" fontWeight={400}>
            {session?.user.email || '담당자 없음'}
          </Typography>
        </Stack>
      </Paper>
      <FormClient isCreate status={status} />
    </Stack>
  );
};

export default PromotionPage;
