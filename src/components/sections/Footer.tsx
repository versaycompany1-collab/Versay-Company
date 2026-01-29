"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, ArrowUp } from "lucide-react";
import Image from "next/image";

const footerLinks = {
    company: [
        { label: "About Us", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Projects", href: "#portfolio" },
        { label: "Contact", href: "#contact" },
    ],
    services: [
        { label: "Gates & Doors", href: "#services" },
        { label: "Handrails", href: "#services" },
        { label: "Laser Cutting", href: "#services" },
        { label: "Steel Structures", href: "#services" },
    ],
};

const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="relative bg-gray-950 pt-16">
            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <div className="mb-6 flex items-center gap-3">
                            <Image
                                src="/images/logo.png"
                                alt="Versay Logo"
                                width={50}
                                height={50}
                                className="h-12 w-12 object-contain"
                            />
                            <div>
                                <h3 className="text-lg font-bold text-white">Versay</h3>
                                <p className="text-xs text-gray-500">شركة فرساي</p>
                            </div>
                        </div>
                        <p className="mb-6 text-sm text-gray-400">
                            Excellence in metal formations, trading, and contracting.
                            Delivering premium quality steel structures and architectural
                            metalwork since 2012.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-all hover:bg-copper hover:text-white"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="mb-4 font-semibold text-white">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-sm text-gray-400 transition-colors hover:text-copper"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="mb-4 font-semibold text-white">Services</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.label}>
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-sm text-gray-400 transition-colors hover:text-copper"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="mb-4 font-semibold text-white">Contact</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>
                                <span className="block text-xs text-gray-500">Phone:</span>
                                +20 1005004355
                            </li>
                            <li>
                                <span className="block text-xs text-gray-500">Email:</span>
                                info@versay-eg.com
                            </li>
                            <li>
                                <span className="block text-xs text-gray-500">Location:</span>
                                Kafr El Sheikh - Baltim - Industrial City
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800" />

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
                    <p className="text-center text-sm text-gray-500">
                        © {new Date().getFullYear()} Versay Company for Trading, Contracting & Metal Formations.
                        All rights reserved.
                    </p>

                    {/* Back to top */}
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ y: -3 }}
                        className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-copper"
                    >
                        <ArrowUp className="h-4 w-4" />
                        Back to top
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
