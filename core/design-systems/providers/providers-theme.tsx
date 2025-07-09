'use client';

import createCache from '@emotion/cache';
import { Global } from '@emotion/react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { theme as aconTheme } from '@/core/design-systems';
import emotionReset from 'emotion-reset';
import { ThemeProviderProps } from '@/core/design-systems/providers/providers.type';
import { carpenFontFace } from '@/core/shared/styles/font';
import { carpenGlobal } from '@/core/shared/styles/global';

const MUI_CACHE = createCache({ key: 'css', prepend: true });

const ThemeProvider = (props: ThemeProviderProps) => {
  const { lang, children } = props;

  return (
    <AppRouterCacheProvider options={MUI_CACHE}>
      <MuiThemeProvider theme={aconTheme}>
        <Global styles={[emotionReset, carpenGlobal(lang), carpenFontFace(lang)]} />
        {children}
      </MuiThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default ThemeProvider;
