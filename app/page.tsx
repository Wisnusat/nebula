"use client"

import { Hero } from '@/components/views/landing/hero'
import FAQ from '@/components/views/landing/faq'
import About from '@/components/views/landing/about'
import Feature from '@/components/views/landing/features'
import Tutorial from '@/components/views/landing/tutorial'

export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Tutorial/>
      <Feature/>
      <FAQ/>
    </>
  )
}
