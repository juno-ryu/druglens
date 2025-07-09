import { Box, Stack, Typography } from '@/core/design-systems';
import { COMPANY_ITEMS } from '@/shared/atom-components/layout/footer/footer.const';
import { LayoutFooterCompanyProps } from '@/shared/atom-components/layout/layout.type';

const LayoutCompany = <C extends React.ElementType>(props: LayoutFooterCompanyProps<C>) => {
  const { className = '', ...restProps } = props;

  // ::TODO:: onBusinessCheck
  const onBusinessCheck = () => {};

  return (
    <Stack direction="column" gap="20px">
      <Box
        component="ul"
        className={`${className}`}
        sx={{
          '--layout-company-row': '6px',
          '--layout-company-column': '6px',
          margin: 'calc(var(--layout-company-row) / 2 * -1) calc(var(--layout-company-column) / 2 * -1)',
          ':after': { content: '""', display: 'block', clear: 'both' },
        }}
        {...restProps}
      >
        {COMPANY_ITEMS.map((item, index) => {
          const clearIndex = [0, 6];
          const businessCheckProps = {
            component: 'button' as const,
            type: 'button',
            onClick: onBusinessCheck,
          };
          return (
            <Box
              key={item.key}
              component="li"
              sx={{
                float: 'left',
                clear: clearIndex.includes(index) ? 'both' : 'none',
                padding: 'calc(var(--layout-company-row) / 2) calc(var(--layout-company-column) / 2)',
              }}
            >
              <Typography variant="label/label2" {...(item.key === 'key-business-check' && businessCheckProps)} {...item.typographyProps}>
                {item.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
      <Typography variant="label/label2" fontWeight={500} color="gray/600">
        주식회사 카펜스트리트는 통신판매중개자이며, 통신판매의 당사자가 아니므로 회원 사이에 성립된 거래 및 판매자가 제공하고 등록한 정보로 인한 분쟁에 대해 책임지지 않습니다.
      </Typography>
      <Typography variant="label/label2" fontWeight={500} color="gray/400">
        copyright (c) www.acon3d.com all rights reserved.
      </Typography>
    </Stack>
  );
};

export default LayoutCompany;
