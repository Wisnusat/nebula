import React from 'react'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Facebook, Twitter, Instagram } from 'lucide-react'

function Footer() {
  return (
    <>
      <footer className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  Nebula<span className="inline-block w-2 h-2 rounded-full bg-[#7BC9FF] ml-0.5" />
                </span>
              </Link>
              <p className="text-muted-foreground">Seamless Web3 wallet exchange</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Facebook size={24} />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Twitter size={24} />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Instagram size={24} />
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/wallet" className="text-muted-foreground hover:text-primary">Wallet</Link></li>
                <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                <li><Link href="/blogs" className="text-muted-foreground hover:text-primary">Blogs</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Support</h4>
              <ul className="space-y-2">
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
                <li><Link href="/terms" className="text-muted-foreground hover:text-primary">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="/docs" className="text-muted-foreground hover:text-primary">Docs</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Start Exchanging</h4>
              <Button className="w-full font-semibold">
                Try exchange
              </Button>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full py-4 text-xs text-white bg-gray-900 flex justify-center">Crafted with passion by Team Nebula™ 🌍</div>
    </>
  )
}

export default Footer