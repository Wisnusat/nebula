// const About = () => {
//   return (
//     <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center p-4">
//       <div className="md:w-1/2">
//         <img
//           src="https://kzmq80m33iy1dtz3jrl4.lite.vusercontent.net/placeholder.svg"
//           alt="Nebula Hero"
//           width={500}
//           height={500}
//           className="rounded-lg shadow-lg"
//         />
//       </div>
//       <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 space-y-4">
//         <h2 className="text-3xl md:text-4xl font-bold">What is Nebula?</h2>
//         <p className="text-lg text-muted-foreground">
//           Nebula is a cutting-edge Web3 wallet exchange platform that bridges the gap between traditional fiat currencies and cryptocurrencies. Our focus is on providing a seamless, secure, and user-friendly experience for exchanging Indonesian Rupiah (IDR) with popular cryptocurrencies like Bitcoin (BTC), Ethereum (ETH), and Solana (SOL).
//         </p>
//         <p className="text-lg text-muted-foreground">
//           With Nebula, you can easily connect your Web3 wallet and start exchanging currencies without the need for a separate sign-up process. We prioritize security, speed, and convenience, making cryptocurrency exchanges accessible to everyone.
//         </p>
//       </div>
//     </section>
//   )
// }

// export default About



import { ArrowDownRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const About = () => {
    return (
        <section id="about" className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto">
                <div className="grid items-center gap-8 lg:grid-cols-2 p-8 md:p-0">
                    <div className="flex flex-col items-center lg:items-start text-justify">
                        <Link href="#about">
                            <Badge variant="outline">
                                About Us
                                <ArrowDownRight className="ml-2 size-4" />
                            </Badge>
                        </Link>

                        <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                            What is <span className="underline decoration-[#7BC9FF] decoration-2 underline-offset-4">Nebula</span>?
                        </h1>

                        <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
                            Nebula is a cutting-edge Web3 wallet exchange platform that bridges the gap between
                            traditional fiat currencies and cryptocurrencies. Our focus is on providing a seamless,
                            secure, and user-friendly experience for exchanging Indonesian Rupiah (IDR) with popular
                            cryptocurrencies like Bitcoin (BTC), Ethereum (ETH), and Solana (SOL).
                        </p>
                        <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
                            With Nebula, you can easily connect your Web3 wallet and start exchanging currencies
                            without the need for a separate sign-up process. We prioritize security, speed, and
                            convenience, making cryptocurrency exchanges accessible to everyone.
                        </p>
                        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                            <Button className="w-full sm:w-auto font-semibold">Try our beta</Button>
                            <Button variant="outline" className="w-full sm:w-auto font-semibold">
                                Docs
                                <ArrowDownRight className="ml-2 size-4" />
                            </Button>
                        </div>
                    </div>
                    <img
                        src="https://shadcnblocks.com/images/block/placeholder-1.svg"
                        alt="placeholder hero"
                        className="max-h-96 w-full rounded-md object-cover hidden md:flex"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
