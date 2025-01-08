import React, { useState } from 'react';
import upArrow from '../../assets/images/icons/up-arrow.png'
import downArrow from '../../assets/images/icons/down-arrow.png'
import hrjLogo from '../../assets/images/hrjlogo.png'
import { BellSVGNav, HeartSVGNav, SearchSVG } from '../../assets/svg/SVGs';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { signout } from '../../redux/slices/authSlice';


const AdminNavbar: React.FC = () => {
  const [isProfile, setIsProfile] = useState(false);
  const dispatch = useAppDispatch();
  const handleSignout = ()=>{
    dispatch(signout());
  }
  return (
    <div className='hidden sm:flex flex-col'>
    <header className="text-gray-100 sm:pl-[80px] lg:pl-[320px] z-40 flex items-center justify-between space-x-3 sm:justify-around lg:justify-between sm:pr-[70px] lg:pr-[150px]">
      <div className='flex justify-between space-x-5'>
        <div className="flex justify-center items-center h-[50px] pr-5 bg-[#2c2c2c] rounded-[215.70px]">
          <input
            type="text"
            placeholder="Search"
            className="h-[50px] min-w-[200px] sm:min-w-[250px] lg:min-w-[500px] rounded-[215.70px] bg-transparent px-7 text-sm outline-none placeholder:font-geologica placeholder:text-[#828282] placeholder:text-[18.84px] placeholder:opacity-90 placeholder:font-normal"
          />
          <SearchSVG />
        </div>
      </div>
      <div className="relative h-[50px] bg-[#2c2c2c] rounded-[215.70px] ">
        <div onClick={()=>setIsProfile(!isProfile)} className='flex h-[50px] items-center gap-2 hover:cursor-pointer'>
          <img
            src={hrjLogo}
            alt="User Avatar"
            className="h-[50px] rounded-[215.70px] border border-gray-100"
          />
          <span className="hidden lg:flex h-7 text-[#e9e9e9] text-[18.84px] font-normal font-['Geologica']">Hrithic Raj</span>
          {isProfile?(
            <div className='w-10'>
              <img src={upArrow} className='hidden lg:flex mr-1' alt="" />
            </div>
          ):(
            <div className='w-10'>
              <img src={downArrow} className='hidden lg:flex mr-1' alt="" />
            </div>
          )}

        </div>
          {isProfile &&(
            <div className='absolute top-16 right-0 w-3/4 h-[130px] rounded-[16px] bg-[#2c2c2c] border border-gray-300'>
                <div className='flex flex-col justify-evenly items-center h-full'>
                  <button>
                  <span className='font-fredoka'>View Profile</span>
                  </button>
                  <hr className='text-gray-300'/>
                  <button>
                    <span className='font-fredoka'>Settings</span>
                  </button>
                  <hr className='text-gray-300'/>
                  <button onClick={handleSignout}>
                    <span className='font-fredoka'>Sign Out</span>
                  </button>
                </div>
            </div>
          )}
      </div>
    </header>
    </div>
  );
};

export default AdminNavbar;