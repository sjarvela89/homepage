"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js'; // Import from chart.js directly
import Link from 'next/link'; // Import Link for navigation
import styles from './Dog.module.css'; // Use CSS module for styling
import { chartData, chartConfig } from '../Components/ChartConfig'; // Adjust the import path
import BackgroundImage from '../../../public/images/background.jpg'; // Import background image
import DogImage from '../../../public/images/dog.jpg'; // Import dog image
import Background from '../Components/Background';

const Dog = () => {
  const chartRef = useRef<ChartJS | null>(null); // Explicitly type the ref

  useEffect(() => {
    // Ensure the chart is properly initialized and cleaned up
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

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
      <div className={styles.scrollableContainer}>
        <div className={styles.container}>
          <h1 className={styles.title}>Weight Development of Tomi</h1>
          <div className={styles.chartContainer}>
            <Line
              ref={chartRef}
              data={chartData} 
              options={chartConfig} 
              className={styles.chart}
            />
          </div>
          <div className={styles.dogImageContainer}>
            <Image 
              src={DogImage} 
              alt="Dog" 
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
      <div className={styles.homeButtonContainer}>
        <Link href="/" className="inline-block bg-[#3182ce] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Dog;