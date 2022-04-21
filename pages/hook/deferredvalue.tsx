import { useState, useDeferredValue } from 'react'
import { NextPage } from 'next'

const HookDeferredValue: NextPage = () => {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);

  return (
    <>
      <input value={text} onChange={event => setText(event.currentTarget.value)} />
      <p>{deferredText}</p>
    </>
  )
}

export default HookDeferredValue;
