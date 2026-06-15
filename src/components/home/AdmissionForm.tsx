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

  const trustSignals = [
    { num: "Free", label: "Zero Cost Counselling" },
    { num: "24hrs", label: "Callback Guarantee" },
    { num: "10,000+", label: "Families Counselled Since 2001" },
  ];

  return (
    <section
      id="admission"
      className="relative py-24 lg:py-32"
      style={{ background: "var(--navy)" }}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: Trust Signals */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <h2 
              className="mb-12"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(32px, 4vw, 48px)',
                color: 'var(--white)',
                lineHeight: 1.1,
              }}
            >
              Why you should call us
            </h2>

            <div className="flex flex-col gap-10">
              {trustSignals.map((signal, idx) => (
                <div key={idx} className="flex flex-col">
                  <div 
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 900,
                      fontSize: 'clamp(48px, 6vw, 64px)',
                      color: 'var(--gold)',
                      lineHeight: 1
                    }}
                  >
                    {signal.num}
                  </div>
                  <div 
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500,
                      fontSize: '18px',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginTop: '8px'
                    }}
                  >
                    {signal.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <div 
              style={{
                background: 'var(--navy-mid)',
                border: '1px solid var(--navy-light)',
                borderTop: '4px solid var(--gold)',
                borderRadius: 'var(--radius-card)',
                padding: '40px 32px'
              }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

                  {/* Row 1: Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
                            Full Name <span style={{ color: 'var(--gold)' }}>*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g. Rahul Sharma"
                              {...field}
                              className="h-12 border-none rounded-lg focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:ring-[var(--gold)] px-4 transition-all duration-200"
                              style={{
                                background: 'var(--navy)',
                                color: 'var(--white)',
                                border: '1px solid var(--navy-light)'
                              }}
                              onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; }}
                              onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--navy-light)'; }}
                            />
                          </FormControl>
                          <FormMessage style={{ color: 'var(--red)' }} />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
                            Phone Number <span style={{ color: 'var(--gold)' }}>*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="10-digit mobile number"
                              {...field}
                              maxLength={10}
                              inputMode="numeric"
                              className="h-12 border-none rounded-lg focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:ring-[var(--gold)] px-4 transition-all duration-200"
                              style={{
                                background: 'var(--navy)',
                                color: 'var(--white)',
                                border: '1px solid var(--navy-light)'
                              }}
                              onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; }}
                              onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--navy-light)'; }}
                            />
                          </FormControl>
                          <FormMessage style={{ color: 'var(--red)' }} />
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
                        <FormItem className="space-y-2">
                          <FormLabel style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
                            Current Class <span style={{ color: 'var(--gold)' }}>*</span>
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger 
                                className="h-12 border-none rounded-lg focus:ring-1 focus:ring-[var(--gold)] px-4 transition-all duration-200"
                                style={{
                                  background: 'var(--navy)',
                                  color: 'var(--white)',
                                  border: '1px solid var(--navy-light)'
                                }}
                              >
                                <SelectValue placeholder="Select your class" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent style={{ background: 'var(--navy-mid)', color: 'var(--white)', border: '1px solid var(--navy-light)' }}>
                              {["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12", "12th Pass"].map((c) => (
                                <SelectItem key={c} value={c} className="hover:bg-blue-900/50 focus:bg-blue-900/50">{c}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage style={{ color: 'var(--red)' }} />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="programme"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
                            Interested In <span style={{ color: 'var(--gold)' }}>*</span>
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger 
                                className="h-12 border-none rounded-lg focus:ring-1 focus:ring-[var(--gold)] px-4 transition-all duration-200"
                                style={{
                                  background: 'var(--navy)',
                                  color: 'var(--white)',
                                  border: '1px solid var(--navy-light)'
                                }}
                              >
                                <SelectValue placeholder="Select programme" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent style={{ background: 'var(--navy-mid)', color: 'var(--white)', border: '1px solid var(--navy-light)' }}>
                              <SelectItem value="jee" className="hover:bg-blue-900/50 focus:bg-blue-900/50">JEE (Main + Advanced)</SelectItem>
                              <SelectItem value="neet" className="hover:bg-blue-900/50 focus:bg-blue-900/50">NEET / AIIMS</SelectItem>
                              <SelectItem value="foundation" className="hover:bg-blue-900/50 focus:bg-blue-900/50">Foundation (Cl. 6–10)</SelectItem>
                              <SelectItem value="unsure" className="hover:bg-blue-900/50 focus:bg-blue-900/50">Not Sure — Help Me Choose</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage style={{ color: 'var(--red)' }} />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Row 3: Preferred Centre */}
                  <FormField
                    control={form.control}
                    name="branchPref"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
                          Preferred Centre{" "}
                          <span style={{ color: 'var(--navy-light)' }} className="font-normal">(Optional)</span>
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger 
                              className="h-12 border-none rounded-lg focus:ring-1 focus:ring-[var(--gold)] px-4 transition-all duration-200"
                              style={{
                                background: 'var(--navy)',
                                color: 'var(--white)',
                                border: '1px solid var(--navy-light)'
                              }}
                            >
                              <SelectValue placeholder="Select your nearest centre" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent style={{ background: 'var(--navy-mid)', color: 'var(--white)', border: '1px solid var(--navy-light)' }}>
                            <SelectItem value="Sakchi-Jamshedpur" className="hover:bg-blue-900/50 focus:bg-blue-900/50">Sakchi, Jamshedpur (Main Branch)</SelectItem>
                            <SelectItem value="Ranchi" className="hover:bg-blue-900/50 focus:bg-blue-900/50">Lalpur, Ranchi</SelectItem>
                            <SelectItem value="Sundarnagar-Jamshedpur" className="hover:bg-blue-900/50 focus:bg-blue-900/50">Sundarnagar, Jamshedpur</SelectItem>
                            <SelectItem value="Baridih-Jamshedpur" className="hover:bg-blue-900/50 focus:bg-blue-900/50">Baridih, Jamshedpur</SelectItem>
                            <SelectItem value="Bistupur-Jamshedpur" className="hover:bg-blue-900/50 focus:bg-blue-900/50">Bistupur, Jamshedpur</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage style={{ color: 'var(--red)' }} />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 rounded-full transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed hover:opacity-90"
                      style={{
                        background: 'var(--gold)',
                        color: 'var(--navy)',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 800,
                        fontSize: '16px',
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting…
                        </>
                      ) : (
                        "Book Free Counselling — It's Free"
                      )}
                    </button>
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