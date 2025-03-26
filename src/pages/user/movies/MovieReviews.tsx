import { useEffect } from "react";
import { dislikeReview, fetchReviews, likeReview } from "../../../redux/slices/user/reviewSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { useParams } from "react-router-dom";
import { RootState } from "../../../redux/store";
import rtArrow from '../../../assets/svg/arrow-rt.svg';
import likeSVG from '../../../assets/svg/like.svg';
import dislikeSVG from '../../../assets/svg/dislike.svg';
import likeFillSVG from '../../../assets/svg/like-fill.svg';
import dislikeFillSVG from '../../../assets/svg/dislike-fill.svg';
import { getUserInfo } from "../../../redux/slices/user/userSlice";

const MovieReviews = () => {
  const dispatch = useAppDispatch();
  const {id:movieId} = useParams();
  const { user } = useAppSelector((state) => state.user);
  const { reviews, status } = useAppSelector((state: RootState) => state.review || { reviews: [], status: "idle" });
  useEffect(() => {
    dispatch(fetchReviews(movieId!));
    dispatch(getUserInfo());
  }, [dispatch, movieId]);

  const handleLike = (reviewId: string) => {
    dispatch(likeReview({ reviewId }));
  };

  const handleDislike = (reviewId: string) => {
    dispatch(dislikeReview({ reviewId }));
  };

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl text-gray-300 font-bold mb-4">All Reviews</h2>
      <div className="flex flex-col gap-5">
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review:any) => (
          <div key={review._id} className='flex flex-col justify-between border min-h-[20rem] max-h-[30rem] shadow-2xl rounded-[15px]'>
            <div className='max-h-[26rem] overflow-auto custom-scrollbar pb-3'>
              <div className='pt-5 pl-7 flex items-center gap-3'>
                <img src={review.user?.profilePicture} className='border rounded-full w-12 h-12' alt="" />
                <span className="text-white text-xl font-normal font-['Geologica']">{review.user.name}</span>
              </div>
              <div className='pt-4 px-14'>
                <div className='flex gap-4'>
                  <img src={rtArrow} className='w-3' alt="" />
                  <span className="text-[#e9e9e9] text-xl font-bold font-['Geologica']">{review.title}</span>
                </div>
                <div className='mt-3'>
                  <span className="text-white text-[15px] font-normal font-['Geologica']">{review.content}</span>
                </div>
              </div>
            </div>
            <div className='flex justify-between items-center bg-[#2c2c2c] w-full h-[4rem] rounded-b-[15px] px-4'>
              <div className='flex h-full gap-6 items-center'>
                <button onClick={() => handleLike(review._id)} className='flex gap-2 items-center'>
                  {review.likes.includes(user?._id)?(
                    <img src={likeFillSVG} alt="" />
                  ):(
                    <img src={likeSVG} alt="" />
                  )}
                  <span className='text-[#46cec2]'>{review.likes.length}</span>
                </button>
                <button onClick={() => handleDislike(review._id)} className='flex gap-2 items-center'>
                {review.dislikes.includes(user?._id)?(
                    <img src={dislikeFillSVG} alt="" />
                  ):(
                    <img src={dislikeSVG} alt="" />
                  )}
                  <span className='text-[#46cec2]'>{review.dislikes.length}</span>
                </button>
              </div>
            </div>
          </div>
        ))
      )}
      </div>
    </div>
  );
};

export default MovieReviews;
