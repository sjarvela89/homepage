import React from 'react';
import Link from 'next/link'; // Import Link for navigation
import Background from '../Components/Background';
import BusinessCard from '../Components/BusinessCard';

const Dog: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center overflow-hidden">
      <Background />
      <BusinessCard />

      {/* Home Button */}
      <div className="absolute top-4 left-4">
        <Link href="/" className="inline-block bg-[#3182ce] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Dog;