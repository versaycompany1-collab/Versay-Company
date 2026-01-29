"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const partners = [
    { name: "Partner 1", logo: "/images/partners/partner1.jpg" },
    { name: "Partner 2", logo: "/images/partners/partner2.jpg" },
    { name: "Partner 3", logo: "/images/partners/partner3.jpg" },
    { name: "Partner 4", logo: "/images/partners/partner4.jpg" },
    { name: "Partner 5", logo: "/images/partners/partner5.jpg" },
    { name: "Partner 6", logo: "/images/partners/partner6.jpg" },
    { name: "Partner 7", logo: "/images/partners/partner7.jpg" },
    { name: "Partner 8", logo: "/images/partners/partner8.jpg" },
    { name: "Partner 9", logo: "/images/partners/partner9.jpeg" },
    { name: "Partner 10", logo: "/images/partners/partner10.jpeg" },
    { name: "Partner 11", logo: "/images/partners/partner11.jpeg" },
];

export function Partners() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Duplicate partners for seamless infinite scroll
    const duplicatedPartners = [...partners, ...partners];

    return (
        <section
            id="partners"
            ref={ref}
            className="relative overflow-hidden bg-white py-20 dark:bg-gray-800"
        >
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-12 text-center"
                >
                    <span className="mb-4 inline-block rounded-full bg-copper/10 px-4 py-2 text-sm font-medium text-copper">
                        Success Partners - شركاء النجاح
                    </span>
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                        Trusted By Leading Companies
                    </h2>
                    <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
                        We are proud to partner with industry leaders and major contractors
                        on landmark projects across Egypt and the Middle East.
                    </p>
                </motion.div>
            </div>

            {/* Infinite Scrolling Partners */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
            >
                {/* Gradient Overlays for smooth fade effect */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent dark:from-gray-800" />
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent dark:from-gray-800" />

                {/* Scrolling Container */}
                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-8"
                        animate={{
                            x: ["0%", "-30%"],
                        }}
                        transition={{
                            x: {
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                            },
                        }}
                    >
                        {duplicatedPartners.map((partner, index) => (
                            <div
                                key={`${partner.name}-${index}`}
                                className="group relative flex h-24 w-48 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 transition-all hover:border-copper/50 hover:bg-white hover:shadow-lg dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800"
                            >
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    fill
                                    className="object-cover grayscale transition-all group-hover:grayscale-0"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* Trust indicators */}
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-12 flex flex-wrap items-center justify-center gap-8 text-center text-sm text-gray-600 dark:text-gray-400"
                >
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <span>200+ Satisfied Clients</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <span>15+ Years of Partnership</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <span>100% Project Delivery</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
