import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { addUserGenres, fetchAllGenres, onSelectGenre } from '../../../redux/slices/user/genreSlice';
import LoadingPage from '../../../components/LoadingPage';
import { TickSVG } from '../../../assets/svg/SVGs';

const GenreSelector = () => {
    const navigate =useNavigate();
    const dispatch = useAppDispatch();
    const { genres, loading, genreId } = useAppSelector((state)=>state.genre)

    useEffect(()=>{
        dispatch(fetchAllGenres());
    },[dispatch])
    const toggleGenre = (id: string) => {
        if (genreId.includes(id)) {
            dispatch(onSelectGenre(genreId.filter((genreId) => genreId !== id)));
        } else {
            dispatch(onSelectGenre([...genreId, id]));
        }
    };
    const proceed = async() => {
        await dispatch(addUserGenres(genreId));
        await navigate("/");
    };

    if(loading) return <LoadingPage/>
    return (
        <div className="max-h-screen pt-[20px] flex flex-col p-1 sm:p-6">
        <h1 className="text-2xl font-bold text-gray-200 mb-10">Choose Your Favorite Genres</h1>
        <div className="grid grid-cols-2 sm:grid-cols-5 px-5 sm:px-[10%] gap-x-10 gap-y-8 sm:gap-x-20 sm:gap-y-8 max-h-[15%] overflow-auto custom-scrollbar">
            {genres.map((genre) => (
                <div
                key={genre._id}
                className={`relative w-40 h-52 rounded-lg overflow-hidden cursor-pointer shadow-2xl shadow-gray-900 drop-shadow-2xl`}
                onClick={() => toggleGenre(genre._id)}
                >
                <img src={genre.poster} alt={genre.genre} className="w-full h-full object-cover" />
                    <div
                        className={`absolute inset-0 flex items-center justify-center ${
                            genreId.includes(genre._id) ? "block" : "hidden"
                        }`}
                    >
                        <div className='w-full h-full bg-gradient-to-bl from-[#5cfef0] to-gray-700 opacity-50'/>
                        <TickSVG/>
                    </div>
                </div>
          ))}
        </div>
        <div className='flex justify-between p-3 sm:pl-[10%] sm:pr-[10%]'>
            <button
            className="px-6 py-2 border-4 border-[#5cfef0] text-white text-xl font-semibold hover:text-black rounded-lg  hover:bg-[#5cfef0]"
            onClick={()=>navigate('/select-languages')}
            >
            Go Back
            </button>
            <button
            className="px-6 py-2 border-4 border-[#5cfef0] text-white text-xl font-semibold hover:text-black rounded-lg  hover:bg-[#5cfef0]"
            onClick={proceed}
            >
            Continue
            </button>
        </div>
      </div>
  )
}

export default GenreSelector