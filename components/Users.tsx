import useSWR, { SWRConfig } from 'swr'
import { fetcher } from 'utils/api';
import { API_ENDPOINT } from "constants/index";

const Users = () => {
  const { data } = useSWR(API_ENDPOINT.USERS, fetcher)

  return (
    <ul>
      {data.map(({ id, username }: any) => (
        <li key={id}>{username}</li>
      ))}
    </ul>
  )
}

export default Users;
