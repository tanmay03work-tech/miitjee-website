"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().regex(/^[0-9]{10}$/, "Must be a valid 10-digit phone number"),
  class_level: z.enum(
    [
      "Class 7",
      "Class 8",
      "Class 9",
      "Class 10",
      "Class 11",
      "Class 12",
    ],
    {
      message: "Please select your class",
    }
  ),
});

type FormValues = z.infer<typeof formSchema>;

export default function InterestForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setErrorMessage("");
    try {
      const response = await fetch("/api/manthan/interest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      setIsSuccess(true);
    } catch (err) {
      setErrorMessage("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-[#FEFD12]/10 border border-[#FEFD12] text-[#23205D] p-6 rounded-xl text-center">
        <h3 className="text-xl font-bold font-poppins mb-2">
          ✅ You&apos;re on the list!
        </h3>
        <p className="font-inter">
          We&apos;ll notify you the moment MANTHAN 2025 goes live.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl max-w-md mx-auto border border-gray-100">
      <h3 className="text-xl font-bold text-[#23205D] mb-6 font-poppins leading-tight">
        Register your interest — we&apos;ll notify you the moment MANTHAN 2025 goes live.
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">
            Full Name *
          </label>
          <input
            {...register("name")}
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C1CA5] focus:border-[#1C1CA5] outline-none transition-all font-inter"
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">
            Phone Number *
          </label>
          <input
            {...register("phone")}
            type="tel"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C1CA5] focus:border-[#1C1CA5] outline-none transition-all font-inter"
            placeholder="9876543210"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 font-inter">
            Class *
          </label>
          <select
            {...register("class_level")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C1CA5] focus:border-[#1C1CA5] outline-none transition-all font-inter bg-white"
          >
            <option value="">Select your class</option>
            <option value="Class 7">Class 7</option>
            <option value="Class 8">Class 8</option>
            <option value="Class 9">Class 9</option>
            <option value="Class 10">Class 10</option>
            <option value="Class 11">Class 11</option>
            <option value="Class 12">Class 12</option>
          </select>
          {errors.class_level && (
            <p className="text-red-500 text-sm mt-1">
              {errors.class_level.message}
            </p>
          )}
        </div>

        {errorMessage && (
          <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#FEFD12] hover:bg-[#e6e510] text-[#23205D] font-bold font-poppins py-3 px-6 rounded-lg transition-colors flex items-center justify-center disabled:opacity-70 mt-4"
        >
          {isSubmitting ? "Submitting..." : "Notify Me When It Launches →"}
        </button>
      </form>
    </div>
  );
}