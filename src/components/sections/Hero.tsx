"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden bg-gradient-to-br from-deep-navy via-midnight-blue to-deep-navy"
        >
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-20">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.1) 1px, transparent 1px),
                                         linear-gradient(90deg, rgba(37, 99, 235, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            {/* Gold Accent Glows */}
            <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
            <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-royal-blue/10 blur-3xl" />

            {/* Floating Elements */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute right-10 top-32 hidden lg:block"
            >
                <div className="h-40 w-40 rounded-3xl bg-gradient-to-br from-gold/20 to-warm-gold/10 backdrop-blur-sm border border-gold/20" />
            </motion.div>

            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-40 left-10 hidden lg:block"
            >
                <div className="h-32 w-32 rounded-full bg-gradient-to-br from-royal-blue/20 to-electric-blue/10 backdrop-blur-sm border border-royal-blue/20" />
            </motion.div>

            {/* Decorative Lines */}
            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
            <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

            {/* Main Content */}
            <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-20 text-center lg:px-8">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-gold/20 blur-2xl animate-pulse" />
                        <Image
                            src="/images/logo.png"
                            alt="Versay Company Logo"
                            width={150}
                            height={150}
                            priority
                            className="relative h-32 w-32 object-contain drop-shadow-2xl md:h-40 md:w-40"
                        />
                    </div>
                </motion.div>

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mb-6 flex items-center gap-2 rounded-full bg-gold/10 border border-gold/30 px-4 py-2 text-gold"
                >
                    <Sparkles className="h-4 w-4" />
                    <span className="text-sm font-medium">ISO 9001 | 14001 | 45001 Certified</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-7xl"
                >
                    Versay Company
                </motion.h1>

                {/* Arabic Name - Gold */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mb-6 text-2xl font-semibold bg-gradient-to-r from-gold to-warm-gold bg-clip-text text-transparent md:text-3xl lg:text-4xl"
                    style={{ fontFamily: "Cairo, sans-serif" }}
                >
                    شركة فرساي للتجارة والمقاولات والتشكيلات المعدنية
                </motion.h2>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="mb-10 max-w-3xl text-lg text-gray-300 md:text-xl"
                >
                    Excellence in metal formations, trading, and contracting. Crafting premium
                    quality steel structures, gates, handrails, and architectural metalwork
                    with precision and artistry.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="flex flex-col gap-4 sm:flex-row"
                >
                    <Button
                        variant="premium"
                        size="lg"
                        onClick={() => scrollToSection("#contact")}
                        className="group"
                    >
                        <Building2 className="h-5 w-5 transition-transform group-hover:scale-110" />
                        Contact Us
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => scrollToSection("#services")}
                        className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-gold"
                    >
                        Explore Our Services
                    </Button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                    className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
                >
                    {[
                        { value: "15+", label: "Years Experience" },
                        { value: "500+", label: "Projects Completed" },
                        { value: "50+", label: "Expert Team" },
                        { value: "100%", label: "Client Satisfaction" },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl font-bold bg-gradient-to-r from-gold to-warm-gold bg-clip-text text-transparent md:text-4xl">
                                {stat.value}
                            </div>
                            <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="cursor-pointer"
                        onClick={() => scrollToSection("#about")}
                    >
                        <ArrowDown className="h-8 w-8 text-gold/50" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
