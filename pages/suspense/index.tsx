import dynamic from 'next/dynamic'
import { Suspense, useState } from "react"

const SuspenseDynamic = dynamic(
  () => import('@/components/suspense/SuspenseDynamic'),
  { suspense: true }
)

const SuspenseImage = dynamic(
  () => import('@/components/suspense/SuspenseImage'),
  { suspense: true, ssr: false }
)

const SuspenseIndex = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} type="button">toggle</button>
      {isOpen && (
        <Suspense fallback={<p>IMAGE FALLBACK</p>}>
          <SuspenseImage src="https://sample-img.lb-product.com/wp-content/themes/hitchcock/images/1MB.png" />
        </Suspense>
      )}
      {isOpen && (
        <Suspense fallback={<p>DYNAMIC FALLBACK</p>}>
          <SuspenseDynamic />
        </Suspense>
      )}
    </div>
  )
}

export default SuspenseIndex
