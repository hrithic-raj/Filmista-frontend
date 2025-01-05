import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Bottombar from './Bottombar';
interface TemplateProps {
    children: ReactNode;
  }
  
  const Template: React.FC<TemplateProps> = ({ children }) => {
  return (
    <div className="flex pt-5 bg-[#212121] min-h-screen">
      <Sidebar />
      <div className="flex-grow">
        <Navbar />
        <main className="pt-16 sm:pl-[100px] lg:pl-[310px] bg-[#212121]">
          {children}
        </main>
      </div>
      <Bottombar/>
    </div>
  );
};

export default Template;
