"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
    Phone,
    Mail,
    MapPin,
    MessageCircle,
    Send,
    Clock,
    CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";

const contactInfo = [
    {
        icon: Phone,
        title: "Phone",
        value: "01005004355",
        link: "tel:01005004355",
    },
    {
        icon: MessageCircle,
        title: "WhatsApp",
        value: "010 05004355",
        link: "https://wa.me/201005004355",
    },
    {
        icon: Mail,
        title: "Email",
        value: "info@versay-eg.com",
        link: "mailto:info@versay-eg.com",
    },
    {
        icon: MapPin,
        title: "Location",
        value: "Kafr El Sheikh - Baltim - Industrial City",
        link: "https://maps.app.goo.gl/9KZPvV4reBEJNwJ86",
    },
];

export function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setFormData({ name: "", email: "", phone: "", message: "" });
    };

    return (
        <section
            id="contact"
            ref={ref}
            className="relative overflow-hidden bg-gradient-to-br from-deep-navy via-midnight-blue to-deep-navy py-24"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px),
                                         linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            {/* Gold accent glow */}
            <div className="absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
            <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-royal-blue/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <span className="mb-4 inline-block rounded-full bg-gold/10 border border-gold/30 px-4 py-2 text-sm font-medium text-gold">
                        Contact Us - تواصل معنا
                    </span>
                    <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                        Let&apos;s Build Something Amazing
                    </h2>
                    <p className="mx-auto max-w-2xl text-gray-400">
                        Ready to start your next project? Get in touch with our team for a
                        free consultation and quote.
                    </p>
                </motion.div>

                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="rounded-3xl bg-white/5 border border-gold/10 p-8 backdrop-blur-sm">
                            <h3 className="mb-6 text-2xl font-bold text-white">
                                Send Us a Message
                            </h3>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                >
                                    <CheckCircle className="mb-4 h-16 w-16 text-gold" />
                                    <h4 className="mb-2 text-xl font-bold text-white">
                                        Message Sent!
                                    </h4>
                                    <p className="text-gray-400">
                                        We&apos;ll get back to you as soon as possible.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block text-sm font-medium text-gray-300">
                                                Your Name
                                            </label>
                                            <Input
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, name: e.target.value })
                                                }
                                                required
                                                className="border-gold/20 bg-deep-navy/50 text-white placeholder:text-gray-500 focus:border-gold focus:ring-gold/20"
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-sm font-medium text-gray-300">
                                                Email Address
                                            </label>
                                            <Input
                                                type="email"
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, email: e.target.value })
                                                }
                                                required
                                                className="border-gold/20 bg-deep-navy/50 text-white placeholder:text-gray-500 focus:border-gold focus:ring-gold/20"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-300">
                                            Phone Number
                                        </label>
                                        <Input
                                            placeholder="01012345678"
                                            value={formData.phone}
                                            onChange={(e) =>
                                                setFormData({ ...formData, phone: e.target.value })
                                            }
                                            className="border-gold/20 bg-deep-navy/50 text-white placeholder:text-gray-500 focus:border-gold focus:ring-gold/20"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-300">
                                            Your Message
                                        </label>
                                        <Textarea
                                            placeholder="Tell us about your project..."
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData({ ...formData, message: e.target.value })
                                            }
                                            required
                                            rows={4}
                                            className="border-gold/20 bg-deep-navy/50 text-white placeholder:text-gray-500 focus:border-gold focus:ring-gold/20"
                                        />
                                    </div>

                                    <Button type="submit" variant="premium" size="lg" className="w-full">
                                        <Send className="h-5 w-5" />
                                        Send Message
                                    </Button>
                                </form>
                            )}
                        </div>
                    </motion.div>

                    {/* Contact Info & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-6"
                    >
                        {/* Contact Cards */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-start gap-4 rounded-2xl bg-white/5 border border-gold/10 p-5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-gold/30"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 border border-gold/20">
                                        <info.icon className="h-6 w-6 text-gold" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">{info.title}</p>
                                        <p className="font-medium text-white group-hover:text-gold">
                                            {info.value}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Working Hours */}
                        <div className="rounded-2xl bg-white/5 border border-gold/10 p-6 backdrop-blur-sm">
                            <div className="mb-4 flex items-center gap-3">
                                <Clock className="h-6 w-6 text-gold" />
                                <h4 className="text-lg font-semibold text-white">
                                    Working Hours
                                </h4>
                            </div>
                            <div className="space-y-2 text-gray-400">
                                <p className="flex justify-between">
                                    <span>Saturday - Thursday:</span>
                                    <span className="text-white">8:00 AM - 5:00 PM</span>
                                </p>
                                <p className="flex justify-between">
                                    <span>Friday:</span>
                                    <span className="text-white">Closed</span>
                                </p>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="overflow-hidden rounded-2xl border border-gold/10">
                            <div className="aspect-video bg-midnight-blue">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55091.64935274121!2d31.108264849999997!3d31.5663889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f9f5e5e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sBaltim%2C%20Kafr%20El%20Sheikh%20Governorate!5e0!3m2!1sen!2seg!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: "200px" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    sandbox="allow-scripts allow-same-origin"
                                    title="Versay Company Location Map"
                                    className="grayscale"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
