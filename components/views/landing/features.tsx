import {
    ArrowDownRight,
    Banknote,
    DollarSign,
    MessagesSquare,
    PersonStanding,
    ShieldCheck,
    Timer,
    Wallet,
    Zap,
    ZoomIn,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "../../ui/badge";

const features = [
    {
        title: "Various Transfer Options",
        description:
            "Choose from a wide range of payment methods for your convenience.",
        icon: <Wallet className="w-12 h-12 text-primary" />,
    },
    {
        title: "Secure Transactions",
        description:
            "Your funds and personal information are protected by state-of-the-art security measures.",
        icon: <ShieldCheck className="w-12 h-12 text-primary" />,
    },
    {
        title: "Seamless Transactions",
        description:
            "Experience smooth and hassle-free exchanges between fiat and cryptocurrencies.",
        icon: <Zap className="w-12 h-12 text-primary" />,
    },
    {
        title: "Fast Transactions",
        description:
            "Enjoy quick processing times for all your exchange needs.",
        icon: <Banknote className="w-12 h-12 text-primary" />,
    },
    {
        title: "Affordability",
        description:
            "We offer competitive transaction fees tailored to suit your budget, making cryptocurrency exchanges accessible to everyone.",
        icon: <DollarSign className="w-12 h-12 text-primary" />,
    },
    {
        title: "Customer Support",
        description:
            "Our dedicated support team is available 24/7 to assist you with any questions or issues, ensuring a smooth user experience.",
        icon: <MessagesSquare className="w-12 h-12 text-primary" />,
    },
];

const Features = () => {
    return (
        <section
            id="features"
            className="py-14 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
        >
            <div className="container mx-auto px-10 md:px-0">
                <div className="flex flex-col items-center lg:items-start text-justify">
                    <Link href="#features">
                        <Badge variant="outline" className="text-gray-700 dark:text-gray-300">
                            Features
                            <ArrowDownRight className="ml-2 size-4" />
                        </Badge>
                    </Link>
                    <h2 className="my-6 text-4xl font-bold lg:text-6xl text-gray-900 dark:text-white">
                        Why Choose Nebula?
                    </h2>
                    <div className="mx-auto mt-7 grid gap-x-20 gap-y-8 md:grid-cols-2 md:gap-y-6">
                        {features.map((feature, idx) => (
                            <div
                                className="flex gap-6 rounded-lg md:block md:p-5 bg-gray-100 dark:bg-gray-800 shadow-md"
                                key={idx}
                            >
                                <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                                    {feature.icon}
                                </span>
                                <div>
                                    <h3 className="font-medium md:mb-2 md:text-xl md:font-semibold text-gray-900 dark:text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-400">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
