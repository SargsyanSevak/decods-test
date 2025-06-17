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
    .string({ required_error: "Company is required" })
    .nonempty("Company is required")
    .min(2, "Company must be at least 2 characters")
    .max(100, "Company must be at most 100 characters"),

  phone: z
    .string({ required_error: "Phone is required" })
    .nonempty("Company is required")
    .min(8, "Phone must have at least 8 digits")
    .max(15, "Phone must have at most 15 digits")
    .refine((val) => val.replace(/\D/g, "").length >= 8, {
      message: "Phone must have at least 8 digits",
    })
    .refine((val) => val.replace(/\D/g, "").length <= 15, {
      message: "Phone must have at most 15 digits",
    }),

  task: z
    .string({ required_error: "Task is required" })
    .nonempty("Task is required")
    .min(5, "Task must be at least 5 characters")
    .max(1000, "Task must be at most 1000 characters"),
});
