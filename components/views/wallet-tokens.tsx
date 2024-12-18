"use client"

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const tokens = [
  {
    name: 'Ethereum',
    symbol: 'ETH',
    balance: '6.2024',
    value: '11,358.15',
    change: '+2.5%',
    logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=040'
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    balance: '145.8',
    value: '8,748.00',
    change: '+1.8%',
    logo: 'https://cryptologos.cc/logos/solana-sol-logo.png?v=040'
  },
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    balance: '0.0824',
    value: '2,461.65',
    change: '-0.5%',
    logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=040'
  }
]

export function WalletTokens() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Assets</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {tokens.map((token) => (
          <div
            key={token.symbol}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Image
                src={token.logo}
                alt={token.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <div>
                <div className="font-medium">{token.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {token.balance} {token.symbol}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium">${token.value}</div>
              <div className={`text-sm ${
                token.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
              }`}>
                {token.change}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
