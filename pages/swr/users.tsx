import useSWR from 'swr'
import { API_ENDPOINT } from "constants/index";
import { fetcher } from 'utils/api';

const SwrUsers = () => {
  const { data } = useSWR(API_ENDPOINT.USERS, fetcher)

  if (!data) {
    return <p>Loading...</p>
  }

  return (
    <ul>
      {data.map(({ id, username }: any) => (
        <li key={id}>{username}</li>
      ))}
    </ul>
  );
}

export default SwrUsers;
