import Link from 'next/link';
import { Theme } from '@mui/material';
import { Box, Stack, Typography } from '@/core/design-systems';
import { QUICK_LINK_ITEMS } from '@/shared/atom-components/layout/footer/footer.const';
import { LayoutFooterQuickLinkProps } from '@/shared/atom-components/layout/layout.type';

const LayoutFooterQuickLink = <C extends React.ElementType>(props: LayoutFooterQuickLinkProps<C>) => {
  const { className = '', ...restProps } = props;

  return (
    <Stack
      component="ul"
      direction="row"
      flexWrap="wrap"
      className={`${className}`}
      sx={{
        '--layout-quick-link-row': '12px',
        '--layout-quick-link-column': '32px',
        gap: 'var(--layout-quick-link-row) var(--layout-quick-link-column)',
      }}
      {...restProps}
    >
      {QUICK_LINK_ITEMS.map((item) => (
        <Box
          component="li"
          key={item.key}
          position="relative"
          sx={(theme: Theme) => ({
            '&:not(:last-child):after': {
              content: '""',
              position: 'absolute',
              top: 0,
              right: 0,
              display: 'block',
              width: '1px',
              height: '100%',
              background: theme.palette['gray/200'],
              transform: 'translateX(calc(var(--layout-quick-link-column) / 2))',
            },
          })}
        >
          <Typography component={Link} variant="body/body5" href={item.pathname} target={item.target} {...item.typographyProps}>
            {item.label}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default LayoutFooterQuickLink;
