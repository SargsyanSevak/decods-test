"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";

type AccordionItemProps = React.ComponentProps<
  typeof AccordionPrimitive.Item
> & {
  isOpen?: boolean;
  isNextOpen?: boolean;
};

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  isNextOpen,
  ...props
}: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "bg-black transition-all rounded-[30px] rounded-bl-none rounded-br-none duration-300 px-6 py-4",
        "data-[state=open]:bg-white data-[state=open]:rounded-[30px]",
        isNextOpen ? "border-b-0 transition-all duration-0" : "border-b",
        "last:border-b-0",
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
          " flex flex-1 items-start justify-between gap-4 rounded-md py-4 pt-0 text-left text-sm font-medium transition-all outline-none  f disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 cursor-pointer",
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "flex items-center gap-10 pt-4 text-[20px] text-[#BFB7B7]",
            active && "text-black"
          )}
        >
          <p
            className={cn(
              "text-[32px] text-[#BFB7B7] font-bold",
              active && "text-[#3C3C4380]"
            )}
          >
            {Number(props.id) > 9 ? "" : "0"}
            {props.id}
          </p>
          {children}
        </div>

        <div
          className={cn(
            "min-w-[48px] min-h-[48px] rounded-full bg-white flex justify-center items-center transition-all duration-300 mt-5",
            active && "bg-black rotate-[45deg]"
          )}
        >
          <Plus color={active ? "white" : "black"} />
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
          "pt-0 pb-4 text-[16px] leading-[27px] text-[#3C3C43D9] px-[88px]",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
