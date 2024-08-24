"use client";
import z from "zod";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { useState } from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { contactFormSchema } from "@/config/schemas";
import { env } from "@/env";

type ContactFields = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<ContactFields>({
    resolver: zodResolver(contactFormSchema)
  });
  const onSubmit: SubmitHandler<ContactFields> = async (data) => {
    try {
      const submitForm = await fetch(env.NEXT_PUBLIC_API_URL + "/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then((res) => res.json());
      if (!submitForm?.success) throw new Error("Failed to submit form");
      form.reset();
      setSubmitted(true);
    } catch (e) {
      return toast.error("Failed to submit form");
    }
  };
  const {
    formState: { isSubmitting }
  } = form;
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
      {submitted ? (
        <div className="flex flex-col justify-center items-center my-8 gap-4 ">
          <FaEnvelopeOpenText size={128} className="animate-in zoom-in duration-300" />
          <p className="text-lg mt-4 text-center">Thank you for reaching out! I will get back to you soon.</p>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <input className="input-field " placeholder="Dane Joe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <input className="input-field " placeholder="example@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <textarea className="input-field" placeholder="Your message here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmitting} size={"lg"} className="float-end">
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Form>
      )}
    </section>
  );
};

export default ContactForm;
