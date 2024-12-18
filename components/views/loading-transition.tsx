'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface LoadingTransitionProps {
  onComplete: () => void
}

export function LoadingTransition({ onComplete }: LoadingTransitionProps) {
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false)
      onComplete()
    }, 2000) // Adjust this time based on your webm duration

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!showLoading) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 dark:bg-gray-900 bg-white flex flex-col items-center justify-center z-50"
    >
      <video
        autoPlay
        muted
        loop
        className="w-32 h-32 mb-8"
      >
        <source src="/assets/loading-wallet.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="dark:text-white text-gray-900 text-lg font-semibold"
      >
        Securing Your Assets
      </motion.p>
    </motion.div>
  )
}

