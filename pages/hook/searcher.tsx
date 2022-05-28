import { useState, useMemo, useTransition } from 'react';
import { v4 } from 'uuid';

const Searcher = () => {
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState('');
  const resultElement = useMemo(() => {
    if (!query) {
      return ""
    }

    return (
      <ul>
        {Array(5000).fill({}).map(() => {
          const id = v4();
          return <li key={id}>search result {id}</li>
        })}
      </ul>
    )
  }, [query])

  return (
    <div>
      <p>{isPending ? "Loading" : `Query: ${query}`}</p>
      <input
        type="text"
        onChange={(event) => {
          startTransition(() => {
            setQuery(event.target.value)
          })
        }}
      />
      {resultElement}
    </div>
  )
}

export default Searcher;
