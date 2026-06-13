"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function YearFilter({ years, currentYear }: { years: number[]; currentYear?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    const year = e.target.value;
    
    if (year === "all") {
      params.delete("year");
    } else {
      params.set("year", year);
    }
    
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="relative">
      <select 
        className="appearance-none bg-white border border-gray-200 rounded-lg py-2 pl-4 pr-10 text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#1C1CA5] focus:border-transparent"
        value={currentYear || "all"}
        onChange={handleYearChange}
      >
        <option value="all">All Years</option>
        {years.map(y => (
          <option key={y} value={y.toString()}>{y}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
        </svg>
      </div>
    </div>
  );
}
