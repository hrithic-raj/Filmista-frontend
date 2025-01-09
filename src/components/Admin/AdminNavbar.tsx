import React, { useState } from "react";
import { FaSearch, FaBars, FaBell } from "react-icons/fa";
import logo from '../../assets/images/logo.png'
import upArrow from '../../assets/images/icons/up-arrow.png'
import downArrow from '../../assets/images/icons/down-arrow.png'
import hrjLogo from '../../assets/images/hrjlogo.png'
// import { BellSVGNav, HeartSVGNav, SearchSVG } from '../../assets/svg/SVGs';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { signout } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
// import { persistor } from "../../redux/persistor";

const AdminNavbar: React.FC = () => {
  const [isProfile, setIsProfile] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSignout = async()=>{
    await dispatch(signout());
    // await persistor.purge();
    navigate('/signin')
  }
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[rgb(44,44,44)] text-white shadow-md h-16 z-40 flex items-center pr-4 lg:pl-4">
      <div className='hidden md:flex justify-center items-center'>
        <img src={logo} className='w-[45px]' alt="" />
        <div className="h-[39.90px] flex items-center">
          <span className="text-white text-2xl font-extrabold font-baloo tracking-[2.64px]">Film</span>
            <span className="text-white text-2xl font-thin font-baloo tracking-[2.64px]">ista</span>
          </div>
      </div>
      {/* Mobile Sidebar Toggle */}
      {/* <div className="md:hidden flex items-center mr-4">
        <button className="text-2xl">
          <FaBars />
        </button>
      </div> */}

      {/* Search Bar */}
      <div className="flex-grow flex items-center">
        <div className="relative w-full max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search..."
            className="border-b border-gray-500 h-[50px] min-w-[200px] sm:min-w-[250px] lg:min-w-[500px] bg-transparent px-7 text-sm outline-none placeholder:font-geologica placeholder:text-[#828282] placeholder:text-[18.84px] placeholder:opacity-90 placeholder:font-normal"
          />
          <FaSearch className="absolute text-lg top-1/2 left-1 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6">
        {/* Notifications */}
        <button className="relative">
          <FaBell className="text-xl" />
          <span className="absolute top-0 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile Section */}

        <div className="relative h-[50px] bg-[#2c2c2c] rounded-[215.70px] ">
         <div onClick={()=>setIsProfile(!isProfile)} className='flex h-[50px] items-center gap-2 hover:cursor-pointer'>
           <img
            src={hrjLogo}
            alt="User Avatar"
            className="h-[40px] rounded-[215.70px] border border-gray-100"
          />
          <div className="relative flex flex-col items-center ">
            <span className="hidden lg:flex text-[#e9e9e9] text-lg font-normal font-['Geologica'] select-none">Hrithic Raj</span>
            {isProfile?(
              <div className='absolute top-5 hidden lg:block w-10'>
                <img src={upArrow} className='hidden lg:flex' alt="" />
              </div>
            ):(
              <div className='absolute top-5 hidden lg:block w-10'>
                <img src={downArrow} className='hidden lg:flex' alt="" />
              </div>
            )}
          </div>

        </div>
          {isProfile &&(
            <div className='absolute z- top-16 right-0 w-[100px] lg:w-full h-[130px] rounded-[16px] bg-[#2c2c2c] border border-gray-300'>
                <div className='flex flex-col justify-evenly items-center h-full'>
                  <button>
                  <span className='font-fredoka hover:text-[#5cfef0] transition-colors duration-300'>View Profile</span>
                  </button>
                  <hr className='text-gray-300'/>
                  <button>
                    <span className='font-fredoka hover:text-[#5cfef0] transition-colors duration-300'>Settings</span>
                  </button>
                  <hr className='text-gray-300'/>
                  <button onClick={handleSignout}>
                    <span className='font-fredoka hover:text-[#5cfef0] transition-colors duration-300'>Sign Out</span>
                  </button>
                </div>
            </div>
          )}
      </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
