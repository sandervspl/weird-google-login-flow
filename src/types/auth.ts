import type { Session as AuthSession } from 'next-auth';

export type Session = AuthSession & {
  accessToken?: string;
};
