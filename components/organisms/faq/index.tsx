"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atoms/accordion";
import { faqDataLeft, faqDataRight } from "@/mock";
import { useState } from "react";

const FAQ = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div className="w-full relative">
      <h2 className="section-title  text-white text-center">
        Frequently Asked Questions
      </h2>

      <div className="mt-14 flex gap-4 relative z-20 w-fill">
        <Accordion
          type="single"
          collapsible
          value={openItem as string}
          onValueChange={(val) => setOpenItem(val ?? null)}
          className="w-1/2 min-w-1/2"
        >
          {faqDataLeft.map((el) => {
            const currentId = String(el.id);
            return (
              <AccordionItem key={el.id} value={currentId} className="mt-2">
                <AccordionTrigger
                  id={currentId}
                  active={Number(openItem) === el.id}
                >
                  {el.question}
                </AccordionTrigger>
                <AccordionContent>{el.answer}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
        <Accordion
          type="single"
          collapsible
          value={openItem as string}
          onValueChange={(val) => setOpenItem(val ?? null)}
          className="w-1/2 min-w-1/2"
        >
          {faqDataRight.map((el) => {
            const currentId = String(el.id);

            return (
              <AccordionItem key={el.id} value={currentId} className="mt-2">
                <AccordionTrigger
                  id={currentId}
                  active={Number(openItem) === el.id}
                >
                  {el.question}
                </AccordionTrigger>
                <AccordionContent>{el.answer}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
