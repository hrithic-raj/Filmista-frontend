import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import {ExploreSVG, HeartSVG, HomeSVG, LogoSVG, SettingsSVG, StoreSVG, UserSVG} from '../assets/svg/SVGs';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { useEffect } from 'react';
import { getUserInfo } from '../redux/slices/user/userSlice';
import IGenre from '../interfaces/GenreInterface';
const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const {user} = useAppSelector((state)=>state.user);
  
  useEffect(()=>{
    dispatch(getUserInfo())
  },[dispatch])
  const genres = user?.genres
  ?.filter((g): g is IGenre => typeof g === "object" && "genre" in g)
  .map((g) => g.genre) ?? [];

    return (
    <div className='hidden sm:block h-screen w-[70px] lg:w-[257px] fixed z-50 sm:ms-5 lg:ms-10'>
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
                <li onClick={() => navigate('/')} className="lg:flex items-center space-x-3 hover:cursor-pointer">
                  <HomeSVG />
                  <span className={`hidden lg:flex w-[64.30px] h-[23.63px] text-base font-normal font-['Fredoka'] hover:text-[#5CFEF0] ${location.pathname === '/' ? 'text-[#5CFEF0]' : 'text-[#e9e9e9]'}`}>Home</span>
                </li>
                <li onClick={() => navigate('/explore')} className="lg:flex items-center space-x-3 hover:cursor-pointer">
                  <ExploreSVG />
                  <span className={`hidden lg:flex w-[64.30px] h-[23.63px] text-base font-normal font-['Fredoka'] hover:text-[#5CFEF0] ${location.pathname === '/explore' ? 'text-[#5CFEF0]' : 'text-[#e9e9e9]'}`}>Explore</span>
                </li>
                <li onClick={() => navigate('/watchlist')} className="lg:flex items-center space-x-3 hover:cursor-pointer">
                  <HeartSVG />
                  <span className={`hidden lg:flex w-[64.30px] h-[23.63px] text-base font-normal font-['Fredoka'] hover:text-[#5CFEF0] ${location.pathname === '/watchlist' ? 'text-[#5CFEF0]' : 'text-[#e9e9e9]'}`}>Watchlist</span>
                </li>
              </div>
              <hr className='text-[#373830] opacity-20' />
              <div className='flex flex-col space-y-9 items-center lg:items-start lg:ml-2'>
                <li onClick={() => navigate('/profile')} className="lg:flex items-center space-x-3 hover:cursor-pointer">
                  <UserSVG />
                  <span className={`hidden lg:flex w-[64.30px] h-[23.63px] text-base font-normal font-['Fredoka'] hover:text-[#5CFEF0] ${location.pathname === '/profile' ? 'text-[#5CFEF0]' : 'text-[#e9e9e9]'}`}>Profile</span>
                </li>
                <li onClick={() => navigate('/store')} className="lg:flex items-center space-x-3 hover:cursor-pointer">
                  <StoreSVG />
                  <span className={`hidden lg:flex w-[64.30px] h-[23.63px] text-base font-normal font-['Fredoka'] hover:text-[#5CFEF0] ${location.pathname === '/store' ? 'text-[#5CFEF0]' : 'text-[#e9e9e9]'}`}>Store</span>
                </li>
                <li onClick={() => navigate('/settings')} className="lg:flex items-center space-x-3 hover:cursor-pointer">
                  <SettingsSVG />
                  <span className={`hidden lg:flex w-[64.30px] h-[23.63px] text-base font-normal font-['Fredoka'] hover:text-[#5CFEF0] ${location.pathname === '/settings' ? 'text-[#5CFEF0]' : 'text-[#e9e9e9]'}`}>Settings</span>
                </li>
              </div>
            </ul>
          </nav>
          <div className="mt-auto mb-2 hidden lg:flex lg:flex-col">
              <h2 className="mb-4 text-[#e9e9e9] text-base font-normal font-['Fredoka']">Favorite genres</h2>
              <div className="flex flex-wrap gap-2">
                {genres?.slice(0,5).map((genre) => (
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