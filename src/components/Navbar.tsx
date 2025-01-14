import upArrow from '../assets/images/icons/up-arrow.png'
import downArrow from '../assets/images/icons/down-arrow.png'
import hrjLogo from '../assets/images/hrjlogo.png'
import { BellSVGNav, HeartSVGNav, SearchSVG } from '../assets/svg/SVGs';
import { useState } from 'react';
import { useAppDispatch } from '../hooks/reduxHooks';
import { signout } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { persistor } from '../redux/persistor';

const Navbar = () => {
  const [isProfile, setIsProfile] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleSignout = async()=>{
    await dispatch(signout());
    await persistor.purge();
    navigate('/signin');
  }
  return (
    <div className='hidden sm:flex flex-col'>
    <header className="text-gray-100 sm:pl-[80px] lg:pl-[320px] z-40 flex items-center justify-between space-x-3 sm:justify-around lg:justify-between sm:pr-[70px] lg:pr-[150px]">
      <div className='flex justify-between space-x-5'>
        <div onClick={()=>alert("hello")} className='hidden lg:flex justify-center items-center space-x-2 pl-6 pr-6 h-[50px] bg-[#2c2c2c] rounded-[408.80px]'>
          <span className="opacity-90 text-white text-[18.84px] font-normal font-['Geologica'] hover:text-[#5CFEF0]">ALL</span>
          <img src={downArrow} alt="" />
        </div>
        <div className="flex justify-center items-center h-[50px] pr-5 bg-[#2c2c2c] rounded-[215.70px]">
          <input
            type="text"
            placeholder="Search"
            className="h-[50px] min-w-[200px] sm:min-w-[250px] lg:min-w-[500px] rounded-[215.70px] bg-transparent px-7 text-sm outline-none placeholder:font-geologica placeholder:text-[#828282] placeholder:text-[18.84px] placeholder:opacity-90 placeholder:font-normal"
          />
          <SearchSVG />
        </div>
      </div>
      <div className='hidden sm:flex justify-between lg:space-x-5 sm:space-x-2'>
        <button className="flex justify-center items-center w-[56.18px] h-[50px] bg-[#2c2c2c] rounded-[215.70px]">
          <HeartSVGNav/>
        </button>
        <button className="flex justify-center items-center w-[56.18px] h-[50px] bg-[#2c2c2c] rounded-[215.70px]">
          <BellSVGNav/>
        </button>
      </div>
      <div className="relative h-[50px] bg-[#2c2c2c] rounded-[215.70px] pr-2">
        <div onClick={()=>setIsProfile(!isProfile)} className='flex h-[50px] items-center gap-2 hover:cursor-pointer'>
          <img
            src={hrjLogo}
            alt="User Avatar"
            className="h-[50px] rounded-[215.70px] border border-gray-100"
          />
          <div className='relative flex flex-col items-center'>
            <span className="hidden lg:flex h-7 min-w-[100px] max-w-[150px] overflow-hidden text-[#e9e9e9] text-lg font-normal font-['Geologica'] select-none">Hrithic Raj</span>
            {isProfile?(
              <div className='absolute top-5 hidden lg:block w-10'>
                <img src={upArrow} className='hidden lg:flex mr-1' alt="" />
              </div>
            ):(
              <div className='absolute top-5 hidden lg:block w-10'>
                <img src={downArrow} className='hidden lg:flex mr-1' alt="" />
              </div>
            )}
          </div>

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

export default Navbar;