"use client";
import React, { useState } from 'react';
import styles from './Guitar.module.css'; // Import the CSS module
import Link from 'next/link';
import Image from 'next/image';
import BackgroundImage from '../../../public/images/background.jpg';
import Background from '../Components/Background';

const Guitar: React.FC = () => {
  const [currentSound, setCurrentSound] = useState<HTMLAudioElement | null>(null);

  const guitar1Sound = "/sounds/guitar1.mp3"; // Ensure this path is correct

  const stopSound = () => {
    if (currentSound) {
      currentSound.pause();
      currentSound.currentTime = 0; // Reset to start
      setCurrentSound(null);
      console.log('Sound stopped');
    }
  };

  const playSound = (soundFile: string) => {
    // Stop the current sound if already playing
    if (currentSound) {
      stopSound();
    }

    const sound = new Audio(soundFile);
    sound.play()
      .then(() => {
        console.log('Sound played successfully');
      })
      .catch(error => {
        console.error('Sound playback failed', error);
      });

    setCurrentSound(sound);
  };

  return (
    <div className={styles.container}>
      {/* Background image */}
      <div className={styles.backgroundImage}>
        <Image
          src={BackgroundImage}
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.overlay} />
      </div>
      <Background></Background>
      <h1 className={styles.title}>Guitar Soundboard</h1>
      <button className={styles.button} onClick={() => playSound(guitar1Sound)}>
        Play Guitar Solo
      </button>
      <button className={`${styles.button} ${styles.stopButton}`} onClick={stopSound}>
        Stop Playing
      </button>
      <div className="absolute top-4 left-4 z-10">
        <Link href="/" className="inline-block bg-[#3182ce] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Guitar;