"use client"

import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { AlignRight, ArrowDownLeft } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'

export function Nav() {
  const [isOpen, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path) && pathname !== '/';
  };

  const menuItems = [
    { name: 'Home', path: '/home' },
    { name: 'Trade', path: '/' },
    { name: 'Wallet', path: '/wallet' },
  ]

  return (
    <>
      <nav className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              Nebula<span className="inline-block w-2 h-2 rounded-full bg-[#7BC9FF] ml-0.5" />
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <Link key={index} href={item?.path} className={`${isActive(item?.path) ? "text-[#7BC9FF] dark:text-[#7BC9FF]" : "text-gray-600 dark:text-gray-300"} hover:text-[#7BC9FF] dark:hover:text-white transition-colors`}>
                {item?.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button className="bg-[#7BC9FF] dark:text-black hover:opacity-90 transition-opacity font-semibold">
              Connect Wallet
            </Button>
            <div className="md:hidden flex">
              <AlignRight onClick={() => setOpen(!isOpen)} />
            </div>
          </div>
        </div>
      </nav>

      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetContent side="right">
          {menuItems.map((item, index) => (
            <Link key={index} href={item?.path} className={`${isActive(item?.path) ? "text-[#7BC9FF] dark:text-[#7BC9FF]" : "text-gray-600 dark:text-gray-300"} hover:text-[#7BC9FF] dark:hover:text-white transition-colors flex flex-col mb-4`}>
              {item?.name}
            </Link>
          ))}
        </SheetContent>
      </Sheet>
    </>
  )
}

