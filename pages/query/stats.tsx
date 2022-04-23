import { useQuery } from 'react-query'
import { API_ENDPOINT } from 'constants/index';
  // if (isLoading) {
  //   return <span>Loading...</span>
  // }

  // if (isError) {
  //   return <span>Error: {error.message}</span>
  // }

  // // We can assume by this point that `isSuccess === true`
  // return (
  //   <ul>
  //     {data.map(todo => (
  //       <li key={todo.id}>{todo.title}</li>
  //     ))}
  //   </ul>
  // )


//   if (status === 'loading') {
//     return <span>Loading...</span>
//   }

//   if (status === 'error') {
//     return <span>Error: {error.message}</span>
//   }

//   // also status === 'success', but "else" logic works, too
//   return (
//     <ul>
//       {data.map(todo => (
//         <li key={todo.id}>{todo.title}</li>
//       ))}
//     </ul>
//   )
// }

const fetchTodos = async () => {
  const response = await fetch(API_ENDPOINT.TODOS);
  return response.json();
}

const QueryStats = () => {
  const { status, data, error } = useQuery('todos', fetchTodos)
  console.log(data);
  return (
    <p>TEST</p>
  )
}
//   if (isLoading) return 'Loading...'

//   if (error) return 'An error has occurred: ' + error.message

//   return (
//     <div>
//       <h1>{data.name}</h1>
//       <p>{data.description}</p>
//       <strong>👀 {data.subscribers_count}</strong>{' '}
//       <strong>✨ {data.stargazers_count}</strong>{' '}
//       <strong>🍴 {data.forks_count}</strong>
//     </div>
//   )
// }

export default QueryStats;



// import {
//   useMutation,
//   useQueryClient,
// import { getTodos, postTodo } from '../my-api'

// function App() {
//   return (
//     // Provide the client to your App
//     <QueryClientProvider client={queryClient}>
//       <Todos />
//     </QueryClientProvider>
//   )
// }

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
