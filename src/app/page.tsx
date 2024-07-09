import Head from 'next/head';
import BusinessCard from './Components/BusinessCard';
import Background from './Components/Background';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center overflow-hidden">
      <Background />
      <BusinessCard />
    </div>
  );
};

export default Home;