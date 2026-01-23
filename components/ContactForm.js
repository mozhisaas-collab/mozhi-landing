"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits").regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/, "Invalid phone number format"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  details: z.string().optional(),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      details: "",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        form.reset();

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        setSubmitStatus('error');
        console.error('Form submission error:', result.message);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="bg-white rounded-xl p-8 shadow-xl border border-black-subtle"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h3
        className="text-2xl font-bold mb-6 text-black"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Get Your Free Quote
      </motion.h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black font-medium">First Name *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your first name"
                      className="bg-white border-black/10 text-black placeholder:text-black/50 focus:border-red-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black font-medium">Last Name *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your last name"
                      className="bg-white border-black/10 text-black placeholder:text-black/50 focus:border-red-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black font-medium">Email Address *</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your.email@company.com"
                    className="bg-white border-black/10 text-black placeholder:text-black/50 focus:border-red-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black font-medium">Phone Number *</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="bg-white border-black/10 text-black placeholder:text-black/50 focus:border-red-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black font-medium">Company</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your company name"
                    className="bg-white border-black/10 text-black placeholder:text-black/50 focus:border-red-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => {
              const serviceLabels = {
                translation: "Translation",
                voiceover: "Voice Over",
                "website-localization": "Website Localization",
                "elearning-localization": "E-Learning Localization",
                "software-localization": "Software Localization",
                interpretation: "Interpretation",
                other: "Other",
              };

              return (
                <FormItem>
                  <FormLabel className="text-black font-medium">Service Needed *</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-white border-black/10 text-black focus:border-red-500">
                        <SelectValue
                          placeholder="Select a service"
                          getLabel={(value) => serviceLabels[value] || value}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white border border-black/10">
                      <SelectItem value="translation" className="text-black focus:bg-red-600/10 focus:text-red-500">Translation</SelectItem>
                      <SelectItem value="voiceover" className="text-black focus:bg-red-600/10 focus:text-red-500">Voice Over</SelectItem>
                      <SelectItem value="website-localization" className="text-black focus:bg-red-600/10 focus:text-red-500">Website Localization</SelectItem>
                      <SelectItem value="elearning-localization" className="text-black focus:bg-red-600/10 focus:text-red-500">E-Learning Localization</SelectItem>
                      <SelectItem value="software-localization" className="text-black focus:bg-red-600/10 focus:text-red-500">Software Localization</SelectItem>
                      <SelectItem value="interpretation" className="text-black focus:bg-red-600/10 focus:text-red-500">Interpretation</SelectItem>
                      <SelectItem value="other" className="text-black focus:bg-red-600/10 focus:text-red-500">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black font-medium">Project Details</FormLabel>
                <FormControl>
                  <Textarea
                    rows={4}
                    placeholder="Tell us about your project, target languages, timeline, etc."
                    className="resize-none bg-white border-black/10 text-black placeholder:text-black/50 focus:border-red-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />


          {/* Success Message */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 bg-green-50 border-2 border-green-500 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-green-900">Quote Request Sent!</p>
                  <p className="text-sm text-green-700">We'll get back to you within 2 hours during business days.</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 bg-red-50 border-2 border-red-500 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-red-900">Submission Failed</p>
                  <p className="text-sm text-red-700">Please try again or email us at info@mozhisolution.com</p>
                </div>
              </div>
            </motion.div>
          )}

          <motion.div
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-red-600 text-white hover:bg-red-700 transition-smooth font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Get My Free Quote'
              )}
            </Button>
          </motion.div>
        </form>
      </Form>
    </motion.div>
  );
}

