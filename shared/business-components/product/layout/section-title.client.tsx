import React from 'react';
import { Stack, Typography } from '@/core/design-systems';

type SectionTitleClientProps = {
  title: string;
  description?: string;
};

const SectionTitleClient = (props: SectionTitleClientProps) => {
  const { title, description } = props;
  return (
    <Stack direction="column" gap="8px">
      <Typography variant="body/body3" fontWeight={700} color="gray/800">
        {title}
      </Typography>
      <Typography variant="body/body5" fontWeight={500} color="gray/800">
        {description}
      </Typography>
    </Stack>
  );
};

export default SectionTitleClient;
