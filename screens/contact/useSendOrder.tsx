import { useCallback, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { contactSchema } from "@/schema/contact-schema";
import { toast } from "sonner";

const projectTypes = ["Website", "App", "Landing page", "Other"] as const;
const budget = ["$1k - $5k", "$20k - $30k", "$30k - $50k", "$50k+"] as const;

type ProjectType = (typeof projectTypes)[number];
type BudgetType = (typeof budget)[number];
type ContactUs = z.infer<typeof contactSchema>;

const useSendOrder = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [loading, setloading] = useState<boolean>(false);
  const [selectedProjectType, setSelectedProjectType] =
    useState<ProjectType>("Website");
  const [selectedBudget, setSelectedBudget] = useState<BudgetType>("$1k - $5k");

  const handleChangeProjectType = useCallback((type: ProjectType) => {
    setSelectedProjectType(type);
  }, []);

  const handleChangeBudget = useCallback((budget: BudgetType) => {
    setSelectedBudget(budget);
  }, []);

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactUs>({
    mode: "onSubmit",
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      phone: "+1",
    },
  });

  const handleFormSubmit = async (data: ContactUs) => {
    setloading(true);
    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          projectType: selectedProjectType,
          projectBudget: selectedBudget,
        }),
      });
      if (response.ok) {
        await fetch('/api/send-email', { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            recipientName: data.fullName,
            recipientEmail: data.email,
          }),

        });
        setloading(false);
        setValue("task", "");
        handleChangeProjectType("Website");
        handleChangeBudget("$1k - $5k");
        setChecked(false);
        setTimeout(() => {
          reset();
          toast.success("The message has been sent successfully.");
        }, 500);
      }
    } catch (e) {
      setloading(false);
      if (e) {
        toast.error("Failed to send message. Please try again a bit later.");
      }
    } finally {
      setloading(false);
    }
  };

  return {
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
  };
};

export default useSendOrder;
