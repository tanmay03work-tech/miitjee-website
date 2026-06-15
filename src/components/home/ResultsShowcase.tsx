"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, User } from "lucide-react";
import { Database } from "@/types/database.types";

type ResultRow = Database["public"]["Tables"]["results"]["Row"];

interface ResultsShowcaseProps {
  results: ResultRow[];
}

export default function ResultsShowcase({ results }: ResultsShowcaseProps) {
  if (!results || results.length === 0) return null;

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#23205D]">
              Our Results Speak
            </h2>
            <p className="text-gray-600 mt-2 font-sans">
              Consistent top ranks in JEE & NEET year after year.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden sm:block"
          >
            <Link 
              href="/results" 
              className="text-[#1C1CA5] font-semibold flex items-center gap-2 hover:text-[#23205D] transition-colors"
            >
              View All Results <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Mobile Horizontal Scroll, Desktop Grid */}
        <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-8 sm:pb-0 -mx-6 px-6 sm:mx-0 sm:px-0 snap-x">
          {results.map((result, index) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[280px] sm:min-w-0 bg-gray-50 rounded-2xl p-6 flex flex-col items-center text-center border border-gray-100 card-hover snap-center"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1C1CA5] to-[#FEFD12] p-[3px] mb-4 shadow-sm">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                {result.photo_url ? (
                  <Image 
                    src={result.photo_url} 
                    alt={result.student_name} 
                    width={96} 
                    height={96}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-10 h-10 text-gray-400" />
                )}
                </div>
              </div>
              
              <h3 className="text-lg font-bold font-heading text-[#23205D] mb-1">
                {result.student_name}
              </h3>
              
              <div className="text-sm text-gray-500 font-sans mb-3">
                {result.exam} {result.year}
              </div>
              
              {result.rank_score && (
                <div className="mt-auto inline-block bg-[#FEFD12]/20 text-[#23205D] px-4 py-1.5 rounded-full font-bold font-sans shadow-sm shadow-[#FEFD12]/10">
                  {result.rank_score}
                </div>
              )}
              
              {result.institute && (
                <div className="text-xs text-gray-500 mt-3 font-sans truncate w-full">
                  {result.institute}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-8 sm:hidden text-center">
          <Link 
            href="/results" 
            className="inline-flex items-center gap-2 text-[#1C1CA5] font-semibold hover:text-[#23205D] transition-colors"
          >
            View All Results <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}