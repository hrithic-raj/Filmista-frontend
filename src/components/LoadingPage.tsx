import React from 'react';
import logo from '../assets/images/logo.png'
// import { ThreeDot } from 'react-loading-indicators';
const LoadingPage: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen z-50">
      <img
        src={logo}
        alt="Filmista Logo"
        className="w-24 h-24 animate-bounce"
      />
    {/* <ThreeDot color="#46cec2" size="medium" text="" textColor="#46cec2"/> */}
    </div>
  );
};

export default LoadingPage;
