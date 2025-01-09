import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import {ExploreSVG, HeartSVG, HomeSVG, LogoSVG, SettingsSVG, UserSVG} from '../assets/svg/SVGs';
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className='hidden sm:block h-screen w-[70px] lg:w-[257px] fixed  z-50 sm:ms-5 lg:ms-10'>
      <aside className="bg-[rgb(44,44,44)] text-gray-100 h-[93%] rounded-[36px] p-4 lg:p-8">
        <div className='flex flex-col h-full mt-4 '>
          <div className="mb-12">
              <div className='block lg:hidden'>
                <LogoSVG/>
              </div>
              <div className='hidden lg:flex justify-center items-center'>
                  <img src={logo} className='w-[45px]' alt="" />
                  <div className="w-[169.32px] h-[39.90px] flex items-center">
                      <span className="text-white text-2xl font-extrabold font-baloo tracking-[2.64px]">Film</span>
                      <span className="text-white text-2xl font-thin font-baloo tracking-[2.64px]">ista</span>
                  </div>
              </div>
          </div>
          <nav>
              <ul className='flex flex-col space-y-9'>
                <div className='flex flex-col items-center lg:items-start space-y-9 lg:ml-2'>
                  <li onClick={()=>navigate('/')} className="lg:flex items-center space-x-3 hover:cursor-pointer">
                      <HomeSVG/>
                      <span className="hidden lg:flex w-[64.30px] h-[23.63px] text-[#e9e9e9] text-base font-normal font-['Fredoka'] hover:text-[#5cfef0]">Home</span>
                  </li>
                  <li onClick={()=>navigate('/')} className="lg:flex items-center space-x-3 hover:cursor-pointer">
                      <ExploreSVG/>
                      <span className="hidden lg:flex w-[64.30px] h-[23.63px] text-[#e9e9e9] text-base font-normal font-['Fredoka'] hover:text-[#5cfef0]">Explore</span>
                  </li>
                  <li onClick={()=>navigate('/')} className="lg:flex items-center space-x-3 hover:cursor-pointer">
                      <HeartSVG/>
                      <span className="hidden lg:flex w-[64.30px] h-[23.63px] text-[#e9e9e9] text-base font-normal font-['Fredoka'] hover:text-[#5cfef0]">Watchlist</span>
                  </li>
                </div>
                <hr className='text-[#373830] opacity-20' />
                <div className='flex flex-col space-y-9 items-center lg:items-start lg:ml-2'>
                  <li onClick={()=>navigate('/')} className="lg:flex items-center space-x-3 hover:cursor-pointer">
                      <UserSVG/>
                      <span className="hidden lg:flex w-[64.30px] h-[23.63px] text-[#e9e9e9] text-base font-normal font-['Fredoka'] hover:text-[#5cfef0]">Profile</span>
                  </li>
                  <li onClick={()=>navigate('/')} className="lg:flex items-center space-x-3 hover:cursor-pointer">
                      <SettingsSVG/>
                      <span className="hidden lg:flex w-[64.30px] h-[23.63px] text-[#e9e9e9] text-base font-normal font-['Fredoka'] hover:text-[#5cfef0]">Settings</span>
                  </li>
                </div>
              </ul>
          </nav>
          <div className="mt-auto mb-2 hidden lg:flex lg:flex-col">
              <h2 className="mb-4 text-[#e9e9e9] text-base font-normal font-['Fredoka']">Favorite genres</h2>
              <div className="flex flex-wrap gap-2">
                {['Action', 'Adventure', 'Anime', 'Fantasy', 'Comedy'].map((genre) => (
                  <div key={genre} className='flex justify-center items-center h-[23.94px] p-2 bg-[#fefefe]/0 rounded-[36px] border border-[#e9e9e9]'>
                    <span className="text-[#e9e9e9] text-[11px] font-normal font-['Fredoka']">{genre}</span>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;