"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDarkMode } from "@/hooks/useDarkMode";
import Image from "next/image";

const navLinks = [
    { href: "#home", label: "Home", labelAr: "الرئيسية" },
    { href: "#about", label: "About", labelAr: "من نحن" },
    { href: "#services", label: "Services", labelAr: "خدماتنا" },
    { href: "#portfolio", label: "Projects", labelAr: "مشاريعنا" },
    { href: "#partners", label: "Partners", labelAr: "شركاء النجاح" },
    { href: "#contact", label: "Contact", labelAr: "تواصل معنا" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-deep-navy/95 shadow-lg shadow-black/20 backdrop-blur-md border-b border-gold/10"
                : "bg-transparent"
                }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3"
                >
                    <Image
                        src="/images/logo.png"
                        alt="Versay Logo"
                        width={50}
                        height={50}
                        className="h-12 w-12 object-contain"
                    />
                    <div className="hidden sm:block">
                        <h1 className="text-lg font-bold text-white">
                            Versay
                        </h1>
                        <p className="text-xs text-gold">
                            شركة فرساي
                        </p>
                    </div>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-1 lg:flex">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => scrollToSection(link.href)}
                            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-gold/10 hover:text-gold"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* Right side buttons */}
                <div className="flex items-center gap-3">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleDarkMode}
                        className="rounded-full text-gray-300 hover:text-gold hover:bg-gold/10"
                    >
                        {isDarkMode ? (
                            <Sun className="h-5 w-5" />
                        ) : (
                            <Moon className="h-5 w-5" />
                        )}
                    </Button>

                    <Button
                        variant="premium"
                        onClick={() => scrollToSection("#contact")}
                        className="hidden sm:flex"
                        size="sm"
                    >
                        Get Quote
                    </Button>

                    {/* Mobile menu button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden text-gray-300 hover:text-gold hover:bg-gold/10"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </Button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-gold/10 bg-deep-navy/98 backdrop-blur-lg lg:hidden"
                    >
                        <div className="flex flex-col px-4 py-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => scrollToSection(link.href)}
                                    className="rounded-lg px-4 py-3 text-left text-base font-medium text-gray-300 transition-colors hover:bg-gold/10 hover:text-gold"
                                >
                                    {link.label} - {link.labelAr}
                                </button>
                            ))}
                            <Button
                                variant="premium"
                                onClick={() => scrollToSection("#contact")}
                                className="mt-4"
                            >
                                Get Quote
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
