import z from "zod";
export const contactFormSchema = z.object({
    name: z.string().min(2).max(255),
    email: z.string().email(),
    message: z.string().min(10).max(5000),
  });


export type ContactFields = z.infer<typeof contactFormSchema>