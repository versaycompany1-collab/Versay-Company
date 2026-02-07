"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, X } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Administrative Capital - Mansoura 1",
        titleAr: "العاصمة الإدارية - المنصورة 1",
        category: "Structural",
        image: "/images/projects/project1.JPG",
    },
    {
        title: "Administrative Capital - Mansoura 3",
        titleAr: "العاصمة الإدارية - المنصورة 3",
        category: "Gates",
        image: "/images/projects/project2.jpg",
    },
    {
        title: "Alamein Beach Towers",
        titleAr: "الأبراج الشاطئية بالعالمين",
        category: "Handrails",
        image: "/images/projects/project3.jpg",
    },
    {
        title: "Marassi Resort",
        titleAr: "منتجع مراسي",
        category: "Structural",
        image: "/images/projects/project4.JPG",
    },
    {
        title: "Administrative Capital Metro",
        titleAr: "مترو العاصمة الإدارية",
        category: "Industrial",
        image: "/images/projects/project5.jpeg",
    },
    {
        title: "Beach 4 Project",
        titleAr: "مشروع بيتش 4",
        category: "Handrails ",
        image: "/images/projects/project12.jpeg",
    },
    {
        title: "Administrative Capital - Mansoura 7",
        titleAr: "العاصمة الإدارية - المنصورة 7",
        category: "Structural",
        image: "/images/projects/project7.JPG",
    },
    {
        title: "Administrative Capital - Mansoura 10",
        titleAr: "العاصمة الإدارية - المنصورة 10",
        category: "CNC",
        image: "/images/projects/project10.jpeg",
    },
    {
        title: "Mohammed bin Zayed Palace in New Alamein",
        titleAr: "  قصر محمد بن زايد  بالعالمين الجديدة",
        category: "Gates",
        image: "/images/projects/project13.jpg",
    },
    {
        title: "Long Live Egypt Project",
        titleAr: " مشروع تحيا مصر",
        category: "Gates",
        image: "/images/projects/project14.png",
    },
    {
        title: "Latin Quarter",
        titleAr: "الحى اللاتينى",
        category: "Industrial",
        image: "/images/projects/project8.jpeg",
    },
    {
        title: "Beach 3 Project",
        titleAr: "مشروع بيتش 3",
        category: "Industrial",
        image: "/images/projects/project6.JPG",
    },
];

const categories = ["All", "Structural", "Gates", "Handrails", "Industrial"];

export function Portfolio() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <section
            id="portfolio"
            ref={ref}
            className="relative overflow-hidden bg-platinum py-24 dark:bg-deep-navy"
        >
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-12 text-center"
                >
                    <span className="mb-4 inline-block rounded-full bg-gold/10 border border-gold/20 px-4 py-2 text-sm font-medium text-gold">
                        Our Projects - مشاريعنا
                    </span>
                    <h2 className="mb-4 text-3xl font-bold text-charcoal dark:text-white md:text-4xl lg:text-5xl">
                        Featured Projects
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400">
                        Explore our portfolio of completed projects across Egypt, showcasing
                        our expertise in metal formations and contracting.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-10 flex flex-wrap justify-center gap-3"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${activeCategory === category
                                ? "bg-gradient-to-r from-gold to-warm-gold text-deep-navy shadow-lg shadow-gold/20"
                                : "bg-white text-charcoal hover:bg-gold/10 hover:text-gold dark:bg-midnight-blue dark:text-gray-300 border border-gold/10 hover:border-gold/30"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gold/10 hover:border-gold/30"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={500}
                                    height={375}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/40 to-transparent opacity-60 transition-opacity group-hover:opacity-100" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 transition-transform group-hover:translate-y-0">
                                <span className="mb-2 inline-block rounded-full bg-gold/20 border border-gold/30 px-3 py-1 text-xs font-medium text-gold backdrop-blur-sm">
                                    {project.category}
                                </span>
                                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                                <p className="text-sm text-gold">{project.titleAr}</p>
                            </div>

                            {/* Hover icon */}
                            <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 border border-gold/30 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                                <ExternalLink className="h-5 w-5 text-gold" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedProject && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-deep-navy/90 p-4 backdrop-blur-sm"
                    onClick={() => setSelectedProject(null)}
                >
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        className="relative max-h-[80vh] max-w-4xl overflow-hidden rounded-3xl border border-gold/20"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            width={1200}
                            height={800}
                            className="h-auto w-full object-contain"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-navy/90 to-transparent p-6">
                            <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                            <p className="text-gold">{selectedProject.titleAr}</p>
                        </div>
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 border border-gold/30 text-white backdrop-blur-sm transition-colors hover:bg-gold/30"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}
