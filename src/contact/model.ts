import { z } from "zod";

export const IdParamSchema = z.object({
  id: z
    .string()
    .regex(/^\d+$/)
    .transform((val) => parseInt(val)),
});

export const ContactFormSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
});

export type IdParam = z.infer<typeof IdParamSchema>;
export type ContactForm = z.infer<typeof ContactFormSchema>;
