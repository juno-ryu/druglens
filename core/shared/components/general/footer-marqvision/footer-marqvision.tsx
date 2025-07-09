import { Button, DesignIcon, hexColorPalette, Link, Stack, theme, Typography } from '@/core/design-systems';
import Picture from '@/core/shared/components/general/picture/picture';

const FooterMarqvision = () => {
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      gap={'8px'}
      sx={{
        [theme.breakpoints.down('tablet')]: {
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
        },
      }}
    >
      <Link
        href="https://www.marqvision.com/kr/home"
        target="_blank"
        sx={{
          [theme.breakpoints.down('tablet')]: {
            width: '100%',
          },
        }}
      >
        <Button
          variant={'text'}
          sx={{
            width: '233px',
            height: '48px',
            border: `1px solid ${hexColorPalette['gray/300']}`,
            borderRadius: '4px',
            overflow: 'hidden',

            [theme.breakpoints.down('tablet')]: {
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
        >
          <Stack
            sx={{
              width: '223px',
              maxWidth: '223px',
              height: '48px',
              position: 'relative',
            }}
          >
            <Picture src={'https://acon3d.blob.core.windows.net/banner/img_marqvision_certificate.png'} alt={'marqvision'} fill={true} />
          </Stack>
        </Button>
      </Link>
      <Link
        href="https://www.marqvision.com/kr/report-a-fake-carpenstreet"
        target="_blank"
        sx={{
          [theme.breakpoints.down('tablet')]: {
            width: '100%',
          },
        }}
      >
        <Button
          variant={'contained'}
          endIcon={<DesignIcon variant={'Outlink'} />}
          sx={{
            width: '175px',
            height: '48px',
            [theme.breakpoints.down('tablet')]: {
              width: '100%',
            },
          }}
        >
          {'지식재산권 침해 신고하기'}
        </Button>
      </Link>
    </Stack>
  );
};

export default FooterMarqvision;
