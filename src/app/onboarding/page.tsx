'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const OnboardingFormComponent = dynamic(
  () => import('@/components/pages/onboarding-form'),
  { ssr: false }
)

export default function OnboardingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OnboardingFormComponent />
    </Suspense>
  )
}
