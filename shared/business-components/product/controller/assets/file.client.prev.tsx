'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { cloneDeep } from 'lodash';
import { Alert, Breadcrumbs, Button, DesignIcon, LinearProgress, Stack, Typography } from '@/core/design-systems';
import { unzip } from 'unzipit';
import { Uploader } from '@/core/utils/helpers/uploader';
import COMMON_APIS from '@/core/shared/service/common/common.service';
import HUB_APIS from '@/core/shared/service/hub/hub.service';
import { ApplicationOutput } from '@/core/shared/service/output/application-output';
import { AssetOutput } from '@/core/shared/service/output/asset-output';
import { ExtensionOutput } from '@/core/shared/service/output/extension-output';
import { APPLICATION_LIST, defaultFileConfig, formatFileSize } from '@/shared/business-components/product/controller/assets/assets.const';
import { CompleteUploadParams, FileConfig, FileStatus, UnzipResult } from '@/shared/business-components/product/controller/assets/assets.type';
import { ProductFormValues } from '@/shared/business-components/product/product.type';

type FileClientProps = {
  applications: ApplicationOutput[];
  extensions: ExtensionOutput[];
  appIds: number[];
  exIds: number[];
  assets: AssetOutput[];
};

const FileClient = (props: FileClientProps) => {
  const { applications, appIds, extensions, exIds, assets } = props;
  const { setValue, getValues } = useFormContext<ProductFormValues>();

  const fileRef = useRef<HTMLInputElement>(null);
  const uploaderRef = useRef<Uploader | null>(null);
  const percentageRef = useRef<number>(0);

  const [fileInputKey, setFileInputKey] = useState(0);
  const [fileConfig, setFileConfig] = useState<FileConfig>(defaultFileConfig);
  const [fileStatus, setFileStatus] = useState<FileStatus>(null);

  const [percentage, setPercentage] = useState(0);

  const [extensionIds, setExtensionIds] = useState(exIds);
  const [applicationIds, setApplicationIds] = useState(appIds);

  const handleOnChangeFile = async () => {
    if (!fileRef.current?.files?.length) return;

    // if (fileRef.current.files[0].type.indexOf('zip') === -1) {
    //   alert('zip 파일만 업로드 가능합니다.');
    //   return;
    // }

    const inputFile = fileRef.current.files[0];
    const fileSize = inputFile.size;
    const clientname = inputFile.name;

    const isMultipart = Boolean(fileSize / (1024 * 1024) >= 5);

    setFileStatus('inprogress');

    try {
      const unzipResult = await handleOnFileUnzip(inputFile);
      if (!unzipResult) throw new Error('Failed to unzip file');
      const { newFileNames, newExtensions, newApplications } = unzipResult;
      let fileKey;

      if (isMultipart) {
        fileKey = await handleMultipartUpload(inputFile);
      } else {
        fileKey = await handleSingleUpload(inputFile);
      }

      await handleOnCompleteUpload({
        fileConfig: { clientname, fileKey, size: fileSize, id: null, mime: null, assetId: null },
        newFileNames,
        newExtensions,
        newApplications,
      });
    } catch (e) {
      setFileConfig(defaultFileConfig);
      setFileStatus('fail');
      throw new Error(`Failed file upload - ${e}`);
    }
  };

  const handleOnCompleteUpload = async (params: CompleteUploadParams) => {
    const { fileConfig, newFileNames, newExtensions, newApplications } = params;
    if (!fileConfig.fileKey || !fileConfig.clientname) return;

    const {
      data: { id, name },
    } = await HUB_APIS['assets'].post({
      name: getValues('title'),
      files: [{ clientname: fileConfig.clientname, fileKey: fileConfig.fileKey }],
      extensionIds: newExtensions,
      applicationIds: newApplications,
    });

    setFileConfig({ ...fileConfig, assetId: id });
    setExtensionIds(newExtensions);
    setApplicationIds(newApplications);
    setPercentage(100);
    setFileStatus('success');

    // form update!!
    const existingAssets = getValues('assets') || [];
    const existingLicenses = getValues('licenses');
    const existingStocks = getValues('stocks') || [];
    const isDuplicate = existingAssets.some((asset) => asset.id === id);

    if (!isDuplicate) {
      const newStocks = existingLicenses.map((license, licenseIdx) => ({
        assetIds: [id],
        license: license.license,
        price: 2000,
        isDisabled: Boolean(licenseIdx < 2),
        id: null,
        assets: null,
      }));

      setValue('assets', [...existingAssets, { id, price: 2000 }]);
      setValue('stocks', [...existingStocks, ...newStocks]);
    } else {
      console.warn(`Asset with id ${id} already exists.`);
    }
  };

  const handleMultipartUpload = async (inputFile: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      uploaderRef.current = new Uploader({
        file: inputFile,
        initializeUploadFn: COMMON_APIS['multipart-upload/init'].post,
        completeUploadFn: COMMON_APIS['multipart-upload/complete'].post,
      });

      uploaderRef.current
        .onProgress(({ percentage }) => {
          if (Math.abs(percentage - percentageRef.current) >= 5) {
            percentageRef.current = percentage;
            setPercentage(percentage);
          }
        })
        .onError((error) => reject(new Error(`Failed multipart upload - ${error}`)))
        .onComplete(() => {
          if (!uploaderRef.current?.fileKey) {
            reject(new Error('File key is null'));
          } else {
            resolve(uploaderRef.current.fileKey);
          }
        });

      uploaderRef.current.start();
    });
  };

  const handleSingleUpload = async (inputFile: File): Promise<string> => {
    const clientname = inputFile.name;
    const { data: presigned } = await COMMON_APIS['upload/presigned'].post(clientname);
    await COMMON_APIS['upload/presigned'].put(presigned.signedUrl, inputFile);
    if (!presigned.fileKey) {
      throw new Error('File key is undefined');
    }
    return presigned.fileKey;
  };

  const handleOnClickFile = () => {
    fileRef.current?.click();
  };

  const handleOnDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleOnDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const files = e && e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files;
    if (files && fileRef && fileRef.current) {
      fileRef.current.files = files;
      handleOnChangeFile();
    }
  };

  const handleOnFileUnzip = async (inputFile: File): Promise<UnzipResult | undefined> => {
    try {
      const newFileNames = [];
      const newExtensions = [];
      const newApplications = [];
      const zipFile = await unzip(inputFile);

      for (const file in zipFile.entries) {
        const target = zipFile.entries[file];
        if (target.isDirectory) continue;
        if (target.name.match(/^__MACOSX\//)) continue;
        let fileName = target.name;

        if (fileName.includes('�')) {
          const decoder = new TextDecoder('euc-kr');
          fileName = decoder.decode(target.nameBytes);
        }
        const extension = '.' + target.name.split('.').pop()?.toLowerCase();
        const extensionId = extensions.find((x: ExtensionOutput) => x.name === extension)?.id;
        const application = APPLICATION_LIST[extension.replace('.', '')] || [];
        const applicationId = applications.find((x: ApplicationOutput) => application.includes(x.name))?.id;
        if (fileName) newFileNames.push(fileName);
        if (extensionId) newExtensions.push(extensionId);
        if (applicationId) newApplications.push(applicationId);
      }

      return { newFileNames, newExtensions, newApplications };
    } catch (err) {
      console.error('파일 압축 해제 실패', err);
      setFileStatus('fail');
      return undefined;
    }
  };

  const handleOnResetFile = () => {
    const { assetId } = fileConfig;
    if (assetId) {
      // delete stocks
      const existingStocks = cloneDeep(getValues('stocks')) || [];
      const filteredStocks = existingStocks.filter((stock) => !stock.assetIds.includes(assetId));
      setValue('stocks', filteredStocks);
    }

    // reset file state
    setFileConfig(defaultFileConfig);
    setExtensionIds([]);
    setApplicationIds([]);
    setPercentage(0);
    setFileStatus(null);
    setFileInputKey((prev) => prev + 1);

    if (fileRef.current) fileRef.current.value = '';
    if (uploaderRef.current) uploaderRef.current = null;
  };

  const hadnleOnClickFileDownload = async () => {
    const assets = getValues('assets');

    if (assets?.[0]) {
      const { data } = await COMMON_APIS['assets/:assetId/download-url'].post(assets[0].id);
      for (const downloadId in data) {
        window.open(data[downloadId], '_blank');
      }
    }
  };

  useEffect(() => {
    if (!assets) return;
    // todo. 일단은 단일 파일로 가정하고 시작
    const asset = assets[0] as any;
    const upaloadedFile = asset?.files[0];
    if (upaloadedFile) {
      setFileConfig({
        clientname: upaloadedFile.clientname,
        size: upaloadedFile.size || 0,
        mime: upaloadedFile.mime,
        id: upaloadedFile.id,
        assetId: asset.id,
        fileKey: null,
      });
      setPercentage(100);
      setFileStatus('success');
    }
  }, [assets]);

  return (
    <Stack direction="column" gap="20px">
      <Stack direction="row" gap="8px">
        <Typography variant="body/body3" fontWeight={700}>
          상품 파일
        </Typography>
        {fileConfig.clientname ? (
          <Button variant="contained" size="small" onClick={hadnleOnClickFileDownload}>
            <Typography variant="label/label1" fontWeight={600} color="white">
              다운로드
            </Typography>
          </Button>
        ) : null}
      </Stack>

      <Stack direction="column" gap="20px" sx={{ width: '100%' }}>
        <Alert key="red/500" color="augment/red/500" icon={<DesignIcon variant="NoticeOutline" />} sx={{ width: '100%' }} size="large">
          <Stack direction="column">
            <Typography variant="body/body6" fontWeight={500} color="red/600">
              · 파일 하나당 10GB를 넘지 않는게 좋아요.
            </Typography>
            <Typography variant="body/body6" fontWeight={500} color="red/600">
              · 파일명은 영문으로 작성해야 하며, 파일명에 실존 브랜드명이 포함되면 안돼요.
            </Typography>
            <Typography variant="body/body6" fontWeight={500} color="red/600">
              · skp 파일은 SketchUp 2013 버전으로 변환이 필요해요.
            </Typography>
          </Stack>
        </Alert>

        <Stack
          onClick={handleOnClickFile}
          onDragOver={handleOnDragOver}
          onDrop={handleOnDrop}
          sx={(theme) => ({
            cursor: 'pointer',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px',
            border: `2px dashed ${theme.palette['gray/dim/400']}`,
            p: '30px 159px',
            width: '100%',
            display: !fileConfig.clientname ? 'flex' : 'none',
          })}
        >
          <input key={fileInputKey} ref={fileRef} draggable type="file" onChange={handleOnChangeFile} className="hidden" />
          <Stack direction="column" gap="10px">
            <DesignIcon variant="Upload" />
            <Typography variant="body/body3" fontWeight={500} color="gray/800">
              <Typography variant="body/body3" fontWeight={500} color="primary/600" sx={{ textDecoration: 'underline', mr: '4px' }}>
                여기를 클릭하거나
              </Typography>
              파일을 드래그 앤 드랍하세요.
            </Typography>
          </Stack>
        </Stack>

        <Stack direction="column">
          {fileConfig.clientname && (
            <Stack direction="row" justifyContent="space-between" alignItems="center" p="16px 0px 24px 4px">
              <Stack direction="column" gap="4px">
                <Typography variant="body/body3" fontWeight={400} color="gray/800">
                  {fileConfig.clientname}
                </Typography>
                <Typography variant="body/body5" fontWeight={400} color="gray/600">
                  {formatFileSize(fileConfig.size)} • 완료
                </Typography>
              </Stack>
              <DesignIcon variant="CloseBold" sx={{ cursor: 'pointer' }} onClick={handleOnResetFile} />
            </Stack>
          )}
          {percentage > 0 && <LinearProgress color="augment/purple/600" variant="determinate" value={percentage} />}
        </Stack>
        {/* file 및 applications  */}
        <Stack direction="column" gap="4px">
          {fileConfig.clientname && (
            <Alert
              variant="standard"
              sx={{ p: '12px 15px', borderRadius: '8px' }}
              icon={
                <Typography variant="label/label1" fontWeight={700} color="gray/800" mt="2px">
                  📄️
                </Typography>
              }
            >
              <Stack direction="row">
                <Typography variant="label/label1" fontWeight={400} color="gray/800">
                  {fileConfig.clientname}
                </Typography>
              </Stack>
            </Alert>
          )}

          {applicationIds.length > 0 && (
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
                <Breadcrumbs aria-label="breadcrumb" separator="·" sx={{ '& .MuiBreadcrumbs-separator': { mx: '4px' } }}>
                  {applicationIds.map((app) => (
                    <Typography key={app} variant="label/label1" fontWeight={400} color="gray/800">
                      {applications.find((application) => application.id === app)?.name}
                    </Typography>
                  ))}
                </Breadcrumbs>
              </Stack>
            </Alert>
          )}
          {extensionIds.length > 0 && (
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
                  {extensionIds.map((ex) => (
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

export default FileClient;
