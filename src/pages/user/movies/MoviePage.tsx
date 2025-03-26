import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { useNavigate, useParams } from 'react-router-dom';
import { checkMovieInWatchlist, fetchMoviesById } from '../../../redux/slices/user/movieSlice';
import MovieImg from '../../../assets/images/movie/joker.png';
import starFilledSVG from '../../../assets/svg/star filled.svg';
import starOutlineSVG from '../../../assets/svg/star stroke.svg';
import verified from '../../../assets/svg/verified.svg';
import ImgaesSVG from '../../../assets/svg/images.svg';
import VideoSVG from '../../../assets/svg/videos.svg';
import RoundPlusSVG from '../../../assets/svg/rounded-plus.svg';
import rtArrow from '../../../assets/svg/arrow-rt.svg';
import hrj from '../../../assets/images/hrjlogo.png';
import likeSVG from '../../../assets/svg/like.svg';
import dislikeSVG from '../../../assets/svg/dislike.svg';
import likeFillSVG from '../../../assets/svg/like-fill.svg';
import dislikeFillSVG from '../../../assets/svg/dislike-fill.svg';
import IGenre from '../../../interfaces/GenreInterface';
import ILanguage from '../../../interfaces/LanguageInterface';
import { CastMember } from '../../../interfaces/MovieInterface';
import { submitRating } from '../../../redux/slices/user/ratingSlice';
import { addToWatchlist, removeFromWatchlist } from '../../../redux/slices/user/watchlistSlice';
import LoadingPage from '../../../components/LoadingPage';
import ReviewModal from '../../../components/modals/ReviewModal';
import { dislikeReview, fetchReviews, likeReview } from '../../../redux/slices/user/reviewSlice';
import { getUserInfo } from '../../../redux/slices/user/userSlice';
import { RootState } from '../../../redux/store';


const MoviePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {selectedMovie, isInWatchlist, loading, watchlistLoading} = useAppSelector((state)=> state.movie)
  const averageRating = useAppSelector((state) => state.rating.rating);
  const {id} = useParams();
  const [rating, setRating] = useState<number>(averageRating|0);
  const [hover, setHover] = useState<number>(0);
  const [reviewModalOpen, setReviewModalOpen] = useState<boolean>(false);
  const { user } = useAppSelector((state) => state.user);
  const { reviews } = useAppSelector((state: RootState) => state.review || { reviews: [], status: "idle" });

  useEffect(()=>{
    if(id){
      dispatch(fetchMoviesById(id))
      dispatch(checkMovieInWatchlist(id))
      dispatch(fetchReviews(id));
      dispatch(getUserInfo());
    }
  },[ rating, id, dispatch])

  const genres = selectedMovie?.genres.slice(0,3).map((g : IGenre) => g.genre);
  const languages = selectedMovie?.languages.map((l : ILanguage) => l.language).join(', ');
  const director = selectedMovie?.cast.filter(c => c.role === 'Director');
  const castMembers = selectedMovie?.cast.filter(c=> c.role !== 'Director');
  const movieId = selectedMovie?._id || '';

  const handleRating = async (star: number) => {
    await dispatch(submitRating({ movieId , rating: star }));
    setRating(star);
  };

  const handleCelebrity = (cast:CastMember)=>{
    if(cast.celebrityId!==''){
      navigate(`/celebrity/${cast._id}`)
    }
  }
  const handleWatchlist = async()=>{
    if(id){
      if(!isInWatchlist){
        await dispatch(addToWatchlist(id));
      }else{
        await dispatch(removeFromWatchlist(id));
      }
      await dispatch(checkMovieInWatchlist(id));
    }
  }
  
  const topReview = reviews.length
  ? [...reviews].sort((a, b) => b.likes.length - a.likes.length)[0]
  : null;
  const handleLike = (reviewId: string) => {
    dispatch(likeReview({ reviewId }));
  };

  const handleDislike = (reviewId: string) => {
    dispatch(dislikeReview({ reviewId }));
  };

  return (
    <>
      <div className='flex flex-col mb-10'>
      {loading && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <LoadingPage />
        </div>
      )}
        <div className='mt-2 mb-4 flex flex-col gap-1'>
          <span className="text-white text-5xl font-bold font-['Gelasio']">{selectedMovie && selectedMovie.title}</span>
          <div className="text-[#46cec2] text-lg font-bold font-['Gelasio']">{selectedMovie && selectedMovie.releaseDate}</div>
        </div>
        <div className='flex flex-col lg:flex-row gap-12 mb-3'>
          <div className='lg:w-[80%] lg:h-[359px] bg-black rounded-[15px] shadow-2xl'>
            <img src={(selectedMovie && selectedMovie.images?.horizontalPoster) ?? MovieImg} className='w-full h-full object-cover rounded-[15px]' alt="" />
          </div>
          <div className='flex lg:flex-col flex-row justify-between'>
            <div className='hidden lg:flex flex-col items-center p-2 w-[181px] h-[65px] bg-[#2c2c2c] shadow-2xl rounded-[15px]'>
              <span className="text-white text-sm font-bold font-['Instrument Sans']">RATING</span>
              <div className='flex'>
                <img src={starFilledSVG} className='mr-2 w-7' alt="" />
                <span className="text-white text-2xl font-bold font-['Instrument Sans']">{selectedMovie?.rating.toFixed(1) || 0}</span>
                <span className="text-white/70 text-2xl font-bold font-['Instrument Sans']">/5</span>
              </div>
            </div>
            <div onClick={()=>navigate(`/movies/images/${id}`)} className='hidden lg:flex flex-col justify-center items-center gap-1 w-[181px] h-[137px] bg-[#2c2c2c] shadow-2xl rounded-[15px] cursor-pointer'>
              <img src={ImgaesSVG} className='w-14' alt="" />
              <span className="text-white text-lg font-normal font-mono">{selectedMovie && selectedMovie.images.other.length+2} IMAGES</span>
            </div>
            <div onClick={()=>navigate(`/movies/videos/${id}`)} className='hidden lg:flex flex-col justify-center items-center gap-1 w-[181px] h-[137px] bg-[#2c2c2c] shadow-2xl rounded-[15px] cursor-pointer'>
              <img src={VideoSVG} className='w-14' alt="" />
              <span className="text-white text-lg font-normal font-mono">{selectedMovie && selectedMovie.videos.others.length+1} VIDEOS</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='lg:w-[79%] max-h-[150px] overflow-hidden'>
              <span className="text-gray-300 text-xl font-bold">{selectedMovie?.description}</span>
          </div>
          <div className='flex gap-2'>
            {
              genres && genres.map((g, index)=>(
                <div key={index} className='px-4 py-1 flex justify-center items-center bg-[#2c2c2c] rounded-[36px]'>
                  <span className="text-[#46cec2] text-lg font-normal font-['Fredoka']">{g}</span>
                </div>
              ))
            }
          </div>
          <div className='flex justify-between lg:w-[80%]'>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <img
                  key={star}
                  src={star <= (hover || rating) ? starFilledSVG : starOutlineSVG}
                  alt={`Star ${star}`}
                  className="w-8 h-8 cursor-pointer transition-transform transform hover:scale-110"
                  onClick={() => handleRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                />
              ))}
            </div>
            <button onClick={handleWatchlist} className="flex justify-center items-center gap-2 p-1  h-[45px] bg-[#46cec2]/80 rounded-[15px]">
              <img src={RoundPlusSVG} alt="" />
              <div className="text-[#e9e9e9] text-[15px] font-normal font-['Geologica']">{watchlistLoading ? 'Loading':(isInWatchlist?'Remove from watchlist':'Add to watchlist')}</div>
            </button>
          </div>
          <hr className='lg:w-[80%] mx-4 opacity-20'/>
          <div className='mt-4 flex flex-col gap-3'>
            <div className='flex gap-6'>
              <span className="text-white text-2xl font-bold font-['Geologica']">Director</span>
              <span className="text-[#46cec2] text-xl font-normal font-['Geologica']">{director?.[0].name}</span>
            </div>
            <div className='flex gap-6'>
              <span className="text-white text-2xl font-bold font-['Geologica']">Languages</span>
              <span className="text-[#46cec2] text-xl font-normal font-['Geologica']">{languages}</span>
            </div>
          </div>
          <hr className='lg:w-[80%] mx-4 opacity-20'/>
          <div className='lg:w-[80%] flex flex-col gap-4'>
            <div className='flex justify-between'>
              <div className='flex gap-2 cursor-pointer'>
                <img src={rtArrow} alt="" />
                <span className="text-white text-4xl font-normal font-['Geologica']">Top Cast</span>
              </div>
            </div>
            <div className='flex space-x-5'>
              {castMembers?.slice(0,4).map((cast)=>(
                <div key={cast._id} className='flex flex-col justify-center items-center gap-1'>
                  <div className='relative'>
                    <img onClick={()=>handleCelebrity(cast)} src={cast.profilePicture} className={`border w-14 h-14 lg:w-20 lg:h-20 rounded-full ${cast.celebrityId!==''? 'border-[#5cfef0] cursor-pointer':''}`} alt="" />
                    {cast.celebrityId!==''&&(
                      <img src={verified} className='absolute top-1 right-1' alt="" />
                    )}
                  </div>
                  <span className="text-white text-sm font-normal font-['Geologica']">{cast.name}</span>
                  <span className="text-white text-sm font-normal font-['Geologica']">{cast.role}</span>
                </div>
              ))}
              <div className='flex flex-col items-center gap-1'>
                <button className="flex justify-center items-center border w-14 h-14 lg:w-20 lg:h-20 rounded-full text-white text-[15px] font-normal font-['Geologica']">More</button>
              </div>
            </div>
          </div>
          <div className='lg:hidden flex flex-col gap-4'>
            <div className='flex justify-between'>
              <div className='flex gap-2 cursor-pointer'>
                <img src={rtArrow} alt="" />
                <span className="text-white text-4xl font-normal font-['Geologica']">Images & Videos</span>
              </div>
            </div>
            <div className='flex justify-evenly px-3'>
              <div onClick={()=>navigate(`/movies/images/${id}`)} className='lg:hidden flex flex-col justify-center items-center gap-1 w-[181px] h-[137px] bg-[#2c2c2c] shadow-2xl rounded-[15px] cursor-pointer'>
                  <img src={ImgaesSVG} className='w-14' alt="" />
                  <span className="text-white text-lg font-normal font-mono">26 IMAGES</span>
              </div>
              <div onClick={()=>navigate(`/movies/videos/${id}`)} className='lg:hidden flex flex-col justify-center items-center gap-1 w-[181px] h-[137px] bg-[#2c2c2c] shadow-2xl rounded-[15px] cursor-pointer'>
                <img src={VideoSVG} className='w-14' alt="" />
                <span className="text-white text-lg font-normal font-mono">26 VIDEOS</span>
              </div>
            </div>
          </div>
          <div className='mt-4 lg:w-[80%] flex flex-col gap-5'>
            <div className='flex justify-between'>
              <div className='flex gap-2 cursor-pointer'>
                <img src={rtArrow} alt="" />
                <span className="text-white text-4xl font-normal font-['Geologica']">Reviews</span>
              </div>
              <button onClick={()=>setReviewModalOpen(true)} className="flex justify-center items-center gap-2 bg-[#46cec2]/80 rounded-[15px] px-3">
                <img src={RoundPlusSVG} alt="" />
                <span className=" text-[#e9e9e9] text-[15px] font-normal font-['Geologica']">Review</span>
              </button>

              {
                reviewModalOpen && <ReviewModal movieId={id!} onClose={()=>setReviewModalOpen(false)} />
              }
            </div>
            {
              reviews && topReview ?(
                <div className='flex flex-col justify-between border min-h-[20rem] max-h-[30rem] shadow-2xl rounded-[15px]'>
                  <div className='max-h-[26rem] overflow-auto custom-scrollbar pb-3'>
                    <div className='pt-5 pl-7 flex items-center gap-3'>
                      <img src={topReview.user?.profilePicture || hrj} className='border rounded-full w-12 h-12' alt="" />
                      <span className="text-white text-xl font-normal font-['Geologica']">{topReview.user.name}</span>
                    </div>
                    <div className='pt-4 px-14'>
                      <div className='flex gap-4'>
                        <img src={rtArrow} className='w-3' alt="" />
                        <span className="text-[#e9e9e9] text-xl font-bold font-['Geologica']">{topReview.title}</span>
                      </div>
                      <div className='mt-3'>
                        <span className="text-white text-[15px] font-normal font-['Geologica']">{topReview.content}</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-between items-center bg-[#2c2c2c] w-full h-[4rem] rounded-b-[15px] px-4'>
                    <div className='flex h-full gap-6 items-center'>
                    <button onClick={() => handleLike(topReview._id)} className='flex gap-2 items-center'>
                      {topReview.likes.includes(user?._id!)?(
                        <img src={likeFillSVG} alt="" />
                      ):(
                        <img src={likeSVG} alt="" />
                      )}
                      <span className='text-[#46cec2]'>{topReview.likes.length}</span>
                    </button>
                    <button onClick={() => handleDislike(topReview._id)} className='flex gap-2 items-center'>
                    {topReview.dislikes.includes(user?._id!)?(
                        <img src={dislikeFillSVG} alt="" />
                      ):(
                        <img src={dislikeSVG} alt="" />
                      )}
                      <span className='text-[#46cec2]'>{topReview.dislikes.length}</span>
                    </button>
                  </div>
                  <button onClick={()=>navigate(`/movies/reviews/${id}`)} className='flex flex-col justify-center h-[65%] items-center bg-[#46cec2]/80 rounded-[15px] px-3'>
                  <span className='text-[#e9e9e9]'>View More</span>
                </button>
                </div>
              </div>
              ):(
                <p>No reviews yet, add one</p>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default MoviePage