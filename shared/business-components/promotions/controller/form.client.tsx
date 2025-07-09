'use client';

import React, { Fragment, useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { Paper } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, Divider, Stack, Typography } from '@/core/design-systems';
import { yupResolver } from '@hookform/resolvers/yup';
import { EnumPromotionStatus } from '@/core/shared/service/admin/types/promotions';
import { CurrencyCode } from '@/core/shared/service/enum/currency-code';
import { DiscountMethod } from '@/core/shared/service/enum/discount-method';
import { RegionCode } from '@/core/shared/service/enum/region-code';
import { PromotionItemOutput } from '@/core/shared/service/output/promotion-item-output';
import { PromotionOutput } from '@/core/shared/service/output/promotion-output';
import AdultClient from '@/shared/business-components/promotions/controller/adult/adult.client';
import BasicClient from '@/shared/business-components/promotions/controller/basic/basic.client';
import ExposureMallClient from '@/shared/business-components/promotions/controller/exposure-mall/exposure-mall';
import PeriodClient from '@/shared/business-components/promotions/controller/period/period.client';
import SelectionProductsClient from '@/shared/business-components/promotions/controller/selection-products/selection-products.client';
import SellerCostBurdenClient from '@/shared/business-components/promotions/controller/seller-cost-burden/seller-cost-burden.client';
import SlugClient from '@/shared/business-components/promotions/controller/slug/slug.client';
import UsageEnvironmentClient from '@/shared/business-components/promotions/controller/usage-environment/usage-environment.client';
import FooterClient from '@/shared/business-components/promotions/layout/footer.client';
import { getPromotionStatusLabel, VALIDATION_SCHEMA } from '@/shared/business-components/promotions/promotions.const';
import { FormValues } from '@/shared/business-components/promotions/promotions.type';

type FormClientProps = {
  promotion?: PromotionOutput;
  products?: PromotionItemOutput[];
  isCreate: boolean;
  status: EnumPromotionStatus;
};

const FormClient = (props: FormClientProps) => {
  const { promotion, products, isCreate, status } = props;

  const formSchema = useMemo(() => VALIDATION_SCHEMA, []);

  const formValues = useMemo(() => {
    if (!promotion || isCreate) {
      // create
      return {
        regions: [RegionCode.KR, RegionCode.JP],
        title: '',
        currency: CurrencyCode.KRW,
        discountMethod: DiscountMethod.RATE,
        discountValue: 0,
        burdenRate: 0,
        since: null,
        until: null,
        slug: '',
        isAdult: false,
        description: '',
        images: [],
        products: [],
      };
    }

    return {
      // update convert to promotion input
      regions: [RegionCode.KR, RegionCode.JP],
      title: promotion.title,
      currency: promotion.currency,
      discountMethod: promotion.discountMethod,
      discountValue: promotion.discountValue,
      burdenRate: promotion.burdenRate,
      since: dayjs(promotion.since).toISOString(),
      until: dayjs(promotion.until).toISOString(),
      slug: promotion?.slug || '',
      isAdult: promotion.isAdult,
      description: promotion?.description || '',
      images: (promotion?.images || []).map((image) => {
        const { file, html, ...rest } = image;
        const { id, clientname } = file;
        return {
          ...rest,
          ...(id && { file: { id, uploaded: { clientname } } }),
          ...(html && { html }),
        };
      }),
      products: products || [],
    };
  }, [promotion, products]);

  const methods = useForm<FormValues>({
    defaultValues: formValues,
    resolver: yupResolver(formSchema) as any,
    mode: 'onChange',
  });

  const isDone = useMemo(() => {
    return [EnumPromotionStatus.DONE].includes(status);
  }, [status]);

  const disabled = useMemo(() => {
    return [EnumPromotionStatus.READY, EnumPromotionStatus.RUNNING, EnumPromotionStatus.DONE].includes(status);
  }, [status]);

  const isEditable = useMemo(() => {
    if ([EnumPromotionStatus.READY, EnumPromotionStatus.RUNNING].includes(status)) {
      return true;
    }
    return false;
  }, [status]);

  return (
    <FormProvider {...methods}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BasicClient disabled={disabled && !isEditable} />
        <Paper elevation={4} sx={{ p: '24px', flexDirection: 'column', gap: '36px', display: 'flex', borderRadius: '16px' }}>
          <Typography variant="body/body1" fontWeight={700}>
            상세 설정
          </Typography>
          <PeriodClient disabled={disabled} isEditable={isEditable} />
          <SlugClient disabled={disabled} />
          <Divider />
          <AdultClient disabled={disabled} />
          <SellerCostBurdenClient disabled={disabled} />
          <Divider />
          <ExposureMallClient disabled={disabled} />
          <UsageEnvironmentClient disabled={disabled && !isEditable} />
        </Paper>
        <Divider />
        {!isCreate && (
          <Fragment>
            <Typography variant="body/body1" fontWeight={700}>
              상품 정보
            </Typography>
            <Paper
              elevation={4}
              className={disabled && !isEditable ? 'disabled-wrapper' : ''}
              sx={{ p: '24px', flexDirection: 'column', gap: '36px', display: 'flex', borderRadius: '16px' }}
            >
              <SelectionProductsClient />
            </Paper>
          </Fragment>
        )}

        <FooterClient status={status} />
      </LocalizationProvider>
    </FormProvider>
  );
};

export default FormClient;
