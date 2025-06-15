"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atoms/accordion";
import { FadeContent, FadeDown } from "@/components/molecules";
import { faqDataLeft, faqDataRight } from "@/mock";
import { useState } from "react";

const FAQ = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div className="w-full relative">
      <FadeContent>
        <h2 className="section-title  text-white text-center">
          Frequently Asked Questions
        </h2>
      </FadeContent>

      <div className="lg:mt-14 mt-10 flex lg:flex-row flex-col lg:gap-4 gap-0 relative z-20 w-fill">
        <Accordion
          type="single"
          collapsible
          value={openItem as string}
          onValueChange={(val) => setOpenItem(val ?? null)}
          className="lg:w-1/2 w-full min-w-1/2"
        >
          {faqDataLeft.map((el) => {
            const currentId = String(el.id);
            return (
              <FadeDown key={el.id}>
                <AccordionItem value={currentId} className="mt-2">
                  <AccordionTrigger
                    id={currentId}
                    active={Number(openItem) === el.id}
                  >
                    {el.question}
                  </AccordionTrigger>
                  <AccordionContent>{el.answer}</AccordionContent>
                </AccordionItem>
              </FadeDown>
            );
          })}
        </Accordion>
        <Accordion
          type="single"
          collapsible
          value={openItem as string}
          onValueChange={(val) => setOpenItem(val ?? null)}
          className="lg:w-1/2 w-full min-w-1/2"
        >
          {faqDataRight.map((el) => {
            const currentId = String(el.id);

            return (
              <FadeDown key={el.id}>
                <AccordionItem value={currentId} className="mt-2">
                  <AccordionTrigger
                    id={currentId}
                    active={Number(openItem) === el.id}
                  >
                    {el.question}
                  </AccordionTrigger>
                  <AccordionContent>{el.answer}</AccordionContent>
                </AccordionItem>
              </FadeDown>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
