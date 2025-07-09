import { Box, Stack } from '@mui/material';
import { DesignIcon, Typography } from '@/core/design-systems';
import { useTranslation } from '@/core/utils/i18next/i18next.client';
import useDynamicRoute from '@/core/shared/hooks/display/use-dynamic-route/use-dynamic-route';
import { IdentityDanalProps } from '@/core/shared/components/auth/identity-danal/identity-danal.type';
import TransMultiline from '@/core/shared/components/general/trans-multiline/trans-multiline';

const IdentityDanal = <C extends React.ElementType>(props: IdentityDanalProps<C>) => {
  const { onStart, className = '', ...restProps } = props;

  // lang
  const { params } = useDynamicRoute();
  const { lang } = params;
  const { t: repairTrans } = useTranslation(lang, '');

  return (
    <Stack gap={{ desktop: '24px', tabelt: '24px', mobile: '20px' }} {...restProps}>
      <Box component="button" type="button" display="block" width="100%" padding="24px 16px" border="1px solid" borderColor="gray/300" borderRadius="8px" onClick={onStart}>
        <Stack direction="column" gap="2px" alignItems="center" justifySelf="center">
          <DesignIcon variant="CertificatePass" width="80px" height="80px" titleAccess="" />
          <Typography variant="body/body5" fontWeight={800}>
            {/* 휴대폰 인증 */}
            {repairTrans('휴대폰 인증')}
          </Typography>
        </Stack>
      </Box>
      <Box component="div" padding="20px 24px" bgcolor="gray/50" borderRadius="8px">
        <Stack
          component="ul"
          direction="column"
          justifySelf="center"
          gap="3px"
          sx={{ li: { position: 'relative', paddingLeft: '8px' }, 'li:before': { content: '"·"', position: 'absolute', top: '0', left: '0' } }}
        >
          <Typography component="li" variant="label/label1" color="gray/700">
            {/* 법인폰 사용자는 법인폰 개인인증 서비스 신청 후 인증을 하실 수 있어요 */}
            <TransMultiline>{repairTrans('법인폰 사용자는 법인폰 개인인증 서비스 신청 후 인증을 하실 수 있어요')}</TransMultiline>
          </Typography>
          <Typography component="li" variant="label/label1" color="gray/700">
            {/* 개명하신 회원님은 본인인증정보로 회원명이 변경되어요 */}
            <TransMultiline>{repairTrans('개명하신 회원님은 본인인증정보로 회원명이 변경되어요')}</TransMultiline>
          </Typography>
          <Typography component="li" variant="label/label1" color="gray/700">
            {/* 본인인증이 잘 되지 않으시면 본인인증기관 고객센터로 문의 해주세요 */}
            <TransMultiline>{repairTrans('본인인증이 잘 되지 않으시면 본인인증기관 고객센터로 문의 해주세요')}</TransMultiline>
          </Typography>
          <Typography component="li" variant="label/label1" color="gray/700" fontWeight={600} sx={{ '&:before': { color: 'transparent' } }}>
            {/* 주식회사 다날 고객센터 : 1566-3355 */}
            <TransMultiline>{repairTrans('주식회사 다날 고객센터 : 1566-3355')}</TransMultiline>
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default IdentityDanal;
