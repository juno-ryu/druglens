'use client';

import { Trans } from 'react-i18next';
import { TransMultilineProps } from '@/core/shared/components/general/trans-multiline/trans-multiline.type';

const TransMultiline = (props: TransMultilineProps) => {
  const { children = '', ...restProps } = props;

  if (!children?.trim()) return null;

  return children?.split(/\n|<br \/>/)?.map((line, index, arr) => {
    const hasBreak = index < arr.length - 1;
    return (
      <Trans key={index} {...restProps}>
        {line}
        {hasBreak && <br />}
      </Trans>
    );
  });
};

export default TransMultiline;
