import type { NextApiRequest, NextApiResponse } from 'next';
import { HTTP_METHOD } from 'constants/index';

type Data = {
  id: number;
  title: string;
}[];

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  if (req.method === HTTP_METHOD.POST) {
    res.status(201).end()
  }

  if (req.method === HTTP_METHOD.GET) {
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
  }
};

export default handler;
