"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Award, Shield, Users, Zap } from "lucide-react";
import Image from "next/image";

const values = [
    {
        icon: Shield,
        title: "Quality Assurance",
        titleAr: "ضمان الجودة",
        description: "ISO certified processes ensuring top-tier quality",
    },
    {
        icon: Users,
        title: "Expert Team",
        titleAr: "فريق خبير",
        description: "Skilled craftsmen with decades of experience",
    },
    {
        icon: Zap,
        title: "Innovation",
        titleAr: "الابتكار",
        description: "Cutting-edge technology and modern techniques",
    },
];

export function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="about"
            ref={ref}
            className="relative overflow-hidden bg-platinum py-24 dark:bg-deep-navy"
        >
            {/* Background accent */}
            <div className="absolute right-0 top-0 h-1/2 w-1/3 bg-gradient-to-l from-gold/5 to-transparent" />
            <div className="absolute left-0 bottom-0 h-1/2 w-1/3 bg-gradient-to-r from-royal-blue/5 to-transparent" />

            <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <span className="mb-4 inline-block rounded-full bg-gold/10 border border-gold/20 px-4 py-2 text-sm font-medium text-gold dark:text-gold">
                        About Us - من نحن
                    </span>
                    <h2 className="mb-4 text-3xl font-bold text-charcoal dark:text-white md:text-4xl lg:text-5xl">
                        Building Excellence Since 2012
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400">
                        Versay Company is a leading Egyptian enterprise specializing in
                        trading, contracting, and precision metal formations.
                    </p>
                </motion.div>

                {/* Main content grid */}
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left side - Image and overlay */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative overflow-hidden rounded-3xl">
                            <Image
                                src="/images/about-factory.JPG"
                                alt="Versay Factory"
                                width={600}
                                height={500}
                                className="h-[400px] w-full object-cover lg:h-[500px]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-transparent to-transparent" />

                            {/* Floating card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-6 shadow-xl backdrop-blur-sm dark:bg-midnight-blue/95 border border-gold/20"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map((i) => (
                                            <div
                                                key={i}
                                                className="h-10 w-10 rounded-full border-2 border-white bg-gradient-to-br from-gold to-warm-gold dark:border-midnight-blue"
                                            />
                                        ))}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-charcoal dark:text-white">
                                            Trusted by 200+ clients
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Major projects across Egypt
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col justify-center"
                    >
                        {/* Vision & Mission */}
                        <div className="mb-8 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 border border-gold/20">
                                    <Eye className="h-6 w-6 text-gold" />
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-bold text-charcoal dark:text-white">
                                        Our Vision
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        To be the leading metal formation company in the Middle East,
                                        recognized for innovation, quality, and architectural excellence.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 border border-gold/20">
                                    <Target className="h-6 w-6 text-gold" />
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-bold text-charcoal dark:text-white">
                                        Our Mission
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Delivering exceptional metal works that combine durability,
                                        aesthetics, and functionality while maintaining the highest
                                        standards of safety and environmental responsibility.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Values */}
                        <div className="grid gap-4 sm:grid-cols-3">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                    className="rounded-2xl border border-gray-200 bg-white p-4 text-center transition-all hover:border-gold/50 hover:shadow-lg hover:shadow-gold/5 dark:border-gold/10 dark:bg-midnight-blue"
                                >
                                    <value.icon className="mx-auto mb-3 h-8 w-8 text-gold" />
                                    <h4 className="mb-1 font-semibold text-charcoal dark:text-white">
                                        {value.title}
                                    </h4>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">
                                        {value.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* ISO Badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.9 }}
                            className="mt-8 flex flex-wrap items-center gap-4"
                        >
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Certifications:
                            </span>
                            {["ISO 9001", "ISO 14001", "ISO 45001"].map((iso, i) => (
                                <span
                                    key={i}
                                    className="flex items-center gap-2 rounded-full bg-royal-blue/10 border border-royal-blue/20 px-3 py-1 text-sm font-medium text-royal-blue dark:text-electric-blue"
                                >
                                    <Award className="h-4 w-4" />
                                    {iso}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
