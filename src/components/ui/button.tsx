import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
    {
        variants: {
            variant: {
                default:
                    "bg-gradient-to-r from-royal-blue to-electric-blue text-white hover:from-electric-blue hover:to-royal-blue shadow-lg hover:shadow-xl hover:shadow-royal-blue/25 hover:scale-105",
                premium:
                    "bg-gradient-to-r from-gold to-warm-gold text-deep-navy font-bold hover:from-warm-gold hover:to-gold shadow-lg hover:shadow-xl hover:shadow-gold/25 hover:scale-105",
                secondary:
                    "bg-midnight-blue text-white hover:bg-deep-navy shadow-md hover:shadow-lg hover:scale-105 border border-gold/20 hover:border-gold/40",
                outline:
                    "border-2 border-gold text-gold hover:bg-gold hover:text-deep-navy",
                ghost:
                    "text-royal-blue hover:bg-royal-blue/10 dark:text-gray-300 dark:hover:bg-gray-700",
                link: "text-gold underline-offset-4 hover:underline",
            },
            size: {
                default: "h-12 px-6 py-3",
                sm: "h-10 rounded-md px-4 text-xs",
                lg: "h-14 rounded-xl px-8 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
