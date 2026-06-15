import PageHero from "@/components/ui/PageHero";
import * as motion from "framer-motion/client";
import { MapPin, Phone, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Other Centres | MIITJEE Classes",
  description: "Find out about the other centres and branches of MIITJEE Classes in Jamshedpur (Telco) and Patna (Bihta).",
};

const CENTRES = [
  {
    name: "Jamshedpur (TELCO)",
    date: "Established: 4th June, 2022",
    description: "We are pleased to inform that we are now available in TELCO as well. The opening ceremony was attended by Mr. Kunal Sarangi, ex-MLA Bahragora & BJP spokesperson from the state.",
    address: "SABHUJ KALYAN SANGHA, TELCO",
    phones: ["9334155360", "8906000160"],
  },
  {
    name: "Patna (BIHTA)",
    date: "Established: 20th January, 2020",
    description: "After successfully completing our journey of 20 years in Jamshedpur, we are now in our dream city, BIHTA Patna. The opening ceremony was inaugurated by Shri Shyam Rajak, Minister of Industrial Govt. of Bihar and Shri Jai Kr. Singh, Science & Technology Minister.",
    address: "MIITJEE Molahimpur, Near IIT Patna Bihta, Patna (Bihar)",
    phones: ["7761830411", "6200550409"],
  }
];

const WHY_CHOOSE = [
  "Best faculty team (all IITians, because we believe only experts can make you experts)",
  "Exhaustive study materials",
  "Hostel & Transportation facilities available (with very nominal charge)",
  "Super safety & Security (from girls point of view)",
  "Up to 100% scholarships for Talented & Needy students",
  "Daily Doubt elimination session",
  "Weekly online test (for JEE Main+Advanced) and offline test (for NEET)",
  "Rankers Test Series for JEE Main+Advanced and NEET"
];

export default function OtherCentresPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <PageHero
        title="Other"
        highlight="Centres"
        description="Expanding our reach to serve more students across Eastern India."
      />

      <div className="container mx-auto px-4 max-w-7xl py-20">
        
        {/* Centres Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          {CENTRES.map((centre, idx) => (
            <motion.div
              key={centre.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow-bright/10 rounded-bl-[100px] transition-transform group-hover:scale-110" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-brand-blue-deep rounded-2xl flex items-center justify-center text-white shadow-md">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-brand-blue-dark font-poppins">{centre.name}</h2>
                  <p className="text-sm text-brand-yellow-bright font-bold">{centre.date}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                {centre.description}
              </p>
              
              <div className="space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-blue-deep flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 font-medium">{centre.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-blue-deep flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 font-medium">
                    {centre.phones.join(" / ")}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Section */}
        <section className="bg-brand-blue-dark rounded-3xl p-10 md:p-16 relative overflow-hidden text-white shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue-deep rounded-full blur-3xl opacity-50 -z-0 translate-x-1/3 -translate-y-1/3" />
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-6">
                Why to choose <span className="text-brand-yellow-bright">MIITJEE?</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto italic">
                "Yes we make engineers & doctors every year & believe us, if making of engineers & doctors is an art then MIITJEE is only Artist."
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto">
              {WHY_CHOOSE.map((reason, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 bg-white/5 p-5 rounded-2xl backdrop-blur-sm border border-white/10"
                >
                  <CheckCircle2 className="w-6 h-6 text-brand-yellow-bright flex-shrink-0" />
                  <span className="text-gray-100 font-medium leading-relaxed">{reason}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-block bg-brand-yellow-bright text-brand-blue-dark px-8 py-4 rounded-full font-bold text-lg shadow-lg">
                Scholarships Test is open for all students (VIII, IX , X, XI XII)
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
