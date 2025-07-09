import dayjs from 'dayjs';
import { Paper } from '@mui/material';
import { DesignLabel, Stack, Typography } from '@/carpen-products/design-systems';
import ADMIN_APIS from '@/carpen-products/shared/service/admin/admin.service';
import { getSession } from '@/shared/configs/next-auth/next-auth.server';
import FormClient from '@/shared/business-components/promotions/controller/form.client';
import { getPromotionStatusLabel } from '@/shared/business-components/promotions/promotions.const';
import { fetchPromotion, fetchPromotionItems } from '@/app/[lang]/promotions/[promotionId]/actions';

interface PromotionDetailPageProps {
  params: Promise<{ promotionId: string }>;
}
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const PromotionDetailPage = async (props: PromotionDetailPageProps) => {
  const { params } = props;
  const { promotionId } = await params;

  const promotionData = await fetchPromotion(promotionId);
  const itemsData = await fetchPromotionItems(promotionId);
  const session = await getSession();

  const { color, label, status } = promotionData?.data
    ? getPromotionStatusLabel(
        promotionData?.data?.createdAt,
        promotionData?.data?.updatedAt,
        promotionData?.data?.publishedAt,
        promotionData?.data?.suspendedAt,
        promotionData?.data?.since,
        promotionData?.data?.until,
      )
    : getPromotionStatusLabel();

  const key = getRandomNumber();

  if (!promotionData) {
    return <div>Failed to load data.</div>;
  }

  return (
    <Stack direction="column" gap="40px" key={key}>
      <Typography variant="title/title3" fontWeight={700}>
        기획전 상세
      </Typography>
      <Typography variant="body/body1" fontWeight={700}>
        기획전 정보
      </Typography>
      <Paper elevation={4} sx={{ p: '24px', flexDirection: 'column', gap: '24px', display: 'flex', borderRadius: '16px' }}>
        <Stack direction="column" gap="8px">
          <Typography variant="body/body5" color="gray/600" fontWeight={700}>
            번호
          </Typography>
          <Typography variant="body/body5" fontWeight={400}>
            17
          </Typography>
        </Stack>
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
        <Stack direction="column" gap="8px">
          <Typography variant="body/body5" color="gray/600" fontWeight={700}>
            등록일 · 수정일
          </Typography>
          <Stack direction="column" gap="4px">
            <Stack direction="row">
              <Typography variant="body/body5" fontWeight={400} width="60px">
                등록일
              </Typography>
              <Typography variant="body/body5" fontWeight={400}>
                {dayjs(promotionData.data.createdAt).format('YYYY.MM.DD HH:mm')}
              </Typography>
            </Stack>
            <Stack direction="row">
              <Typography variant="body/body5" fontWeight={400} width="60px">
                수정일
              </Typography>
              <Typography variant="body/body5" fontWeight={400}>
                {dayjs(promotionData.data.updatedAt).format('YYYY.MM.DD HH:mm')}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
      <FormClient promotion={promotionData.data} products={itemsData?.data || []} isCreate={false} status={status} />
    </Stack>
  );
};

export default PromotionDetailPage;
