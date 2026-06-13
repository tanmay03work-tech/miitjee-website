import AdmissionForm from "@/components/home/AdmissionForm";

export const metadata = {
  title: "Apply Now | MIITJEE Classes",
  description: "Take the first step towards a bright future. Apply for admission to MIITJEE's JEE, NEET, and Foundation programs.",
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      {/* Hero Section */}
      <div className="bg-[#1C1CA5] text-white py-16 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#23205D] opacity-50 pattern-grid-lg"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-4">
            Start Your Journey
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Apply now for admission or free counseling. Our experts will guide you to the right program based on your goals.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-8 md:p-12">
            <AdmissionForm />
          </div>
        </div>
      </div>
    </div>
  );
}