"use client"

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, ArrowDownLeft, Scan, History } from 'lucide-react'
import { useState } from 'react'
import { WalletActions } from './wallet-actions'
import { WalletPay } from './wallet-pay'
import { WalletHistory } from './wallet-history'
import { motion } from 'framer-motion'

export function WalletMobileNav() {
  const [activeSheet, setActiveSheet] = useState<string | null>(null)

  const renderSheetContent = () => {
    switch (activeSheet) {
      case 'send':
        return <WalletActions type="send" />
      case 'receive':
        return <WalletActions type="receive" />
      case 'pay':
        return <WalletPay />
      case 'history':
        return <WalletHistory />
      default:
        return null
    }
  }

  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 md:hidden mobile-nav"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container px-4 pb-4">
        <div className="bg-white dark:bg-gray-800 rounded-full p-2 flex items-center justify-around shadow-lg">
          <Sheet open={activeSheet === 'receive'} onOpenChange={(open) => setActiveSheet(open ? 'receive' : null)}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowDownLeft className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[90vh] rounded-t-2xl">
              {renderSheetContent()}
            </SheetContent>
          </Sheet>

          <Sheet open={activeSheet === 'send'} onOpenChange={(open) => setActiveSheet(open ? 'send' : null)}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowUpRight className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[90vh] rounded-t-2xl">
              {renderSheetContent()}
            </SheetContent>
          </Sheet>

          <Sheet open={activeSheet === 'pay'} onOpenChange={(open) => setActiveSheet(open ? 'pay' : null)}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Scan className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[90vh] rounded-t-2xl">
              {renderSheetContent()}
            </SheetContent>
          </Sheet>

          <Sheet open={activeSheet === 'history'} onOpenChange={(open) => setActiveSheet(open ? 'history' : null)}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <History className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[90vh] rounded-t-2xl">
              {renderSheetContent()}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.div>
  )
}
