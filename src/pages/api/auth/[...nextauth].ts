import * as i from 'types';
import NextAuth from 'next-auth';
import type { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';

import { Auth, getAuthenticationConfig } from 'services/Auth';
import apiConfig from 'services/api/config';

const { REFRESH_TOKEN_INTERVAL } = getAuthenticationConfig();

// Augment JWT and User types for our use case
declare module 'next-auth/jwt' {
  export interface JWT {
    accessToken: string;
    refreshToken: string;
    expiresAt: number;
  }
}

declare module 'next-auth' {
  export interface User {
    access: string;
    refresh: string;
  }
}

async function refreshToken(token: JWT): Promise<JWT> {
  const nextToken = await Auth.post<i.JWTRefreshResponse>({
    path: '/jwt/refresh',
    body: {
      refresh: token.refreshToken,
    },
  });

  token.accessToken = nextToken.access;
  token.expiresAt = Date.now() + REFRESH_TOKEN_INTERVAL;

  return token;
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(cred) {
        try {
          const response = await Auth.post<i.JWTCreateResponse>({
            path: '/jwt/create',
            body: {
              email: cred?.email.toLowerCase(),
              password: cred?.password,
            },
          });

          if (response?.access) {
            return response;
          }

          console.error('[ERROR] next-auth authorize: No access token returned', response);
          return null;
        } catch (error) {
          console.error('[ERROR] next-auth authorize:', error);
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      // Initial sign in
      if (user != null) {
        token.accessToken = user.access;
        token.refreshToken = user.refresh;
        token.expiresAt = Date.now() + REFRESH_TOKEN_INTERVAL;
      }

      if (!token) {
        throw new Error('No token returned');
      }

      // Return active token
      if (Date.now() < token.expiresAt) {
        return token;
      }

      // Expired, try updating it
      return await refreshToken(token);
    },
    async session({ session, token }) {
      // Send properties to the client
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;

      return session;
    },
  },
  pages: {
    signIn: apiConfig.loginPath,
  },
});
