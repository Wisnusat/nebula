'use client'

import { useState, useEffect } from 'react'
import Joyride, { Step, CallBackProps, STATUS } from 'react-joyride'
import { usePathname } from 'next/navigation'

const steps: Step[] = [
  {
    target: 'body',
    content: 'Welcome to Nebula DEX! Let\'s take a quick tour of the features.',
    placement: 'center',
  },
  {
    target: '.wallet-balance',
    content: 'This is your wallet overview. You can see your total balance and individual token balances here.',
  },
  {
    target: '.wallet-actions',
    content: 'Use these buttons to send, receive, or pay with your crypto.',
  },
  {
    target: '.wallet-history',
    content: 'View your recent transactions and activity here.',
  },
  {
    target: '.wallet-news',
    content: 'Stay updated with the latest crypto news and market trends.',
  },
  {
    target: '.mobile-nav',
    content: 'On mobile, you can access all features from this bottom navigation bar.',
  },
  {
    target: '.nebula-wallet',
    content: 'Try our next generation Nebula Wallet 🔥'
  },
  {
    target: '.connect-wallet',
    content: 'Click this button to connect your trusted wallet'
  },
  {
    target: '.theme-toggle',
    content: 'Too bright? Light Off, Stars On ✨'
  }
]

export function Walkthrough() {
  const [run, setRun] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (window !== undefined) {
      const hasSeenWalkthrough = localStorage.getItem('hasSeenWalkthrough')
      const hasSeenWalkthroughWallet = localStorage.getItem('hasSeenWalkthroughWallet')
      if (!hasSeenWalkthrough && pathname.startsWith("/")) {
        setRun(true)
      }

      if (!hasSeenWalkthroughWallet && pathname.startsWith("/wallet")) {
        setRun(true)
      }
    }
  }, [])

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status }: any = data
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setRun(false)
      if (pathname.startsWith("/wallet")) {
        localStorage.setItem('hasSeenWalkthroughWallet', 'true')
      } else {
        localStorage.setItem('hasSeenWalkthrough', 'true')
      }
    }
  }

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous
      showSkipButton
      //   showProgress
      styles={{
        options: {
          primaryColor: '#7BC9FF',
        },
      }}
      callback={handleJoyrideCallback}
    />
  )
}
