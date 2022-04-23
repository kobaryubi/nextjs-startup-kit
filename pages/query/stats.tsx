import {useState} from 'react';
import Todos from 'components/Todos';

const QueryStats = () => {
  const [isOpenTodos, setIsOpenTodos] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpenTodos(!isOpenTodos)}>Toggle</button>
      {isOpenTodos && <Todos />}
    </>
  )
}

export default QueryStats;


// import {
//   useMutation,
//   useQueryClient,
// import { getTodos, postTodo } from '../my-api'

//   // Mutations
//   const mutation = useMutation(postTodo, {
//     onSuccess: () => {
//       // Invalidate and refetch
//       queryClient.invalidateQueries('todos')
//     },
//   })

//   return (
//     <div>
//       <ul>
//         {query.data.map(todo => (
//           <li key={todo.id}>{todo.title}</li>
//         ))}
//       </ul>

//       <button
//         onClick={() => {
//           mutation.mutate({
//             id: Date.now(),
//             title: 'Do Laundry',
//           })
//         }}
//       >
//         Add Todo
//       </button>
//     </div>
//   )
// }
