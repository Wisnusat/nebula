"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Eye, EyeOff, Bell, ArrowUpRight, ArrowDownLeft, Scan } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface WalletBalanceProps {
  onTabChange?: (tab: string) => void
  activeTab: string
}

const tokens = [
  {
    symbol: 'ETH',
    name: 'Ethereum',
    balance: '6.2024',
    value: '11,358.15',
    logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=040'
  },
  {
    symbol: 'SOL',
    name: 'Solana',
    balance: '11.3581',
    value: '8,748.00',
    logo: 'https://cryptologos.cc/logos/solana-sol-logo.png?v=040'
  }
]

export function WalletBalance({ onTabChange, activeTab }: WalletBalanceProps) {
  const [showBalance, setShowBalance] = useState(true)

  return (
    <div className="space-y-4">
      <Card className="bg-gradient-to-br from-[#7BC9FF] to-[#6F5AFA] overflow-hidden relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        <CardContent className="p-6 relative">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8 border-2 border-white/20">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>WL</AvatarFallback>
              </Avatar>
              <div className="text-white">
                <div className="text-sm font-medium">Wallet</div>
                <div className="text-xs opacity-80">0x1234...5678</div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowBalance(!showBalance)}
              className="text-white/80 hover:text-white hover:bg-white/10"
            >
              {showBalance ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
            </Button>
          </div>
          
          <div className="text-3xl font-bold text-white mb-8">
            {showBalance ? '$22,567.80' : '••••••••'}
          </div>

          <div className="grid grid-cols-2 gap-3">
            {tokens.map((token) => (
              <Card key={token.symbol} className="bg-white/10 backdrop-blur-xl border-0 hover:bg-white/20 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Image
                      src={token.logo}
                      alt={token.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="text-white font-medium">{token.symbol}</span>
                  </div>
                  <div className="text-xl font-bold text-white mb-1">
                    {token.balance}
                  </div>
                  <div className="text-sm text-white/80">
                    ${token.value}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="hidden md:grid grid-cols-4 gap-3 wallet-actions">
        <Button 
          variant="outline"
          className={`${activeTab === 'send' ? "bg-[#7BC9FF] text-white hover:opacity-90 transition-opacity duration-100" : "border-[#7BC9FF] text-[#7BC9FF] hover:bg-[#7BC9FF]/10"}`}
          onClick={() => onTabChange?.('send')}
        >
          <ArrowUpRight className="h-4 w-4" />
          <span>Send</span>
        </Button>
        <Button 
          variant="outline"
          className={`${activeTab === 'receive' ? "bg-[#7BC9FF] text-white hover:opacity-90 transition-opacity duration-100" : "border-[#7BC9FF] text-[#7BC9FF] hover:bg-[#7BC9FF]/10"}`}
          onClick={() => onTabChange?.('receive')}
        >
          <ArrowDownLeft className="h-4 w-4" />
          <span>Receive</span>
        </Button>
        <Button 
          variant="outline"
          className={`${activeTab === 'pay' ? "bg-[#7BC9FF] text-white hover:opacity-90 transition-opacity duration-100" : "border-[#7BC9FF] text-[#7BC9FF] hover:bg-[#7BC9FF]/10"}`}
          onClick={() => onTabChange?.('pay')}
        >
          <Scan className="h-4 w-4" />
          <span>Pay</span>
        </Button>
        <Button 
          variant="outline"
          className={`${activeTab === 'activity' ? "bg-[#7BC9FF] text-white hover:opacity-90 transition-opacity duration-100" : "border-[#7BC9FF] text-[#7BC9FF] hover:bg-[#7BC9FF]/10"}`}
          onClick={() => onTabChange?.('activity')}
        >
          <Bell className="h-4 w-4" />
          <span>Activity</span>
        </Button>
      </div>
    </div>
  )
}

