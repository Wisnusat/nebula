'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Wallet, CreditCard, ArrowRightLeft, ArrowDownRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Connect Your Wallet',
    description: 'Start by connecting your Web3 wallet to Nebula.',
    icon: Wallet,
  },
  {
    title: 'Choose Currency and Amount',
    description: 'Select your desired currency, amount, and preferred payment method.',
    icon: CreditCard,
  },
  {
    title: 'Complete the Transfer',
    description: 'Finalize your transaction to exchange your FIAT or cryptocurrency.',
    icon: ArrowRightLeft,
  },
]

const Tutorial = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false)

  const handleConnectWallet = () => {
    // Implement wallet connection logic here
    setIsWalletConnected(true)
  }

  return (
    <section
      id="tutorial"
      className="w-full min-h-screen flex flex-col items-center justify-center py-20 px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:items-start text-justify">
          <Link href="#tutorial">
            <Badge variant="outline" className="text-gray-700 dark:text-gray-300">
              Tutorial
              <ArrowDownRight className="ml-2 size-4" />
            </Badge>
          </Link>
          <motion.h2
            className="my-6 text-4xl font-bold lg:text-6xl text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            How to Use Nebula
          </motion.h2>
        </div>
        <div className="mt-14 space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Card
                className="w-full p-6 flex flex-col md:flex-row items-center gap-6 bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-md rounded-lg"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <motion.h3
                    className="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-700 dark:text-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    {step.description}
                  </motion.p>
                </div>
                {index === 0 && (
                  <Button
                    onClick={handleConnectWallet}
                    className="font-semibold min-w-72 "
                    disabled={isWalletConnected}
                  >
                    {isWalletConnected ? "Wallet Connected" : "Connect Wallet"}
                  </Button>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tutorial
