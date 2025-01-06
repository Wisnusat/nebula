"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ExternalLink } from 'lucide-react'

const news = [
  {
    id: 1,
    title: 'Bitcoin Surges Past $50,000 Mark',
    description: 'The worlds largest cryptocurrency has reached a new milestone...',
    date: '2h ago',
    source: 'CryptoNews',
    url: '#'
  },
  {
    id: 2,
    title: 'Ethereum 2.0 Update: What You Need to Know',
    description: 'The long-awaited upgrade brings significant improvements...',
    date: '4h ago',
    source: 'BlockchainDaily',
    url: '#'
  },
  {
    id: 3,
    title: 'New DeFi Protocol Launches with $100M TVL',
    description: 'A new decentralized finance protocol has emerged...',
    date: '6h ago',
    source: 'DeFiWatch',
    url: '#'
  },
  {
    id: 4,
    title: 'Bitcoin Surges Past $50,000 Mark',
    description: 'The worlds largest cryptocurrency has reached a new milestone...',
    date: '2h ago',
    source: 'CryptoNews',
    url: '#'
  },
  {
    id: 5,
    title: 'Ethereum 2.0 Update: What You Need to Know',
    description: 'The long-awaited upgrade brings significant improvements...',
    date: '4h ago',
    source: 'BlockchainDaily',
    url: '#'
  },
  {
    id: 6,
    title: 'New DeFi Protocol Launches with $100M TVL',
    description: 'A new decentralized finance protocol has emerged...',
    date: '6h ago',
    source: 'DeFiWatch',
    url: '#'
  }
]

export function WalletNews() {
  const [selectedNews, setSelectedNews] = useState<typeof news[0] | null>(null)

  return (
    <Card className="h-full dark:bg-gray-900 bg-white">
      <CardHeader>
        <CardTitle>Crypto News</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[550px]">
          <div className="space-y-4">
            {news.map((item) => (
              <Card
                key={item.id}
                className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors bg-white"
                onClick={() => setSelectedNews(item)}
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{item.title}</h3>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {item.description}
                  </p>
                  <div className="text-xs text-[#7BC9FF]">{item.source}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </CardContent>

      <Sheet open={!!selectedNews} onOpenChange={() => setSelectedNews(null)}>
        <SheetContent side="bottom" className="h-full">
          {selectedNews && (
            <>
              <SheetHeader>
                <SheetTitle>{selectedNews.title}</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  {selectedNews.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{selectedNews.source}</span>
                  <a
                    href={selectedNews.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#7BC9FF] hover:underline"
                  >
                    Read more
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </Card>
  )
}
