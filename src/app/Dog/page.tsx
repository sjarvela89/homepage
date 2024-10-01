"use client";
import React from 'react';
import Image from 'next/image';
import { Line } from 'react-chartjs-2'; // Import the correct type
import Link from 'next/link'; // Import Link for navigation
import styles from './Dog.module.css'; // Use CSS module for styling
import { chartData, chartConfig } from '../Components/ChartConfig'; // Adjust the import path
import BackgroundImage from '../../../public/images/background.jpg'; // Import background image
import DogImage from '../../../public/images/dog.jpg'; // Import dog image
import DogImage1 from '../../../public/images/dog1.jpeg';
import DogImage2 from '../../../public/images/dog2.jpeg';
import DogImage3 from '../../../public/images/dog3.jpeg';
import DogImage4 from '../../../public/images/dog4.jpeg';
import DogVideo from '../../../public/images/dogvideo.mp4';
import Background from '../Components/Background';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

const Dog = () => {
  Chart.register(ArcElement, Tooltip, Legend);

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
            <Line data={chartData} options={chartConfig} className={styles.chart}></Line>
          </div>
          <div className={styles.dogImagesRow}>
            <div className={styles.dogImageContainer}>
              <Image 
                src={DogImage4} 
                alt="Dog" 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.dogImageContainer}>
              <Image 
                src={DogImage3} 
                alt="Dog" 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.dogImageContainer}>
              <Image 
                src={DogImage2} 
                alt="Dog" 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.dogVideoContainer}>
              <video 
                src={DogVideo} 
                autoPlay 
                muted 
                loop 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div className={styles.dogImageContainer}>
              <Image 
                src={DogImage1} 
                alt="Dog" 
                fill
                style={{ objectFit: 'contain' }}
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
      </div>
      <div className={styles.homeButtonContainer}>
        <Link href="/" className="inline-block bg-[#3182ce] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
          Home
        </Link>
      </div>
      <div className={styles.fciButtonContainer}>
        <a
          href="https://jalostus.kennelliitto.fi/frmKoira.aspx?RekNo=FI22234%2F24&R=58" 
          className="inline-block bg-[#3182ce] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          FCI
        </a>
      </div>
    </div>
  );
};

export default Dog;