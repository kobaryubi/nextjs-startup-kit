import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: number;
  username: string;
}[];

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  res.status(200).json([
    {
      id: 1,
      username: "a"
    },
    {
      id: 2,
      username: "b"
    }
  ])
}

export default handler;
