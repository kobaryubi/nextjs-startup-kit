import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Suspense } from "react"

const SuspenseHeavy = dynamic(
  () => import('@/components/suspense/SuspenseHeavy'),
  { suspense: true }
)

const SuspenseIndex = () => {

  return (
    <div>
      <Link href="/suspense/initial">suspense initial</Link>
      <Suspense fallback={<p>================================================================</p>}>
        <SuspenseHeavy />
      </Suspense>
    </div>
  )
}

export default SuspenseIndex
