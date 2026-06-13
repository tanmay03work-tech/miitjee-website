"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

function Counter({ end, duration = 2, suffix = "", prefix = "", label }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function (easeOutExpo)
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeOut * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        }
      };

      animationFrame = requestAnimationFrame(step);
      
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 text-center">
      <div className="text-4xl md:text-5xl font-bold text-miitjee-navy mb-2 font-poppins">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm md:text-base text-gray-600 font-medium tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
}

export default function StatsCounter() {
  const stats = [
    { end: 15, suffix: "+", label: "Years of Excellence" },
    { end: 10000, suffix: "+", label: "Students Mentored" },
    { end: 500, suffix: "+", label: "JEE Selections" },
    { end: 300, suffix: "+", label: "NEET Selections" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Counter
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
