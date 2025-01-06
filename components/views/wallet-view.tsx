'use client'

import { useState } from 'react'
import { WalletBalance } from './wallet-balance'
import { WalletHistory } from './wallet-history'
import { WalletActions } from './wallet-actions'
import { WalletPay } from './wallet-pay'
import { WalletNews } from './wallet-news'
import { Walkthrough } from './walkthrough'
import { motion, AnimatePresence } from 'framer-motion'

export function WalletView() {
  const [activeTab, setActiveTab] = useState('activity')

  const renderContent = () => {
    switch (activeTab) {
      case 'send':
        return <WalletActions type="send" />
      case 'receive':
        return <WalletActions type="receive" />
      case 'pay':
        return <WalletPay />
      case 'news':
        return <WalletNews />
      default:
        return <WalletHistory />
    }
  }

  return (
    <div className='bg-gray-50'>
      <div className="flex flex-col md:flex-row gap-8 bg-gray-50">
        <div className="w-full md:w-[400px]">
          <div className="wallet-balance">
            <WalletBalance onTabChange={setActiveTab} activeTab={activeTab} />
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="flex-1 hidden md:block"
          >
            <div className={`wallet-${activeTab}`}>
              {renderContent()}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-8 wallet-news">
        <WalletNews />
      </div>
      <Walkthrough />
    </div>
  )
}
