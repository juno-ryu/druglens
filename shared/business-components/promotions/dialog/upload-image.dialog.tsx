import React, { useState } from 'react';
import { Button, DesignIcon, DesignLabel, Stack, Switch, TextField, Typography } from '@/core/design-systems';
import { ImageInput } from '@/core/shared/service/input/promotion-input/image-input';

type UploadImageDialogProps = {
  initialImages: ImageInput;
  onSuccess: (html: string) => void;
  onDelete: () => void;
  onClose: () => void;
};

const UploadImageDialog = (props: UploadImageDialogProps) => {
  const { initialImages, onSuccess, onDelete, onClose } = props;
  const [isImageMap, setIsImageMap] = useState(Boolean(initialImages?.html));
  const [imageMapSource, setImageMapSource] = useState(initialImages?.html || '');

  const handleOnChangeImageMapSource = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setImageMapSource(value);
  };

  const handleOnRegisterHTML = () => {
    onSuccess(imageMapSource);
    onClose();
  };

  return (
    <Stack p="24px" minWidth="508px" direction="column" gap="24px">
      <Typography variant="body/body1" fontWeight={700}>
        이미지 업로드
      </Typography>

      <DesignLabel
        variant="contained"
        color="augment/gray/100"
        sx={{ width: '100%', height: '48px', padding: '0 22px' }}
        slotProps={{
          typography: {
            sx: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' },
          },
        }}
      >
        <Typography variant="body/body5" fontWeight={400} color="gray/800">
          {initialImages?.file?.uploaded?.clientname || initialImages?.file?.id}
        </Typography>
        <DesignIcon
          variant="RemoveFill"
          color="gray/600"
          sx={{ cursor: 'pointer' }}
          onClick={() => {
            onDelete();
            onClose();
          }}
        />
      </DesignLabel>

      <Stack direction="row" gap="8px" justifyContent="flex-end" alignItems="center">
        <Switch checked={isImageMap} onChange={() => setIsImageMap(!isImageMap)} color="augment/purple/600" />
        <Typography variant="body/body3" fontWeight={400} color="gray/600">
          이미지맵 추가
        </Typography>
      </Stack>

      {isImageMap && (
        <TextField
          variant="outlined"
          size="large"
          rows={3}
          multiline
          hiddenLabel
          placeholder="이미지 맵 소스를 붙혀 넣어 주세요."
          value={imageMapSource}
          onChange={handleOnChangeImageMapSource}
        />
      )}
      <Stack direction="row" spacing={1} mt="24px">
        <Button variant="outlined" color="augment/gray/800" size="extraLarge" fullWidth onClick={onClose}>
          취소
        </Button>
        <Button variant="contained" color="augment/purple/600" size="extraLarge" fullWidth onClick={handleOnRegisterHTML}>
          등록
        </Button>
      </Stack>
    </Stack>
  );
};

export default UploadImageDialog;
