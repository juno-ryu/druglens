import { EnumLanguageCode } from '@/shared/consts/common/language';

export interface RootStyleCacheProps extends React.PropsWithChildren {
  //
}

export interface ThemeProviderProps extends React.PropsWithChildren {
  lang: EnumLanguageCode;
}

export interface NotistackProviderProps extends React.PropsWithChildren {
  //
}
