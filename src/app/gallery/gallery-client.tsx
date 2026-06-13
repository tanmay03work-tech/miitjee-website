"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ImageIcon } from "lucide-react";

type GalleryItem = {
  id: string;
  title: string;
  photo_url: string;
  category: string | null;
};

const CATEGORIES = ["All", "Classroom", "Events", "Results", "Campus"];

export default function GalleryClient({ initialItems }: { initialItems: GalleryItem[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === "All"
    ? initialItems
    : initialItems.filter(item => item.category?.toLowerCase() === activeCategory.toLowerCase());

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeCategory === category
                ? "bg-[#FEFD12] text-gray-900 shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      {filteredItems.length > 0 ? (
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid relative group cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
                onClick={() => setSelectedImage(item)}
              >
                {item.photo_url ? (
                  <Image
                    src={item.photo_url}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                    <ImageIcon className="w-12 h-12 text-gray-400" />
                  </div>
                )}
                
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <ZoomIn className="text-white w-8 h-8 mb-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 scale-50 group-hover:scale-100" />
                  <h3 className="text-white font-poppins font-semibold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm capitalize translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="bg-white rounded-2xl p-16 text-center border border-gray-100">
          <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">No photos found</h3>
          <p className="text-gray-500">We don't have any photos in this category yet.</p>
        </div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all z-50"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedImage.photo_url && (
                <div className="relative w-full h-[75vh]">
                  <Image
                    src={selectedImage.photo_url}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <div className="mt-4 text-center">
                <h3 className="text-white font-poppins text-xl font-semibold mb-1">{selectedImage.title}</h3>
                <p className="text-gray-400 capitalize">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
