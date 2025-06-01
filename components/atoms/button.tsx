"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center !px-6 gap-2 whitespace-nowrap rounded-[56px] !text-[16px] font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer text-[14px] tracking-wide font-medium !h-[46px] duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-[#6c6c6c] text-white !h-[56px]",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[40px] px-4 py-2 has-[>svg]:px-3",
        sm: "h-[40px] gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-[40px] px-6 has-[>svg]:px-4",
        icon: "h-[40px] w-[40px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    icon?: React.ReactNode;
    iconArrow?: boolean;
    iconPosition?: "left" | "right";
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  icon,
  iconArrow = false,
  iconPosition = "right",
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  const [hovering, setHovering] = React.useState(false);

  return (
    <Comp
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className, {
        "flex-row-reverse": iconPosition === "left",
      })}
      {...props}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}

      {iconArrow && (
        <span className="relative ml-2 w-4 h-4 overflow-hidden">
          <ArrowRight
            className={cn(
              "absolute right-0 top-0 transition-all duration-300 rotate-[-45deg]",
              hovering
                ? "-translate-y-full opacity-0"
                : "translate-y-0 opacity-100"
            )}
          />
          <ArrowRight
            className={cn(
              "absolute right-0 top-0 transition-all duration-300 rotate-[-45deg]",
              hovering
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            )}
          />
        </span>
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
