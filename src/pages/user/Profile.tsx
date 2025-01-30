import BannerImg from '../../assets/images/movie/banner.jpg'
import PosterImg from '../../assets/images/movie/poster.jpg'
import hrj from '../../assets/images/hrjlogo.png'
import editSVG from '../../assets/svg/edit.svg'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProfile } from '../../api/userApis'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import IUser from '../../interfaces/UserInterface'
import moment from 'moment'
import { getUserInfo } from '../../redux/slices/user/userSlice'

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(1);
   const {user} = useAppSelector((state)=>state.user);
   
   useEffect(()=>{
     dispatch(getUserInfo())
   },[dispatch])
  
  return (
    <>
      <div className='flex flex-col gap-6 sm:pb-8 pb-[100px]'>
        <div className='reletive max-h-screen bg-[#2c2c2c] pb-5 rounded-[15px]'>
          <div className='h-[200px] md:h-[250px] w-full'>
            <img src={BannerImg} className='h-full w-full object-cover rounded-t-[15px]' alt="" onContextMenu={(e) => e.preventDefault()}/>
          </div>
          <div className='flex justify-between py-2 md:py-5'>
            <div className='flex flex-col pl-2 md:pb-2 md:pl-[250px] mt-[80px] md:mt-0 space-y-1'>
              <span className="text-white text-4xl font-normal font-['Goldman']">{user?.name}</span>
              <span className="text-[#e9e9e9] text-base font-normal font-['Golos Text']">Since {moment(user?.createdAt).format("MMM-YYYY")}</span>
              { user?.bio ? (
                <span className="w-[300px] md:w-[433px] text-[#e9e9e9] text-[10px] font-normal font-['Geologica']">
                {user?.bio}
              </span>
              ):(
                <span className="w-[300px] md:w-[433px] text-[#e9e9e9] text-[10px] font-normal font-['Geologica']">
                I'm a movie lover, i love to watch movies in any language
                I love anime too, they are the best when it comes to stories
              </span>
              )
              }
            </div>
            <div className='pt-5 pr-5'>
              <button onClick={()=>navigate(`/edit-profile`)} className="flex py-1.5 px-4 bg-[#46cec2]/80 rounded-[10px]">
                <img src={editSVG} alt="" />
                <span className="text-[#e9e9e9] text-[15px] font-normal font-['Geologica']">Edit</span>
              </button>
            </div>
          </div>
          <div className='absolute rounded-full top-[25%] sm:top-[30%] md:top-[40%] ml-5 w-[150px] h-[150px] md:w-[200px] md:h-[200px]'>
            <div className='bg-gradient-to-tr from-black rounded-full w-full h-full'/>
            <img src={user?.profilePicture || hrj} className='absolute top-0 left-0 rounded-full z-6 border w-[150px] h-[150px] md:w-[200px] md:h-[200px]' alt="" onContextMenu={(e) => e.preventDefault()} />
          </div>
        </div>
        <div className='flex gap-3'>
          <div className='flex flex-col gap-3'>
            <button onClick={()=>setActive(1)} className={`flex flex-col justify-center items-center w-[261px] h-[143px] bg-[#2c2c2c] rounded-[15px] ${active==1?'border' : 'border-0'}`}>
              <span className="text-white text-xl font-normal font-geologica">Ratings</span>
              <span className="text-[#46cec2] text-5xl font-normal font-['Geologica']">08</span>
            </button>
            <button onClick={()=>setActive(2)} className={`flex flex-col justify-center items-center w-[261px] h-[143px] bg-[#2c2c2c] rounded-[15px] ${active==2?'border' : 'border-0'}`}>
              <span className="text-white text-xl font-normal font-geologica">Watchlist</span>
              <span className="text-[#46cec2] text-5xl font-normal font-['Geologica']">25</span>
            </button>
            <button onClick={()=>setActive(3)} className={`flex flex-col justify-center items-center w-[261px] h-[143px] bg-[#2c2c2c] rounded-[15px] ${active==3?'border' : 'border-0'}`}>
              <span className="text-white text-xl font-normal font-geologica">Reviews</span>
              <span className="text-[#46cec2] text-5xl font-normal font-['Geologica']">13</span>
            </button>
          </div>
          <div className='bg-[#2c2c2c] rounded-[15px] w-full max-h-[40rem] overflow-auto custom-scrollbar'>
            {
              active===1 && (
                <div key={1} className='flex flex-col'>
                  <span className='text-2xl text-white text-center'>Ratings</span>
                  <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center place-items-center p-4'>
                    {[1,2,3,4,32,4,5,6,87,54].map(m=>(
                      <div key={m} className='w-[150px] h-[200px] rounded-md'>
                        <img src={PosterImg} className='w-full h-full object-cover rounded-md' alt="" />
                      </div>
                    ))}
                  </div>
                </div>
              )
            }
            {
              active===2 && (
                <div key={2} className='flex flex-col'>
                  <span className='text-2xl text-white text-center'>Watchlist</span>
                  <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center place-items-center p-4'>
                    {[1,2,3,4,5,6,32,3,24,4,4,5,6,87,54,3,2].map(m=>(
                      <div key={m} className='w-[150px] h-[200px] rounded-md'>
                        <img src={PosterImg} className='w-full h-full object-cover rounded-md' alt="" />
                      </div>
                    ))}
                  </div>
                </div>
              )
            }
            {
              active===3 && (
                <div key={3} className='flex flex-col'>
                  <span className='text-2xl text-white text-center'>Reviews</span>
                  <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center place-items-center p-4'>
                      <div className='w-[150px] h-[200px] rounded-md'>
                        <img src={PosterImg} className='w-full h-full object-cover rounded-md' alt="" />
                      </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile