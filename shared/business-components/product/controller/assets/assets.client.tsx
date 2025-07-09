'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { cloneDeep } from 'lodash';
import { Alert, Breadcrumbs, Button, DesignIcon, LinearProgress, Stack, Typography } from '@/core/design-systems';
import { unzip } from 'unzipit';
import { Uploader } from '@/core/utils/helpers/uploader';
import { useTranslation } from '@/core/utils/i18next/i18next.client';
import useDynamicRoute from '@/core/shared/hooks/display/use-dynamic-route/use-dynamic-route';
import { INITIAL_ASSET_UPLOAD_STRUCTURE } from '@/core/shared/hooks/upload/use-asset-upload/use-asset-upload.const';
import { TypeAssetUploadStructure } from '@/core/shared/hooks/upload/use-asset-upload/use-asset-upload.type';
import COMMON_APIS from '@/core/shared/service/common/common.service';
import HUB_APIS from '@/core/shared/service/hub/hub.service';
import { AssetInput } from '@/core/shared/service/input/asset-product-input/asset-input';
import { LicenseInput } from '@/core/shared/service/input/asset-product-input/license-input';
import { StockInput } from '@/core/shared/service/input/asset-product-input/stock-input';
import { PresignedUploadedComponent } from '@/core/shared/service/input/presigned-input/presigned-uploaded-component';
import { ApplicationOutput } from '@/core/shared/service/output/application-output';
import { AssetOutput } from '@/core/shared/service/output/asset-output';
import { ExtensionOutput } from '@/core/shared/service/output/extension-output';
import AssetUpload from '@/core/shared/components/upload/asset-upload/asset-upload';
import { AssetUploadProps } from '@/core/shared/components/upload/asset-upload/asset-upload.type';
import { FileUploadProps } from '@/core/shared/components/upload/file-upload/file-upload.type';
import { APPLICATION_LIST, defaultFileConfig, formatFileSize } from '@/shared/business-components/product/controller/assets/assets.const';
import { CompleteUploadParams, FileConfig, FileStatus, UnzipResult } from '@/shared/business-components/product/controller/assets/assets.type';
import { ProductFormValues } from '@/shared/business-components/product/product.type';

type AssetsClientProps = {
  applications: ApplicationOutput[];
  extensions: ExtensionOutput[];
  assetsDetail: AssetOutput[];
  productApplications: ApplicationOutput[];
  productExtensions: ExtensionOutput[];
};

