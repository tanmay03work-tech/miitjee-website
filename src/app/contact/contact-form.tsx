"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      source: "contact",
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Failed to submit form. Please check your details.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error. Please try again later.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 rounded-2xl p-8 text-center border border-green-100">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-900 mb-2">Message Sent!</h3>
        <p className="text-green-700">
          Thank you for reaching out to us. Our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 relative">
      <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
      
      {status === "error" && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 text-sm">
          {errorMessage}
        </div>
      )}

      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1C1CA5] focus:bg-white transition-colors"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Mobile Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            pattern="[0-9]{10}"
            title="Please enter exactly 10 digits"
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1C1CA5] focus:bg-white transition-colors"
            placeholder="9876543210"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1C1CA5] focus:bg-white transition-colors resize-none"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-[#1C1CA5] hover:bg-[#23205D] text-white font-bold py-4 px-6 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed mt-4"
        >
          {status === "submitting" ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center">
              Send Message <Send className="ml-2 w-4 h-4" />
            </span>
          )}
        </button>
      </div>
    </form>
  );
}
