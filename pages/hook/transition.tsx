import { useTransition, useState, Suspense, useMemo } from 'react'
import { NextPage } from 'next'
import { loadMock } from 'util/index'

let loadedMock: string | null = null;

const AdditionalContents = () => {
  const mock = useMemo(() => {
    if (loadedMock) {
      return loadedMock
    }
  
    throw loadMock().then(data => {
      loadedMock = data;
    })
  }, [])

  return <p>{mock}</p>;
};

const HookTransition: NextPage = () => {
  const [isShowingAdditionalContents, setIsShowingAdditionalContents] = useState(false);
  const [isPending, startTransition] = useTransition()

  return (
    <>
      {isShowingAdditionalContents ? (
        <Suspense fallback={<p>loading...</p>}>
          <AdditionalContents />
        </Suspense>
      ) : (
        <button onClick={() => setIsShowingAdditionalContents(true)}>追加コンテンツを表示</button>
      )}
    </>
  )
}

export default HookTransition
