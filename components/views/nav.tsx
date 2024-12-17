'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export function Nav() {
  return (
    <nav className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            Nebula<span className="inline-block w-2 h-2 rounded-full bg-[#7BC9FF] ml-0.5" />
          </span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/trade" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            Trade
          </Link>
          <Link href="/wallet" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            Wallet
          </Link>
          <Link href="/docs" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            Docs
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button className="bg-[#7BC9FF] text-white hover:opacity-90 transition-opacity">
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  )
}

