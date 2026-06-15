"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const easeOutExpo = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

const AnimatedNumber = ({ endValue, suffix = "" }: { endValue: number, suffix?: string }) => {
  const [count, setCount] = useState(endValue); // Fallback: initially show end value
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  useEffect(() => {
    // If not in view yet, or if it runs on client, we can reset to start counting
    // But since we want "NEVER show 0", we'll let it count from 1 if it mounts
    setCount(1);
  }, []);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2000; // 2 seconds
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;
        
        if (progress < 1) {
          const currentCount = Math.floor(endValue * easeOutExpo(progress));
          setCount(Math.max(1, currentCount));
          requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, endValue]);

  // format numbers like 10000 -> 10,000
  const formattedCount = count.toLocaleString('en-US');

  return <span ref={ref}>{formattedCount}{suffix}</span>;
};

export default function StatsSection() {
  const stats = [
    { value: 26, suffix: "", label: "Years of Excellence" },
    { value: 100000, suffix: "+", label: "Students Mentored" },
    { value: 500, suffix: "+", label: "JEE Selections / Year" },
    { value: 300, suffix: "+", label: "NEET Selections / Year" },
  ];

  return (
    <section 
      style={{
        background: 'var(--navy-mid)',
        padding: 'var(--section-pad)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="flex flex-col items-center"
          >
            <div 
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 'clamp(48px, 6vw, 72px)',
                color: 'var(--gold)',
                lineHeight: 1
              }}
            >
              <AnimatedNumber endValue={stat.value} suffix={stat.suffix} />
            </div>
            <div 
              className="mt-4 mb-4"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '16px',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              {stat.label}
            </div>
            <div 
              style={{
                width: '40px',
                height: '2px',
                background: 'var(--gold)'
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
