import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: number;
  username: string;
}[];

const sleep = (ms: number) => new Promise(res => setTimeout(res, ms))

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { page } = req.query;

  if (page) {
    const pageNumber = parseInt(page.toString(), 10)

    await sleep(3000);
    res.status(200).json(
      Array(10).fill("").map((_, index) => ({
        id: (pageNumber - 1) * 10 + index,
        username: `user ${(pageNumber - 1) * 10 + index}`
      }))
    )

    return;
  }

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
