import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Bottombar from './Bottombar';
interface TemplateProps {
    children: ReactNode;
  }
  
  const Template: React.FC<TemplateProps> = ({ children }) => {
  return (
    <div className="sm:flex pt-5 bg-[#212121] min-h-screen max-w-screen overflow-x-hidden">
      <Sidebar />
      <div className="flex-grow">
        <Navbar />
        <main className="pt-5 sm:ml-[100px] px-1 lg:ml-[320px] bg-[#212121] sm:pr-[70px] lg:pr-[150px]">
          {children}
        </main>
      <Bottombar />
      </div>
    </div>
  );
};

export default Template;
