import NextAuth, { AuthError, NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import Naver from 'next-auth/providers/naver';
import { EnumAccountProvider } from '@/shared/consts/common/auth';
import { CustomNetworkError, serializeError } from '@/core/utils/errors/custom-network-error';
import ACON_APIS from '@/core/shared/service/acon/acon.service';
import ADMIN_APIS from '@/core/shared/service/admin/admin.service';

const SETUP_CREDENTIALS = {
  email: { label: 'Email', type: 'email' },
  password: { label: 'Password', type: 'password' },
  provider: { label: 'Provider', type: 'text' },
  token: { label: 'Token', type: 'text' },
  userId: { label: 'UserID', type: 'text' },
  verifyCode: { label: 'VerifyCode', type: 'text' },
};

const INITIAL_CREDENTIALS = {
  email: '',
  password: '',
  provider: '',
  token: '',
};

export const authOptions: NextAuthConfig = {
  providers: [
    Google({
      clientId: process.env?.AUTH_GOOGLE_ID ?? '',
      clientSecret: process.env?.AUTH_GOOGLE_SECRET ?? '',
    }),
    Naver({
      clientId: process.env?.AUTH_NAVER_ID ?? '',
      clientSecret: process.env?.AUTH_NAVER_SECRET ?? '',
    }),
    Credentials({
      name: 'credentials',
      credentials: SETUP_CREDENTIALS,
      authorize: async (credentials = INITIAL_CREDENTIALS) => {
        try {
          // console.log('******* authorize credentials', credentials);
          const { email = '', password = '', provider = '', token = '', userId = '', verifyCode = '' } = credentials as Partial<Record<keyof typeof SETUP_CREDENTIALS, string>>;
          const payload = structuredClone({ email, password, provider: provider.toUpperCase(), token, userId, verifyCode });
          // ::TODO:: ADMIN not support email-login
          // const result =
          //   provider.toLocaleLowerCase() === EnumAccountProvider.CREDENTIALS
          //     ? await HUB_APIS['auths/email-login'].post(payload)
          //     : await HUB_APIS['auths/social-login'].post(payload);
          const result =
            provider.toLocaleLowerCase() === EnumAccountProvider.CREDENTIALS
              ? await ACON_APIS['auths/email-login'].post(payload)
              : await ADMIN_APIS['auths/verify-code'].post(payload);
          // console.log('******* authorize credentials result', result);
          return {
            id: email,
            email: email,
            provider: EnumAccountProvider.CREDENTIALS,
            accessToken: result.token,
          };
        } catch (error) {
          if (!(error instanceof CustomNetworkError)) throw error;
          throw new AuthError('authorize', { cause: serializeError(error) });
        }
      },
    }),
  ],
  callbacks: {
    signIn: async (params) => {
      // console.log('******* signIn params', params);
      const { user } = params;
      const allowedDomains = ['@acon3d\\.com'];
      const allowedDomainPatterns = allowedDomains.map((domain) => new RegExp(`${domain}$`));
      if (allowedDomainPatterns.some((pattern) => pattern.test(user?.email ?? ''))) return true;
      return true;
    },
    jwt: async (params) => {
      // console.log('******* jwt params', params);
      const { token, user, account, trigger, session } = params;
      if (user) {
        token.email = user?.email;
        token.provider = account?.provider;
        token.accessToken = account?.provider === 'credentials' ? user?.accessToken : account?.providerAccountId;
      }
      if (trigger === 'update' && session) {
        Object.assign(token, session.user);
      }
      return token;
    },
    session: async (params) => {
      // console.log('******* session params', params);
      const { session, token } = params;
      session.user = {
        id: token?.accessToken as string,
        email: token?.email as string,
        provider: token?.provider,
        emailVerified: Boolean(token?.email) ? new Date() : null,
      };
      session.accessToken = token?.accessToken;
      return session;
    },
    redirect: async (params) => {
      // console.log('******* redirect params', params);
      const { url, baseUrl } = params;
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      if (url) {
        const { search, origin } = new URL(url);
        const callbackUrl = new URLSearchParams(search).get('callbackUrl');
        if (callbackUrl) return callbackUrl.startsWith('/') ? `${baseUrl}${callbackUrl}` : callbackUrl;
        if (origin === baseUrl) return url;
      }
      return baseUrl;
    },
  },

  debug: process.env?.NODE_ENV !== 'production',
  secret: process.env?.AUTH_SECRET ?? '',
  // ::TODO::
  // trustHost: process.env?.NODE_ENV !== 'production' || !(process.env?.AUTH_URL ?? '').startsWith('https://'),
  trustHost: true,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
    error: '/users/logout',
  },
};

export const { auth, handlers, signIn, signOut, unstable_update: update } = NextAuth(authOptions);
