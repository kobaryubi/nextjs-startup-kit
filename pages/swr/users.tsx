import { GetServerSideProps } from 'next';
import { SWRConfig } from 'swr'
import { API_ENDPOINT, API_SERVER_BASE_URL } from "constants/index";
import Users from 'components/Users';
import urlJoin from 'url-join';

const SwrUsers = ({ fallback }: any) => {

  return (
    <SWRConfig value={{ fallback }}>
      <Users />
    </SWRConfig>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(urlJoin(API_SERVER_BASE_URL, API_ENDPOINT.USERS))
  const users = await response.json()
  
  return {
    props: {
      fallback: {
        [API_ENDPOINT.USERS]: users
      }
    }
  }
}

export default SwrUsers;
