'use client';

import React, { useState } from 'react';
import { Button, Stack, TextField, Typography } from '@/core/design-systems';
import { Nullable } from '@/core/utils/types/selector/flexible';
import { EditorInsertEmbedBlocksData, EditorInsertEmbedDialogProps } from '@/core/shared/components/general/editor/editor.type';
import { patterns } from '@/core/shared/components/general/editor/toolbar/tools.const';

const InsertEmbedDialog = (props: EditorInsertEmbedDialogProps) => {
  const { onClose, onConfirm } = props;
  const [url, setUrl] = useState('');

  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const createVideoUrl = (url: string): Nullable<EditorInsertEmbedBlocksData> => {
    for (const pattern of patterns) {
      const match = url.match(pattern.re);
      if (match) {
        const embed = pattern.name === 'mp4|m4v|ogg|ogv|webm' ? url : pattern.process(match);
        return {
          service: pattern.name,
          source: url,
          embed: embed,
        };
      }
    }
    return null;
  };

  const handleOnClickConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
    const data = createVideoUrl(url);
    if (data) {
      onConfirm(data);
      setUrl('');
    }
    onClose();
  };
  return (
    <Stack p="20px" width="380px" direction="column" gap="20px">
      <Stack direction="column" gap="8px">
        <Typography variant="body/body3" fontWeight={700} color="gray/800">
          동영상 추가
        </Typography>
        <Typography variant="body/body5" fontWeight={500} color="gray/500">
          YouTube, Vimeo, Vine, Instagram, DailyMotion, Youku, SoundCloud만 사용이 가능합니다.
        </Typography>
      </Stack>
      <Stack direction="column" gap="20px">
        <TextField variant="outlined" size="large" hiddenLabel placeholder="동영상 URL을 입력해주세요." value={url} onChange={handleOnChangeInput} />
        <Button variant="contained" color="augment/primary/600" size="extraLarge" fullWidth onClick={handleOnClickConfirm}>
          동영상 추가
        </Button>
      </Stack>
    </Stack>
  );
};

export default InsertEmbedDialog;
