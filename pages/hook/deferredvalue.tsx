import { useState, useDeferredValue, useTransition, Suspense } from 'react'
import { NextPage } from 'next'

const HookDeferredValue: NextPage = () => {
  const [text, setText] = useState("");
  const [dataId, setDataId] = useState(0);
  const [isPending, startTransition] = useTransition()

  return (
    <>
      <p>
        <input
          value={text}
          onChange={event => {
            const newText = event.currentTarget.value;
            setText(newText)
            startTransition(() => {
              setDataId(newText.length)
            })
          }}
        />
      </p>
      <Suspense fallback={<p>Loading...</p>}>
        <p>DATA ID: {dataId}</p>
        <LoadedContents dataId={dataId} />
      </Suspense>
    </>
  )
}

export default HookDeferredValue;

const LoadedContents: React.FC<{ dataId: number }> = ({ dataId }) => {
  const data = "TEST"
  return <p>{data}</p>;
};
