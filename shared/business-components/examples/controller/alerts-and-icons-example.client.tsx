'use client';

import React from 'react';

import { Alert, AlertTitle, DesignIcon, Stack, Typography } from '@/core/design-systems';

import SectionTitleClient from '@/shared/business-components/examples/layout/section-title.client';

type AlertsAndIconsExampleProps = {};

const AlertsAndIconsExample = (props: AlertsAndIconsExampleProps) => {
  const {} = props;

  return (
    <Stack direction="column" gap="20px">
      <SectionTitleClient title="Alerts and Icons Example" description="Demonstrates Alert and DesignIcon" />
      <Stack direction="column" gap="12px">
        <Alert color="augment/red/500" icon={<DesignIcon variant="NoticeOutline" />} sx={{ width: '100%' }} size="large">
          <AlertTitle>This is an important notice!</AlertTitle>
          <Typography variant="body/body6" color="red/600">
            Please pay attention to this message.
          </Typography>
        </Alert>
        <Alert color="augment/cyan/500" icon={<DesignIcon variant="InformationOutline" />} sx={{ width: '100%' }} size="large">
          <AlertTitle>Information Alert</AlertTitle>
          <Typography variant="body/body6" color="cyan/600">
            This is some useful information.
          </Typography>
        </Alert>
        <Stack direction="row" gap="10px" alignItems="center">
          <Typography variant="body/body5">Success Icon</Typography>
          <Typography variant="body/body5">Warning Icon</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AlertsAndIconsExample;
