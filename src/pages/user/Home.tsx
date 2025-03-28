import { useEffect, useState } from 'react';
import '../../App.css';
import MovieCard from '../../components/cards/MovieCard';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { checkMovieInWatchlist, fetchAllMovies } from '../../redux/slices/user/movieSlice';
import { useNavigate } from 'react-router-dom';
import IGenre from '../../interfaces/GenreInterface';
import { submitRating } from '../../redux/slices/user/ratingSlice';
import { addToWatchlist, removeFromWatchlist } from '../../redux/slices/user/watchlistSlice';
import banner from '../../assets/images/naruto.jpg'
import LoadingPage from '../../components/LoadingPage';
const HomePage: React.FC = () => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const navigate = useNavigate();
  const dispatch= useAppDispatch();
  const { movies , isInWatchlist, loading} = useAppSelector((state)=>state.movie);
  const [star, setStar] = useState(0);
  useEffect(()=>{
    dispatch(fetchAllMovies());
  },[dispatch, star])

  useEffect(() => {
    if(movies && movies.length>0){
      const lastFiveMovies = movies.slice(-5);

      const interval = setInterval(() => {
        setCurrentMovieIndex((prevIndex) =>
          prevIndex === lastFiveMovies.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [movies]);

  const lastFiveMovies = movies.slice(-5);

  const handleSelectMovie = (index: number) => {
    setCurrentMovieIndex(index);
  };

  const handleViewMovie = (id: string)=>{
    navigate(`/movies/${id}`);
  }
  const handleRate = async (rating: number, id:string) => {
    await dispatch(submitRating({ movieId: id, rating }));
    setStar(rating);
  };
  
  const handleAddToWatchlist = async (id: string) => {
    if(id){
      await dispatch(checkMovieInWatchlist(id));
      if(!isInWatchlist){
        await dispatch(addToWatchlist(id));
      }else{
        await dispatch(removeFromWatchlist(id));
      }
    }
  };
  return (
      <div className="mb-5">
        {loading && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <LoadingPage />
        </div>
      )}
        {/* Slider */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-h-full mb-3">
          {/* Movie Slider */}
          <div  onContextMenu={(e) => e.preventDefault()} className="relative bg-[#2C2C2C] rounded-[36px] shadow-lg w-full mb:w-[957px] ">
              <img
                src={movies && (lastFiveMovies.length>0 ? lastFiveMovies[currentMovieIndex].images?.horizontalPoster:banner)}
                alt={movies && lastFiveMovies.length>0 ? lastFiveMovies[currentMovieIndex].title: ''}
                className="rounded-[36px] w-full h-[364px] object-cover"
              />
              <div className='absolute top-2 md:top-5 left-2 md:left-5 max-w-full flex justify-center items-center text-white bg-transparent rounded-[36px] backdrop-blur-md p-2'>
                <span className="text-white text-xs font-normal font-['Joti One']">New Release</span>
              </div>
              <div className='absolute bottom-0 md:bottom-0 min-w-full h-full rounded-[36px] bg-gradient-to-t from-black to-transparent' />
              <div className="absolute bottom-8 left-2 md:left-5 space-y-4 max-w-full px-4 ">
                <div className='flex gap-1'>
                  <div className='flex justify-center items-center text-white bg-transparent rounded-[36px] backdrop-blur-sm px-2'>
                  {movies && lastFiveMovies.length>0 ?lastFiveMovies[currentMovieIndex].genres?.slice(0,2).map((g : IGenre) => g.genre).join('  '): ''}
                  </div>
                </div>
                <h2 className="text-2xl md:text-4xl font-['Impact'] text-[#fefefe]">
                  {movies && lastFiveMovies.length>0 ? lastFiveMovies[currentMovieIndex].title: ''}
                </h2>
                <p className="text-white text-sm md:text-[13px] font-bold font-['Geologica'] max-w-[90%] max-h-[60px] overflow-hidden md:max-w-[548px]">
                  {movies && lastFiveMovies.length>0 ? lastFiveMovies[currentMovieIndex].description : ''}
                </p>
                <button onClick={()=>navigate(`/movies/${movies && lastFiveMovies.length>0 ? lastFiveMovies[currentMovieIndex]._id:''}`)} className="px-6 py-1 bg-[#fefefe] text-black rounded-[36px] font-['Geologica'] hover:text-[#5cfef0] hover:bg-[#2C2C2C]">
                  View
                </button>
              </div>
          </div>

          {/* Controllers */}
          <div className="flex md:flex-col gap-4 rounded-full bg-[#2C2C2C] items-center justify-center pt-2 pb-2">
            {lastFiveMovies.length>0 ? lastFiveMovies.map((movie, index) => (
              <button
                key={movie._id}
                onClick={() => handleSelectMovie(index)}
                className={`relative flex items-center justify-center rounded-full shadow-lg ${
                  index === currentMovieIndex
                    ? "w-16 h-16 border-white border-2"
                    : "w-12 h-12 border-gray-500 border-1"
                }`}
              >
                <img
                  src={movie ? movie.images?.horizontalPoster : banner}
                  alt={movie.title}
                  className="rounded-full object-cover w-full h-full"
                />
              </button>
            )):(
              [1,2,3,4,5].map(val=>(
              <button
                key={val}
                className={`relative flex items-center justify-center rounded-full shadow-lg w-12 h-12 border-gray-500 border-1`}
              >
                <img
                  src={banner}
                  alt=""
                  className="rounded-full object-cover w-full h-full"
                />
              </button>
              ))
            )}
          </div>
        </div>

        <section  className=" ">
          <div  className="relative mt-10">
        <h2 className="text-xl font-bold mb-4 text-white">New Release</h2>
            <div className="overflow-hidden w-full">
              <div
                className="flex gap-2 overflow-x-auto custom-scrollbar"
              >
                {movies.length>0 && movies.map((movie) => (
                  <MovieCard
                    key={movie._id}
                    id={movie._id}
                    image={movie.images?.poster}
                    title={movie.title}
                    rating={movie.rating}
                    genres={movie.genres.slice(0,2).map((g : IGenre) => g.genre)}
                    onRate={handleRate}
                    onView={handleViewMovie}
                    onAddToWatchlist={handleAddToWatchlist}
                  />
                ))}
                {/* {movies.length>0 && movies.map((movie) => (
                  <MovieCard
                    id={movie._id}
                    image={movie.images?.poster}
                    title={movie.title}
                    rating={movie.rating}
                    genres={movie.genres.map((g : IGenre) => g.genre)}
                    onRate={handleRate}
                    onView={handleViewMovie}
                    onAddToWatchlist={handleAddToWatchlist}
                  />
                ))} */}
              </div>
            </div>
          </div>
        </section>
        <section  className=" ">
        <div  className="relative mt-10">
        <h2 className="text-xl font-bold mb-4 text-white">Recomended for you</h2>
            <div className="overflow-hidden w-full">
              <div
                className="flex gap-2 overflow-x-auto custom-scrollbar"
              >
                {movies.length>0 && movies.map((movie) => (
                  <MovieCard
                    key={movie._id}
                    id={movie._id.toString()}
                    image={movie.images?.poster}
                    title={movie.title}
                    rating={movie.rating}
                    genres={movie.genres.map((g : IGenre) => g.genre)}
                    onRate={handleRate}
                    onView={handleViewMovie}
                    onAddToWatchlist={handleAddToWatchlist}
                  />
                ))}
                {/* {movies.length>0 && movies.map((movie) => (
                  <MovieCard
                    id={movie._id.toString()}
                    image={movie.images?.poster}
                    title={movie.title}
                    rating={movie.rating}
                    genres={movie.genres.map((g : IGenre) => g.genre)}
                    onRate={handleRate}
                    onView={handleViewMovie}
                    onAddToWatchlist={handleAddToWatchlist}
                  />
                ))} */}
              </div>
            </div>
          </div>
        </section>
      </div>      
  );
};  

export default HomePage;
