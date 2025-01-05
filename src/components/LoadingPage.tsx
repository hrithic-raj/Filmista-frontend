import React from 'react';
import logo from '../assets/images/logo.png'
// import { ThreeDot } from 'react-loading-indicators';
const LoadingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-[#212121]">
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
