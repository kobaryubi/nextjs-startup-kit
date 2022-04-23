import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: number;
  title: string;
}[];

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  res.status(200).json([
    {
      id: 1,
      title: "title"
    },
    {
      id: 2,
      title: "title"
    }
  ])
};

export default handler;
