"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Check, Phone, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

interface ServiceData {
    title: string;
    titleAr: string;
    description: string;
    longDescription: string;
    images: string[];
    features: string[];
}

export function ServiceDetailPage({ service }: { service: ServiceData }) {
    const [selectedImage, setSelectedImage] = useState(0);

    // Parse markdown-style bold text
    const renderText = (text: string) => {
        const parts = text.split(/(\*\*[^*]+\*\*)/g);
        return parts.map((part, i) => {
            if (part.startsWith("**") && part.endsWith("**")) {
                return (
                    <strong key={i} className="font-semibold text-gray-900 dark:text-white">
                        {part.slice(2, -2)}
                    </strong>
                );
            }
            return part;
        });
    };

    return (
        <main className="relative">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] overflow-hidden bg-gradient-to-br from-deep-navy via-midnight-blue to-deep-navy pt-24">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    />
                </div>

                <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-20 text-center lg:px-8">
                    {/* Back Link */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8 self-start"
                    >
                        <Link
                            href="/#services"
                            className="inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-gold"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Services
                        </Link>
                    </motion.div>

                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="mb-4 inline-block rounded-full bg-gold/20 border border-gold/30 px-4 py-2 text-sm font-medium text-gold">
                            Our Services
                        </span>
                        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                            {service.title}
                        </h1>
                        <p
                            className="mb-6 text-2xl font-medium text-gold"
                            style={{ fontFamily: "Cairo, sans-serif" }}
                        >
                            {service.titleAr}
                        </p>
                        <p className="mx-auto max-w-3xl text-lg text-gray-300">
                            {service.description}
                        </p>
                    </motion.div>
                </div>

                {/* Decorative bottom curve */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg
                        viewBox="0 0 1440 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full"
                    >
                        <path
                            d="M0 100V0C240 66.6667 480 100 720 100C960 100 1200 66.6667 1440 0V100H0Z"
                            className="fill-platinum dark:fill-deep-navy"
                        />
                    </svg>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="bg-platinum py-16 dark:bg-deep-navy">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid gap-8 lg:grid-cols-2"
                    >
                        {/* Main Image */}
                        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-200 shadow-2xl dark:bg-gray-800">
                            <Image
                                src={service.images[selectedImage] || "/images/placeholder.jpg"}
                                alt={`${service.title} - Image ${selectedImage + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                            {/* Image counter */}
                            <div className="absolute bottom-4 right-4 rounded-full bg-black/50 px-3 py-1 text-sm text-white backdrop-blur-sm">
                                {selectedImage + 1} / {service.images.length}
                            </div>
                        </div>

                        {/* Thumbnails Grid */}
                        <div className="grid grid-cols-3 gap-4">
                            {service.images.map((image, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`relative aspect-square overflow-hidden rounded-2xl transition-all ${selectedImage === index
                                        ? "ring-4 ring-gold ring-offset-2 ring-offset-platinum dark:ring-offset-deep-navy"
                                        : "opacity-70 hover:opacity-100"
                                        }`}
                                >
                                    <Image
                                        src={image || "/images/placeholder.jpg"}
                                        alt={`${service.title} - Thumbnail ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="bg-white py-20 dark:bg-midnight-blue">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-3">
                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2"
                        >
                            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                                About This Service
                            </h2>
                            <div className="space-y-6 text-gray-600 dark:text-gray-400">
                                {service.longDescription.split("\n\n").map((paragraph, i) => (
                                    <div key={i}>
                                        {paragraph.startsWith("•") ? (
                                            <ul className="space-y-3">
                                                {paragraph.split("\n").map((line, j) => (
                                                    <li
                                                        key={j}
                                                        className="flex items-start gap-3 text-base leading-relaxed"
                                                    >
                                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                                                        <span>{renderText(line.replace("• ", ""))}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-lg leading-relaxed">
                                                {renderText(paragraph)}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Features & CTA */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            {/* Features Card */}
                            <div className="rounded-3xl bg-gradient-to-br from-platinum to-gray-100 p-8 dark:from-deep-navy dark:to-midnight-blue border border-gold/10">
                                <h3 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
                                    Key Features
                                </h3>
                                <ul className="space-y-4">
                                    {service.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20">
                                                <Check className="h-4 w-4 text-gold" />
                                            </div>
                                            <span className="text-gray-700 dark:text-gray-300">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA Card */}
                            <div className="rounded-3xl bg-gradient-to-br from-gold to-warm-gold p-8 text-deep-navy">
                                <h3 className="mb-4 text-xl font-bold">
                                    Ready to Get Started?
                                </h3>
                                <p className="mb-6 text-deep-navy/80">
                                    Contact us today for a free consultation and quote.
                                </p>
                                <div className="space-y-3">
                                    <Link href="/#contact">
                                        <Button
                                            variant="secondary"
                                            className="w-full bg-deep-navy text-gold hover:bg-midnight-blue"
                                        >
                                            <Phone className="h-4 w-4" />
                                            Request Quote
                                        </Button>
                                    </Link>
                                    <a
                                        href="https://wa.me/201005004355"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button
                                            variant="outline"
                                            className="w-full border-deep-navy/30 text-deep-navy hover:bg-deep-navy/10"
                                        >
                                            WhatsApp Us
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Related Services */}
            <section className="bg-platinum py-16 dark:bg-deep-navy">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
                            Explore Other Services
                        </h2>
                        <Link
                            href="/#services"
                            className="inline-flex items-center gap-2 text-lg font-medium text-gold transition-colors hover:text-warm-gold"
                        >
                            View All Services
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
