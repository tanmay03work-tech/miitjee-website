import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
        <div>
          <h1 className="text-9xl font-bold font-poppins text-miitjee-navy">404</h1>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 font-inter">
            Page Not Found
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Oops! The page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="pt-4">
          <Link href="/">
            <Button size="lg" className="w-full sm:w-auto bg-miitjee-yellow text-miitjee-navy hover:bg-yellow-400 font-semibold px-8 py-6 text-lg rounded-full flex items-center justify-center gap-2 mx-auto">
              <Home className="w-5 h-5" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
