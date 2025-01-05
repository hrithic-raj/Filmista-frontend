import upArrow from '../assets/images/up-arrow.png'
import downArrow from '../assets/images/down-arrow.png'
import hrjLogo from '../assets/images/hrjlogo.png'
import { BellSVGNav, HeartSVGNav, SearchSVG } from '../assets/svg/SVGs';

const Navbar = () => {
  return (
    <div className='hidden sm:flex flex-col'>
    <header className="text-gray-100 p-0 lg:p-4 sm:pl-[80px] lg:pl-[320px] z-40 flex items-center justify-between space-x-3 sm:justify-around lg:justify-between sm:pr-[70px] lg:pr-[150px]">
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
      <div className="flex h-[50px]  bg-[#2c2c2c] rounded-[215.70px] items-center gap-2">
          <img
            src={hrjLogo}
            alt="User Avatar"
            className="h-[50px] rounded-[215.70px] border border-gray-100"
          />
          <span className="hidden lg:flex min-w-[200px] h-7 text-[#e9e9e9] text-[18.84px] font-normal font-['Geologica']">Hrithic Raj</span>
      </div>
    </header>
    </div>
  );
};

export default Navbar;