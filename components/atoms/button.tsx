"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center !px-6 gap-2 whitespace-nowrap rounded-[56px]  text-[18px] !font-semibold transition-all disabled:pointer-events-none disabled:bg-[#0505050F] [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer text-[14px] tracking-wide font-medium !h-[46px] duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground !text-[16px] shadow-xs hover:bg-primary/90 !h-[56px]",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background !text-[16px] shadow-xs border-[1px] border-black hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-white text-secondary-foreground !text-[16px] shadow-xs hover:bg-white/80 text-[#050505] !h-[56px]",
        ghost: "bg-[#838383] hover:bg-[#838383] hover:opacity-[0.8] text-white",
        link: "text-primary underline-offset-4 hover:underline",
        activeCircle: "dark-bg text-white rounded-full hover:dark-bg",
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
    isLoading?: boolean;
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
  isLoading,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  const [hovering, setHovering] = React.useState(false);

  return (
    <Comp
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size }),
        className,
        {
          "flex-row-reverse": iconPosition === "left",
        },
        props.disabled && "bg-[#222222] opacity-80"
      )}
      {...props}
    >
      {isLoading && (
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      )}
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
