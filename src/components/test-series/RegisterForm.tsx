"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

// Define form schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number"),
});

type FormValues = z.infer<typeof formSchema>;

export function RegisterForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/test-series/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      toast.success("Registration successful!");
      router.push("/test-series/neet/download?ref=neet-ts");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Student Full Name *
          </label>
          <input
            {...register("name")}
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#1C1CA5] focus:border-transparent outline-none transition-all font-inter"
            placeholder="e.g. Rahul Sharma"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Email Address *
          </label>
          <input
            {...register("email")}
            type="email"
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#1C1CA5] focus:border-transparent outline-none transition-all font-inter"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Mobile Number *
          </label>
          <input
            {...register("phone")}
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#1C1CA5] focus:border-transparent outline-none transition-all font-inter"
            placeholder="10-digit mobile number"
            maxLength={10}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#FEFD12] hover:bg-yellow-400 text-[#23205D] font-bold font-poppins text-lg py-4 px-6 rounded-lg transition-colors flex items-center justify-center disabled:opacity-70"
      >
        {isSubmitting ? "Submitting..." : "Get My Free Papers →"}
      </button>

      <p className="text-center text-sm text-slate-500 font-medium">
        🔒 Your details are safe. We don&apos;t spam.
      </p>
    </form>
  );
}