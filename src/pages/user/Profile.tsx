import BannerImg from '../../assets/images/movie/banner.jpg'
import PosterImg from '../../assets/images/movie/poster.jpg'
import hrj from '../../assets/images/hrjlogo.png'
import editSVG from '../../assets/svg/edit.svg'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import moment from 'moment'
import { getUserInfo } from '../../redux/slices/user/userSlice'
import { fetchWatchlist, removeFromWatchlist } from '../../redux/slices/user/watchlistSlice'

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(1);
  const { user } = useAppSelector((state) => state.user);
  const { movies: watchlistMovies } = useAppSelector((state) => state.watchlist);

  useEffect(() => {
    dispatch(getUserInfo());
    dispatch(fetchWatchlist());
  }, [dispatch]);

  const handleRemoveFromWatchlist = async (id: string) => {
    if (id) await dispatch(removeFromWatchlist(id));
  };

  return (
    <div className="flex flex-col gap-6 sm:pb-8 pb-[100px]">
      {/* Banner Section */}
      <div className="relative h-full bg-[#2c2c2c] pb-5 rounded-[15px]">
        <div className="h-[200px] md:h-[250px] w-full">
          <img
            src={user?.banner || BannerImg}
            className="h-full w-full object-cover rounded-t-[15px]"
            alt=""
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

        {/* Profile Picture */}
        {/* <div className="relative w-full border"> */}
          <div className="absolute top-[28%] left-2 md:left-[10px] w-[190px] h-[190px] md:w-[240px] md:h-[240px]">
            <div className="relative w-full h-full flex justify-center items-center">
              <div className='relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]'>
                {/* Profile Picture Background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black rounded-full" />
                
                {/* Profile Image */}
                <img
                  src={user?.profilePicture || hrj}
                  className="absolute inset-0 w-full h-full rounded-full object-cover border"
                  alt=""
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>

              {/* Animated Frame */}
              <img
                src="https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/images/decorations/snakes_hug.png"
                className="absolute inset-0 w-full h-full object-cover "
                alt=""
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>
        {/* </div> */}

        {/* User Info */}
        <div className="flex justify-between pt-[100px] pb-5 md:pb-10 md:pt-5 pl-5 md:pl-[270px]">
          <div className="flex flex-col space-y-1">
            <span className="text-white text-4xl font-['Goldman']">{user?.name}</span>
            <span className="text-[#e9e9e9] text-base font-['Golos Text']">Since {moment(user?.createdAt).format("MMM-YYYY")}</span>
            <span className="w-[300px] md:w-[433px] text-[#e9e9e9] text-[10px] font-['Geologica']">
              {user?.bio || "I'm a movie lover, I love to watch movies in any language. I love anime too; they have the best stories."}
            </span>
          </div>
          <div className='pr-6 pt-2'>
            <button
              onClick={() => navigate(`/edit-profile`)}
              className="flex items-center py-1.5 px-4 bg-[#46cec2]/80 rounded-[10px]"
            >
              <img src={editSVG} alt="" className='hidden sm:flex'/>
              <span className="text-[#e9e9e9] text-[15px] font-['Geologica']">Edit</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats & Watchlist Section */}
      <div className="flex gap-3">
        {/* Sidebar Buttons */}
        <div className="flex flex-col gap-3">
          {["Ratings", "Watchlist", "Reviews"].map((label, index) => (
            <button
              key={index}
              onClick={() => setActive(index + 1)}
              className={`flex flex-col justify-center items-center w-[261px] h-[143px] bg-[#2c2c2c] rounded-[15px] ${
                active === index + 1 ? "border" : "border-0"
              }`}
            >
              <span className="text-white text-xl font-geologica">{label}</span>
              <span className="text-[#46cec2] text-5xl font-['Geologica']">
                {index === 1 ? watchlistMovies.length.toString().padStart(2, "0") : "08"}
              </span>
            </button>
          ))}
        </div>

        {/* Active Content Section */}
        <div className="bg-[#2c2c2c] rounded-[15px] w-full max-h-[40rem] overflow-auto custom-scrollbar">
          {active === 1 && (
            <div key={1} className="flex flex-col">
              <span className="text-2xl text-white text-center">Ratings</span>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center p-4">
                {[1, 2, 3, 4, 5, 6].map((m) => (
                  <div key={m} className="w-[150px] h-[200px] rounded-md">
                    <img src={PosterImg} className="w-full h-full object-cover rounded-md" alt="" />
                  </div>
                ))}
              </div>
            </div>
          )}
          {active === 2 && (
            <div key={2} className="flex flex-col">
              <span className="text-2xl text-white text-center">Watchlist</span>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center p-4">
                {watchlistMovies.map((movie) => (
                  <div key={movie._id} className="group w-[150px] h-[200px] rounded-md">
                    <img
                      src={movie.movieId.images.poster}
                      onClick={() => navigate(`/movies/${movie.movieId._id}`)}
                      className="w-full h-full object-cover rounded-md cursor-pointer"
                      alt=""
                    />
                    <button
                      onClick={() => handleRemoveFromWatchlist(movie.movieId._id)}
                      className="hidden group-hover:flex justify-center items-center h-10 w-full bg-[#46cec2] text-lg text-black font-semibold rounded-b-md"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          {active === 3 && (
            <div key={3} className="flex flex-col">
              <span className="text-2xl text-white text-center">Reviews</span>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center p-4">
                <div className="w-[150px] h-[200px] rounded-md">
                  <img src={PosterImg} className="w-full h-full object-cover rounded-md" alt="" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
