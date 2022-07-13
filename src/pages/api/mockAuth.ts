import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ ok: true, redirectUrl: `${process.env.NEXTAUTH_URL}/auth/fakeGoogle` });
};
