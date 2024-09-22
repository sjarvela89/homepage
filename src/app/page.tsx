import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation
import cardData from './tables/Card'; // Import the card data
import CardComponent from './Components/CardComponent'; // Import the CardComponent
import BackgroundImage from '../../public/images/background.jpg'; // Import background image
import styles from './Home.module.css'; // Import CSS module for styles
import Background from './Components/Background';

const Home: React.FC = () => {
  return (
    <div className={styles.backgroundContainer}>
      {/* Background image using Next.js Image optimization */}
      <div className={styles.backgroundImage}>
      <Image
        src={BackgroundImage}
        alt="Background"
        fill // Use the fill prop for layout
        style={{ objectFit: 'cover' }} // Use inline styles for objectFit
      />
        <div className={styles.overlay} />
      </div>
    <Background></Background>
      <div className={styles.container}>
        {/* Card components rendered in a scrollable container */}
        {cardData.map((card, index) => (
          <Link key={index} href={card.screen}>
            <CardComponent
              title={card.title}
              subtitle={card.subtitle}
              imageSource={card.imageSource}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;