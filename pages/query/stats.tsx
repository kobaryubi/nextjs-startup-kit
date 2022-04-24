import { useState } from 'react';
import { useQueryClient, useMutation } from 'react-query'
import Todos from 'components/Todos';
import { API_ENDPOINT, HTTP_METHOD } from 'constants/index';
 
const QueryStats = () => {
  const queryClient = useQueryClient()
  const [title, setTitle] = useState('')
  const [isOpenTodos, setIsOpenTodos] = useState(false)
  const mutation = useMutation(
    (todo: any) => {
      return fetch(API_ENDPOINT.TODOS, {
        method: HTTP_METHOD.POST,
        body: JSON.stringify(todo)
      })
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('todos')
      }
    }
  )

  const handleSubmit = (event: any) => {
    event.preventDefault();
    mutation.mutate({ id: new Date(), title })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <button type="submit">Create Todo</button>
      </form>
      {mutation.isLoading && <p>Adding todo...</p>}
      <button onClick={() => setIsOpenTodos(!isOpenTodos)}>Toggle</button>
      {isOpenTodos && <Todos />}
    </>
  )
}

export default QueryStats;
