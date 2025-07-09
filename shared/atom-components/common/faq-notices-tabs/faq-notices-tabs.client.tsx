import { Link, Tab, Tabs, Typography } from '@/core/design-systems';

type FaqNoticesTabsProps = {
  selected: 'faq' | 'notice' | 'event';
};

const FaqNoticesTabs = (props: FaqNoticesTabsProps) => {
  const { selected } = props;

  return (
    <Tabs value={selected ?? false} size="small" sx={{ borderBottom: '1px solid', borderColor: 'gray/dim/200' }}>
      <Tab component={Link} href={'/faq'} value="faq" label={<Typography variant="body/body3">{'[ACON] FAQ'}</Typography>} />
      <Tab component={Link} href={'/partner-notices'} value="notice" label={<Typography variant="body/body3">{'[HUB] 공지사항'}</Typography>} />
      <Tab component={Link} href={'/partner-notices/events'} value="event" label={<Typography variant="body/body3">{'[HUB] 프로모션 안내'}</Typography>} />
    </Tabs>
  );
};

export default FaqNoticesTabs;
