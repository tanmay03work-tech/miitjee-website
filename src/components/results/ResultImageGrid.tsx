import React from 'react';
import Image from 'next/image';

interface ResultImage {
  id: string;
  photo_url: string;
  title: string | null;
}

interface ResultImageGridProps {
  title: string;
  subtitle?: string;
  images: ResultImage[];
  theme?: 'dark' | 'light';
  id?: string;
}

export function ResultImageGrid({ title, subtitle, images, theme = 'light', id }: ResultImageGridProps) {
  if (!images || images.length === 0) return null;

  const bgClass = theme === 'dark' ? 'bg-[var(--navy)] text-white' : 'bg-[#F8FAFC] text-[var(--navy)]';
  const headingClass = theme === 'dark' ? 'text-white' : 'text-[var(--navy)]';
  const cardBgClass = theme === 'dark' ? 'bg-[var(--navy-mid)] border-[var(--navy-light)]' : 'bg-white border-gray-100';
  const titleTextClass = theme === 'dark' ? 'text-white' : 'text-[var(--navy)]';

  return (
    <section className={`py-20 ${bgClass} relative`} id={id}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className={`${headingClass} font-display font-black text-4xl md:text-5xl mb-4`}>
            {title}
          </h2>
          {subtitle && (
            <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img) => (
            <div 
              key={img.id} 
              className={`${cardBgClass} rounded-2xl border p-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center group overflow-hidden`}
            >
              <div className="w-full relative rounded-lg overflow-hidden border border-gray-100/10 mb-4 bg-white/5 aspect-[4/5] sm:aspect-square flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={img.photo_url} 
                  alt={img.title || "Result"} 
                  className="w-full h-full object-contain max-h-[400px] group-hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