const AssetsClient = (props: AssetsClientProps) => {
  const { applications, extensions, productApplications, productExtensions, assetsDetail } = props;

  const { params } = useDynamicRoute();
  const { t: repairTrans } = useTranslation(params.lang, '');

  const formContext = useFormContext<ProductFormValues>();
  const [watchedTitle, watchedPrice] = useWatch({ control: formContext.control, name: ['title', 'price'] });
  const [fileUploadConfig, setFileUploadConfig] = useState<TypeAssetUploadStructure>(INITIAL_ASSET_UPLOAD_STRUCTURE);

  const uploadOptions: AssetUploadProps['uploadOptions'] = {
    asset: assetsDetail[0],
    extensions: productExtensions.length ? productExtensions : extensions,
    applications: productApplications.length ? productApplications : applications,
    accept: ['application/zip'],
    onStart: (values) => setFileUploadConfig(values),
    onReset: (values) => {
      setFileUploadConfig(values);
      formContext.setValue('assets', []);
      formContext.setValue('stocks', []);
    },
    onFinally: (values) => {
      setFileUploadConfig(values);
      if (!values.config.assetId) return;
      const existingAssets = formContext.getValues('assets') || [];
      const existingLicenses = formContext.getValues('licenses') || [];
      const existingStocks = formContext.getValues('stocks') || [];
      const isDuplicate = existingAssets.some((asset: AssetInput) => asset.id === values.config.assetId);

      if (!isDuplicate) {
        const newStocks = existingLicenses.map((license: LicenseInput, licenseIdx: number) => ({
          assetIds: values.config.assetId ? [values.config.assetId] : [],
          id: values.config.id,
          license: license.license,
          price: watchedPrice * license.multiple,
          isDisabled: Boolean(licenseIdx > 1),
          assets: [], // Add an empty array or populate it as needed
        }));

        formContext.setValue('assets', [...existingAssets, { id: values.config.assetId, price: watchedPrice }]);
        formContext.setValue('stocks', [...existingStocks, ...newStocks]);
      } else {
        console.warn(`Asset with id ${values.config.assetId} already exists.`);
      }
    },
  };

  return (
    <Stack direction="column" gap="20px">
      <Stack direction="row" gap="8px">
        <Typography variant="body/body3" fontWeight={700}>
          상품 파일
        </Typography>
      </Stack>
      <Stack direction="column" gap="20px" sx={{ width: '100%' }}>
        <Alert color="augment/red/500" icon={<DesignIcon variant="NoticeOutline" />} sx={{ width: '100%' }} size="large">
          <Stack direction="column">
            <Typography variant="body/body6" fontWeight={500} color="red/600">
              {repairTrans('· 상품명을 입력해야만 파일을 업로드할 수 있어요.')}
            </Typography>
          </Stack>
        </Alert>
        <Alert key="red/500" color="augment/red/500" icon={<DesignIcon variant="NoticeOutline" />} sx={{ width: '100%' }} size="large">
          <Stack direction="column">
            <Typography variant="body/body6" fontWeight={500} color="red/600">
              {repairTrans('· 파일 하나당 10GB를 넘지 않는게 좋아요.')}
            </Typography>
            <Typography variant="body/body6" fontWeight={500} color="red/600">
              {repairTrans('· 파일명은 영문으로 작성해야 하며, 파일명에 실존 브랜드명이 포함되면 안돼요.')}
            </Typography>
            <Typography variant="body/body6" fontWeight={500} color="red/600">
              {repairTrans('· skp 파일은 SketchUp 2013 버전으로 변환이 필요해요.')}
            </Typography>
          </Stack>
        </Alert>
        {watchedTitle && <AssetUpload name="assets" uploadOptions={uploadOptions} />}

        {/* file 및 applications  */}
        <Stack direction="column" gap="4px">
          {(fileUploadConfig?.fileComponents || []).map((component, idx) => (
            <Alert
              key={`${component.name}_${idx}`}
              variant="standard"
              color={'augment/primary/500'}
              sx={{ p: '12px 15px', borderRadius: '8px' }}
              icon={
                <Typography variant="label/label1" fontWeight={700} color="gray/800" mt="2px">
                  📄️
                </Typography>
              }
            >
              <Stack direction="row" justifyContent={'space-between'} alignItems="center">
                <Typography variant="label/label1" fontWeight={400} color="gray/800">
                  {component.name}
                </Typography>
                <Typography variant="label/label1" fontWeight={400} color="gray/800">
                  {component.size ? `(${formatFileSize(component.size)})` : ''}
                </Typography>
              </Stack>
            </Alert>
          ))}

          {fileUploadConfig.applicationIds.length > 0 && (
            <Alert
              variant="standard"
              sx={{ p: '12px 15px', borderRadius: '8px' }}
              icon={
                <Typography variant="label/label1" fontWeight={700} color="gray/800" lineHeight="16px" mt="2px">
                  ⚙️
                </Typography>
              }
            >
              <Stack direction="row">
                <Breadcrumbs
                  aria-label="breadcrumb"
                  separator="·"
                  sx={{
                    '& .MuiBreadcrumbs-separator': {
                      marginLeft: '4px',
                      marginRight: '4px',
                    },
                  }}
                >
                  {fileUploadConfig.applicationIds.map((app) => (
                    <Typography key={app} variant="label/label1" fontWeight={400} color="gray/800">
                      {applications.find((applications) => applications.id === app)?.name}
                    </Typography>
                  ))}
                </Breadcrumbs>
              </Stack>
            </Alert>
          )}
          {fileUploadConfig.extensionIds.length > 0 && (
            <Alert
              variant="standard"
              sx={{ p: '12px 15px', borderRadius: '8px' }}
              icon={
                <Typography variant="label/label1" fontWeight={700} color="gray/800" lineHeight="16px" mt="2px">
                  🔧
                </Typography>
              }
            >
              <Stack direction="row">
                <Breadcrumbs aria-label="breadcrumb" separator="·" sx={{ '& .MuiBreadcrumbs-separator': { mx: '4px' } }}>
                  {fileUploadConfig.extensionIds.map((ex) => (
                    <Typography key={ex} variant="label/label1" fontWeight={400} color="gray/800">
                      {extensions.find((extension) => extension.id === ex)?.name}
                    </Typography>
                  ))}
                </Breadcrumbs>
              </Stack>
            </Alert>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AssetsClient;
