"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Image from 'next/image'
import { QrCode } from 'lucide-react'

interface WalletActionsProps {
  type: 'send' | 'receive'
}

const tokens = [
  { symbol: 'ETH', name: 'Ethereum', logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=040' },
  { symbol: 'SOL', name: 'Solana', logo: 'https://cryptologos.cc/logos/solana-sol-logo.png?v=040' },
  { symbol: 'BTC', name: 'Bitcoin', logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=040' },
]

export function WalletActions({ type }: WalletActionsProps) {
  const [amount, setAmount] = useState('')
  const [address, setAddress] = useState('')
  const [selectedToken, setSelectedToken] = useState(tokens[0])

  if (type === 'receive') {
    return (
      <div className="space-y-6">
        <div className="text-center p-8 border-2 border-dashed rounded-lg">
          <QrCode className="w-32 h-32 mx-auto mb-4 text-gray-400" />
          <p className="text-sm text-gray-500 dark:text-gray-400 break-all">
            0x1234567890abcdef1234567890abcdef12345678
          </p>
        </div>
        <Button className="w-full" variant="outline">
          Copy Address
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Token</Label>
        <Select
          value={selectedToken.symbol}
          onValueChange={(value) => setSelectedToken(tokens.find(t => t.symbol === value) || tokens[0])}
        >
          <SelectTrigger>
            <SelectValue>
              <div className="flex items-center gap-2">
                <Image
                  src={selectedToken.logo}
                  alt={selectedToken.name}
                  width={20}
                  height={20}
                />
                {selectedToken.symbol}
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {tokens.map((token) => (
              <SelectItem key={token.symbol} value={token.symbol}>
                <div className="flex items-center gap-2">
                  <Image
                    src={token.logo}
                    alt={token.name}
                    width={20}
                    height={20}
                  />
                  {token.symbol}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Amount</Label>
        <Input
          type="number"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label>Recipient Address</Label>
        <Input
          placeholder="0x..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <Button className="w-full">Send {selectedToken.symbol}</Button>
    </div>
  )
}
