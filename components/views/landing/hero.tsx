"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Trade } from "../trade";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function Hero() {
    const router = useRouter();

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 flex items-center justify-center">
            <motion.div
                className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Left Section */}
                <motion.div
                    className="flex-1 flex flex-col items-start justify-center"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="relative z-10 max-w-2xl">
                        <h1 className="text-4xl md:text-6xl font-bold mb-10 text-gray-900 dark:text-white">
                            Seamless Web3 payments to
                            <motion.span
                                className="inline-flex flex-col h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <ul className="block animate-text-slide-3 text-left leading-tight [&_li]:block text-[#7BC9FF]">
                                    <li>Local Bank</li>
                                    <li>QRIS</li>
                                    <li>E-Wallet</li>
                                    <li aria-hidden="true">Local Bank</li>
                                </ul>
                            </motion.span>
                            <svg
                                className="absolute left-0 w-[40%]"
                                viewBox="0 0 358 34"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <motion.path
                                    d="M1 23.1069C26.6406 16.1516 78.4403 5.45682 121.23 9.42614C172.153 14.087 177.803 24.0999 223.5 28.6805C269.197 33.2612 315.987 9.21322 357 1"
                                    stroke="#7BC9FF"
                                    strokeWidth="2"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.2 }}
                                />
                            </svg>
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-xl mb-8">
                            The easiest way to connect your Web3 wallet with all payment gateways in Indonesia.
                        </p>
                        <motion.div
                            className="flex flex-wrap gap-4 mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Button
                                size="lg"
                                className="bg-[#7BC9FF] dark:text-black hover:opacity-90 transition-opacity font-semibold nebula-wallet"
                                onClick={() => router.push("/wallet")}
                            >
                                Nebula Wallet
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Section */}
                <motion.div
                    className="flex-1 flex items-center justify-center"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="w-full max-w-md mx-auto z-50">
                        <Trade />
                    </div>
                </motion.div>
            </motion.div>
            <BackgroundBeams />
        </main>
    );
}
