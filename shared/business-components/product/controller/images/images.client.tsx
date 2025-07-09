'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Alert, DesignIcon, Stack, Typography } from '@/core/design-systems';
import { useTranslation } from '@/core/utils/i18next/i18next.client';
import useDynamicRoute from '@/core/shared/hooks/display/use-dynamic-route/use-dynamic-route';
import { TypeThumbnailUploadStructure } from '@/core/shared/hooks/upload/use-thumbnail-upload/use-thumbnail-upload.type';
import { ProductImageOutput } from '@/core/shared/service/output/product-image-output';
import ThumbnailUpload from '@/core/shared/components/upload/thumbnail-upload/thumbnail-upload';
import { ThumbnailUploadProps } from '@/core/shared/components/upload/thumbnail-upload/thumbnail-upload.type';
import { ProductFormValues, ProductImageCombined } from '@/shared/business-components/product/product.type';

type ImagesClientProps = {
  images: ProductImageOutput[];
};
const ImagesClient = (props: ImagesClientProps) => {
  const { images } = props;

  const formContext = useFormContext<ProductFormValues>();
  const onFinallyUpload = (values: TypeThumbnailUploadStructure, isMain: boolean) => {
    const { fileKey, clientname } = values.config;
    if (!fileKey || !clientname) return;
    const existingImages = formContext.getValues('images') || [];

    let mainImage = existingImages.find((image) => image.isMain);
    let subImage = existingImages.find((image) => !image.isMain);

    const updateImage = {
      uploaded: { fileKey, clientname, components: [] },
      isMain: true,
      id: null,
      mime: null,
      size: null,
      url: null,
    };

    if (isMain) {
      mainImage = updateImage;
    } else {
      subImage = updateImage;
    }
    const filtered = [mainImage, subImage].filter((image): image is ProductImageCombined => image !== undefined);
    formContext.setValue('images', filtered);
  };

  const uploadOptions: ThumbnailUploadProps['uploadOptions'] = {
    accept: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
  };

  return (
    <Stack direction="column" gap="20px">
      <Stack direction="column" gap="12px">
        <Stack direction="column" gap="8px">
          <Typography variant="body/body3" fontWeight={700} color="gray/800">
            {'썸네일'}
          </Typography>
          <Typography variant="body/body5" fontWeight={500} color="gray/600">
            {'구매 작가의 눈에 띌 수 있도록, 상품의 매력적인 이미지를 등록해 주세요. 보정 혹은 채색 이미지의 업로드를 추천 드립니다.'}
          </Typography>
        </Stack>
        <Alert color="augment/red/500" icon={<DesignIcon variant="NoticeOutline" />} sx={{ width: '100%', borderRadius: '8px' }} size="large">
          <Stack direction="column">
            <Typography variant="body/body6" fontWeight={500} color="red/600">
              {'썸네일 내 글자가 새겨져 있을 시 반려될 수 있습니다.'}
            </Typography>
          </Stack>
        </Alert>
      </Stack>

      <Stack direction="column" mt="28px" gap="24px">
        {/* left */}
        <Stack direction="column" gap="20px" width="100%">
          <Stack direction="column" gap="4px">
            <Typography variant="body/body4" fontWeight={600} color="gray/800">
              {'대표 이미지'}
            </Typography>
            <Typography variant="body/body5" fontWeight={500} color="gray/500">
              {'상품 리스트의 썸네일과 상세 페이지의 대표 이미지로 사용됩니다.'}
            </Typography>
          </Stack>
          <ThumbnailUpload
            name="images"
            uploadOptions={{
              ...uploadOptions,
              image: images.find((image) => image.isMain),
              onFinally: (values) => onFinallyUpload(values, true),
            }}
          />
        </Stack>
        {/* right */}
        <Stack direction="column" gap="20px" width="100%">
          <Stack direction="column" gap="4px">
            <Typography variant="body/body4" fontWeight={600} color="gray/800">
              {'보조 이미지'}
            </Typography>
            <Typography variant="body/body5" fontWeight={500} color="gray/500">
              {'상품 리스트의 썸네일에 마우스 오버 시 보여집니다.'}
            </Typography>
          </Stack>
          <ThumbnailUpload
            name="images"
            uploadOptions={{
              ...uploadOptions,
              image: images.find((image) => !image.isMain),
              onFinally: (values) => onFinallyUpload(values, false),
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ImagesClient;
