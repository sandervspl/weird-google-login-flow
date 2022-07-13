import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import apiConfig from 'services/api/config';

declare module 'next-auth/jwt' {
  export interface JWT {
    accessToken: string;
  }
}

declare module 'next-auth' {
  export interface User {
    token: string;
  }

  export interface Session {
    accessToken: string;
  }
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        token: {},
      },
      async authorize(cred) {
        try {
          const response = await (await fetch(
            'http://localhost:3000/api/verifyToken',
            {
              method: 'POST',
              body: JSON.stringify({
                token: cred?.token,
              }),
            })).json();

          // Return een object met de token
          if (response?.ok) {
            return {
              token: cred?.token,
            };
          } else {
            console.error('[ERROR] next-auth authorize: No access token returned', response);
          }
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
      if (user) {
        token.accessToken = user.token;
      }

      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;

      return session;
    },
  },
  pages: {
    signIn: apiConfig.loginPath,
  },
});
