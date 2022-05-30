import { useState } from 'react';
import useSWR from 'swr';

const fetcher = async (...args: [string]) => {
  const response = await fetch(...args)
  const data = await response.json()
  return data;
}

const Page = ({ page }: {page: number}) => {
  const { data = [] } = useSWR(`/api/users?page=${page}`, fetcher)

  return (
    <ul>
      {data.map(({ id, username }: {id: number, username: string}) => <li key={id}>{username}</li>)}
    </ul>
  )
}

const SwrPagination = () => {
  const [page, setPage] = useState(1)

  return (
    <div>
      <Page page={page}/>
      <div style={{ display: 'none' }}>
        <Page page={page + 1} />
      </div>
      <button onClick={() => setPage(page - 1)}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  )
}

export default SwrPagination;
