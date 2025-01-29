import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { fetchMoviesById } from '../../../redux/slices/user/movieSlice';
import { useParams } from 'react-router-dom';

const MovieImages: React.FC = () => {
      const {selectedMovie} = useAppSelector((state)=> state.movie)
      const {id} = useParams();
      const dispatch = useAppDispatch();
      useEffect(()=>{
        if(id) dispatch(fetchMoviesById(id))
      },[dispatch])
      const [visibleImages, setVisibleImages] = useState(10);
    
      const allImages = [
        selectedMovie?.images.poster,
        selectedMovie?.images.horizontalPoster,
        ...(selectedMovie?.images.other ?? []),
      ];
    
      const loadMoreImages = () => {
        setVisibleImages((prev) => prev + 4);
      };
  return (
    <div className="min-h-screen text-white p-6">
        <div className='mb-4 flex flex-col gap-1'>
          <span className="text-white text-5xl font-bold font-['Gelasio']">{selectedMovie?.title}</span>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
        {allImages.slice(0, visibleImages).map((image, index) => (
            <div
            key={index}
            className="mb-4 break-inside-avoid rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
            <img
                src={image}
                alt={`Movie Image ${index + 1}`}
                className="w-full h-auto rounded-lg"
            />
            </div>
        ))}
        </div>

        {visibleImages < allImages.length && (
        <div className="flex justify-center mt-6">
            <button
            onClick={loadMoreImages}
            className="px-4 py-2 rounded-lg border hover:text-black border-[#5cfef0] hover:bg-[#5cfef0]"
            >
            Load More
            </button>
        </div>
        )}
    </div>
  )
}

export default MovieImages