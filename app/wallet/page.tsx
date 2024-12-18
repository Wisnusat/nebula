"use client"

import { WalletView } from '@/components/views/wallet-view'
import { Nav } from '@/components/views/nav'
import { WalletMobileNav } from '@/components/views/wallet-mobile-nav'
import { useEffect, useState } from 'react'
import { LoadingTransition } from '@/components/views/loading-transition'

export default function WalletPage() {
    const [showLoading, setShowLoading] = useState(true)

    useEffect(() => {
        // Simulate loading time if coming directly to this page
        const timer = setTimeout(() => {
            setShowLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    if (showLoading) {
        return <LoadingTransition onComplete={() => setShowLoading(false)} />
    }

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Nav />
            <div className="container mx-auto px-4 py-8">
                <WalletView />
            </div>
            <WalletMobileNav />
        </main>
    )
}

