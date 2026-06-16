'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, RefreshCcw } from 'lucide-react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
        <div>
          <h1 className="text-6xl font-bold font-poppins text-blue-900">Oops!</h1>
          <h2 className="mt-6 text-2xl font-extrabold text-gray-900 font-inter">
            Something went wrong
          </h2>
          <p className="mt-4 text-gray-600">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>
        </div>
        
        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={reset}
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#23205D] text-[#23205D] hover:bg-gray-50 font-bold text-lg rounded-full gap-2 transition-colors w-full sm:w-auto"
          >
            <RefreshCcw className="w-5 h-5" />
            Try again
          </button>
          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-8 py-4 bg-[#FFD600] text-[#23205D] hover:bg-[#E6C200] font-bold text-lg rounded-full gap-2 transition-colors w-full sm:w-auto"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
