'use client';

import React, { Fragment, useMemo } from 'react';
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form';
import { groupBy, zipObject } from 'lodash';
import { GridColDef, GridRenderEditCellParams, GridRowsProp, useGridApiRef } from '@mui/x-data-grid-pro';
import { Box, Loader, Stack, Typography } from '@/core/design-systems';
import { EnumPromotionStatus } from '@/core/shared/service/admin/types/promotions';
import useDialog from '@/core/shared/hooks/effect/use-dialog/use-dialog';
import { TypeThumbnailUploadStructure } from '@/core/shared/hooks/upload/use-thumbnail-upload/use-thumbnail-upload.type';
import { DeviceType } from '@/core/shared/service/enum/device-type';
import { RegionCode } from '@/core/shared/service/enum/region-code';
import { ImageInput } from '@/core/shared/service/input/promotion-input/image-input';
import { ThumbnailUploadProps } from '@/core/shared/components/upload/thumbnail-upload/thumbnail-upload.type';
import DataGridClient from '@/shared/atom-components/common/data-grid/data-grid.client';
import { dataGridHeader } from '@/shared/atom-components/common/data-grid/data-grid.const';
import UploadThumbnaleCell from '@/shared/business-components/promotions/controller/usage-environment/upload-image-cell';
import UploadImageDialog from '@/shared/business-components/promotions/dialog/upload-image.dialog';
import { REGION_OPTIONS } from '@/shared/business-components/promotions/promotions.const';
import { FormValues } from '@/shared/business-components/promotions/promotions.type';

type UsageEnvironmentProps = {
  disabled: boolean;
};

const DIALOG_UPLOAD_IMAGE = 'dialog-upload-image';
const TEMP_IMAGE_OUTPUT = {
  id: '',
  mime: '',
  size: 0,
  url: '' as unknown as URL,
  isMain: false,
};

const UsageEnvironmentClient = (props: UsageEnvironmentProps) => {
  const { disabled } = props;

  const formContext = useFormContext<FormValues>();
  const fieldContext = useFieldArray({ control: formContext.control, name: 'images' });
  const watchedRegions = useWatch({ control: formContext.control, name: 'regions' });

  const { onOpen, onClose } = useDialog();

  const apiRef = useGridApiRef();

  const onFinallyUpload = (values: TypeThumbnailUploadStructure, idx: number, region: RegionCode, device: DeviceType) => {
    const { fileKey, clientname } = values.config;

    if (!fileKey || !clientname) return;
    const isUpadte = idx !== -1;
    const result = {
      region,
      device,
      html: '',
      file: { id: null, uploaded: { fileKey, clientname, components: [] } },
    };
    if (isUpadte) {
      fieldContext.update(idx, result);
    } else {
      fieldContext.append(result);
    }
  };
  const onResetUpload = (values: TypeThumbnailUploadStructure, idx: number) => {
    fieldContext.remove(idx);
  };

  const uploadOptions: ThumbnailUploadProps['uploadOptions'] = {
    accept: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
  };

  const columns: GridColDef<FormValues>[] = useMemo(() => {
    return [
      {
        field: 'device',
        headerName: '사용환경',
        headerAlign: 'center',
        align: 'center',
        sortable: false,
        width: 100,
        renderHeader: dataGridHeader,
        renderCell: (params: GridRenderEditCellParams) => {
          const { value } = params;
          return (
            <Typography variant="body/body3" fontWeight={400} color="gray/800" ml="8px">
              {value}
            </Typography>
          );
        },
      },
      ...((watchedRegions || []).map((region) => {
        const regionLabel = REGION_OPTIONS.find((option) => option.value === region)?.label;
        return {
          field: region,
          headerName: regionLabel,
          headerAlign: 'center',
          sortable: false,
          flex: 1,
          renderHeader: dataGridHeader,
          renderCell: (params: GridRenderEditCellParams) => {
            const device = params.row.device;
            const findIdx = fieldContext.fields.findIndex((field) => field.id === params?.value?.id);
            const findField = fieldContext.fields.find((field) => field.id === params?.value?.id);
            return (
              <Stack width="100%" height="100%" justifyContent={'center'} alignItems="center">
                <UploadThumbnaleCell
                  name="images"
                  uploadOptions={{
                    ...uploadOptions,
                    image: {
                      ...TEMP_IMAGE_OUTPUT,
                      clientname: findField?.file?.uploaded?.clientname,
                    },
                    onReset: (values) => onResetUpload(values, findIdx),
                    onFinally: (values) => {
                      onFinallyUpload(values, findIdx, region, device);
                    },
                    onModify: () => {
                      onOpen({
                        key: DIALOG_UPLOAD_IMAGE,
                        onClose: () => onClose(DIALOG_UPLOAD_IMAGE),
                        children: (
                          <UploadImageDialog
                            initialImages={findField as ImageInput}
                            onSuccess={(html) => {
                              if (!findField) return;
                              fieldContext.update(findIdx, { ...findField, html });
                              onClose(DIALOG_UPLOAD_IMAGE);
                            }}
                            onDelete={() => {
                              fieldContext.remove(findIdx);
                            }}
                            onClose={() => onClose(DIALOG_UPLOAD_IMAGE)}
                          />
                        ),
                      });
                    },
                  }}
                />
              </Stack>
            );
          },
        };
      }) as GridColDef[]),
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchedRegions, fieldContext]);

  const rows: GridRowsProp = useMemo(() => {
    const result = Object.values(DeviceType).map((device) => {
      const groupedDevice = groupBy(fieldContext.fields, 'device');
      const matchedDeviceAndRigion = watchedRegions.map((region) => {
        return groupedDevice[device]?.find((image) => image.region === region);
      });
      const merged = zipObject(watchedRegions, matchedDeviceAndRigion);
      return { id: `usage-environment-row-${device}`, device, ...merged };
    });

    return result;
  }, [watchedRegions, fieldContext.fields]);

  return (
    <Stack component="section" className={`${disabled ? 'disabled-wrapper' : ''}`}>
      <DataGridClient
        //
        apiRef={apiRef}
        rows={rows}
        columns={columns}
        pagination={false}
        rowSelection={false}
        getRowHeight={() => 80}
        hideFooter
      />
    </Stack>
  );
};

export default UsageEnvironmentClient;
