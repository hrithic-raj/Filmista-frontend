import React from 'react';
import AdminSidebar from './AdminSidebar';
import AdminNavbar from './AdminNavbar';
// import upArrow from '../assets/images/icons/up-arrow.png'
import downArrow from '../../assets/images/icons/down-arrow.png'
import hrjLogo from '../../assets/images/hrjlogo.png'
import { BellSVGNav, HeartSVGNav, SearchSVG } from '../../assets/svg/SVGs';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="flex pt-5 ">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminNavbar />
        <main className="flex-1 pt-20 pb-10 sm:pl-[80px] lg:pl-[200px] sm:pr-[70px] lg:pr-[100px]">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
