import AdmissionForm from "@/components/home/AdmissionForm";

export const metadata = {
  title: "Apply Now | MIITJEE Classes",
  description: "Take the first step towards a bright future. Apply for admission to MIITJEE's JEE, NEET, and Foundation programs.",
};

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-[104px]">
      <AdmissionForm />
    </main>
  );
}