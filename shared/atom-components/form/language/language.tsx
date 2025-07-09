'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Button, DesignIcon, MenuItem, Stack, Typography } from '@/core/design-systems';
import { DEFINED_LANGS, FALLBACK_LANG, PRIORITY_LANG } from '@/shared/consts/common/language';
import { getPriority } from '@/core/utils/helpers/sort';
import { hasElement } from '@/core/utils/helpers/style';
import { useTranslation } from '@/core/utils/i18next/i18next.client';
import useDynamicRoute from '@/core/shared/hooks/display/use-dynamic-route/use-dynamic-route';
import ControlledTextField from '@/core/shared/components/hook-form/controlled-text-field/controlled-text-field';
import { LanguageProps, TypeLanguageForm } from '@/shared/atom-components/form/language/language.type';

const Language = <C extends React.ElementType>(props: LanguageProps<C>) => {
  const { headlineStyle = {}, submitStyle = {}, className = '', onSubmit, ...restProps } = props;

  const router = useRouter();
  const { params, pathname } = useDynamicRoute();
  const { lang } = params;
  const { t: repairTrans } = useTranslation(lang, '');

  const languageCodes = DEFINED_LANGS.sort((a, b) => getPriority(PRIORITY_LANG, a) - getPriority(PRIORITY_LANG, b) || a.localeCompare(b));
  const methods = useForm<TypeLanguageForm>({
    defaultValues: {
      languageCode: lang ?? FALLBACK_LANG,
    },
  });

  const onValid = (data: TypeLanguageForm) => {
    router.replace(pathname.replace(`/${lang}`, `/${data.languageCode}`));
    onSubmit?.(data);
  };

  return (
    <Stack direction="row" alignItems="center" className={`${className}`} noValidate onSubmit={methods.handleSubmit(onValid)} {...restProps}>
      <Typography
        component="label"
        htmlFor="languageCode"
        variant="body/body5"
        fontWeight={600}
        width={{ desktop: '114px', tablet: '114px', mobile: '106px' }}
        paddingRight="40px"
        sx={headlineStyle}
      >
        {repairTrans('언어 변경')}
      </Typography>
      <DesignIcon variant="Language" color="black" width="24px" titleAccess="" aria-hidden={true} />
      <ControlledTextField
        control={methods.control}
        variant="outlined"
        select={true}
        name="languageCode"
        rules={{}}
        required={true}
        hiddenLabel={true}
        slotProps={{
          inputLabel: {
            shrink: true,
          },
          select: {
            sx: (theme) => ({
              margin: '-4px -13px',
              width: '120px',
              scale: 0.78,
              background: theme.palette['white'],
            }),
            MenuProps: {
              slotProps: { paper: { sx: { scale: 0.78 } } },
            },
          },
        }}
        sx={{
          margin: hasElement(submitStyle) ? '0 8px 0 6px' : '0 0 0 10px',
        }}
        onChange={() => {
          if (hasElement(submitStyle)) return;
          methods.handleSubmit(onValid)();
        }}
      >
        {languageCodes.map((lang) => (
          <MenuItem key={lang} value={lang}>
            {repairTrans(lang)}
          </MenuItem>
        ))}
      </ControlledTextField>
      <Button type="submit" variant="contained" size="medium" color="augment/primary/600" sx={{ ...submitStyle }}>
        {repairTrans('선택')}
      </Button>
    </Stack>
  );
};

export default Language;
