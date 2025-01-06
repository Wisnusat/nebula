"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowDown, Info, Search } from 'lucide-react'
import Image from 'next/image'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

const currencies = [
  { value: 'idr', label: 'IDR', flag: '🇮🇩' },
  { value: 'usd', label: 'USD', flag: '🇺🇸' },
]

const cryptos = [
  { value: 'btc', label: 'BTC', logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=040' },
  { value: 'eth', label: 'ETH', logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=040' },
  { value: 'sol', label: 'SOL', logo: 'https://cryptologos.cc/logos/solana-sol-logo.png?v=040' },
]

const payment_methods = [
  { value: 'qris', label: 'QRIS', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/QRIS_logo.svg' },
  { value: 'bca', label: 'Bank BCA', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg' }
]

export function Trade() {
  const [amount, setAmount] = useState('')
  const [currency, setCurrency] = useState(currencies[0])
  const [crypto, setCrypto] = useState(cryptos[0])
  const [payment, setPayment] = useState(payment_methods[0])

  const [isOpen, setIsOpen] = useState(false)
  const [quote, setQuote] = useState(Number((Math.random() * (1.05 - 0.95) + 0.95).toFixed(6)))
  const [quoteTimer, setQuoteTimer] = useState(10)

  // const networkFeeRate = 0.001; // 0.1%
  // const transferMethodFee = 1000; // in IDR
  // const convenienceFee = 1000; // in IDR
  // const taxRate = 0.12; // PPN 12%

  // dicsount mode
  const networkFeeRate = 0; // 0.1%
  const transferMethodFee = 0; // in IDR
  const convenienceFee = 0; // in IDR
  const taxRate = 0; // 12%

  // Simulate real-time quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteTimer(10);
      setQuote(Number((Math.random() * (1.05 - 0.95) + 0.95).toFixed(6)));
    }, 10000);

    const countdown = setInterval(() => {
      setQuoteTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(countdown);
    };
  }, []);

  const calculateFees = () => {
    const baseAmount = parseFloat(amount || '0');
    const networkFee = baseAmount * networkFeeRate;
    const tax = baseAmount * taxRate;
    const totalFees = networkFee + transferMethodFee + convenienceFee + tax;
    return { networkFee, transferMethodFee, convenienceFee, tax, totalFees };
  };

  const calculateEstimatedAmount = () => {
    const baseAmount = parseFloat(amount || '0');
    const { totalFees } = calculateFees();
    const estimatedAmount = (baseAmount / quote) - totalFees / quote;
    return estimatedAmount > 0 ? estimatedAmount : 0;
  };

  const renderTabContent = (tabType: 'transfer' | 'withdraw') => {
    const { networkFee, transferMethodFee, convenienceFee, tax } = calculateFees();
    const estimatedAmount = calculateEstimatedAmount();

    return (
      <div className="space-y-6 mt-0">
        <div className="space-y-1">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {tabType === 'transfer' ? 'You pay' : 'You withdraw'}
              </span>
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
                  <SelectValue>{currency.flag} {currency.label}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((c) => (
                    <SelectItem key={c.value} value={c.value}>
                      {c.flag} {c.label}
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
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {tabType === 'transfer' ? 'You receive' : 'Amount to account'}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                ≈ {(parseFloat(amount || '0') / quote).toFixed(8)} {crypto.label}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Input
                type="number"
                placeholder="0.00"
                value={(parseFloat(amount || '0') / quote).toFixed(8)}
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
          </div>
        </div>

        <div className="">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">Transfer Method</span>
          </div>
          <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <Select
              value={payment.value}
              onValueChange={(value) => setPayment(payment_methods.find(c => c.value === value) || payment_methods[0])}
            >
              <SelectTrigger className="w-full">
                <SelectValue>
                  <div className="flex items-center">
                    <Image src={payment.logo} alt={payment.label} width={20} height={20} className="mr-2" />
                    {payment.label}
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent className='bg-white'>
                {payment_methods.map((c) => (
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
        </div>

        <div className="w-full bg-gray-50 dark:bg-gray-700 rounded-lg px-3 py-2">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger className="flex w-full items-center justify-between">
              <span className="text-sm dark:text-white text-gray-900">Estimation of {(parseFloat(amount || '0') / quote).toFixed(8)} {crypto.label} for {amount || 0} {currency.label}</span>
              {isOpen ? (
                <ChevronUp className="h-4 w-4 opacity-50" />
              ) : (
                <ChevronDown className="h-4 w-4 opacity-50" />
              )}
            </CollapsibleTrigger>

            <CollapsibleContent className="space-y-4 pt-4 text-sm">
              <div className="flex items-center justify-between">
                <span>Rate</span>
                <span className="text-[#7BC9FF]">1 {crypto.label} = {quote || 0} {currency.label}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span>Estimated Network Fee</span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="h-4 w-4 text-zinc-400" />
                      </TooltipTrigger>
                      <TooltipContent align='center' className='text-black'>
                        <p>Network fee information</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <span className="text-[#7BC9FF]">{networkFee.toFixed(2)} {currency.label}</span>
              </div>

              <Accordion type="single" collapsible className="w-full px-2">
                <AccordionItem value="processing-fee" className="border-zinc-800">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center justify-between text-sm">
                      <span>Processing Fee</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span>Transfer method fee</span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <HelpCircle className="h-4 w-4 text-zinc-400" />
                            </TooltipTrigger>
                            <TooltipContent align='center' className='text-black max-w-60'>
                              <p>This is the cost that covers payment processing and may vary depending on the chosen payment method.</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <span className="text-[#7BC9FF]">{transferMethodFee} {currency.label}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span>Convenience fee</span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <HelpCircle className="h-4 w-4 text-zinc-400" />
                            </TooltipTrigger>
                            <TooltipContent align='center' className='text-black'>
                              <p>Convenience fee information</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <span className="text-[#7BC9FF]">{convenienceFee} {currency.label}</span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span>Tax</span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="h-4 w-4 text-zinc-400" />
                      </TooltipTrigger>
                      <TooltipContent align='center' className='text-black'>
                        <p>Tax information</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <span className="text-[#7BC9FF]">{tax.toFixed(2)} {currency.label}</span>
              </div>

              <div className="space-y-1 border-t border-zinc-800 pt-4">
                <div className="flex items-center justify-between">
                  <span>Estimated amount received</span>
                  <span className="text-[#7BC9FF]">{estimatedAmount.toFixed(8)} {crypto.label}</span>
                </div>
                <p className="text-sm text-zinc-400">
                  This is the final estimated amount after deducting all stated costs.
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
        <QuoteUpdater />

        <Button className="w-full bg-[#7BC9FF] dark:text-black hover:opacity-90 transition-opacity font-semibold">
          {tabType === 'transfer' ? 'Connect Wallet to Trade' : 'Withdraw Now'}
        </Button>
      </div>
    )
  }

  return (
    <Card className="w-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="p-6">
        <Tabs defaultValue="transfer" className="space-y-6">
          <TabsList className="w-full bg-gray-100 dark:bg-gray-700">
            <TabsTrigger value="transfer" className="flex-1 data-[state=active]:bg-[#7BC9FF] data-[state=active]:text-white dark:data-[state=active]:text-black">
              Transfer
            </TabsTrigger>
            <TabsTrigger value="withdraw" className="flex-1 data-[state=active]:bg-[#7BC9FF] data-[state=active]:text-white dark:data-[state=active]:text-black">
              Withdraw
            </TabsTrigger>
          </TabsList>

          <TabsContent value="transfer">
            {renderTabContent('transfer')}
          </TabsContent>
          <TabsContent value="withdraw">
            {renderTabContent('withdraw')}
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  )
}


export function QuoteUpdater() {
  const [quote, setQuote] = useState<number>(0);
  const [quoteTimer, setQuoteTimer] = useState<number>(10);

  useEffect(() => {
    // Interval to update quote
    const interval = setInterval(() => {
      setQuote(Number((Math.random() * (1.05 - 0.95) + 0.95).toFixed(6))); // Update the quote
      setQuoteTimer(10); // Reset the countdown to 10
    }, 10000); // 10 seconds

    // Countdown timer
    const countdown = setInterval(() => {
      setQuoteTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000); // 1-second countdown

    // Cleanup intervals
    return () => {
      clearInterval(interval);
      clearInterval(countdown);
    };
  }, []);

  return (
    <div className="text-center">
      <div className="text-center text-sm text-zinc-400">
        Updates in {quoteTimer}s
      </div>
    </div>
  );
}