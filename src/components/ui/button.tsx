import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-gradient-to-r from-copper to-bronze text-white hover:from-bronze hover:to-copper shadow-lg hover:shadow-xl hover:scale-105",
                secondary:
                    "bg-steel-blue text-white hover:bg-steel-dark shadow-md hover:shadow-lg hover:scale-105",
                outline:
                    "border-2 border-copper text-copper hover:bg-copper hover:text-white",
                ghost:
                    "text-steel-blue hover:bg-steel-blue/10 dark:text-gray-300 dark:hover:bg-gray-700",
                link: "text-copper underline-offset-4 hover:underline",
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
