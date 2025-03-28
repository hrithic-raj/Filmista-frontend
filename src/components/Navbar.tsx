import upArrow from '../assets/images/icons/up-arrow.png'
import downArrow from '../assets/images/icons/down-arrow.png'
import hrjLogo from '../assets/images/hrjlogo.png'
import { BellSVGNav, HeartSVGNav, LeftArrow, RightArrow, SearchSVG } from '../assets/svg/SVGs';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { signout } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { persistor } from '../redux/persistor';
import { getUserInfo } from '../redux/slices/user/userSlice';
import { searchMovies } from '../redux/slices/user/movieSlice';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isProfile, setIsProfile] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const {user} = useAppSelector((state)=>state.user);
  const {searchResults} = useAppSelector((state)=>state.movie);
  const inputRef = useRef<HTMLInputElement>(null)
  const profileRef = useRef<HTMLDivElement>(null);
  const profileButtonRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    dispatch(getUserInfo())
  },[dispatch])
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node) &&
        profileButtonRef.current &&
        !profileButtonRef.current.contains(event.target as Node)
      ) {
        setTimeout(() => {
          setIsProfile(false);
        }, 50);
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  

  const handleSearch = async(e: React.ChangeEvent<HTMLInputElement>)=>{
    const query = e.target.value;
    setSearchQuery(query);
    if(query?.length>0){
      dispatch(searchMovies(query));
    }
  }
  
  const handleClick =(id:string)=>{
    setSearchQuery("");
    navigate(`/movies/${id}`)
  }
  
  const handleFocus = ()=>{
    if(inputRef.current) inputRef.current.focus();
  }

  const handleSignout = async()=>{
    await dispatch(signout());
    await persistor.purge();
    navigate('/signin');
  }
  return (
    <div className='hidden sm:flex flex-col'>
    <header className="text-gray-100 sm:pl-[80px] lg:pl-[320px] z-40 flex items-center justify-between space-x-3 sm:justify-around lg:justify-between sm:pr-[70px] lg:pr-[150px]">
      <div className='flex justify-between space-x-5'>
        <div className='hidden lg:flex justify-center items-center space-x-4 px-4 h-[50px] bg-[#2c2c2c] rounded-[408.80px]'>
          {/* <span className="opacity-90 text-white text-[18.84px] font-normal font-['Geologica'] hover:text-[#5CFEF0]">ALL</span>
          <img src={downArrow} alt="" /> */}
          <button onClick={() => navigate(-1)}>
            <LeftArrow/>
          </button>
          <button onClick={() => navigate(1)}>
            <RightArrow/>
          </button>
        </div>
        <div className="relative flex justify-center items-center h-[50px] pr-5 bg-[#2c2c2c] rounded-[215.70px]">
          <input
            type="text"
            ref={inputRef}
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
            className="h-[50px] min-w-[200px] sm:min-w-[250px] lg:min-w-[500px] rounded-[215.70px] bg-transparent px-7 text-sm outline-none placeholder:font-geologica placeholder:text-[#828282] placeholder:text-[18.84px] placeholder:opacity-90 placeholder:font-normal"
          />
          <div onClick={handleFocus}>
            <SearchSVG />
          </div>

          {searchQuery?.length > 0 && searchResults?.length > 0 && (
              <div className="absolute top-[60px] left-0 w-full bg-[#2c2c2c] rounded-xl shadow-lg max-h-[300px] overflow-y-auto">
                {searchResults.map((movie) => (
                  <div key={movie._id} className="flex items-center px-4 py-2 hover:bg-[#3a3a3a] cursor-pointer" onClick={()=>handleClick(movie._id)}>
                    <img src={movie?.images?.poster} alt={movie.title} className="w-[50px] h-[50px] rounded-md object-cover mr-3" />
                    <span className="text-white">{movie.title}</span>
                  </div>
                ))}
              </div>
            )}
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
        <div ref={profileButtonRef} onClick={()=>setIsProfile((prev) => !prev)} className='flex h-[50px] items-center px-1 gap-2 hover:cursor-pointer'>
          <img
            src={user?.profilePicture || hrjLogo}
            alt="User Avatar"
            className="h-[45px] w-[45px] object-cover rounded-full border-2"
          />
          <div className='relative flex justify-center items-center'>
            <span className="hidden lg:flex h-7 px-2 max-w-[150px] min-w-[80px] text-center overflow-hidden text-[#e9e9e9] text-lg font-normal font-['Geologica'] select-none">{user ? user.name : "Loading..."}</span>
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
            <div  ref={profileRef} className='absolute top-16 right-0 w-3/4 min-w-[80px] h-[150px] rounded-[16px] bg-[#2c2c2c]'>
                <div className='flex flex-col justify-evenly items-center h-full gap-2 py-3'>
                  <button
                    onClick={()=>{
                      navigate('/profile');
                      setIsProfile(false);
                  }}
                  >
                  <span className='font-fredoka hover:text-[#5CFEF0]'>View Profile</span>
                  </button>
                  <hr className='text-gray-300'/>
                  <button 
                    onClick={() => {
                      navigate('/settings');
                      setIsProfile(false);
                  }}>
                    <span className='font-fredoka hover:text-[#5CFEF0]'>Settings</span>
                  </button>
                  <hr className='text-gray-300'/>
                  <button 
                    onClick={handleSignout}
                  >
                    <span className='font-fredoka hover:text-[#5CFEF0]'>Sign Out</span>
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