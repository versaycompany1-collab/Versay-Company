"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
    DoorOpen,
    Fence,
    Warehouse,
    Sparkles,
    Hexagon,
    GlassWater,
    Cog,
    ArrowRight,
    Sun,
} from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: DoorOpen,
        slug: "gates-doors",
        title: "Gates & Doors",
        titleAr: "البوابات والأبواب",
        description:
            "Custom-designed gates and armored doors with fire resistance, combining security with elegant aesthetics.",
    },
    {
        icon: Fence,
        slug: "handrails-railings",
        title: "Handrails & Railings",
        titleAr: "الهاندريلات والدرابزينات",
        description:
            "Premium staircase handrails and balcony railings crafted with precision and artistic design.",
    },
    {
        icon: Warehouse,
        slug: "hangars-structures",
        title: "Hangars & Structures",
        titleAr: "الهناجر والكبائن",
        description:
            "Industrial hangars, steel structures, and prefabricated cabins for commercial and industrial use.",
    },
    {
        icon: Sparkles,
        slug: "cnc-laser-cutting",
        title: "CNC Laser Cutting",
        titleAr: "أعمال الليزر CNC",
        description:
            "Precision laser cutting for intricate patterns, decorative panels, and custom metal designs.",
    },
    {
        icon: Hexagon,
        slug: "stainless-steel",
        title: "Stainless Steel Works",
        titleAr: "أعمال الاستانلس",
        description:
            "High-quality stainless steel fabrication for modern architectural and interior applications.",
    },
    {
        icon: GlassWater,
        slug: "glass-metal",
        title: "Glass & Metal Integration",
        titleAr: "أعمال الزجاج والمعادن",
        description:
            "Seamless integration of glass with metal frames for contemporary facades and interiors.",
    },
    {
        icon: Cog,
        slug: "forged-iron",
        title: "Forged Iron Works",
        titleAr: "الفورفورجيه",
        description:
            "Traditional and modern forged iron designs for gates, furniture, and decorative elements.",
    },
    {
        icon: Sun,
        slug: "pergolas-shades",
        title: "Pergolas & Shades",
        titleAr: "البرجولات والمظلات",
        description:
            "Custom pergolas and shade structures for outdoor spaces with elegant metal frameworks.",
    },
];

export function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="services"
            ref={ref}
            className="relative overflow-hidden bg-white py-24 dark:bg-midnight-blue"
        >
            {/* Animated background blobs */}
            <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-gold/5 blur-3xl" />
            <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-royal-blue/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5 }}
                        className="mb-4 inline-block rounded-full bg-gradient-to-r from-gold/10 to-warm-gold/10 border border-gold/20 px-6 py-2 text-sm font-semibold text-gold"
                    >
                        Our Services - خدماتنا
                    </motion.span>
                    <h2 className="mb-4 text-4xl font-bold text-charcoal dark:text-white md:text-5xl lg:text-6xl">
                        Premium{" "}
                        <span className="bg-gradient-to-r from-gold to-warm-gold bg-clip-text text-transparent">
                            Metal Solutions
                        </span>
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400">
                        From architectural metalwork to industrial structures, we deliver
                        comprehensive metal formation services with unmatched quality and
                        precision.
                    </p>
                </motion.div>

                {/* Services Grid - Modern Bento Style */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.slug}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative ${index === 0 || index === 3 ? "md:col-span-2 lg:col-span-2" : ""
                                }`}
                        >
                            <Link href={`/services/${service.slug}`}>
                                <div
                                    className={`relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-deep-navy to-midnight-blue transition-all duration-500 hover:shadow-2xl hover:shadow-gold/10 hover:scale-[1.02] border border-gold/10 hover:border-gold/30 ${index === 0 || index === 3 ? "min-h-[280px]" : "min-h-[260px]"
                                        }`}
                                >
                                    {/* Decorative pattern */}
                                    <div className="absolute inset-0 opacity-10">
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.2) 1px, transparent 1px),
                                                                 linear-gradient(90deg, rgba(212, 175, 55, 0.2) 1px, transparent 1px)`,
                                                backgroundSize: '30px 30px',
                                            }}
                                        />
                                    </div>

                                    {/* Gold accent glow on hover */}
                                    <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gold/0 blur-3xl transition-all duration-500 group-hover:bg-gold/20" />

                                    {/* Content */}
                                    <div className="relative flex h-full flex-col justify-between p-8">
                                        {/* Icon */}
                                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10 border border-gold/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-gold/20 group-hover:border-gold/40">
                                            <service.icon className="h-8 w-8 text-gold" />
                                        </div>

                                        {/* Text */}
                                        <div className="mt-6">
                                            <h3 className="mb-2 text-2xl font-bold text-white">
                                                {service.title}
                                            </h3>
                                            <p
                                                className="mb-3 text-lg font-medium text-gold"
                                                style={{ fontFamily: "Cairo, sans-serif" }}
                                            >
                                                {service.titleAr}
                                            </p>
                                            <p className="mb-6 line-clamp-2 text-sm text-gray-400">
                                                {service.description}
                                            </p>

                                            {/* Learn More */}
                                            <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 border border-gold/20 px-5 py-2.5 font-semibold text-gold backdrop-blur-sm transition-all duration-300 group-hover:bg-gold/20 group-hover:gap-3 group-hover:border-gold/40">
                                                <span>Learn More</span>
                                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover shine effect */}
                                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex flex-col items-center rounded-3xl bg-gradient-to-r from-platinum to-gray-100 px-12 py-8 dark:from-deep-navy dark:to-midnight-blue border border-gold/10">
                        <p className="mb-4 text-lg text-gray-600 dark:text-gray-400">
                            Need a custom solution? We specialize in bespoke metal fabrication.
                        </p>
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-gold to-warm-gold px-8 py-4 font-semibold text-deep-navy shadow-lg shadow-gold/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-gold/30"
                        >
                            Request Custom Quote
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
