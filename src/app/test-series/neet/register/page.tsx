import { RegisterForm } from '@/components/test-series/RegisterForm';
import { CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Register for Free NEET Mock Papers | MIITJEE',
  description: 'Fill your details to get instant access to 5 free NEET mock test papers.',
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-inter">
      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
          
          {/* Left Column: Form */}
          <div className="w-full md:w-3/5 p-8 md:p-12">
            <div className="mb-8">
              <h1 className="text-3xl font-bold font-poppins text-[#23205D] mb-2">
                Get Your 5 Free NEET Mock Papers
              </h1>
              <p className="text-slate-500 font-medium text-sm md:text-base">
                Fill your details — get instant access. No payment. No OTP.
              </p>
            </div>
            
            <RegisterForm />
          </div>

          {/* Right Column: Decorative & Info */}
          <div className="hidden md:flex w-full md:w-2/5 bg-[#1C1CA5] text-white p-12 flex-col justify-between relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold font-poppins mb-6">
                What you&apos;ll get instantly:
              </h2>
              
              <ul className="space-y-4 mb-12">
                {[
                  '5 Full-Syllabus Mock Papers (PDF)',
                  'Detailed Answer Keys',
                  'Step-by-step Solutions',
                  'Based on NTA 2024 Pattern',
                  'Unlimited Access'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#FEFD12] mr-3 shrink-0 mt-0.5" />
                    <span className="font-medium text-blue-50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-sm font-medium text-blue-100 mb-4">
                &quot;These mock papers perfectly simulated the actual NEET exam environment. The solutions helped me identify my weak areas.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-300 rounded-full mr-3 overflow-hidden relative">
                   {/* Placeholder avatar */}
                   <div className="w-full h-full bg-[#FEFD12] flex items-center justify-center text-[#1C1CA5] font-bold">
                     P
                   </div>
                </div>
                <div>
                  <div className="font-bold text-sm">Priya Sharma</div>
                  <div className="text-xs text-blue-200">NEET 2024 Aspirant</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}