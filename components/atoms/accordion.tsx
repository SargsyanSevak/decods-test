"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";

import { cn } from "@/lib/utils";

type AccordionItemProps = React.ComponentProps<
  typeof AccordionPrimitive.Item
> & {
  isOpen?: boolean;
};

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({ className, ...props }: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "bg-[#FFFFFF1F] transition-all rounded-[24px] duration-300 px-5 py-2",
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  active,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  active?: boolean;
}) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-center justify-between gap-4 rounded-md h-[80px] py-4 text-left text-sm font-medium transition-all outline-none   disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 cursor-pointer",
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "flex items-center gap-10  text-[18px] text-white font-semibold"
          )}
        >
          {children}
        </div>

        <div
          className={cn(
            "min-w-[40px] min-h-[40px] rounded-full bg-[#FFFFFF0F] flex justify-center items-center transition-all duration-300 "
          )}
        >
          {active ? (
            <Minus size={24} className="text-white/50" />
          ) : (
            <Plus size={24} className="text-white/50" />
          )}
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div
        className={cn(
          "pt-0 pb-4 paragraph leading-[24px] font-medium text-white/50 pr-20",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
