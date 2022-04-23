import { useQuery } from 'react-query'
import { API_ENDPOINT, FETCH_STATUS } from 'constants/index';

const fetchTodos = async () => {
  const response = await fetch(API_ENDPOINT.TODOS);
  return response.json();
}

const Todos = () => {
  const { status, data } = useQuery('todos', fetchTodos)

  if (status === FETCH_STATUS.LOADING) {
    return <p>Loading...</p>
  }

  return (
    <ul>
      {data.map(({ id, title }: any) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  )
}

export default Todos;