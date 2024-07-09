const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden z">
      {/* Background Image */}
      <img
        src="/images/background.jpg" // Path to your background image
        alt="Background Image"
        className="w-full h-full object-cover object-center"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-400  opacity-80"></div>
    </div>
  );
};

export default Background;