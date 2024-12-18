"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowDownLeft, ArrowUpRight, CreditCard } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const transactions = [
  {
    type: 'received',
    amount: '+0.5 ETH',
    value: '$921.50',
    from: '0x1234...5678',
    date: '2024-01-18 14:30',
    avatar: '/placeholder.svg'
  },
  {
    type: 'sent',
    amount: '-1.2 SOL',
    value: '$72.36',
    to: '0x8765...4321',
    date: '2024-01-18 12:15',
    avatar: '/placeholder.svg'
  },
  {
    type: 'payment',
    amount: '-0.1 ETH',
    value: '$184.30',
    merchant: 'Coffee Shop',
    date: '2024-01-17 09:45',
    avatar: '/placeholder.svg'
  },
]

export function WalletHistory() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Activity</CardTitle>
        {/* <button className="text-sm text-[#7BC9FF]">View all</button> */}
      </CardHeader>
      <CardContent className="grid gap-4">
        {transactions.map((tx, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={tx.avatar} />
                <AvatarFallback>
                  {tx.type === 'received' && <ArrowDownLeft className="h-4 w-4" />}
                  {tx.type === 'sent' && <ArrowUpRight className="h-4 w-4" />}
                  {tx.type === 'payment' && <CreditCard className="h-4 w-4" />}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">
                  {tx.type === 'payment' ? tx.merchant : tx.type.charAt(0).toUpperCase() + tx.type.slice(1)}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {tx.date}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className={`font-medium ${
                tx.type === 'received' ? 'text-green-600' : 'text-gray-900 dark:text-gray-100'
              }`}>
                {tx.amount}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {tx.value}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
