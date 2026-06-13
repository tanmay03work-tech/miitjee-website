"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, MessageCircle } from "lucide-react";
import { Database } from "@/types/database.types";

type BranchRow = Database["public"]["Tables"]["branches"]["Row"];

interface BranchesSectionProps {
  branches: BranchRow[];
}

export default function BranchesSection({ branches }: BranchesSectionProps) {
  if (!branches || branches.length === 0) return null;

  return (
    <section className="py-24 bg-[#23205D] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
              Our Centres
            </h2>
            <p className="text-blue-100/80 font-sans text-lg max-w-xl">
              Find a MIITJEE centre near you. We have multiple branches across Jharkhand.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden sm:block"
          >
            <Link 
              href="/branches" 
              className="text-[#FEFD12] font-semibold flex items-center gap-2 hover:text-white transition-colors"
            >
              View All Centres <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold font-heading mb-1">
                    {branch.name}
                  </h3>
                  <div className="text-sm text-blue-200 font-sans">
                    {branch.city}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>
              
              <p className="text-blue-100/70 font-sans mb-8 flex-1 text-sm leading-relaxed">
                {branch.address}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                {branch.phone && branch.phone.length > 0 && (
                  <a 
                    href={`tel:${branch.phone[0]}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-[#23205D] rounded-full font-bold font-sans text-sm hover:bg-gray-100 transition-colors"
                  >
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                )}
                
                {branch.whatsapp && (
                  <a 
                    href={`https://wa.me/${branch.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] text-white rounded-full font-bold font-sans text-sm hover:bg-[#20bd5a] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 sm:hidden text-center">
          <Link 
            href="/branches" 
            className="inline-flex items-center gap-2 text-[#FEFD12] font-semibold hover:text-white transition-colors"
          >
            View All Centres <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}