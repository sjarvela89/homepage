import React from 'react';
import Link from 'next/link'; // Import Link for navigation
import Background from '../Components/Background';
import BusinessCard from '../Components/BusinessCard';
import styles from './Author.module.css';

const Author: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col items-center justify-center overflow-hidden">
      <Background />
      <div className="flex flex-col items-center space-y-8">
        <div className={styles.homeButtonContainer}>
          <Link href="/" className="inline-block bg-[#3182ce] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
            Home
          </Link>
        </div>
        <div className="pb-8"> {/* Add padding-bottom here */}
          <BusinessCard />
        </div>
      </div>
    </div>
  );
};

export default Author;