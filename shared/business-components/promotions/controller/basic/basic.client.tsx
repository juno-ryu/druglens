'use client';

import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { get } from 'lodash';
import Paper from '@mui/material/Paper/Paper';
import { InputAdornment, Stack, TextField, Typography } from '@/core/design-systems';
import ControlledTextField from '@/core/shared/components/hook-form/controlled-text-field/controlled-text-field';
import { INVALID_HELPER_TEXT } from '@/shared/business-components/promotions/promotions.const';
import { FormValues } from '@/shared/business-components/promotions/promotions.type';

type BasicClientProps = {
  disabled: boolean;
};
const BasicClient = (props: BasicClientProps) => {
  const { disabled } = props;
  const formContext = useFormContext<FormValues>();
  const title = useWatch({ control: formContext.control, name: 'title' });
  const description = useWatch({ control: formContext.control, name: 'description' });

  return (
    <Paper elevation={4} sx={{ p: '24px', flexDirection: 'column', gap: '36px', display: 'flex', borderRadius: '16px' }}>
      <Typography variant="body/body1" fontWeight={700}>
        기본 설정
      </Typography>
      <Stack direction="column" gap="12px">
        <Typography variant="body/body5" color="gray/600" fontWeight={600}>
          기획전 명
        </Typography>
        <ControlledTextField
          name="title"
          control={formContext.control}
          variant="outlined"
          size="medium"
          hiddenLabel
          disabled={disabled}
          placeholder="고객에게 보여질 기획전명을 입력해 주세요"
          slotProps={{
            htmlInput: {
              maxLength: 30,
            },
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <Typography variant="label/label1" fontWeight={400}>
                    {`${title.length}/30`}
                  </Typography>
                </InputAdornment>
              ),
            },
          }}
          helperText={INVALID_HELPER_TEXT(formContext, 'title')}
        />
      </Stack>
      <Stack direction="column" gap="12px">
        <Typography variant="body/body5" color="gray/600" fontWeight={600}>
          기획전 설명 (옵션)
        </Typography>
        <ControlledTextField
          name="description"
          control={formContext.control}
          variant="outlined"
          size="medium"
          hiddenLabel
          disabled={disabled}
          placeholder="주의 사항이나 관리자들과 공유할만한 내용을 입력해 주세요"
          slotProps={{
            htmlInput: {
              maxLength: 30,
            },
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <Typography variant="label/label1" fontWeight={400}>
                    {`${description?.length || 0}/30`}
                  </Typography>
                </InputAdornment>
              ),
            },
          }}
        />
      </Stack>
    </Paper>
  );
};

export default BasicClient;
