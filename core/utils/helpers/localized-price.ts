import { DiscountMethod } from '@/core/shared/service/enum/discount-method';
import { DoubleAsNumber } from '@/core/utils/types/overridable/primitive';

import { EnumLanguageCode, EnumLocaleCode, generateLanguage } from '@/shared/consts/common/language';

type TypeUseLocailizedPriceParams = {
  lang: EnumLanguageCode;
  options?: Intl.NumberFormatOptions;
};

type TypeDiscountOptions = {
  discountMethod: DiscountMethod;
  discountValue: DoubleAsNumber;
};

type TypeLocalizedPriceOutput = {
  price: (price: DoubleAsNumber, discountOptions?: TypeDiscountOptions) => string;
  discount: (price: DoubleAsNumber, discountOptions: TypeDiscountOptions) => string;
  credits: (price: DoubleAsNumber) => string;
  unit: string;
};

const LocalizedPrice = (props: TypeUseLocailizedPriceParams): TypeLocalizedPriceOutput => {
  const { lang, options } = props;
  const { currencySymbol, localeCode } = generateLanguage(lang);

  const decimalPrecisionLangs: EnumLanguageCode[] = [EnumLanguageCode.EN];
  const defaultNumberFormatOptions: Intl.NumberFormatOptions = {
    style: 'decimal',
    roundingMode: 'trunc',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    ...(decimalPrecisionLangs.includes(lang) && {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
    ...options,
  };

  const discountPrice = (price: DoubleAsNumber, discountOptions: TypeDiscountOptions) => {
    const { discountMethod, discountValue } = discountOptions;
    if (discountMethod === DiscountMethod.RATE) {
      return Number((price * (1 - discountValue)).toFixed(2));
    }
    if (discountMethod === DiscountMethod.SUBTRACT) {
      return price - discountValue;
    }
    return price;
  };

  const price = (price: DoubleAsNumber, discountOptions?: TypeDiscountOptions) => {
    const formatValue = discountOptions ? discountPrice(price, discountOptions) : price;
    return Intl.NumberFormat(localeCode.value, defaultNumberFormatOptions).format(formatValue);
  };

  const discount = (price: DoubleAsNumber, discountOptions: TypeDiscountOptions) => {
    const { discountMethod, discountValue } = discountOptions;

    let formatValue: number;

    if (discountMethod === DiscountMethod.RATE) {
      formatValue = discountValue;
    } else {
      formatValue = price > 0 ? discountValue / price : 0;
    }

    return Intl.NumberFormat(localeCode.value, {
      style: 'percent',
      roundingMode: 'floor',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(formatValue);
  };

  const credits = (price: DoubleAsNumber) => {
    const isKorean = lang === EnumLanguageCode.KO;
    const locale = lang === EnumLanguageCode.KO ? EnumLocaleCode.ko : EnumLocaleCode.en;
    return Intl.NumberFormat(locale, {
      style: 'decimal',
      roundingMode: 'trunc',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      ...(!isKorean && {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
      ...options,
    }).format(price);
  };

  return {
    price,
    discount,
    credits,
    unit: currencySymbol.value,
  };
};

export const boundPrice = (origin: number, options?: { bound?: { min?: number; max?: number } }) => {
  const { bound } = options ?? {};
  const { min = -Infinity, max = Infinity } = bound ?? {};
  return origin < min ? min : origin > max ? max : origin;
};

export default LocalizedPrice;
