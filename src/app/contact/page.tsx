import { createClient } from "@/lib/supabase/server";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "./contact-form";

export const metadata = {
  title: "Contact Us | MIITJEE Classes",
  description: "Get in touch with MIITJEE Classes. We are here to answer your queries regarding admissions, programs, and more.",
};

export default async function ContactPage() {
  const supabase = await createClient();

  const { data: branches } = await supabase
    .from("branches")
    .select("*")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      {/* Hero Section */}
      <div className="bg-[#23205D] text-white py-16 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1C1CA5]/20 pattern-grid-lg"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            We're here to help. Reach out to us for any queries regarding admissions, courses, or counseling.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Contact Info & Branches */}
          <div className="lg:w-7/12 order-2 lg:order-1">
            <h2 className="font-poppins text-3xl font-bold text-gray-900 mb-8">
              Our Locations
            </h2>

            <div className="space-y-8">
              {branches && branches.length > 0 ? (
                branches.map((branch) => (
                  <div key={branch.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="font-poppins font-bold text-xl text-[#1C1CA5] mb-1">
                        {branch.name}
                      </h3>
                      <p className="text-gray-500 font-medium text-sm mb-4">{branch.city}</p>
                      
                      <div className="space-y-3">
                        <div className="flex items-start text-sm">
                          <MapPin className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-600 leading-relaxed">{branch.address}</span>
                        </div>
                        
                        {branch.phone && branch.phone.length > 0 && (
                          <div className="flex items-start text-sm">
                            <Phone className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                            <div className="flex flex-col">
                              {branch.phone.map((p: string, i: number) => (
                                <a key={i} href={`tel:${p}`} className="text-gray-600 hover:text-[#1C1CA5]">
                                  {p}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {branch.email && (
                          <div className="flex items-start text-sm">
                            <Mail className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                            <a href={`mailto:${branch.email}`} className="text-gray-600 hover:text-[#1C1CA5]">
                              {branch.email}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="md:w-1/3 bg-gray-50 rounded-xl overflow-hidden relative min-h-[160px]">
                      {branch.maps_url ? (
                        <iframe 
                          src={branch.maps_url} 
                          width="100%" 
                          height="100%" 
                          style={{ border: 0 }} 
                          allowFullScreen 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                          className="absolute inset-0"
                        ></iframe>
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                          <MapPin className="w-8 h-8 mb-2" />
                          <span className="text-xs font-medium">Map Not Available</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center">
                  <p className="text-gray-500">Contact information is currently being updated.</p>
                </div>
              )}
            </div>

            {/* Office Hours */}
            <div className="mt-8 bg-blue-50 p-6 rounded-2xl border border-blue-100 flex items-start">
              <Clock className="w-6 h-6 text-[#1C1CA5] mr-4 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-poppins font-bold text-gray-900 mb-1">Working Hours</h4>
                <p className="text-gray-600 text-sm">
                  Monday to Saturday: 9:00 AM - 7:00 PM<br/>
                  Sunday: 10:00 AM - 2:00 PM
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column: Form */}
          <div className="lg:w-5/12 order-1 lg:order-2">
            <div className="sticky top-28">
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}