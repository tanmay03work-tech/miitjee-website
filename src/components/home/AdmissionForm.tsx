"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Loader2, Phone, Sparkles, Users, ArrowRight } from "lucide-react";

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

const STEPS = [
  { num: "01", title: "Fill the Form", desc: "Share your basic details in under 2 minutes" },
  { num: "02", title: "Expert Callback", desc: "Our counsellor will reach you within 24 hours" },
  { num: "03", title: "Get Your Roadmap", desc: "Receive a personalised study plan for your goal" },
];

export default function AdmissionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", phone: "", message: "" },
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
    <section
      id="admission"
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        background: "linear-gradient(135deg, #0a0a3e 0%, #1C1CA5 40%, #2d1b69 70%, #0a0a3e 100%)",
      }}
    >
      {/* ── Animated Background Elements ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Floating orbs */}
        <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] rounded-full bg-[#FEFD12]/8 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#6366f1]/15 blur-[140px]" />
        <div className="absolute top-0 right-1/3 w-[300px] h-[300px] rounded-full bg-[#818cf8]/10 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 xl:gap-20">

          {/* ── LEFT COLUMN: Copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:w-[48%] shrink-0 flex flex-col justify-center"
          >
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 self-start bg-white/[0.07] backdrop-blur-sm border border-white/[0.12] text-white/90 text-sm font-medium px-5 py-2.5 rounded-full mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FEFD12] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FEFD12]" />
              </span>
              Admissions Open — 2025–26
            </motion.div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl xl:text-[3.6rem] font-extrabold font-heading leading-[1.1] mb-6 tracking-tight text-white">
              Book Your{" "}
              <span
                className="bg-gradient-to-r from-[#FEFD12] via-[#fde047] to-[#FEFD12] bg-clip-text text-transparent"
              >
                Free Counselling
              </span>{" "}
              Session
            </h2>

            <p className="text-blue-200/80 text-lg leading-relaxed mb-12 max-w-lg">
              Not sure which programme is right for you? Our expert counsellors
              will map out a personalised preparation strategy based on your
              current academic standing — at zero cost.
            </p>

            {/* Steps — vertical timeline */}
            <div className="relative space-y-0 mb-12">
              {/* Vertical connector line */}
              <div className="absolute left-[18px] top-[36px] bottom-[36px] w-px bg-gradient-to-b from-[#FEFD12]/40 via-white/15 to-[#FEFD12]/40" />

              {STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12 }}
                  className="relative flex items-start gap-5 py-4"
                >
                  {/* Step number circle */}
                  <div className="relative z-10 w-[38px] h-[38px] rounded-full bg-gradient-to-br from-[#FEFD12]/20 to-[#FEFD12]/5 border border-[#FEFD12]/30 flex items-center justify-center shrink-0">
                    <span className="text-[#FEFD12] text-xs font-bold font-heading">{step.num}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-[15px] leading-snug">{step.title}</p>
                    <p className="text-blue-300/60 text-sm mt-1">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social proof card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4 bg-white/[0.06] backdrop-blur-sm border border-white/[0.1] rounded-2xl px-6 py-5"
            >
              <div className="w-11 h-11 rounded-xl bg-[#FEFD12]/10 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-[#FEFD12]" />
              </div>
              <p className="text-sm text-white/70 leading-snug">
                <span className="font-bold text-white">10,000+ students</span> enrolled
                through this counselling process since 2010.
              </p>
            </motion.div>

            {/* Phone CTA */}
            <a
              href="tel:+918906000160"
              className="mt-6 inline-flex items-center gap-3 group self-start"
            >
              <div className="w-10 h-10 rounded-full bg-[#FEFD12]/10 group-hover:bg-[#FEFD12]/20 border border-[#FEFD12]/20 flex items-center justify-center transition-all duration-300">
                <Phone className="w-4 h-4 text-[#FEFD12]" />
              </div>
              <span className="font-semibold text-[#FEFD12] group-hover:text-white transition-colors text-[15px]">
                +91 89060 00160
              </span>
              <span className="text-white/40 text-sm">— Call directly</span>
            </a>
          </motion.div>

          {/* ── RIGHT COLUMN: Form Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="flex-1 w-full min-w-0"
          >
            <div className="relative bg-white rounded-[28px] shadow-2xl shadow-black/20 border border-white/20 p-8 sm:p-10 xl:p-12">
              {/* Decorative accent line at top */}
              <div className="absolute top-0 left-8 right-8 h-[3px] rounded-b-full bg-gradient-to-r from-transparent via-[#1C1CA5] to-transparent" />

              <div className="mb-8">
                <div className="flex items-center gap-2.5 mb-2">
                  <Sparkles className="w-5 h-5 text-[#1C1CA5]" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#1C1CA5]/70">
                    Enquiry Form
                  </span>
                </div>
                <h3 className="text-2xl sm:text-[1.7rem] font-bold text-gray-900 font-heading leading-tight">
                  Submit Your Enquiry
                </h3>
                <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                  Fill the form below and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

                  {/* Row 1: Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="space-y-1.5">
                          <FormLabel className="text-gray-600 font-medium text-[13px]">
                            Full Name <span className="text-red-400">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g. Rahul Sharma"
                              {...field}
                              className="h-12 text-sm bg-gray-50/80 border border-gray-200/80 focus-visible:ring-2 focus-visible:ring-[#1C1CA5]/30 focus-visible:border-[#1C1CA5]/50 rounded-xl px-4 transition-all duration-200 placeholder:text-gray-300"
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
                        <FormItem className="space-y-1.5">
                          <FormLabel className="text-gray-600 font-medium text-[13px]">
                            Phone Number <span className="text-red-400">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="10-digit mobile number"
                              {...field}
                              className="h-12 text-sm bg-gray-50/80 border border-gray-200/80 focus-visible:ring-2 focus-visible:ring-[#1C1CA5]/30 focus-visible:border-[#1C1CA5]/50 rounded-xl px-4 transition-all duration-200 placeholder:text-gray-300"
                              maxLength={10}
                              inputMode="numeric"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Row 2: Class + Programme */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="classLevel"
                      render={({ field }) => (
                        <FormItem className="space-y-1.5">
                          <FormLabel className="text-gray-600 font-medium text-[13px]">
                            Current Class <span className="text-red-400">*</span>
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 text-sm bg-gray-50/80 border border-gray-200/80 focus:ring-2 focus:ring-[#1C1CA5]/30 focus:border-[#1C1CA5]/50 rounded-xl px-4 transition-all duration-200">
                                <SelectValue placeholder="Select your class" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12", "12th Pass"].map((c) => (
                                <SelectItem key={c} value={c}>{c}</SelectItem>
                              ))}
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
                        <FormItem className="space-y-1.5">
                          <FormLabel className="text-gray-600 font-medium text-[13px]">
                            Interested In <span className="text-red-400">*</span>
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 text-sm bg-gray-50/80 border border-gray-200/80 focus:ring-2 focus:ring-[#1C1CA5]/30 focus:border-[#1C1CA5]/50 rounded-xl px-4 transition-all duration-200">
                                <SelectValue placeholder="Select programme" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="jee">JEE (Main + Advanced)</SelectItem>
                              <SelectItem value="neet">NEET / AIIMS</SelectItem>
                              <SelectItem value="foundation">Foundation (Cl. 6–10)</SelectItem>
                              <SelectItem value="unsure">Not Sure — Help Me Choose</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Row 3: Preferred Centre */}
                  <FormField
                    control={form.control}
                    name="branchPref"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel className="text-gray-600 font-medium text-[13px]">
                          Preferred Centre{" "}
                          <span className="text-gray-300 font-normal">(Optional)</span>
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 text-sm bg-gray-50/80 border border-gray-200/80 focus:ring-2 focus:ring-[#1C1CA5]/30 focus:border-[#1C1CA5]/50 rounded-xl px-4 transition-all duration-200">
                              <SelectValue placeholder="Select your nearest centre" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Sakchi-Jamshedpur">Sakchi, Jamshedpur (Main Branch)</SelectItem>
                            <SelectItem value="Bistupur-Jamshedpur">Bistupur, Jamshedpur</SelectItem>
                            <SelectItem value="Bokaro">Bokaro Steel City</SelectItem>
                            <SelectItem value="Dhanbad">Dhanbad</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full h-14 text-base font-heading font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden"
                      style={{
                        background: "linear-gradient(135deg, #1C1CA5 0%, #2d1b69 50%, #1C1CA5 100%)",
                        color: "#FEFD12",
                        boxShadow: "0 4px 20px rgba(28, 28, 165, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
                      }}
                    >
                      {/* Hover glow overlay */}
                      <span className="absolute inset-0 bg-gradient-to-r from-[#FEFD12]/0 via-[#FEFD12]/10 to-[#FEFD12]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="relative flex items-center gap-3">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Submitting…
                          </>
                        ) : (
                          <>
                            Submit Enquiry — It&apos;s Free
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </>
                        )}
                      </span>
                    </button>

                    <p className="text-[11px] text-gray-300 text-center mt-4 leading-relaxed">
                      By submitting, you agree to our{" "}
                      <span className="underline cursor-pointer text-gray-400 hover:text-gray-600 transition-colors">
                        Privacy Policy
                      </span>
                      . We respect your data and will never spam you.
                    </p>
                  </div>

                </form>
              </Form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}