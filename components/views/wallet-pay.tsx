"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { QrCode, X } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

export function WalletPay() {
  const [amount, setAmount] = useState('')
  const [isScanning, setIsScanning] = useState(false)

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Amount</Label>
        <Input
          type="number"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      
      <Sheet open={isScanning} onOpenChange={setIsScanning}>
        <SheetTrigger asChild>
          <Button className="w-full" variant="outline">
            <QrCode className="mr-2 h-4 w-4" />
            Scan QR Code
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[80vh] bg-white">
          <SheetHeader>
            <SheetTitle>Scan QR Code</SheetTitle>
          </SheetHeader>
          <div className="flex items-center justify-center flex-1 mt-8">
            <div className="relative w-64 h-64 bg-black/10 rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <QrCode className="w-32 h-32 text-gray-400" />
              </div>
              <div className="absolute inset-0 border-2 border-[#7BC9FF] rounded-lg" />
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={() => setIsScanning(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </SheetContent>
      </Sheet>

      <Button className="w-full" disabled={!amount}>
        Pay
      </Button>
    </div>
  )
}
