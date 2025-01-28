import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { useNavigate, useParams } from 'react-router-dom';
import { fetchMoviesById } from '../../../redux/slices/user/movieSlice';
import MovieImg from '../../../assets/images/movie/joker.png';
import starFilledSVG from '../../../assets/svg/star filled.svg';
import starOutlineSVG from '../../../assets/svg/star stroke.svg';
import ImgaesSVG from '../../../assets/svg/images.svg';
import VideoSVG from '../../../assets/svg/videos.svg';
import RoundPlusSVG from '../../../assets/svg/rounded-plus.svg';
import rtArrow from '../../../assets/svg/arrow-rt.svg';
import hrj from '../../../assets/images/hrjlogo.png';
import likeSVG from '../../../assets/svg/like.svg';
import dislikeSVG from '../../../assets/svg/dislike.svg';


const MoviePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {selectedMovie} = useAppSelector((state)=> state.movie)
  const {id} = useParams();
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  useEffect(()=>{
    if(id) dispatch(fetchMoviesById(id))
  },[dispatch])

  return (
    <>
      <div className='flex flex-col mb-10'>
        <div className='mt-2 mb-4 flex flex-col gap-1'>
          <span className="text-white text-5xl font-bold font-['Gelasio']">Joker</span>
          <div className="text-[#46cec2] text-lg font-bold font-['Gelasio']">2025-01-22</div>
        </div>
        <div className='flex flex-col lg:flex-row gap-12 mb-3'>
          <div className='lg:w-[80%] lg:h-[359px] bg-black rounded-[15px] shadow-2xl'>
            <img src={MovieImg} className='w-full h-full object-cover rounded-[15px]' alt="" />
          </div>
          <div className='flex lg:flex-col flex-row justify-between'>
            <div className='hidden lg:flex flex-col items-center p-2 w-[181px] h-[65px] bg-[#2c2c2c] shadow-2xl rounded-[15px]'>
              <span className="text-white text-sm font-bold font-['Instrument Sans']">RATING</span>
              <div className='flex'>
                <img src={starFilledSVG} className='mr-2 w-7' alt="" />
                <span className="text-white text-2xl font-bold font-['Instrument Sans']">5.3</span>
                <span className="text-white/70 text-2xl font-bold font-['Instrument Sans']">/10</span>
              </div>
            </div>
            <div onClick={()=>navigate(`/movies/images/${id}`)} className='hidden lg:flex flex-col justify-center items-center gap-1 w-[181px] h-[137px] bg-[#2c2c2c] shadow-2xl rounded-[15px] cursor-pointer'>
              <img src={ImgaesSVG} className='w-14' alt="" />
              <span className="text-white text-lg font-normal font-mono">26 IMAGES</span>
            </div>
            <div onClick={()=>navigate(`/movies/videos/${id}`)} className='hidden lg:flex flex-col justify-center items-center gap-1 w-[181px] h-[137px] bg-[#2c2c2c] shadow-2xl rounded-[15px] cursor-pointer'>
              <img src={VideoSVG} className='w-14' alt="" />
              <span className="text-white text-lg font-normal font-mono">26 VIDEOS</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='lg:w-[79%] max-h-[150px] overflow-hidden'>
              <span className="text-gray-300 text-xl font-bold">Struggling with his dual identity, failed comedian Arthur Fleck meets the love of his life, Harley Quinn, while incarcerated at Arkham State Hospital.</span>
          </div>
          <div className='flex gap-2'>
            <div className='px-4 py-1 flex justify-center items-center bg-[#2c2c2c] rounded-[36px]'>
              <span className="text-[#46cec2] text-lg font-normal font-['Fredoka']">Action</span>
            </div>
            <div className='px-4 py-1 flex justify-center items-center bg-[#2c2c2c] rounded-[36px]'>
              <span className="text-[#46cec2] text-lg font-normal font-['Fredoka']">Advanture</span>
            </div>
            <div className='px-4 py-1 flex justify-center items-center bg-[#2c2c2c] rounded-[36px]'>
              <span className="text-[#46cec2] text-lg font-normal font-['Fredoka']">Mystery</span>
            </div>
          </div>
          <div className='flex justify-between lg:w-[80%]'>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <img
                  key={star}
                  src={star <= (hover || rating) ? starFilledSVG : starOutlineSVG}
                  alt={`Star ${star}`}
                  className="w-8 h-8 cursor-pointer transition-transform transform hover:scale-110"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                />
              ))}
            </div>
            <button className="flex justify-center items-center gap-2 p-1 w-[177px] h-[45px] bg-[#46cec2]/80 rounded-[15px]">
              <img src={RoundPlusSVG} alt="" />
              <div className="text-[#e9e9e9] text-[15px] font-normal font-['Geologica']">Add to watchlist</div>
            </button>
          </div>
          <hr className='lg:w-[80%] mx-4 opacity-20'/>
          <div className='mt-4 flex gap-6'>
            <span className="text-white text-2xl font-bold font-['Geologica']">Director</span>
            <span className="text-[#46cec2] text-xl font-normal font-['Geologica']">Todd Philips</span>
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
              {[1,2,3,4,5].map((cast)=>(
                <div key={cast} className='flex flex-col justify-center items-center gap-1'>
                  <img src={hrj} className='border w-14 h-14 lg:w-20 lg:h-20 rounded-full' alt="" />
                  <span className="text-white text-sm font-normal font-['Geologica']">hrithic raj</span>
                  <span className="text-white text-sm font-normal font-['Geologica']">michel jackson</span>
                </div>
              ))}
              <div className='flex flex-col items-center gap-1'>
                <button className="flex justify-center items-center border w-14 h-14 lg:w-20 lg:h-20 rounded-full text-white text-[15px] font-normal font-['Geologica']">More</button>
              </div>
            </div>
          </div>
          <div className='mt-4 lg:w-[80%] flex flex-col gap-5'>
            <div className='flex justify-between'>
              <div className='flex gap-2 cursor-pointer'>
                <img src={rtArrow} alt="" />
                <span className="text-white text-4xl font-normal font-['Geologica']">Reviews</span>
              </div>
              <button className="flex justify-center items-center gap-2 bg-[#46cec2]/80 rounded-[15px] px-3">
                <img src={RoundPlusSVG} alt="" />
                <span className=" text-[#e9e9e9] text-[15px] font-normal font-['Geologica']">Review</span>
              </button>
            </div>
            <div className='flex flex-col justify-between border min-h-[20rem] max-h-[30rem] shadow-2xl rounded-[15px]'>
              <div className='max-h-[26rem] overflow-auto custom-scrollbar pb-3'>
                <div className='pt-5 pl-7 flex items-center gap-3'>
                  <img src={hrj} className='border rounded-full w-12 h-12' alt="" />
                  <span className="text-white text-xl font-normal font-['Geologica']">Hrithic raj</span>
                </div>
                <div className='pt-4 px-14'>
                  <div className='flex gap-4'>
                    <img src={rtArrow} className='w-3' alt="" />
                    <span className="text-[#e9e9e9] text-xl font-bold font-['Geologica']">Highly Disappointing</span>
                  </div>
                  <div className='mt-3'>
                    <span className="text-white text-[15px] font-normal font-['Geologica']">
                    I absolutely loved the first Joker movie directed by Todd Phillips, but I have to say, what the hell were they thinking when they decided to go into the sequel. Unlike the first film, this movie has practically no story, but rather a series of strange delusional vignettes that were thrown together along with musical numbers that got old very fast and made the run time way longer than needed for how unentertaining it actually was. Joaquin Phoenix delivers a decent performance, but it's nowhere near as good as he was in the first film. I kept waiting in anticipation thinking this must be building towards some big moment that unfortunately never arrives, and instead was left with nothing but disappointment as the movie ends on a worse note than it began.I was on the fence when I watched the trailer, but now having seen it I kind of wish I wouldn't have. If you're a fan of the first movie, it's a pretty big toss up whether you'll like this one or not, but I wouldn't recommend it.
                    </span>
                    <span className="text-white text-[15px] font-normal font-['Geologica']">
                    I absolutely loved the first Joker movie directed by Todd Phillips, but I have to say, what the hell were they thinking when they decided to go into the sequel. Unlike the first film, this movie has practically no story, but rather a series of strange delusional vignettes that were thrown together along with musical numbers that got old very fast and made the run time way longer than needed for how unentertaining it actually was. Joaquin Phoenix delivers a decent performance, but it's nowhere near as good as he was in the first film. I kept waiting in anticipation thinking this must be building towards some big moment that unfortunately never arrives, and instead was left with nothing but disappointment as the movie ends on a worse note than it began.I was on the fence when I watched the trailer, but now having seen it I kind of wish I wouldn't have. If you're a fan of the first movie, it's a pretty big toss up whether you'll like this one or not, but I wouldn't recommend it.
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex justify-between items-center bg-[#2c2c2c] w-full h-[4rem] rounded-b-[15px] px-4'>
                <div className='flex h-full gap-6 items-center'>
                  <button className='flex gap-2 items-center'>
                    <img src={likeSVG} alt="" />
                    <span className='text-[#46cec2]'>34K</span>
                  </button>
                  <button className='flex gap-2 items-center'>
                    <img src={dislikeSVG} alt="" />
                    <span className='text-[#46cec2]'>5K</span>
                  </button>
                </div>
                <button className='flex flex-col justify-center h-[65%] items-center bg-[#46cec2]/80 rounded-[15px] px-3'>
                  <span className='text-[#e9e9e9]'>View More</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>




    
        {/* <div>
          <div className="mt-[200px] w-[807px] h-[359px] relative">
      <img className="w-[807px] h-[359px] left-0 top-0 absolute rounded-[15px]" src="https://via.placeholder.com/807x359" />
      <div className="w-[807px] h-[359px] left-[807px] top-0 absolute origin-top-left rotate-180 bg-gradient-to-b from-[#030303] to-[#030303] rounded-[15px]" />
      <div className="w-[61px] h-6 left-[715px] top-[304px] absolute">
        <div className="w-6 h-6 left-0 top-0 absolute">
          <div className="w-6 h-6 left-0 top-0 absolute opacity-60 bg-[#b3b3b3] rounded-full" />
        </div>
        <div className="origin-top-left rotate-180 opacity-30 w-6 h-6 left-[61px] top-0 absolute">
          <div className="w-6 h-6 left-0 top-0 absolute origin-top-left rotate-180 opacity-50 bg-[#b3b3b3] rounded-full" />
        </div>
      </div>
      <div className="w-[90px] h-[15px] left-[359px] top-[331px] absolute">
        <div className="w-[9.31px] h-[9.31px] left-0 top-[3px] absolute bg-[#d9d9d9]/70 rounded-full" />
        <div className="w-[15px] h-[15px] left-[17px] top-0 absolute bg-[#5cfef0] rounded-full" />
        <div className="w-[9.31px] h-[9.31px] left-[40.34px] top-[3px] absolute bg-[#d9d9d9]/70 rounded-full" />
        <div className="w-[9.31px] h-[9.31px] left-[60.52px] top-[3px] absolute bg-[#d9d9d9]/70 rounded-full" />
        <div className="w-[9.31px] h-[9.31px] left-[80.69px] top-[3px] absolute bg-[#d9d9d9]/70 rounded-full" />
      </div>
    </div>
    <div className="w-[181px] h-[359px] relative">
      <div className="w-[181px] h-[65px] left-0 top-0 absolute">
        <div className="w-[181px] h-[65px] left-0 top-0 absolute bg-[#2c2c2c] rounded-[15px]" />
        <div className="left-[76px] top-[29px] absolute"><span className="text-white text-2xl font-bold font-['Instrument Sans']">5.3</span><span className="text-white/70 text-2xl font-bold font-['Instrument Sans']">/10</span></div>
        <div className="left-[65px] top-[8px] absolute text-white text-sm font-bold font-['Instrument Sans']">RATING</div>
      </div>
      <div className="w-[181px] h-[137px] left-0 top-[222px] absolute">
        <div className="w-[181px] h-[137px] left-0 top-0 absolute bg-[#2c2c2c] rounded-[15px]" />
        <div className="w-[47px] h-[47px] left-[67px] top-[30px] absolute  overflow-hidden" />
        <div className="w-[63px] left-[59px] top-[87px] absolute text-white text-xs font-normal font-['Inter']">26 VIDEOS</div>
      </div>
      <div className="w-[181px] h-[137px] left-0 top-[75px] absolute">
        <div className="w-[181px] h-[137px] left-0 top-0 absolute bg-[#2c2c2c] rounded-[15px]" />
        <div className="w-[47px] h-[47px] left-[67px] top-[30px] absolute  overflow-hidden" />
        <div className="left-[59px] top-[87px] absolute text-white text-xs font-normal font-['Inter']">26 IMAGES</div>
      </div>
    </div>
    <div className="text-white text-5xl font-bold font-['Gelasio']">Joker</div>
    <div className="text-[#46cec2] text-xl font-bold font-['Gelasio']">2024</div>
    <div className="w-[796px] text-white text-xl font-bold font-['Inter']">Struggling with his dual identity, failed comedian Arthur Fleck meets the love of his life, Harley Quinn, while incarcerated at Arkham State Hospital.</div>
    <div className="w-[198px] h-6 relative">
      <div className="w-[54.74px] h-[23.94px] left-0 top-0 absolute">
        <div className="w-[54.74px] h-[23.94px] left-0 top-0 absolute bg-[#2c2c2c] rounded-[36px]" />
        <div className="w-[31.90px] h-[14.15px] left-[11.03px] top-[3.97px] absolute text-[#46cec2] text-[11px] font-normal font-['Fredoka']">Action</div>
      </div>
      <div className="w-[57px] h-6 left-[69px] top-0 absolute">
        <div className="w-[57px] h-6 left-0 top-0 absolute bg-[#2c2c2c] rounded-[36px]" />
        <div className="left-[11.03px] top-[3.98px] absolute text-[#46cec2] text-[11px] font-normal font-['Fredoka']">Drama</div>
      </div>
      <div className="w-[60px] h-6 left-[138px] top-0 absolute">
        <div className="w-[60px] h-6 left-0 top-0 absolute bg-[#2c2c2c] rounded-[36px]" />
        <div className="left-[11.03px] top-[3.97px] absolute text-[#46cec2] text-[11px] font-normal font-['Fredoka']">Thriller</div>
      </div>
    </div>
    <div className="w-[205px] h-[29px] relative" />
    <div className="w-[812px] h-[125px] relative">
      <div className="w-[807px] h-[0px] left-0 top-0 absolute border border-[#2c2c2c]"></div>
      <div className="w-[807px] h-[0px] left-[5px] top-[125px] absolute border border-[#2c2c2c]"></div>
      <div className="w-[243px] h-[30px] left-[6px] top-[20px] absolute">
        <div className="left-0 top-0 absolute text-white text-2xl font-bold font-['Geologica']">Director</div>
        <div className="left-[126px] top-0 absolute text-[#46cec2] text-xl font-normal font-['Geologica']">Todd Philips</div>
      </div>
      <div className="w-[470px] h-[30px] left-[6px] top-[70px] absolute">
        <div className="left-0 top-0 absolute text-white text-2xl font-bold font-['Geologica']">Writers</div>
        <div className="left-[126px] top-0 absolute text-[#46cec2] text-xl font-normal font-['Geologica']">Scott Silver,</div>
        <div className="left-[246px] top-0 absolute text-[#46cec2] text-xl font-normal font-['Geologica']">Todd Phillips,</div>
        <div className="left-[378px] top-0 absolute text-[#46cec2] text-xl font-normal font-['Geologica']">Bob Kane</div>
      </div>
    </div>
    <div className="w-[177px] h-[39px] relative">
      <div className="w-[177px] h-[39px] left-0 top-0 absolute bg-[#46cec2]/80 rounded-[15px]" />
      <div className="w-[118px] left-[48px] top-[8px] absolute text-[#e9e9e9] text-[15px] font-normal font-['Geologica']">Add to watchlist</div>
      <div className="w-6 h-6 left-[16px] top-[7px] absolute  overflow-hidden" />
    </div>
    <div className="w-[807px] h-[488px] relative">
      <div className="w-[111px] h-[39px] left-[682px] top-[24px] absolute">
        <div className="w-[111px] h-[39px] left-0 top-0 absolute bg-[#46cec2]/80 rounded-[15px]" />
        <div className="left-[46px] top-[9px] absolute text-[#e9e9e9] text-[15px] font-normal font-['Geologica']">Review</div>
        <div className="w-6 h-6 left-[14px] top-[8px] absolute  overflow-hidden" />
      </div>
      <div className="w-[222px] h-[45px] left-[2px] top-0 absolute">
        <div className="left-[36px] top-0 absolute text-white text-4xl font-normal font-['Geologica']">Reviews</div>
        <div className="left-[186px] top-[19px] absolute text-white/50 text-[10px] font-normal font-['Geologica']">2.5k</div>
      </div>
      <div className="w-[807px] h-[403px] left-0 top-[85px] absolute">
        <div className="w-[731px] h-[353px] left-[30px] top-[18px] absolute">
          <div className="w-[233px] h-[25px] left-[22px] top-[73px] absolute">
            <div className="left-0 top-0 absolute text-[#e9e9e9] text-xl font-bold font-['Geologica']">Highly disappointing</div>
          </div>
          <div className="w-40 h-[50px] left-0 top-0 absolute">
            <img className="w-[50px] h-[50px] left-0 top-0 absolute rounded-full border border-white" src="https://via.placeholder.com/50x50" />
            <div className="w-[95px] left-[65px] top-[12px] absolute text-white text-xl font-normal font-['Geologica']">Hrithic raj</div>
          </div>
          <div className="w-[709px] left-[22px] top-[125px] absolute text-white text-[15px] font-normal font-['Geologica']">I absolutely loved the first Joker movie directed by Todd Phillips, but I have to say, what the hell were they thinking when they decided to go into the sequel. Unlike the first film, this movie has practically no story, but rather a series of strange delusional vignettes that were thrown together along with musical numbers that got old very fast and made the run time way longer than needed for how unentertaining it actually was. Joaquin Phoenix delivers a decent performance, but it's nowhere near as good as he was in the first film. I kept waiting in anticipation thinking this must be building towards some big moment that unfortunately never arrives, and instead was left with nothing but disappointment as the movie ends on a worse note than it began.      I was on the fence when I watched the trailer, but now having seen it I kind of wish I wouldn't have. If you're a fan of the first movie, it's a pretty big toss up whether you'll like this one or not, but I wouldn't recommend it.</div>
        </div>
        <div className="w-[807px] h-[62px] left-0 top-[341px] absolute">
          <div className="w-[807px] h-[62px] left-0 top-0 absolute bg-[#2c2c2c] rounded-bl-[15px] rounded-br-[15px] border-l border-r border-b border-[#e9e9e9]" />
          <div className="w-[126px] h-6 left-[40px] top-[19px] absolute">
            <div className="w-14 h-6 left-0 top-0 absolute">
              <div className="w-6 h-6 left-0 top-0 absolute  overflow-hidden" />
              <div className="left-[29px] top-[2px] absolute text-[#46cec2] text-[15px] font-normal font-['Geologica']">34k</div>
            </div>
            <div className="w-[47px] h-6 left-[79px] top-0 absolute">
              <div className="w-6 h-6 left-[24px] top-[24px] absolute origin-top-left -rotate-180  overflow-hidden" />
              <div className="left-[29px] top-[2px] absolute text-[#46cec2] text-[15px] font-normal font-['Geologica']">5k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-[212px] h-[45px] relative">
      <div className="left-[36px] top-0 absolute text-white text-4xl font-normal font-['Geologica']">Top Cast</div>
    </div>
    <div className="w-[807px] h-[488px] relative">
      <div className="w-[275px] h-[45px] left-[2px] top-0 absolute">
        <div className="left-[36px] top-0 absolute text-white text-4xl font-normal font-['Geologica']">Comments</div>
        <div className="left-[234px] top-[19px] absolute text-white/50 text-[10px] font-normal font-['Geologica']">13.5k</div>
      </div>
      <div className="w-[807px] h-[403px] left-0 top-[85px] absolute">
        <div className="w-[683.41px] h-[213px] left-[30px] top-[25px] absolute">
          <div className="w-[632.41px] h-[41px] left-0 top-0 absolute">
            <img className="w-[39px] h-[39px] left-0 top-0 absolute rounded-full border border-white" src="https://via.placeholder.com/39x39" />
            <div className="left-[53px] top-[25px] absolute text-white/70 text-[13px] font-normal font-['Geologica']">11 Like</div>
            <div className="left-[102px] top-[25px] absolute text-white/70 text-[13px] font-normal font-['Geologica']">Reply</div>
            <div className="w-[95px] left-[51px] top-0 absolute text-[#46cec2] text-xl font-normal font-['Geologica']">Hrithic raj</div>
            <div className="w-[432px] left-[165px] top-[6px] absolute text-white/80 text-[15px] font-normal font-['Geologica']">Where can I watch it?</div>
          </div>
          <div className="w-[632.41px] h-[41px] left-[51px] top-[70px] absolute">
            <img className="w-[39px] h-[39px] left-0 top-0 absolute rounded-full border border-white" src="https://via.placeholder.com/39x39" />
            <div className="left-[53px] top-[25px] absolute text-white/70 text-[13px] font-normal font-['Geologica']">8 Like</div>
            <div className="left-[102px] top-[25px] absolute text-white/70 text-[13px] font-normal font-['Geologica']">Reply</div>
            <div className="w-[95px] left-[51px] top-0 absolute text-[#46cec2] text-xl font-normal font-['Geologica']">Abhay Pc</div>
            <div className="w-[427px] left-[165px] top-[6px] absolute text-white/80 text-[15px] font-normal font-['Geologica']">Use Netflix</div>
          </div>
          <div className="w-[632.41px] h-[92px] left-[51px] top-[121px] absolute">
            <img className="w-[39px] h-[39px] left-0 top-[51px] absolute rounded-full border border-white" src="https://via.placeholder.com/39x39" />
            <div className="left-[53px] top-[76px] absolute text-white/70 text-[13px] font-normal font-['Geologica']">8 Like</div>
            <div className="left-[102px] top-[76px] absolute text-white/70 text-[13px] font-normal font-['Geologica']">Reply</div>
            <div className="w-[95px] left-[51px] top-[51px] absolute text-[#46cec2] text-xl font-normal font-['Geologica']">Vishnu</div>
            <div className="w-[632.41px] h-[41px] left-0 top-0 absolute">
              <img className="w-[39px] h-[39px] left-0 top-0 absolute rounded-full border border-white" src="https://via.placeholder.com/39x39" />
              <div className="left-[53px] top-[25px] absolute text-white/70 text-[13px] font-normal font-['Geologica']">8 Like</div>
              <div className="left-[102px] top-[25px] absolute text-white/70 text-[13px] font-normal font-['Geologica']">Reply</div>
              <div className="w-[95px] left-[51px] top-0 absolute text-[#46cec2] text-xl font-normal font-['Geologica']">Vishnu</div>
              <div className="w-[427px] left-[165px] top-[6px] absolute text-white/80 text-[15px] font-normal font-['Geologica']">I think amazon prime also streaming joker</div>
            </div>
            <div className="w-[427px] left-[165px] top-[57px] absolute text-white/80 text-[15px] font-normal font-['Geologica']">Thank you guys</div>
          </div>
          <div className="w-[87px] h-[15px] left-[51px] top-[48px] absolute">
            <div className="w-[69px] left-[18px] top-0 absolute text-white/70 text-xs font-normal font-['Geologica']">Hide replies</div>
            <div className="w-3 h-[0px] left-0 top-[9px] absolute border border-white/70"></div>
          </div>
        </div>
        <div className="w-[632.41px] h-[62px] left-[30px] top-[255px] absolute">
          <img className="w-[39px] h-[39px] left-0 top-0 absolute rounded-full border border-white" src="https://via.placeholder.com/39x39" />
          <div className="left-[53px] top-[25px] absolute text-white/70 text-[13px] font-normal font-['Geologica']">11 Like</div>
          <div className="left-[102px] top-[25px] absolute text-white/70 text-[13px] font-normal font-['Geologica']">Reply</div>
          <div className="w-[95px] left-[51px] top-0 absolute text-[#46cec2] text-xl font-normal font-['Geologica']">Hrithic raj</div>
          <div className="w-[432px] left-[165px] top-[6px] absolute text-white/80 text-[15px] font-normal font-['Geologica']">Where can I watch it?</div>
          <div className="w-[103px] h-[15px] left-[51px] top-[47px] absolute">
            <div className="left-[18px] top-0 absolute text-white/70 text-xs font-normal font-['Geologica']">View replies(2)</div>
            <div className="w-3 h-[0px] left-0 top-[9px] absolute border border-white/70"></div>
          </div>
        </div>
        <div className="w-[807px] h-[62px] left-0 top-[336px] absolute">
          <div className="w-[807px] h-[62px] left-0 top-0 absolute bg-[#2c2c2c] rounded-bl-[15px] rounded-br-[15px] border-l border-r border-b border-[#e9e9e9]" />
          <div className="w-[342px] h-[35px] left-[62px] top-[13px] absolute rounded border-b border-white" />
          <div className="left-[72px] top-[20px] absolute text-white/75 text-[15px] font-normal font-['Geologica']">Add a comment...</div>
          <div className="w-9 h-9 left-[20px] top-[12px] absolute  overflow-hidden" />
          <div className="w-[59px] h-[39px] left-[423px] top-[10px] absolute">
            <div className="w-[59px] h-[39px] left-0 top-0 absolute bg-[#46cec2]/80 rounded-[10px]" />
            <div className="left-[10px] top-[10px] absolute text-[#e9e9e9] text-[15px] font-normal font-['Geologica']">POST</div>
          </div>
        </div>
      </div>
    </div>
    <img className="w-[87px] h-[87px] rounded-full border border-[#e9e9e9]" src="https://via.placeholder.com/87x87" />
    <img className="w-[87px] h-[87px] rounded-full border border-[#e9e9e9]" src="https://via.placeholder.com/87x87" />
    <img className="w-[87px] h-[87px] rounded-full border border-[#e9e9e9]" src="https://via.placeholder.com/87x87" />
    <img className="w-[87px] h-[87px] rounded-full border border-[#e9e9e9]" src="https://via.placeholder.com/87x87" />
    <img className="w-[87px] h-[87px] rounded-full border border-[#e9e9e9]" src="https://via.placeholder.com/87x87" />
    <div className="w-[87px] h-[87px] bg-[#2c2c2c] rounded-full border border-[#e9e9e9]" />
    <div className="text-[#e9e9e9] text-2xl font-normal font-['Geologica']">More</div>
        </div> */}
    </>
  )
}

export default MoviePage