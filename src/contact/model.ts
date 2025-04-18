import { z } from "zod";

export const IdParamSchema = z.object({
  id: z
    .string()
    .regex(/^\d+$/)
    .transform((val) => parseInt(val)),
});

export const ContactSchema = z.object({
  id: z.number(),
  firstName: z.string().min(5),
  lastName: z.string().min(5),
  email: z.string().email(),
});

export const ContactCreateSchema = ContactSchema.omit({ id: true });

export type IdParam = z.infer<typeof IdParamSchema>;
export type ContactCreate = z.infer<typeof ContactCreateSchema>;
export type ContactCreateErrors = z.inferFlattenedErrors<
  typeof ContactCreateSchema
>;
export type Contact = z.infer<typeof ContactSchema>;
