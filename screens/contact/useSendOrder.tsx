import { useCallback, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { contactSchema } from "@/schema/contact-schema";
import { toast } from "sonner";

const projectTypes = [
  "Website",
  "App",
  "Landing page",
  "Hire Developer",
  "Other",
] as const;
const budget = [
  "$1k - $5k",
  "$5k - $20k",
  "$20k - $50k",
  "$50k - $100k",
  "$100k+",
] as const;

type ProjectType = (typeof projectTypes)[number] | undefined;
type BudgetType = (typeof budget)[number] | undefined;
type ContactUs = z.infer<typeof contactSchema>;

const useSendOrder = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [loading, setloading] = useState<boolean>(false);
  const [selectedProjectType, setSelectedProjectType] = useState<
    Array<ProjectType>
  >([]);
  const [selectedBudget, setSelectedBudget] = useState<BudgetType>();

  const handleChangeProjectType = useCallback(
    (val: string | null | undefined) => {
      if (!val) {
        setSelectedProjectType([]);
      } else {
        setSelectedProjectType((prevProjectTypes) => {
          const alreadySelected = prevProjectTypes.includes(val as ProjectType);

          if (alreadySelected) {
            return prevProjectTypes.filter((type) => type !== val);
          }

          if (prevProjectTypes.length >= 3) {
            return prevProjectTypes;
          }

          return [...prevProjectTypes, val as ProjectType];
        });
      }
    },
    []
  );

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
    if (!selectedProjectType?.length) {
      toast.error("Please select at least one project type.");
      return;
    }
    if (!selectedBudget) {
      toast.error("Please select a project budget");
      return;
    }
    setloading(true);
    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          projectType: selectedProjectType.join(","),
          projectBudget: selectedBudget,
        }),
      });
      if (response.ok) {
        await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            recipientName: data.fullName,
            recipientEmail: data.email,
            consent: checked ? "checked" : "unchecked",
          }),
        });
        setloading(false);
        setValue("task", "");
        handleChangeProjectType(undefined);
        handleChangeBudget(undefined);
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
