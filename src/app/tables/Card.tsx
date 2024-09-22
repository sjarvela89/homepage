import DogImage from '../../../public/images/dog.jpg';
import PhotographyImage from '../../../public/images/photography.jpg';
import ProfileImage from '../../../public/images/profile.jpg';
import GuitarImage from '../../../public/images/guitar.jpeg'

interface CardData {
  title: string;
  subtitle: string;
  imageSource: string;
  screen: string;
}

const cardData: CardData[] = [
  {
    title: "Dog",
    subtitle: "Learn more about Mr. Tomi Junior Eki Balarda",
    imageSource: DogImage.src, // Using Next.js optimized image
    screen: "/Dog", // Replace with Next.js routes
  },
  {
    title: "Photography",
    subtitle: "Hobby photographing with mobile phone camera",
    imageSource: PhotographyImage.src, // Using Next.js optimized image
    screen: "/Photography", // Replace with Next.js routes
  },
  {
    title: "Author",
    subtitle: "Just a business card of the author.",
    imageSource: ProfileImage.src, // Using Next.js optimized image
    screen: "/Author", // Replace with Next.js routes
  },
  {
    title: "Guitar",
    subtitle: "Some solo to listen.",
    imageSource: GuitarImage.src, // External image URL
    screen: "/Guitar", // Replace with Next.js routes
  },
];

export default cardData;