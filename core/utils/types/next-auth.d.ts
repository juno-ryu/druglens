import { AuthError as NextAuthAuthError, DefaultSession as NextAuthDefaultSession, DefaultUser as NextAuthDefaultUser } from 'next-auth';
import { DefaultJWT as NextAuthDefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
  type ISODateString = string;

  interface Session extends NextAuthDefaultSession {
    user: {
      email?: string;
      provider?: string;
    };
    accessToken?: string;
    message?: string;
  }

  interface User extends NextAuthDefaultUser {
    email?: string;
    provider?: string;
    accessToken?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends NextAuthDefaultJWT {
    email?: string;
    provider?: string;
    accessToken?: string;
  }
}
