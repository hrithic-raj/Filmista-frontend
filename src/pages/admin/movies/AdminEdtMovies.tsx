import { useEffect, useState } from 'react';
import Part1 from '../../../components/Admin/movies/Part1';
import Part2 from '../../../components/Admin/movies/Part2';
import Part3 from '../../../components/Admin/movies/Part3';
import Part4 from '../../../components/Admin/movies/Part4';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { fetchCelebrities } from '../../../redux/slices/admin/celebrityManagementSlice';
import { clearMovieData, fetchMoviesById, setCast, setDescription, setDuration, setGenres, setHorizontalPoster, setLanguages, setOtherImages, setPoster, setReleaseDate, setTitle, setTrailer, setVideos, updateMovie } from '../../../redux/slices/admin/movieManagementSlice';
import IGenre from '../../../interfaces/GenreInterface';
import ILanguage from '../../../interfaces/LanguageInterface';
import { CastMember } from '../../../interfaces/MovieInterface';
import { useNavigate, useParams } from 'react-router-dom';


const EditMovieForm = () => {
  const [currentPart, setCurrentPart] = useState(1);
  const navigate = useNavigate();
  const {id} = useParams()
  // const [celebrities, setCelebrities] = useState<ICelebrity[]>([]);
  // const [selectedCelebrities, setSelectedCelebrities] = useState<ICelebrity[]>([]);
  const dispatch = useAppDispatch();
  const {selectedMovie} = useAppSelector((state)=>state.movieManagement)
  const {celebrities} = useAppSelector((state)=>state.celebrityManagement)

  useEffect(()=>{
    dispatch(fetchCelebrities());
    if(id) dispatch(fetchMoviesById(id));
  },[dispatch, id])

  
  useEffect(() => {
    if (selectedMovie) {
      dispatch(setTitle(selectedMovie.title));
      dispatch(setDescription(selectedMovie.description));
      dispatch(setReleaseDate(selectedMovie.releaseDate));
      dispatch(setDuration(selectedMovie.duration));
      dispatch(setGenres(selectedMovie.genres));
      dispatch(setLanguages(selectedMovie.languages));
      dispatch(setCast(selectedMovie.cast));
      dispatch(setPoster(selectedMovie.images.poster)); 
      dispatch(setHorizontalPoster(selectedMovie.images.horizontalPoster));
      dispatch(setOtherImages(selectedMovie.images.other));
      dispatch(setTrailer(selectedMovie.videos.trailer));
      dispatch(setVideos(selectedMovie.videos.others));
    }
  }, [selectedMovie, dispatch]);

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
  const handlePosterChange = (newPoster: string | File) => dispatch(setPoster(newPoster));
  const handleHorizontalPosterChange = (newHorizontalPoster: string | File) => dispatch(setHorizontalPoster(newHorizontalPoster));
  const handleOtherImagesChange = (newImages: (File | string)[]) => dispatch(setOtherImages(newImages));
  const handleTrailerChange = (newTrailer: string) => dispatch(setTrailer(newTrailer));
  const handleVideosChange = (newVideos: string[]) => dispatch(setVideos(newVideos));
  
  
  const handleSubmit = async() => {
    
    const genresIds = genres.map((genre)=> genre._id);
    const languagesIds = languages.map((lang)=> lang._id);
    const jsonPayload = JSON.stringify({
        title,
      description,
      releaseDate,
      duration,
      genres:genresIds,
      languages:languagesIds,
      cast,
      trailer,
      videos,
    //   poster: typeof poster === "string" ? poster : undefined,
    //   horizontalPoster: typeof horizontalPoster === "string" ? horizontalPoster : undefined,
      otherImages: otherImages.filter((img) => typeof img === "string"),
    })
    // console.log(jsonPayload)

    const formData = new FormData();
    
    formData.append('data', jsonPayload)
    
    if (poster instanceof File) {
        formData.append("poster", poster);
    }
    if (horizontalPoster instanceof File) {
        formData.append("horizontalPoster", horizontalPoster);
    }
    
    otherImages.forEach((img) => {
        if (img instanceof File) {
            formData.append("otherImages", img);
        }
    });
    
    try{
      await dispatch(updateMovie({movieId:id as string,formData}));
      dispatch(clearMovieData());
      navigate('/admin/movies');
    }catch(error){
      console.error('Error adding movie:', error);
    }
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
          isEditMode={true}
        />
      }
    </div>
  );
};

export default EditMovieForm;