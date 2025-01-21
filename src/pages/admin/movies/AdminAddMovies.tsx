import { useEffect, useState } from 'react';
import Part1 from '../../../components/Admin/movies/Part1';
import Part2 from '../../../components/Admin/movies/Part2';
import Part3 from '../../../components/Admin/movies/Part3';
import Part4 from '../../../components/Admin/movies/Part4';
import ICelebrity from '../../../interfaces/CelebrityInterface';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { fetchCelebrities } from '../../../redux/slices/admin/celebrityManagementSlice';
import { setCast, setDescription, setDuration, setGenres, setHorizontalPoster, setLanguages, setOtherImages, setPoster, setReleaseDate, setTitle, setTrailer, setVideos } from '../../../redux/slices/admin/movieManagementSlice';
import IGenre from '../../../interfaces/GenreInterface';
import ILanguage from '../../../interfaces/LanguageInterface';
import { CastMember } from '../../../interfaces/MovieInterface';


const AddMovieForm = () => {
  const [currentPart, setCurrentPart] = useState(1);
  // const [celebrities, setCelebrities] = useState<ICelebrity[]>([]);
  // const [selectedCelebrities, setSelectedCelebrities] = useState<ICelebrity[]>([]);
  const dispatch = useAppDispatch();
  const {celebrities} = useAppSelector((state)=>state.celebrityManagement)
  useEffect(()=>{
      dispatch(fetchCelebrities());
  },[dispatch])

  const handleNext = () => {
    setCurrentPart(currentPart + 1);
  };

  const handlePrev = () => {
    setCurrentPart(currentPart - 1);
  };

  const { title, description, genres, languages, poster, horizontalPoster, otherImages, trailer, videos , cast, releaseDate, duration} = useAppSelector((state) => state.movieManagement);

  const handleTitleChange = (newTitle: string) => dispatch(setTitle(newTitle));
  const handleDescriptionChange = (newDescription: string) => dispatch(setDescription(newDescription));
  const handleReleaseDateChange = (newReleaseDate: string) => dispatch(setReleaseDate(newReleaseDate));
  const handleDurationChange = (newDuration: string) => dispatch(setDuration(newDuration));
  const handleGenreChange = (newGenres: IGenre[]) => dispatch(setGenres(newGenres));
  const handleLanguageChange = (newLanguages: ILanguage[]) => dispatch(setLanguages(newLanguages));
  const handleCastChange = (newCast: CastMember[]) => dispatch(setCast(newCast));
  const handlePosterChange = (newPoster: string) => dispatch(setPoster(newPoster));
  const handleHorizontalPosterChange = (newHorizontalPoster: string) => dispatch(setHorizontalPoster(newHorizontalPoster));
  const handleOtherImagesChange = (newImages: string[]) => dispatch(setOtherImages(newImages));
  const handleTrailerChange = (newTrailer: string) => dispatch(setTrailer(newTrailer));
  const handleVideosChange = (newVideos: string[]) => dispatch(setVideos(newVideos));


  const handleSubmit = () => {

    const movieData = {
      title,
      description,
      releaseDate,
      duration,
      genres,
      languages,
      cast,
      poster,
      horizontalPoster,
      otherImages,
      trailer,
      videos,
    };
    console.log(movieData)
    // Use your API function to send this data to the backend
    // dispatch(createMovie(movieData)); // Example: createMovie action
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#2c2c2c] rounded-lg shadow-md">
        <h1 className='text-3xl font-fredoka text-center text-gray-200'>ADD MOVIE</h1>
        <div className='mt-5 mb-5 flex justify-between px-2 space-x-5'>
            <div className={`w-1/4 h-5 rounded-lg ${currentPart >= 1 ? 'bg-[#5CFEF0]': 'bg-white'}`}></div>
            <div className={`w-1/4 h-5 rounded-lg ${currentPart === 2 || currentPart === 3 ||  currentPart === 4 ? 'bg-[#5CFEF0]': 'bg-white'}`}></div>
            <div className={`w-1/4 h-5 rounded-lg ${currentPart === 3 || currentPart === 4 ? 'bg-[#5CFEF0]': 'bg-white'}`}></div>
            <div className={`w-1/4 h-5 rounded-lg ${currentPart === 4 ? 'bg-[#5CFEF0]': 'bg-white'}`}></div>
        </div>
      {currentPart === 1 && 
        <Part1 
          onNext={handleNext}
          onTitleChange={handleTitleChange}
          onDescriptionChange={handleDescriptionChange}
          onReleaseDateChange={handleReleaseDateChange}
          onDurationChange={handleDurationChange}
        />
      }
      {currentPart === 2 && 
        <Part2 
          onNext={handleNext}
          onPrev={handlePrev}
          onGenreChange={handleGenreChange}
          onLanguageChange={handleLanguageChange}
        />
      }
      {currentPart === 3 &&
        <Part3
          celebrities={celebrities}
          castMembers={cast}
          onNext={handleNext}
          onPrev={handlePrev}
          onCastChange={handleCastChange}
        />
      }
      {currentPart === 4 &&
        <Part4
          onPrev={handlePrev}
          onPosterChange={handlePosterChange}
          onHorizontalPosterChange={handleHorizontalPosterChange}
          onOtherImagesChange={handleOtherImagesChange}
          onTrailerChange={handleTrailerChange}
          onVideosChange={handleVideosChange}
          onSubmit={handleSubmit}
        />
      }
    </div>
  );
};

export default AddMovieForm;
