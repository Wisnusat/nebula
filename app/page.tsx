"use client"

import { Nav } from '@/components/views/nav'
import { Hero } from '@/components/views/landing/hero'
import { Trade } from '@/components/views/trade'
import { Walkthrough } from '@/components/views/walkthrough'
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
