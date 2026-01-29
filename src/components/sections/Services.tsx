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
        gradient: "from-amber-500 to-orange-600",
    },
    {
        icon: Fence,
        slug: "handrails-railings",
        title: "Handrails & Railings",
        titleAr: "الهاندريلات والدرابزينات",
        description:
            "Premium staircase handrails and balcony railings crafted with precision and artistic design.",
        gradient: "from-blue-500 to-cyan-600",
    },
    {
        icon: Warehouse,
        slug: "hangars-structures",
        title: "Hangars & Structures",
        titleAr: "الهناجر والكبائن",
        description:
            "Industrial hangars, steel structures, and prefabricated cabins for commercial and industrial use.",
        gradient: "from-slate-500 to-gray-600",
    },
    {
        icon: Sparkles,
        slug: "cnc-laser-cutting",
        title: "CNC Laser Cutting",
        titleAr: "أعمال الليزر CNC",
        description:
            "Precision laser cutting for intricate patterns, decorative panels, and custom metal designs.",
        gradient: "from-purple-500 to-pink-600",
    },
    {
        icon: Hexagon,
        slug: "stainless-steel",
        title: "Stainless Steel Works",
        titleAr: "أعمال الاستانلس",
        description:
            "High-quality stainless steel fabrication for modern architectural and interior applications.",
        gradient: "from-gray-400 to-zinc-500",
    },
    {
        icon: GlassWater,
        slug: "glass-metal",
        title: "Glass & Metal Integration",
        titleAr: "أعمال الزجاج والمعادن",
        description:
            "Seamless integration of glass with metal frames for contemporary facades and interiors.",
        gradient: "from-teal-500 to-emerald-600",
    },
    {
        icon: Cog,
        slug: "forged-iron",
        title: "Forged Iron Works",
        titleAr: "الفورفورجيه",
        description:
            "Traditional and modern forged iron designs for gates, furniture, and decorative elements.",
        gradient: "from-rose-500 to-red-600",
    },
    {
        icon: Sun,
        slug: "pergolas-shades",
        title: "Pergolas & Shades",
        titleAr: "البرجولات والمظلات",
        description:
            "Custom pergolas and shade structures for outdoor spaces with elegant metal frameworks.",
        gradient: "from-yellow-500 to-amber-600",
    },
];

export function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="services"
            ref={ref}
            className="relative overflow-hidden bg-white py-24 dark:bg-gray-800"
        >
            {/* Animated background blobs */}
            <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-copper/5 blur-3xl" />
            <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-steel-blue/5 blur-3xl" />

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
                        className="mb-4 inline-block rounded-full bg-gradient-to-r from-copper/20 to-bronze/20 px-6 py-2 text-sm font-semibold text-copper"
                    >
                        Our Services - خدماتنا
                    </motion.span>
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                        Premium{" "}
                        <span className="bg-gradient-to-r from-copper to-bronze bg-clip-text text-transparent">
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
                                    className={`relative h-full overflow-hidden rounded-3xl bg-gradient-to-br ${service.gradient} transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${index === 0 || index === 3 ? "min-h-[280px]" : "min-h-[260px]"
                                        }`}
                                >
                                    {/* Decorative pattern */}
                                    <div className="absolute inset-0 opacity-20">
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2.5l5 3.5-5 3.5z'/%3E%3C/g%3E%3C/svg%3E")`,
                                            }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="relative flex h-full flex-col justify-between p-8">
                                        {/* Icon */}
                                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                            <service.icon className="h-8 w-8 text-white" />
                                        </div>

                                        {/* Text */}
                                        <div className="mt-6">
                                            <h3 className="mb-2 text-2xl font-bold text-white">
                                                {service.title}
                                            </h3>
                                            <p
                                                className="mb-3 text-lg font-medium text-white/90"
                                                style={{ fontFamily: "Cairo, sans-serif" }}
                                            >
                                                {service.titleAr}
                                            </p>
                                            <p className="mb-6 line-clamp-2 text-sm text-white/80">
                                                {service.description}
                                            </p>

                                            {/* Learn More */}
                                            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2.5 font-semibold text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white/30 group-hover:gap-3">
                                                <span>Learn More</span>
                                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover shine effect */}
                                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
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
                    <div className="inline-flex flex-col items-center rounded-3xl bg-gradient-to-r from-gray-50 to-gray-100 px-12 py-8 dark:from-gray-900 dark:to-gray-800">
                        <p className="mb-4 text-lg text-gray-600 dark:text-gray-400">
                            Need a custom solution? We specialize in bespoke metal fabrication.
                        </p>
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-copper to-bronze px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
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
