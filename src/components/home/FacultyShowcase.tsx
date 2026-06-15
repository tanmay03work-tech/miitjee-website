"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, User } from "lucide-react";
import { Database } from "@/types/database.types";

type FacultyRow = Database["public"]["Tables"]["faculty"]["Row"];

interface FacultyShowcaseProps {
  faculty: FacultyRow[];
}

export default function FacultyShowcase({ faculty }: FacultyShowcaseProps) {
  if (!faculty || faculty.length === 0) return null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-[#23205D] mb-4">
              Learn from the Best
            </h2>
            <p className="text-gray-600 font-sans text-lg max-w-xl">
              Our faculty comprises experienced educators and IIT alumni dedicated to your success.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden sm:block"
          >
            <Link 
              href="/faculty" 
              className="text-[#1C1CA5] font-semibold flex items-center gap-2 hover:text-[#23205D] transition-colors"
            >
              Meet All Faculty <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center card-hover"
            >
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full p-[3px] bg-gradient-to-br from-gray-200 to-gray-100 group-hover:from-[#1C1CA5] group-hover:to-[#FEFD12] transition-all duration-500 shadow-lg">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                {member.photo_url ? (
                  <Image 
                    src={member.photo_url} 
                    alt={member.name} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <User className="w-20 h-20 text-gray-300" />
                )}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold font-heading text-[#23205D] mb-1">
                {member.name}
              </h3>
              
              <div className="text-[#1C1CA5] font-semibold font-sans mb-3">
                {member.subject}
              </div>
              
              <div className="text-sm text-gray-500 font-sans space-y-1">
                {member.qualification && <p>{member.qualification}</p>}
                {member.credential && <p className="font-medium text-gray-700">{member.credential}</p>}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 sm:hidden text-center">
          <Link 
            href="/faculty" 
            className="inline-flex items-center gap-2 text-[#1C1CA5] font-semibold hover:text-[#23205D] transition-colors"
          >
            Meet All Faculty <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}