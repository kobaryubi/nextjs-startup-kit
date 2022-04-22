import { FC, memo, useState, useDeferredValue } from 'react'
import { NextPage } from 'next'

const HookDeferredValue: NextPage = () => {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);

  return (
    <>
      <input value={text} onChange={event => setText(event.currentTarget.value)} />
      <HeavyTenThousand text={deferredText} />
    </>
  )
}

export default HookDeferredValue;

const HeavyTenThousand: FC<{ text: string }> = memo(({ text }) => (
  <p>
    {Array.from({length: 100}).map((_, i) => (
      <HeavyHundred key={i} text={text} />
    ))}
  </p>
))

const HeavyHundred: FC<{ text: string }> = ({text}) => (
  <>
    {Array.from({ length: 100 }).map((_, i) => (
      <span key={i}>{text}</span>
    ))}
  </>
)
