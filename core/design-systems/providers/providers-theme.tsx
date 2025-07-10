'use client';

import { theme as aconTheme } from '@/core/design-systems';
import { ThemeProviderProps } from '@/core/design-systems/providers/providers.type';
import { globalFontFace } from '@/core/shared/styles/font';
import { globalStyles } from '@/core/shared/styles/global';
import createCache from '@emotion/cache';
import { Global } from '@emotion/react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import emotionReset from 'emotion-reset';

const MUI_CACHE = createCache({ key: 'css', prepend: true });

const ThemeProvider = (props: ThemeProviderProps) => {
  const { lang, children } = props;

  return (
    <AppRouterCacheProvider options={MUI_CACHE}>
      <MuiThemeProvider theme={aconTheme}>
        <Global styles={[emotionReset, globalStyles(lang), globalFontFace(lang)]} />
        {children}
      </MuiThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default ThemeProvider;
