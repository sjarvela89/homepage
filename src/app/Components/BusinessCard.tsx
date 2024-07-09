import React from 'react';

const BusinessCard: React.FC = () => {
  return (
    <div className="relative max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6 z10 opacity-70">
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <img 
          src="/images/sj.jpg" 
          alt="Profiili kuva" 
          className="rounded-full border-4 bo	rder-gray-700" 
        />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-800">Sakari Järvelä</h2>
        <p className="text-gray-600">Software Designer</p>
        <p className="text-gray-600">sjarvela89@hotmail.com</p>
		<div className="mt-4"></div>
        <p className="text-gray-600">React Native, React.js, TypeScript, JavaScript, C#, C++, C, SQL, Android, Angular, Windows, Linux, CSS, HTML, Next.js</p>
      </div>
    </div>
  );
};

export default BusinessCard;