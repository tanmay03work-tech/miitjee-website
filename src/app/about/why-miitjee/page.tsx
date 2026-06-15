import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import * as motion from "framer-motion/client";

export const metadata = {
  title: "Why MIITJEE | MIITJEE Classes",
  description: "Discover why MIITJEE Classes is the best choice for JEE and NEET preparation. We see 4 likely destinations for you.",
};

const IITS = [
  {
    name: "IIT KHARAGPUR",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600&h=400", // placeholder university image
  },
  {
    name: "IIT MUMBAI",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    name: "IIT DELHI",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    name: "IIT KANPUR",
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&q=80&w=600&h=400",
  }
];

export default function WhyMiitjeePage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] pb-20">
      <PageHero
        title="Why"
        highlight="MIITJEE"
        description="Discover why MIITJEE Classes is the best choice for JEE and NEET preparation."
      />
      
      <div className="container mx-auto px-4 max-w-6xl py-20">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white space-y-8"
            >
              <h2 className="text-4xl md:text-6xl font-bold font-poppins leading-tight">
                <span className="text-brand-yellow-bright">You see</span><br/>
                Top 4 IITs of India.
              </h2>
              
              <div className="h-0.5 w-full bg-gradient-to-r from-brand-yellow-bright to-transparent border-dashed border-t-2 border-brand-yellow-bright my-8" />
              
              <h2 className="text-4xl md:text-6xl font-bold font-poppins leading-tight text-right">
                <span className="text-brand-yellow-bright">We see 4 likely</span><br/>
                destinations for you
              </h2>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 gap-8">
              {IITS.map((iit, idx) => (
                <motion.div
                  key={iit.name}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className="relative h-64 w-full md:w-[80%] mx-auto rounded-xl overflow-hidden shadow-2xl border-4 border-white group"
                >
                  <Image
                    src={iit.image}
                    alt={iit.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-4">
                    <h3 className="text-white font-bold text-2xl tracking-wider font-poppins">{iit.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}
