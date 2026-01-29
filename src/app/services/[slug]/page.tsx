import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/pages/ServiceDetailPage";
import { Metadata } from "next";

const servicesData = {
    "gates-doors": {
        title: "Gates & Doors",
        titleAr: "البوابات والأبواب",
        description:
            "Custom-designed gates and armored doors with fire resistance, combining security with elegant aesthetics. Our gates are engineered for durability and crafted for beauty.",
        longDescription: `At Versay, we specialize in creating bespoke gates and doors that blend superior security with stunning design. Our offerings include:

• **Armored Security Gates** - Heavy-duty protection with elegant finishes
• **Fire-Resistant Doors** - Safety-certified doors meeting international standards
• **Decorative Entrance Gates** - Make a lasting first impression
• **Automatic Sliding Gates** - Modern convenience with classic aesthetics
• **Industrial Access Doors** - Robust solutions for commercial spaces

Each piece is crafted using premium materials and cutting-edge manufacturing techniques, ensuring longevity and low maintenance.`,
        images: [
            "/images/services/gates.jpg",
            "/images/services/gates (1).jpg",
            "/images/services/gates (2).jpg",
            "/images/services/gates (3).jpg",
            "/images/services/gates (4).jpg",
            "/images/services/gates (5).jpg",
        ],
        features: [
            "Custom Design & Engineering",
            "Fire-Resistant Options",
            "Automated Systems Available",
            "Premium Finishes & Coatings",
            "ISO Certified Manufacturing",
        ],
    },
    "handrails-railings": {
        title: "Handrails & Railings",
        titleAr: "الهاندريلات والدرابزينات",
        description:
            "Premium staircase handrails and balcony railings crafted with precision and artistic design for residential and commercial projects.",
        longDescription: `Transform your spaces with our exquisite handrails and railings collection. We create:

• **Staircase Handrails** - Elegant solutions for interior and exterior stairs
• **Balcony Railings** - Safety meets sophistication
• **Glass & Metal Combinations** - Modern minimalist designs
• **Forged Iron Railings** - Classic artistic patterns
• **Stainless Steel Systems** - Contemporary and durable

Our skilled craftsmen combine traditional techniques with modern technology to deliver railings that are both functional safety features and stunning architectural elements.`,
        images: [
            "/images/services/handrails (1).jpeg",
            "/images/services/handrails (2).jpeg",
            "/images/services/handrails (3).jpeg",
            "/images/services/handrails (4).jpeg",
            "/images/services/handrails (5).jpeg",
            "/images/services/handrails (6).jpeg",
        ],
        features: [
            "Custom Height & Design",
            "Multiple Material Options",
            "Safety Code Compliant",
            "Indoor & Outdoor Solutions",
            "Professional Installation",
        ],
    },
    "hangars-structures": {
        title: "Hangars & Structures",
        titleAr: "الهناجر والكبائن",
        description:
            "Industrial hangars, steel structures, and prefabricated cabins for commercial, industrial, and agricultural use.",
        longDescription: `We deliver comprehensive structural steel solutions for large-scale projects:

• **Industrial Hangars** - Warehouses, factories, and storage facilities
• **Steel Frame Buildings** - Quick-build commercial structures
• **Prefabricated Cabins** - Modular solutions for any purpose
• **Agricultural Buildings** - Farms, barns, and storage units
• **Parking Structures** - Multi-level steel parking solutions

Our engineering team works closely with clients from design through installation, ensuring structures that meet exact specifications and exceed expectations.`,
        images: [
            "/images/services/hangars.jpg",
            "/images/services/hangars (1).jpg",
            "/images/services/hangars (2).jpg",
            "/images/services/hangars (3).jpg",
            "/images/services/hangars (4).jpg",
            "/images/services/hangars (5).jpg",
        ],
        features: [
            "Large Span Capabilities",
            "Quick Construction Time",
            "Weather-Resistant Coatings",
            "Expandable Designs",
            "Complete Turnkey Solutions",
        ],
    },
    "cnc-laser-cutting": {
        title: "CNC Laser Cutting",
        titleAr: "أعمال الليزر CNC",
        description:
            "Precision laser cutting for intricate patterns, decorative panels, and custom metal designs using state-of-the-art technology.",
        longDescription: `Our advanced CNC laser cutting services deliver precision and creativity:

• **Decorative Panels** - Intricate patterns for facades and interiors
• **Custom Signage** - Precision-cut logos and lettering
• **Architectural Screens** - Privacy and aesthetics combined
• **Furniture Components** - Detailed metal pieces for furniture
• **Industrial Parts** - High-precision components

With our modern laser cutting equipment, we can execute complex designs with micron-level accuracy, transforming your vision into reality.`,
        images: [
            "/images/services/laser.jpg",
            "/images/services/laser (1).jpg",
            "/images/services/laser (2).jpg",
            "/images/services/laser (3).jpg",
            "/images/services/laser (4).jpg",
            "/images/services/laser (5).jpg",
        ],
        features: [
            "High Precision Cutting",
            "Complex Pattern Capability",
            "Multiple Material Support",
            "Fast Turnaround Time",
            "CAD/CAM Design Services",
        ],
    },
    "stainless-steel": {
        title: "Stainless Steel Works",
        titleAr: "أعمال الاستانلس",
        description:
            "High-quality stainless steel fabrication for modern architectural and interior applications with premium finishes.",
        longDescription: `Stainless steel brings elegance and durability to any project:

• **Architectural Cladding** - Modern building facades
• **Kitchen & Commercial Equipment** - Food-grade solutions
• **Decorative Elements** - Sculptures and artistic pieces
• **Furniture** - Contemporary tables, chairs, and fixtures
• **Outdoor Installations** - Weather-resistant structures

We work with various grades of stainless steel and offer multiple finishing options including brushed, mirror, and colored finishes.`,
        images: [
            "/images/services/stainless.jpg",
            "/images/services/stainless (1).jpg",
            "/images/services/stainless (2).jpg",
            "/images/services/stainless (7).jpg",
            "/images/services/stainless (4).jpg",
            "/images/services/stainless (5).jpeg",
        ],
        features: [
            "Premium Grade Materials",
            "Multiple Finish Options",
            "Corrosion Resistant",
            "Hygienic & Easy Clean",
            "Custom Fabrication",
        ],
    },
    "glass-metal": {
        title: "Glass & Metal Integration",
        titleAr: "أعمال الزجاج والمعادن",
        description:
            "Seamless integration of glass with metal frames for contemporary facades, partitions, and interior applications.",
        longDescription: `We create stunning glass and metal combinations for modern architecture:

• **Glass Facades** - Full-height curtain walls
• **Balustrades** - Frameless and semi-frameless options
• **Shower Enclosures** - Elegant bathroom solutions
• **Office Partitions** - Modern workspace dividers
• **Skylights** - Natural lighting solutions

Our expertise in combining glass with metal creates spaces that feel open, bright, and contemporary while maintaining structural integrity.`,
        images: [
            "/images/services/Glass (1).jpg",
            "/images/services/Glass (1).jpeg",
            "/images/services/Glass (2).jpg",
            "/images/services/Glass (3).jpeg",
            "/images/services/Glass (4).jpeg",
            "/images/services/Glass (5).jpeg",
        ],
        features: [
            "Tempered Safety Glass",
            "Aluminum & Steel Frames",
            "Custom Dimensions",
            "UV Protection Options",
            "Sound Insulation",
        ],
    },
    "forged-iron": {
        title: "Forged Iron Works",
        titleAr: "الفور فورجيه",
        description:
            "Traditional and modern forged iron designs for gates, furniture, and decorative elements with artistic craftsmanship.",
        longDescription: `The art of forged iron brings timeless beauty to any space:

• **Ornamental Gates** - Hand-forged entrance masterpieces
• **Decorative Railings** - Artistic staircase and balcony designs
• **Garden Furniture** - Durable outdoor seating and tables
• **Wall Art & Sculptures** - Custom artistic pieces
• **Lighting Fixtures** - Chandeliers and wall sconces

Our master craftsmen combine traditional forging techniques with modern design sensibilities to create pieces that are both functional and artistic.`,
        images: [
            "/images/services/Forged (1).png",
            "/images/services/Forged (1).jpeg",
            "/images/services/Forged (2).jpeg",
            "/images/services/Forged (2).png",
            "/images/services/Forged (3).png",
            "/images/services/Forged (4).png",
        ],
        features: [
            "Hand-Forged Artistry",
            "Custom Designs",
            "Rust-Resistant Finishes",
            "Traditional & Modern Styles",
            "Restoration Services",
        ],
    },
    "pergolas-shades": {
        title: "Pergolas & Shades",
        titleAr: "البرجولات والمظلات",
        description:
            "Custom pergolas and shade structures for outdoor spaces with elegant metal frameworks and optional fabric covers.",
        longDescription: `Create beautiful outdoor living spaces with our pergolas and shade solutions:

• **Garden Pergolas** - Elegant outdoor entertaining areas
• **Car Parking Shades** - Protective covered parking
• **Pool Covers** - Stylish poolside shade structures
• **Commercial Awnings** - Business entrance solutions
• **Retractable Systems** - Flexible coverage options

Our structures are engineered to withstand weather conditions while providing beautiful, functional outdoor spaces.`,
        images: [
            "/images/services/Pergolas (1).jpg",
            "/images/services/Pergolas (2).jpg",
            "/images/services/Pergolas (3).jpeg",
            "/images/services/Pergolas (4).jpeg",
            "/images/services/Pergolas (5).jpeg",
            "/images/services/Pergolas (6).jpeg",
        ],
        features: [
            "Weather-Resistant Design",
            "Custom Sizes & Shapes",
            "Optional Fabric Covers",
            "Powder-Coated Finishes",
            "Motorized Options",
        ],
    },
};

export function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({ slug }));
}

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = servicesData[slug as keyof typeof servicesData];
    if (!service) return { title: "Service Not Found" };

    return {
        title: `${service.title} | Versay Company`,
        description: service.description,
    };
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const service = servicesData[slug as keyof typeof servicesData];

    if (!service) {
        notFound();
    }

    return <ServiceDetailPage service={service} />;
}
