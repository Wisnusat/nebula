"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowDown, Search } from 'lucide-react'
import Image from 'next/image'

const currencies = [
  { value: 'usd', label: 'USD', flag: '🇺🇸' },
  { value: 'idr', label: 'IDR', flag: '🇮🇩' },
]

const cryptos = [
  { value: 'btc', label: 'BTC', logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=040' },
  { value: 'eth', label: 'ETH', logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=040' },
  { value: 'sol', label: 'SOL', logo: 'https://cryptologos.cc/logos/solana-sol-logo.png?v=040' },
]

export function Trade() {
  const [amount, setAmount] = useState('')
  const [currency, setCurrency] = useState(currencies[0])
  const [crypto, setCrypto] = useState(cryptos[0])

  return (
    <Card className="w-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-medium text-gray-900 dark:text-white">Trade</h2>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="buy" className="space-y-6">
          <TabsList className="w-full bg-gray-100 dark:bg-gray-700">
            <TabsTrigger value="buy" className="flex-1 data-[state=active]:bg-[#7BC9FF] data-[state=active]:text-white">
              Buy
            </TabsTrigger>
            <TabsTrigger value="sell" className="flex-1 data-[state=active]:bg-[#7BC9FF] data-[state=active]:text-white">
              Sell
            </TabsTrigger>
          </TabsList>

          <TabsContent value="buy" className="space-y-6 mt-0">
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">You pay</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Balance: 1,234.56 {currency.label}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Input
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-transparent border-none text-2xl text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus-visible:ring-0"
                  />
                  <Select
                    value={currency.value}
                    onValueChange={(value) => setCurrency(currencies.find(c => c.value === value) || currencies[0])}
                  >
                    <SelectTrigger className="w-[100px]">
                      <SelectValue>{currency.label}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {currencies.map((c) => (
                        <SelectItem key={c.value} value={c.value}>
                          {c.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-center">
                <Button variant="ghost" size="icon" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                  <ArrowDown className="w-4 h-4" />
                </Button>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">You receive</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">≈ {(parseFloat(amount || '0') / 28150).toFixed(8)} {crypto.label}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Input
                    type="number"
                    placeholder="0.00"
                    value={(parseFloat(amount || '0') / 28150).toFixed(8)}
                    readOnly
                    className="bg-transparent border-none text-2xl text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus-visible:ring-0"
                  />
                  <Select
                    value={crypto.value}
                    onValueChange={(value) => setCrypto(cryptos.find(c => c.value === value) || cryptos[0])}
                  >
                    <SelectTrigger className="w-[130px]">
                      <SelectValue>
                        <div className="flex items-center">
                          <Image src={crypto.logo} alt={crypto.label} width={20} height={20} className="mr-2" />
                          {crypto.label}
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {cryptos.map((c) => (
                        <SelectItem key={c.value} value={c.value}>
                          <div className="flex items-center">
                            <Image src={c.logo} alt={c.label} width={20} height={20} className="mr-2" />
                            {c.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  1 {crypto.label} = 28,150.00 {currency.label}
                </div>
              </div>
            </div>

            <Button className="w-full bg-[#7BC9FF] dark:text-black hover:opacity-90 transition-opacity font-semibold">
              Connect Wallet to Trade
            </Button>
          </TabsContent>

          <TabsContent value="sell" className="space-y-6 mt-0">
            {/* Similar structure to buy tab, with reversed token order */}
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  )
}

