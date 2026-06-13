"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function CountdownTimer() {
  const [launchDate, setLaunchDate] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPassed, setIsPassed] = useState(false);
  const [, setTick] = useState(0);

  useEffect(() => {
    const fetchLaunchDate = async () => {
      try {
        const supabase = createClient();
        const { data, error } = await supabase
          .from("site_settings")
          .select("value")
          .eq("key", "manthan_launch_date")
          .maybeSingle();

        if (error) {
          console.warn("Supabase error fetching launch date:", error);
          setIsPassed(true);
          return;
        }

        if (data && data.value) {
          setLaunchDate(new Date(data.value));
        } else {
          setIsPassed(true); // Fallback if not set
        }
      } catch (error) {
        console.warn("Error fetching launch date:", error);
        setIsPassed(true); // Fallback on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchLaunchDate();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((t) => t + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);


  if (isLoading) {
    return (
      <div className="flex justify-center gap-4 animate-pulse">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-20 h-24 bg-[#1C1CA5] rounded-xl"></div>
        ))}
      </div>
    );
  }

  const calculateTimeLeft = () => {
    if (!launchDate) return { days: 0, hours: 0, minutes: 0, seconds: 0, isPassedDerived: false };
    const difference = launchDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPassedDerived: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPassedDerived: false,
    };
  };

  const timeLeft = calculateTimeLeft();
  const shouldShowPassed = isPassed || timeLeft.isPassedDerived;

  if (shouldShowPassed) {
    return (
      <div className="text-center bg-[#FEFD12] text-[#23205D] py-6 px-10 rounded-2xl shadow-xl inline-block">
        <h2 className="text-3xl font-bold font-poppins">Registration Open!</h2>
        <p className="font-inter mt-2">The scholarship exam is live.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
      {[
        { label: "DAYS", value: timeLeft.days },
        { label: "HRS", value: timeLeft.hours },
        { label: "MINS", value: timeLeft.minutes },
        { label: "SECS", value: timeLeft.seconds },
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="bg-[#1C1CA5] border-2 border-[#FEFD12]/20 text-[#FEFD12] w-20 h-24 sm:w-24 sm:h-28 rounded-xl flex items-center justify-center shadow-lg mb-2">
            <span className="font-bold text-4xl sm:text-5xl font-poppins">
              {item.value.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="text-sm sm:text-base font-semibold tracking-wider text-white font-inter">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}