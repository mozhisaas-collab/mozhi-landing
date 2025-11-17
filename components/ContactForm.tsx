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
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  details: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      service: "",
      details: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact form submitted:", data);
    toast({
      title: "Quote Request Submitted!",
      description: "Thank you for your interest! We will contact you within 2 hours during business days.",
    });
    form.reset();
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
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black font-medium">Service Needed *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white border-black/10 text-black focus:border-red-500">
                      <SelectValue placeholder="Select a service" />
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
            )}
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
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              type="submit" 
              size="lg"
              className="w-full bg-red-600 text-white hover:bg-red-600 transition-smooth font-semibold shadow-lg hover:shadow-xl" 
            >
              Get My Free Quote
            </Button>
          </motion.div>
        </form>
      </Form>
    </motion.div>
  );
}

