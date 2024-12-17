'use client'

import { Nav } from '@/components/views/nav'
import { Hero } from '@/components/views/hero'
import { Trade } from '@/components/views/trade'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Nav />
      <div className="container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2">
          <Hero />
        </div>
        <div className="w-full md:w-1/2 max-w-md mx-auto">
          <Trade />
        </div>
      </div>
    </main>
  )
}
