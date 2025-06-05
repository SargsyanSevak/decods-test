"use client";
import Image from "next/image";
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
  console.log(openItem);

  return (
    <div className="w-full relative">
      <h2 className="text-[54px] text-white text-center mx-auto">
        Frequently Asked Questions
      </h2>

      <div className="mt-10 flex gap-10 relative z-20 w-fill">
        <Accordion
          type="single"
          collapsible
          value={openItem as string}
          onValueChange={(val) => setOpenItem(val ?? null)}
          className="w-1/2 min-w-1/2"
        >
          {faqDataLeft.map((el, index) => {
            const currentId = String(el.id);
            const nextId = String(faqDataLeft[index + 1]?.id ?? "");
            const isNextOpen = openItem === nextId;
            console.log({
              openItem,
              el: el.id,
            });

            return (
              <AccordionItem
                key={el.id}
                value={currentId}
                isNextOpen={isNextOpen}
              >
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
          {faqDataRight.map((el, index) => {
            const currentId = String(el.id);
            const nextId = String(faqDataRight[index + 1]?.id ?? "");
            const isNextOpen = openItem === nextId;

            return (
              <AccordionItem
                key={el.id}
                value={currentId}
                isNextOpen={isNextOpen}
              >
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

      <div className="absolute top-[-100px] right-[-100px] bottom-0 opacity-[0.075] z-0">
        <div className="w-[485px] h-full bg-gradient-to-b from-transparent to-black">
          <Image
            src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1749135955/256037434_3ee9f99e-2759-4bc6-a392-1b3c856055eb_1_2_fmdkae.png"
            width={485}
            height={385}
            alt="Background Vector"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
