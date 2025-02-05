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
import { fetchWatchlist, removeFromWatchlist } from '../../redux/slices/user/watchlistSlice'
import MovieCard from '../../components/cards/MovieCard'

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(1);
   const {user} = useAppSelector((state)=>state.user);
   const {movies: watchlistMovies} = useAppSelector((state)=>state.watchlist);
   
   useEffect(()=>{
     dispatch(getUserInfo())
     dispatch(fetchWatchlist());
   },[dispatch])
  
  const handleRemoveFromWatchlist = async (id:string)=>{
    if(id) await dispatch(removeFromWatchlist(id))
  }
  return (
    <>
      <div className='flex flex-col gap-6 sm:pb-8 pb-[100px]'>
        <div className='reletive max-h-screen bg-[#2c2c2c] pb-5 rounded-[15px]'>
          <div className='h-[200px] md:h-[250px] w-full'>
            <img src={user?.banner || BannerImg} className='h-full w-full object-cover rounded-t-[15px]' alt="" onContextMenu={(e) => e.preventDefault()}/>
          </div>
          <div className='flex justify-between py-2 md:py-5'>
            <div className='flex flex-col pl-2 pt-10 md:pt-2 md:pb-5 md:pl-[250px] mt-[80px] md:mt-0 space-y-1'>
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
            <div className='absolute top-[25%] sm:top-[30%] md:top-[40%] ml-2 w-[190px] h-[190px] md:w-[240px] md:h-[240px]'>
              <div className='relative'>
                <div className='absolute top-6 left-6 md:top-5 md:left-5 bg-gradient-to-tr from-black rounded-full w-[150px] h-[150px]  md:w-[200px] md:h-[200px]'/>
                <img src={user?.profilePicture || hrj} className='absolute top-6 left-6 md:top-5 md:left-5 rounded-full object-cover z-6 border w-[150px] h-[150px] md:w-[200px] md:h-[200px]' alt="" onContextMenu={(e) => e.preventDefault()} />
                {/* <img src="https://itspi3141.github.io/discord-fake-avatar-decorations/public/decorations/wizards_staff.png" className='absolute top-0 object-cover md:w-[240px] md:h-[240px]' alt="" onContextMenu={(e) => e.preventDefault()} /> */}
                {/* <img src="https://itspi3141.github.io/discord-fake-avatar-decorations/public/decorations/hood_crimson.png" className='absolute top-0 object-cover w-[190px] h-[190px] md:w-[240px] md:h-[240px]' alt="" onContextMenu={(e) => e.preventDefault()} /> */}
                {/* <img src="https://itspi3141.github.io/discord-fake-avatar-decorations/public/decorations/santa_cat_ears.png" className='absolute top-0 rounded-full object-cover w-[190px] h-[190px] md:w-[240px] md:h-[240px]' alt="" onContextMenu={(e) => e.preventDefault()} /> */}
                {/* <img src="https://itspi3141.github.io/discord-fake-avatar-decorations/public/decorations/sakura_gyoiko.png" className='absolute top-0 object-cover w-[190px] h-[190px] md:w-[240px] md:h-[240px]' alt="" onContextMenu={(e) => e.preventDefault()} /> */}
                {/* <img src="https://itspi3141.github.io/discord-fake-avatar-decorations/public/decorations/lofi_girl_outfit.png" className='absolute top-0 object-cover w-[190px] h-[190px] md:w-[240px] md:h-[240px]' alt="" onContextMenu={(e) => e.preventDefault()} /> */}
                <img src="https://itspi3141.github.io/discord-fake-avatar-decorations/public/decorations/playful_lofi_cat.png" className='absolute top-0 object-cover w-[190px] h-[190px] md:w-[240px] md:h-[240px]' alt="" onContextMenu={(e) => e.preventDefault()} />
              </div>
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
              <span className="text-[#46cec2] text-5xl font-normal font-['Geologica']">{watchlistMovies.length<10?`0${watchlistMovies.length}`:watchlistMovies.length}</span>
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
              active===2 && (
                <div key={2} className='flex flex-col'>
                  <span className='text-2xl text-white text-center'>Watchlist</span>
                  <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center place-items-center p-4'>
                    {watchlistMovies && watchlistMovies.map(movie=>(
                      <div key={movie._id} className='group w-[150px] h-[200px] rounded-md'>
                        <img src={movie.movieId.images.poster} onClick={()=>navigate(`/movies/${movie.movieId._id}`)} className='w-full h-full object-cover rounded-md cursor-pointer' alt="" />
                        <button
                          onClick={()=>handleRemoveFromWatchlist(movie.movieId._id)}
                          className='hidden group-hover:flex justify-center items-center h-10 w-full bg-[#46cec2] text-lg text-black font-semibold rounded-b-md transition-transform duration-150'
                        >
                          Remove
                        </button>
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