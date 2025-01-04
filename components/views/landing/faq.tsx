'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { ArrowDownRight } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '../../ui/badge'
import { Button } from '../../ui/button'

const faqs = [
    {
        question: 'What is Nebula?',
        answer: 'Nebula is a Web3 wallet exchange platform that allows users to easily exchange between fiat currencies (focusing on Indonesian Rupiah) and cryptocurrencies (BTC, ETH, and SOL).',
    },
    {
        question: 'Do I need to create an account to use Nebula?',
        answer: 'No, you don\'t need to create a separate account. You can simply connect your Web3 wallet to start using Nebula.',
    },
    {
        question: 'Which cryptocurrencies does Nebula support?',
        answer: 'Currently, Nebula supports Bitcoin (BTC), Ethereum (ETH), and Solana (SOL).',
    },
    {
        question: 'How secure is Nebula?',
        answer: 'Nebula prioritizes security and uses state-of-the-art measures to protect your funds and personal information. We employ encryption, secure protocols, and regular security audits to ensure the safety of our platform.',
    },
    {
        question: 'What are the fees for using Nebula?',
        answer: 'Nebula aims to provide competitive rates for exchanges. Our fees are transparent and clearly displayed before each transaction. The exact fee may vary depending on the currencies being exchanged and the current market conditions.',
    },
]

const FAQ = () => {
    return (
        <section id="faq" className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto">
                <div className="grid items-center gap-8 lg:grid-cols-2 p-8 md:p-0">
                    <img
                        src="https://shadcnblocks.com/images/block/placeholder-1.svg"
                        alt="placeholder hero"
                        className="max-h-96 w-full rounded-md object-cover hidden md:flex"
                    />
                    <div className="flex flex-col items-center lg:items-end text-justify">
                        <Link href="#faq">
                            <Badge variant="outline">
                                FAQ
                                <ArrowDownRight className="ml-2 size-4" />
                            </Badge>
                        </Link>

                        <h1 className="my-6 text-4xl font-bold lg:text-6xl">
                            FAQ
                        </h1>

                        <h3 className="text-xl font-bold mb-8 -mt-4 text-center">Frequently Asked Questions</h3>
                        <Accordion type="single" collapsible className="w-full max-w-2xl">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                                    <AccordionContent>{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>

                        {/* <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-end">
                            <Button className="w-full sm:w-auto font-semibold">Try our beta</Button>
                            <Button variant="outline" className="w-full sm:w-auto font-semibold">
                                Docs
                                <ArrowDownRight className="ml-2 size-4" />
                            </Button>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
        // <section className="w-full min-h-screen flex flex-col items-center justify-center p-4 bg-muted/50">
        //   <div className="grid items-center gap-8 lg:grid-cols-2 p-8 md:p-0">
        //       <img
        //             src="https://shadcnblocks.com/images/block/placeholder-1.svg"
        //             alt="placeholder hero"
        //             className="max-h-96 w-full rounded-md object-cover hidden md:flex"
        //             />
        //     <div>

        //   </div>
        //         </div>
        // </section>
    )
}

export default FAQ

