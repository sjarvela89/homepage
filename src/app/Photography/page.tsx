"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Photography.module.css'; // Import styles from CSS module
import { images } from '../tables/ImageData'; // Import the image data
import BackgroundImage from '../../../public/images/background.jpg'; // Import the background image
import Background from '../Components/Background';
import Link from 'next/link';

const Photography: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [rotation, setRotation] = useState<number>(0);

  const handleRotateClockwise = () => {
    setRotation((prevRotation) => prevRotation + 90);
  };

  const handleRotateCounterclockwise = () => {
    setRotation((prevRotation) => prevRotation - 90);
  };

  const getImageStyle = () => {
    const isRotated = Math.abs(rotation % 180) === 90;
    const imageWidth = isRotated ? '70vh' : '90vw';
    const imageHeight = isRotated ? '90vw' : '70vh';

    return {
      width: imageWidth,
      height: imageHeight,
      transform: `rotate(${rotation}deg)`,
      objectFit: 'contain', // Ensure image maintains aspect ratio
    };
  };

  return (
    <div className={styles.backgroundContainer}>
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
      {/* Main container */}
      <div className={styles.container}>
        <h1 className={styles.title}>Photography Gallery</h1>

        {/* Gallery of thumbnails */}
        <div className={styles.gallery}>
          {images.map((item) => (
            <div
              key={item.id}
              className={styles.imageThumbnail}
              onClick={() => {
                setSelectedImage(item.source.src);
                setRotation(0); // Reset rotation when a new image is selected
              }}
            >
              <Image
                src={item.source}
                alt={`Thumbnail ${item.id}`}
                width={300}
                height={300}
                style={{ objectFit: 'cover', borderRadius: '8px' }}
              />
            </div>
          ))}
        </div>

        {/* Modal for viewing and rotating images */}
        {selectedImage && (
          <div className={styles.modalContainer}>
            <button
              className={styles.closeButton}
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>

            <div className={styles.imageContainer}>
              <Image
                src={selectedImage}
                alt="Selected"
                style={getImageStyle()}
                width={900}
                height={700}
              />
            </div>

            {/* Rotation buttons */}
            <div className={styles.rotationButtonsContainer}>
              <button className={styles.rotationButton} onClick={handleRotateCounterclockwise}>
                Rotate Left
              </button>
              <button className={styles.rotationButton} onClick={handleRotateClockwise}>
                Rotate Right
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="absolute top-4 left-4 z-10">
        <Link href="/" className="inline-block bg-[#3182ce] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Photography;