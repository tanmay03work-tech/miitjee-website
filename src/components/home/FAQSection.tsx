"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is the admission procedure?",
      answer: "Admission is generally based on our scholarship cum admission test (MIITJEE MANTHAN or regular admission test). Direct admission is also available for foundation batches based on past academic performance."
    },
    {
      question: "Do you provide study material?",
      answer: "Yes, comprehensive study material is provided to all enrolled students. It is regularly updated to align with the latest JEE and NEET exam patterns."
    },
    {
      question: "What is the batch size?",
      answer: "We maintain small batch sizes (typically 30-40 students) to ensure personalised attention and effective doubt resolution for every student."
    },
    {
      question: "Are there separate batches for Hindi medium students?",
      answer: "Our primary medium of instruction is English. However, our faculty explains complex concepts bilingually (English/Hindi) to ensure thorough understanding."
    },
    {
      question: "How are doubts cleared outside regular classes?",
      answer: "We have dedicated doubt clearing counters and scheduled 1-on-1 sessions where students can directly approach faculty members with their queries."
    },
    {
      question: "Do you conduct regular tests?",
      answer: "Yes, we conduct weekly/fortnightly tests, part-syllabus tests, and full mock tests. Detailed performance analysis is provided to students and parents."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-heading text-[#23205D] mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 font-sans"
          >
            Find answers to common questions about our programmes and admissions.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-gray-200">
                <AccordionTrigger className="text-left font-heading font-semibold text-lg text-[#23205D] hover:text-[#1C1CA5] hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-gray-600 text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}