import { z } from "zod";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const contactSchema = z.object({
  fullName: z
    .string({ required_error: "Full name is required" })
    .nonempty("Full name is required")
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must be at most 50 characters"),

  email: z
    .string({ required_error: "Email is required" })
    .nonempty("Email is required")
    .regex(emailRegex, "Invalid email address")
    .max(100, "Email must be at most 100 characters"),
  company: z
    .string()
    .optional()
    .refine((val) => !val || val.trim().length >= 2, {
      message: "Company name must be at least 2 characters",
    }),

  phone: z
    .string()
    .optional()
    .refine(
      (val) => {
        console.log(val);

        if (!val || val.length < 3) return true;
        const digits = val.replace(/\D/g, "");
        return (
          digits.length === 0 || (digits.length >= 8 && digits.length <= 15)
        );
      },
      {
        message: "Phone must have between 8 and 15 digits",
      }
    ),

  task: z
    .string({ required_error: "Task is required" })
    .nonempty("Task is required")
    .min(5, "Task must be at least 5 characters")
    .max(1000, "Task must be at most 1000 characters"),
});
