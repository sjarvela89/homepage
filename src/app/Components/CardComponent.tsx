import React from 'react';
import Image from 'next/image';
import styles from './CardComponent.module.css';

interface CardProps {
  title: string;
  subtitle: string;
  imageSource: string;
  onPress?: () => void;
}
const CardComponent: React.FC<CardProps> = ({ title, subtitle, imageSource, onPress }) => {
  return (
    <div className={styles.card} onClick={onPress}>
      <div className={styles.imageContainer}>
        <Image 
          src={imageSource} 
          alt={title} 
          className={styles.image} 
          width={500}
          height={300} 
          style={{ objectFit: title === "Dog" || title === "Guitar"  ? "contain" : "cover" }} // Use inline style for object-fit
        />
      </div>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardSubtitle}>{subtitle}</p>
    </div>
  );
};

export default CardComponent;
