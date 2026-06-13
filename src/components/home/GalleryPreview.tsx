"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ImageIcon } from "lucide-react";
import { Database } from "@/types/database.types";

type GalleryRow = Database["public"]["Tables"]["gallery"]["Row"];

interface GalleryPreviewProps {
  images: GalleryRow[];
}

export default function GalleryPreview({ images }: GalleryPreviewProps) {
  if (!images || images.length === 0) return null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-[#23205D] mb-4">
              Life at MIITJEE
            </h2>
            <p className="text-gray-600 font-sans text-lg">
              Glimpses of our classrooms, events, and felicitations.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden sm:block"
          >
            <Link 
              href="/gallery" 
              className="text-[#1C1CA5] font-semibold flex items-center gap-2 hover:text-[#23205D] transition-colors"
            >
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100"
            >
              {img.photo_url ? (
                <Image 
                  src={img.photo_url} 
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <ImageIcon className="w-12 h-12 text-gray-300" />
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#23205D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-bold font-heading text-lg">{img.title}</h3>
                  {img.category && (
                    <p className="text-white/80 text-sm font-sans">{img.category}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 sm:hidden text-center">
          <Link 
            href="/gallery" 
            className="inline-flex items-center gap-2 text-[#1C1CA5] font-semibold hover:text-[#23205D] transition-colors"
          >
            View Full Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}