import dynamic from 'next/dynamic'
import { Suspense, useState } from "react"

const SuspenseDynamic = dynamic(
  () => import('@/components/suspense/SuspenseDynamic'),
  { suspense: true }
)

const SuspenseIndex = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setIsOpen(true)} type="button">open</button>
      {isOpen && (
        <Suspense fallback={<p>FALLBACK</p>}>
          <SuspenseDynamic />
        </Suspense>
      )}
    </div>
  )
}

export default SuspenseIndex
