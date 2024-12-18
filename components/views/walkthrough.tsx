'use client'

import { useState, useEffect } from 'react'
import Joyride, { Step, CallBackProps, STATUS } from 'react-joyride'
import { useRouter } from 'next/navigation'

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
    target: '.connect-wallet',
    content: 'Click this button to connect your wallet'
  },
  {
    target: '.theme-toggle',
    content: 'Too bright? Light Off, Stars On ✨'
  }
]

export function Walkthrough() {
  const [run, setRun] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const hasSeenWalkthrough = localStorage.getItem('hasSeenWalkthrough')
    if (!hasSeenWalkthrough) {
      setRun(true)
    }
  }, [])

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status }: any = data
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setRun(false)
      localStorage.setItem('hasSeenWalkthrough', 'true')
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
