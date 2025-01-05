'use client'

import { ArrowDownRight, Banknote, DollarSign, MessagesSquare, PersonStanding, ShieldCheck, Timer, Wallet, Zap, ZoomIn } from "lucide-react";
import Link from "next/link";
import { Badge } from "../../ui/badge";
import { motion } from 'framer-motion';
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const features = [
    {
        title: "Various Transfer Options",
        description: "Choose from a wide range of payment methods for your convenience.",
        icon: <Wallet className="md:w-16 w-12 md:h-16 h-12 text-primary" />,
        className: "md:col-span-2 md:text-2xl text-xl",
    },
    {
        title: "Secure Transactions",
        description: "Your funds and personal information are protected by state-of-the-art security measures.",
        icon: <ShieldCheck className="md:w-16 w-12 md:h-16 h-12 text-primary" />,
        className: "md:col-span-1 md:text-2xl text-xl",
    },
    {
        title: "Seamless Transactions",
        description: "Experience smooth and hassle-free exchanges between fiat and cryptocurrencies.",
        icon: <Zap className="md:w-16 w-12 md:h-16 h-12 text-primary" />,
        className: "md:col-span-1 md:text-2xl text-xl",
    },
    {
        title: "Fast Transactions",
        description: "Enjoy quick processing times for all your exchange needs.",
        icon: <Banknote className="md:w-16 w-12 md:h-16 h-12 text-primary" />,
        className: "md:col-span-2 md:text-2xl text-xl",
    },
    {
        title: "Affordability",
        description: "We offer competitive transaction fees tailored to suit your budget, making cryptocurrency exchanges accessible to everyone.",
        icon: <DollarSign className="md:w-16 w-12 md:h-16 h-12 text-primary" />,
        className: "md:col-span-2 md:text-2xl text-xl",
    },
    {
        title: "Customer Support",
        description: "Our dedicated support team is available 24/7 to assist you with any questions or issues, ensuring a smooth user experience.",
        icon: <MessagesSquare className="md:w-16 w-12 md:h-16 h-12 text-primary" />,
        className: "md:col-span-1 md:text-2xl text-xl",
    },
];

const Features = () => {
    return (
        <section
            id="features"
            className="py-14 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
        >
            <div className="container mx-auto px-8">
                <div className="flex flex-col items-center lg:items-start text-justify">
                    <Link href="#features">
                        <Badge variant="outline" className="text-gray-700 dark:text-gray-300">
                            Features
                            <ArrowDownRight className="ml-2 size-4" />
                        </Badge>
                    </Link>
                    <motion.h2
                        className="my-6 text-4xl font-bold lg:text-6xl text-gray-900 dark:text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        Why Choose Nebula?
                    </motion.h2>
                    <BentoGrid className="mx-auto md:auto-rows-[20rem]">
                      {features.map((item, i) => (
                        <BentoGridItem
                          key={i}
                          title={item.title}
                          description={item.description}
                        //   header={item.title}
                          className={item.className}
                          icon={item.icon}
                        />
                      ))}
                    </BentoGrid>
                </div>
            </div>
        </section>
    );
};

export default Features;
