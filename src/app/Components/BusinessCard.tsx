import React from 'react';

const BusinessCard: React.FC = () => {
  return (
    <div className="relative max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6 z-10 opacity-80">
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <img
          src="/images/sj.jpg"
          alt="Profiili kuva"
          className="rounded-full border-4 border-gray-700"
        />
      </div>
      
      {/* Card Content */}
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-800">Sakari Järvelä</h2>
        <p className="text-gray-600">Software Designer</p>
        <p className="text-gray-600">Master of Science</p>
        <p className="text-gray-600">Software Development Engineer</p>
        <p className="text-gray-600">sjarvela89@hotmail.com</p>

        {/* Skills Section */}
        <div className="mt-4">
          <p className="text-gray-600">
            React Native, React.js, TypeScript, JavaScript, C#, C++, C, SQL, Android, Angular, Windows, Linux, CSS, HTML
          </p>
        </div>

        {/* Blue Link Button */}
        <div className="mt-6">
          <a
            href="https://www.linkedin.com/in/sakari-j%C3%A4rvel%C3%A4-7b649254/" 
            className="inline-block bg-[#3182ce] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;