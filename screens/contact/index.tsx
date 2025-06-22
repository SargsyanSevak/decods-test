"use client";
import { cn } from "@/lib/utils";
import useSendOrder from "./useSendOrder";
import { Input } from "@/components/atoms/input";
import { Controller } from "react-hook-form";
import { Textarea } from "@/components/atoms/textarea";
import { Checkbox } from "@/components/atoms/checkbox";
import { Label } from "@/components/atoms/label";
import Link from "next/link";
import { Button } from "@/components/atoms/button";
import { ContactLinks } from "@/components/molecules";
import { Toaster } from "sonner";
import dynamic from "next/dynamic";
import "react-international-phone/style.css";
import { CircleAlert, CircleHelp } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/atoms/tooltip";

const PhoneInput = dynamic(
  () => import("react-international-phone").then((mod) => mod.PhoneInput),
  {
    ssr: false,
    loading: () => <div className="h-[56px] w-full bg-gray-100 rounded-sm" />,
  }
);

const ContactUs = () => {
  const {
    projectTypes,
    budget,
    selectedBudget,
    selectedProjectType,
    control,
    errors,
    checked,
    loading,

    handleChangeProjectType,
    handleChangeBudget,
    handleSubmit,
    handleFormSubmit,
    setChecked,
  } = useSendOrder();

  return (
    <section className="w-full text-black section relative overflow-hidden">
      <div>
        <div className="flex flex-col max-w-[700px]">
          <h2 className="section-title text-black font-bold">
            Let’s Collaborate
          </h2>
          <h1 className="section-title slate-text font-bold mt-3">
            Contact us via the form or by Email
          </h1>
          <p className="paragraph slate-text mt-4">
            Tell us everything about your project or product, we’ll be glad to
            help.
          </p>
        </div>
        <div className="mt-16 flex lg:flex-row flex-col lg:gap-20 gap-10">
          <div className="w-full">
            <h2 className="text-[16px] font-semibold text-black">
              Project Type
            </h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {projectTypes.map((el) => {
                const selected = selectedProjectType.includes(el);
                return (
                  <div
                    role="button"
                    key={el}
                    className={cn(
                      "h-[40px] rounded-[9999px] px-[20px] border-[1px] border-black/15 flex justify-center items-center gap-4 slate-text text-[16px] cursor-pointer",
                      selected && "bg-black text-white border-black"
                    )}
                    onClick={() => handleChangeProjectType(el)}
                  >
                    {el}{" "}
                    {el === "Hire Developer" && (
                      <Tooltip>
                        <TooltipTrigger className="md:flex hidden justify-center items-center">
                          <CircleHelp size={18} />
                        </TooltipTrigger>
                        <TooltipContent className="w-[260px]">
                          Hire Developer — fast matching with a vetted developer
                          for your project. Get direct contact with the expert
                          and quality assurance from our team.
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-[16px] font-semibold text-black">Budget</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {budget.map((el) => {
                const selected = selectedBudget === el;
                return (
                  <button
                    key={el}
                    className={cn(
                      "h-[40px] rounded-[9999px] px-[20px] border-[1px] border-black/15 flex justify-center items-center slate-text text-[16px] cursor-pointer",
                      selected && "bg-black text-white border-black"
                    )}
                    onClick={() => handleChangeBudget(el)}
                  >
                    {el}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="mt-10 flex flex-col gap-10"
        >
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-20 gap-y-10">
            <figure className="w-full">
              <h2 className="text-[16px] font-semibold text-black mb-2">
                Full Name
              </h2>
              <Controller
                control={control}
                name="fullName"
                render={({ field }) => {
                  return (
                    <Input
                      placeholder="Enter full name"
                      className="py-6 pl-0 placeholder:text-[#585858] placeholder:text-[14px] border-0 border-b border-b-gray-200 rounded-none !focus:outline-none !focus:ring-0 !outline-none !ring-0 shadow-none"
                      type="text"
                      error={errors?.fullName?.message}
                      {...field}
                    />
                  );
                }}
              />
            </figure>

            <figure className="w-full">
              <h2 className="text-[16px] font-semibold text-black mb-2">
                Email
              </h2>
              <Controller
                control={control}
                name="email"
                render={({ field }) => {
                  return (
                    <Input
                      placeholder="Enter full email"
                      className="py-6 pl-0 placeholder:text-[#585858] placeholder:text-[14px] border-0 border-b border-b-gray-200 rounded-none !focus:outline-none !focus:ring-0 !outline-none !ring-0 shadow-none"
                      type="email"
                      error={errors?.email?.message}
                      {...field}
                    />
                  );
                }}
              />
            </figure>

            <figure className="w-full">
              <h2 className="text-[16px] font-semibold text-black mb-2">
                Company{" "}
                <span className="text-gray-500 font-medium text-[14px]">
                  (Optional)
                </span>
              </h2>
              <Controller
                control={control}
                name="company"
                render={({ field }) => {
                  return (
                    <Input
                      placeholder="Enter company name"
                      className="py-6 pl-0 placeholder:text-[#585858] placeholder:text-[14px] border-0 border-b border-b-gray-200 rounded-none !focus:outline-none !focus:ring-0 !outline-none !ring-0 shadow-none"
                      type="text"
                      error={errors?.company?.message}
                      {...field}
                    />
                  );
                }}
              />
            </figure>

            <figure className="w-full">
              <h2 className="text-[16px] font-semibold text-black mb-2">
                Phone Number{" "}
                <span className="text-gray-500 font-medium text-[14px]">
                  (Optional)
                </span>
              </h2>
              <Controller
                control={control}
                name="phone"
                render={({ field }) => {
                  return (
                    <div>
                      <PhoneInput
                        defaultCountry="us"
                        className="py-[6px] pl-0 placeholder:text-[#585858] placeholder:text-[14px] border-0 border-b border-b-gray-200 rounded-none !focus:outline-none !focus:ring-0 !outline-none !ring-0 shadow-none"
                        {...field}
                      />
                      {!!errors.phone?.message && (
                        <p className="text-red-500 mt-2 text-[12px] flex items-center gap-1">
                          <CircleAlert color="red" size={12} />
                          {errors.phone?.message}
                        </p>
                      )}
                    </div>
                  );
                }}
              />
            </figure>

            <figure className="w-full">
              <h2 className="text-[16px] font-semibold text-black mb-2">
                Task
              </h2>
              <Controller
                control={control}
                name="task"
                render={({ field }) => {
                  return (
                    <Textarea
                      placeholder="Pitch your project idea here..."
                      className="py-6 pl-0 placeholder:text-[#585858] placeholder:text-[14px] border-0 border-b border-b-gray-200 rounded-none !focus:outline-none !focus:ring-0 !outline-none !ring-0 min-h-[150px] shadow-none max-h-[600px]"
                      error={errors?.task?.message}
                      {...field}
                    />
                  );
                }}
              />
            </figure>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <Checkbox
                id="terms"
                checked={checked}
                onCheckedChange={(e: boolean) => setChecked(e)}
                className="bg-[#0505050F] w-[20px] h-[20px]"
              />
              <Label htmlFor="terms" className="text-[16px]">
                I consent to marketing communications from Decods, Inc.
              </Label>
            </div>
            <p className="text-[14px] max-w-[512px] mt-1 pl-8 slate-text">
              By submitting this form, you consent to the processing of your
              personal data uploaded through the contact form above,
              in accordance with the terms of Decods, Inc.’s{" "}
              <Link
                href={"/privacy-policy"}
                className="text-black underline cursor-pointer"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-4 w-full [@media(max-width:480px)]:flex-col">
            <Button
              iconArrow
              iconPosition="right"
              className="min-w-[130px] [@media(max-width:480px)]:w-full"
              type="submit"
              disabled={loading}
              isLoading={loading}
            >
              Send
            </Button>
            <a
              href="https://calendly.com/help-decods/30min"
              target="_blank"
              rel="noreferrer"
              aria-label="calendly"
              className="w-fit [@media(max-width:480px)]:w-full"
            >
              <Button
                variant="outline"
                iconArrow
                iconPosition="right"
                className="!h-[56px] w-[187px] [@media(max-width:480px)]:w-full"
                type="button"
              >
                Book a Call
              </Button>
            </a>
          </div>
        </form>
        <div className="mt-20">
          <ContactLinks />
        </div>
      </div>
      <Toaster position="top-center" />
    </section>
  );
};

export default ContactUs;
