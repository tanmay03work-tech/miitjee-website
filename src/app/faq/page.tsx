import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata = {
  title: "Frequently Asked Questions | MIITJEE Classes",
  description: "Find answers to the most common questions about MIITJEE admissions, fees, batches, and programs.",
};

const FAQ_DATA = [
  {
    category: "Admissions",
    items: [
      {
        q: "What is the admission procedure at MIITJEE?",
        a: "Students can take admission through our MANTHAN Scholarship Test or via direct admission based on their previous academic performance. You can fill out the enquiry form on our website to start the process."
      },
      {
        q: "When do the new batches start?",
        a: "New batches typically start in April and May for the main session. However, we also have phase-wise batch launches in June and July. Contact our counselors for exact dates."
      },
      {
        q: "Is there any entrance exam for admission?",
        a: "Yes, we conduct the MANTHAN Scholarship Exam which serves as both an admission test and a scholarship qualifier. Direct admissions are also available for certain foundation batches."
      },
      {
        q: "Can I transfer between MIITJEE branches?",
        a: "Yes, branch transfers are allowed subject to seat availability in the requested branch and management approval. A formal written request is required."
      }
    ]
  },
  {
    category: "Fees & Scholarships",
    items: [
      {
        q: "What is the fee structure for JEE/NEET programs?",
        a: "The fee structure varies based on the program (1-year, 2-year, or dropper batch). Please reach out to our admission counselors for a detailed fee breakdown."
      },
      {
        q: "How can I avail a scholarship?",
        a: "Scholarships up to 100% can be availed by appearing for the MIITJEE MANTHAN exam. Additional fee waivers are available for NTSE scholars and outstanding performers in board exams."
      },
      {
        q: "Are there installment options available for fee payment?",
        a: "Yes, we offer flexible installment plans for parents to pay the fees in 2 or 3 parts depending on the chosen program."
      },
      {
        q: "Is the registration fee refundable?",
        a: "No, the initial registration fee is strictly non-refundable under any circumstances."
      }
    ]
  },
  {
    category: "Batches & Academics",
    items: [
      {
        q: "What is the student-to-teacher ratio in a batch?",
        a: "We maintain an optimal batch size of 40-50 students to ensure personalized attention and effective doubt-clearing sessions."
      },
      {
        q: "Are study materials provided by the institute?",
        a: "Yes, comprehensive study material crafted by our expert faculty is provided. It includes theory modules, daily practice problems (DPPs), and previous years' question banks."
      },
      {
        q: "How are doubts cleared?",
        a: "We have dedicated doubt-clearing counters available every day after regular classes where students can interact one-on-one with subject experts."
      },
      {
        q: "Is there a parent-teacher meeting (PTM)?",
        a: "Yes, regular PTMs are conducted after major test series to discuss the student's progress and areas of improvement with the parents."
      }
    ]
  },
  {
    category: "MANTHAN",
    items: [
      {
        q: "What is MANTHAN?",
        a: "MANTHAN is MIITJEE's flagship scholarship and admission test. It helps us identify raw talent and nurture them for competitive exams like JEE and NEET."
      },
      {
        q: "Who is eligible for MANTHAN?",
        a: "Students currently studying in classes 7 to 12 are eligible to appear for the MANTHAN exam."
      },
      {
        q: "What is the syllabus for the MANTHAN exam?",
        a: "The syllabus is based on the student's current class curriculum (Science and Mathematics) along with a section on Mental Ability."
      },
      {
        q: "Is the exam conducted online or offline?",
        a: "MANTHAN is primarily conducted offline across all our centers. Special online phases may be announced separately."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      {/* Header */}
      <PageHero
        title="Frequently Asked"
        highlight="Questions"
        description="Everything you need to know about MIITJEE's programs, admissions, and more."
      />

      <div className="container mx-auto px-4 max-w-4xl mt-12">
        <div className="space-y-12">
          {FAQ_DATA.map((section, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-[#FEFD12] rounded-full mr-3"></span>
                {section.category}
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                {section.items.map((item, itemIdx) => (
                  <AccordionItem key={itemIdx} value={`item-${idx}-${itemIdx}`}>
                    <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-[#1C1CA5] text-base py-5">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed pb-5 text-base">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-[#23205D] rounded-3xl p-10 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[#1C1CA5]/30 pattern-grid-lg"></div>
          <div className="relative z-10">
            <h3 className="font-poppins text-3xl font-bold mb-4">Still have questions?</h3>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Our admission counselors are ready to help you with any queries you might have about our programs or the admission process.
            </p>
            <a 
              href="https://wa.me/919876543210" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#FEFD12] text-gray-900 font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}