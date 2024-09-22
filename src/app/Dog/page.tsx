"use client";
import React from 'react';
import Image from 'next/image';
import { Line } from 'react-chartjs-2';
import Link from 'next/link'; // Import Link for navigation
import styles from './Dog.module.css'; // Use CSS module for styling
import { chartData, chartConfig } from '../Components/ChartConfig'; // Adjust the import path
import BackgroundImage from '../../../public/images/background.jpg'; // Import background image
import Background from '../Components/Background';

const Dog = () => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.backgroundImage}>
        <Image 
          src={BackgroundImage} 
          alt="Background" 
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.overlay} />
      </div>
      <Background />
      <div className={styles.container}>
        <h1 className={styles.title}>Weight Development of Tomi</h1>
        <Line
          data={chartData} 
          options={chartConfig} 
          className={styles.chart}
        />
      </div>
      <div className="absolute top-4 left-4 z-10">
        <Link href="/" className="inline-block bg-[#3182ce] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Dog;