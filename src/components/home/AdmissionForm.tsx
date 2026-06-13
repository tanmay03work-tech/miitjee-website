"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"),
  classLevel: z.string({ message: "Please select your class" }).min(1, "Please select your class"),
  programme: z.enum(["jee", "neet", "foundation", "unsure"], { message: "Please select a programme" }),
  branchPref: z.string().optional(),
  message: z.string().optional(),
});

export default function AdmissionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          phone: values.phone,
          class_level: values.classLevel,
          programme: values.programme,
          branch_pref: values.branchPref,
          message: values.message,
          source: "Homepage Counselling Form",
        }),
      });

      if (!response.ok) throw new Error("Submission failed");

      toast.success("Enquiry submitted successfully!", {
        description: "Our counselling team will contact you shortly.",
      });
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit", {
        description: "Please try again later or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="admission" className="py-24 bg-[#1C1CA5] text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Side: Copy */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Book Your Free Counselling Session
          </h2>
          <p className="text-blue-100 font-sans text-lg mb-8 leading-relaxed">
            Not sure which programme is right for you? Talk to our expert counsellors who will help you map out the perfect preparation strategy based on your current academic standing.
          </p>
          <div className="space-y-4 text-blue-100 font-sans">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FEFD12]/20 text-[#FEFD12] flex items-center justify-center font-bold">1</div>
              <span>Fill out the form with your details</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FEFD12]/20 text-[#FEFD12] flex items-center justify-center font-bold">2</div>
              <span>Get a call from our expert counsellor</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FEFD12]/20 text-[#FEFD12] flex items-center justify-center font-bold">3</div>
              <span>Visit our centre for a detailed roadmap</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full bg-white rounded-2xl p-8 md:p-10 text-gray-900 shadow-2xl"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans text-gray-700">Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-gray-50 border-gray-200 focus-visible:ring-[#1C1CA5]" />
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
                      <FormLabel className="font-sans text-gray-700">Phone Number *</FormLabel>
                      <FormControl>
                        <Input placeholder="10-digit number" {...field} className="bg-gray-50 border-gray-200 focus-visible:ring-[#1C1CA5]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="classLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans text-gray-700">Current Class *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-gray-50 border-gray-200 focus:ring-[#1C1CA5]">
                            <SelectValue placeholder="Select Class" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Class 6">Class 6</SelectItem>
                          <SelectItem value="Class 7">Class 7</SelectItem>
                          <SelectItem value="Class 8">Class 8</SelectItem>
                          <SelectItem value="Class 9">Class 9</SelectItem>
                          <SelectItem value="Class 10">Class 10</SelectItem>
                          <SelectItem value="Class 11">Class 11</SelectItem>
                          <SelectItem value="Class 12">Class 12</SelectItem>
                          <SelectItem value="12th Pass">12th Pass</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="programme"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans text-gray-700">Interested In *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-gray-50 border-gray-200 focus:ring-[#1C1CA5]">
                            <SelectValue placeholder="Select Programme" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="jee">JEE (Main + Advanced)</SelectItem>
                          <SelectItem value="neet">NEET / AIIMS</SelectItem>
                          <SelectItem value="foundation">Foundation</SelectItem>
                          <SelectItem value="unsure">Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="branchPref"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-sans text-gray-700">Preferred Centre (Optional)</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-gray-50 border-gray-200 focus:ring-[#1C1CA5]">
                          <SelectValue placeholder="Select Centre" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Jamshedpur">Jamshedpur</SelectItem>
                        <SelectItem value="Bokaro">Bokaro</SelectItem>
                        <SelectItem value="Dhanbad">Dhanbad</SelectItem>
                        <SelectItem value="Ranchi">Ranchi</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-[#FEFD12] hover:bg-[#E5E410] text-[#23205D] font-heading font-bold rounded-lg transition-colors flex items-center justify-center gap-2 mt-4"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Submitting...
                  </>
                ) : (
                  "Submit Enquiry"
                )}
              </button>

              <p className="text-xs text-gray-400 text-center mt-4 font-sans">
                By submitting this form, you agree to our privacy policy and consent to receive communication from MIITJEE regarding your enquiry.
              </p>
            </form>
          </Form>
        </motion.div>

      </div>
    </section>
  );
}