import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const MarketplacePage = dynamic(
  () => import('../components/pages/marketplace'),
  { ssr: true }
)

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MarketplacePage />
    </Suspense>
  )
}
