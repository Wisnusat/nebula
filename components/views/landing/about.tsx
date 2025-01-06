import { ArrowDownRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section
            id="about"
            className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
        >
            <div className="container mx-auto">
                <div className="grid items-center gap-8 lg:grid-cols-2 px-8">
                    {/* Left Section */}
                    <motion.div
                        className="flex flex-col items-center lg:items-start text-justify"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }} // Trigger when 30% of the element is in the viewport
                    >
                        <Link href="#about">
                            <Badge
                                variant="outline"
                                className="text-gray-700 dark:text-gray-300"
                            >
                                About Us
                                <ArrowDownRight className="ml-2 size-4" />
                            </Badge>
                        </Link>

                        <motion.h1
                            className="my-6 text-gray-800 dark:text-white text-4xl font-bold lg:text-6xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            What is{" "}
                            <span className="underline decoration-[#7BC9FF] decoration-2 underline-offset-4">
                                Nebula
                            </span>
                            ?
                        </motion.h1>

                        <motion.p
                            className="mb-8 max-w-xl text-gray-600 dark:text-gray-400 lg:text-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Nebula is a cutting-edge Web3 wallet exchange platform that bridges the gap between
                            traditional fiat currencies and cryptocurrencies. Our focus is on providing a seamless,
                            secure, and user-friendly experience for exchanging Indonesian Rupiah (IDR) with popular
                            cryptocurrencies like Bitcoin (BTC), Ethereum (ETH), and Solana (SOL).
                        </motion.p>

                        <motion.p
                            className="mb-8 max-w-xl text-gray-600 dark:text-gray-400 lg:text-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            With Nebula, you can easily connect your Web3 wallet and start exchanging currencies
                            without the need for a separate sign-up process. We prioritize security, speed, and
                            convenience, making cryptocurrency exchanges accessible to everyone.
                        </motion.p>

                        <motion.div
                            className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <Button size="lg" className="w-full sm:w-min font-semibold">
                                Let's exchange!
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full sm:w-auto font-semibold"
                            >
                                Docs
                                <ArrowDownRight className="ml-2 size-4" />
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Section (Image) */}
                    <motion.img
                        src="/assets/mobile-app.svg"
                        alt="placeholder hero"
                        className="w-full rounded-md object-cover hidden md:flex"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: false, amount: 0.3 }}
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
