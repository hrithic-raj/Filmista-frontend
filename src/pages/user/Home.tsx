import { useEffect, useState } from 'react';
import '../../App.css';
import MovieCard from '../../components/cards/MovieCard';

interface Movie {
  id: number;
  name: string;
  description: string;
  poster: string;
  horizontalPoster: string;
}

const movies: Movie[] = [
  {
    id: 1,
    name: "Cars 2",
    description:
      "Star race car Lightning McQueen and his pal Mater head overseas to compete in the World Grand Prix.",
    poster: "https://c4.wallpaperflare.com/wallpaper/996/743/625/pascal-blanche-dune-movie-dune-series-artwork-science-fiction-hd-wallpaper-preview.jpg",
    horizontalPoster:"https://c4.wallpaperflare.com/wallpaper/343/724/32/the-lion-king-2019-movie-poster-wallpaper-preview.jpg"
  },
  {
    id: 2,
    name: "Avatar",
    description: "An epic journey on the planet of Pandora.",
    poster: "https://c4.wallpaperflare.com/wallpaper/771/786/519/avatar-movie-characters-wallpaper-preview.jpg",
    horizontalPoster:"https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg"
  },
  {
    id: 3,
    name: "Joker",
    description: "A haunting origin story of Gotham's clown prince of crime.",
    poster: "https://c4.wallpaperflare.com/wallpaper/156/167/750/movies-thor-chris-hemsworth-black-background-wallpaper-preview.jpg",
    horizontalPoster:"https://c4.wallpaperflare.com/wallpaper/886/365/213/joker-2019-movie-joker-smile-digital-art-poster-hd-wallpaper-preview.jpg"
  },
  {
    id: 4,
    name: "Spider-Man",
    description: "The multiverse adventure of Spider-Man.",
    poster: "https://c4.wallpaperflare.com/wallpaper/987/280/934/the-croods-cartoon-movie-poster-2013-wallpaper-preview.jpg",
    horizontalPoster:"https://c4.wallpaperflare.com/wallpaper/846/216/1006/godzilla-movies-movie-poster-godzilla-king-of-the-monsters-wallpaper-preview.jpg"
  },
  {
    id: 5,
    name: "Ice Age",
    description: "The prehistoric animals on an icy adventure.",
    poster: "https://c4.wallpaperflare.com/wallpaper/263/88/60/ice-age-continental-drift-hd-wallpaper-preview.jpg",
    horizontalPoster:"https://c4.wallpaperflare.com/wallpaper/624/721/234/movie-poster-aliens-sigourney-weaver-h-r-giger-wallpaper-preview.jpg"
  },
];
const HomePage: React.FC = () => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex((prevIndex) =>
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSelectMovie = (index: number) => {
    setCurrentMovieIndex(index);
  };

  const handleRate = (rating: number) => {
    console.log(`Rated: ${rating}`);
  };

  const handleAddToWatchlist = () => {
    console.log("Added to Watchlist");
  };
  return (
      <div className="mb-5">
        {/* Slider */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-h-full mb-3">
          {/* Movie Slider */}
          <div className="relative bg-[#2C2C2C] rounded-[36px] shadow-lg w-full mb:w-[957px] ">
              <img
                src={movies[currentMovieIndex].poster}
                alt={movies[currentMovieIndex].name}
                className="rounded-[36px] w-full h-[364px] object-cover"
              />
              <div className='absolute top-2 md:top-5 left-2 md:left-5 max-w-full flex justify-center items-center text-white bg-transparent rounded-[36px] backdrop-blur-md p-2'>
                <span className="text-white text-xs font-normal font-['Joti One']">New Release</span>
              </div>
              <div className='absolute bottom-0 md:bottom-0 min-w-full h-full rounded-[36px] bg-gradient-to-t from-black to-transparent' />
              <div className="absolute bottom-8 left-2 md:left-5 space-y-4 max-w-full px-4 ">
                <div className='flex gap-1'>
                  <div className='flex justify-center items-center text-white bg-transparent rounded-[36px] backdrop-blur-sm px-2'>
                  Advanture
                  </div>
                  <div className='flex justify-center items-center text-white bg-transparent rounded-[36px] backdrop-blur-sm px-2'>
                  Fantacy
                  </div>
                  <div className='flex justify-center items-center text-white bg-transparent rounded-[36px] backdrop-blur-sm px-2'>
                  Action
                  </div>
                </div>
                <h2 className="text-2xl md:text-4xl font-['Impact'] text-[#fefefe]">
                  {movies[currentMovieIndex].name}
                </h2>
                <p className="text-white text-sm md:text-[13px] font-bold font-['Geologica'] max-w-[90%] md:max-w-[548px]">
                  {movies[currentMovieIndex].description}
                </p>
                <button className="px-6 py-1 bg-[#fefefe] text-black rounded-[36px] font-['Geologica'] hover:text-[#5cfef0] hover:bg-[#2C2C2C]">
                  View
                </button>
              </div>
          </div>

          {/* Controllers */}
          <div className="flex md:flex-col gap-4 rounded-full bg-[#2C2C2C] items-center justify-center pt-2 pb-2">
            {movies.map((movie, index) => (
              <button
                key={movie.id}
                onClick={() => handleSelectMovie(index)}
                className={`relative flex items-center justify-center rounded-full shadow-lg ${
                  index === currentMovieIndex
                    ? "w-16 h-16 border-white border-2"
                    : "w-12 h-12 border-gray-500 border-1"
                }`}
              >
                <img
                  src={movie.poster}
                  alt={movie.name}
                  className="rounded-full object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>

        <section  className=" ">
          <div  className="relative mt-10">
        <h2 className="text-xl font-bold mb-4 text-white">New Release</h2>
            <div className="overflow-hidden w-full">
              <div
                className="flex gap-2 overflow-x-auto custom-scrollbar"
              >
                {movies.map((movie) => (
                  <MovieCard
                  id={movie.id.toString()}
                  image={movie.horizontalPoster}
                  title={movie.name}
                  rating={2.5}
                  genres={["Adventure", "Comedy"]}
                  onRate={handleRate}
                  onAddToWatchlist={handleAddToWatchlist}
                />
                ))}
                {movies.map((movie) => (
              <MovieCard
              id={movie.id.toString()}
              image={movie.horizontalPoster}
              title={movie.name}
              rating={2.5}
              genres={["Adventure", "Comedy"]}
              onRate={handleRate}
              onAddToWatchlist={handleAddToWatchlist}
            />
            ))}
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
                {movies.map((movie) => (
                  <MovieCard
                  id={movie.id.toString()}
                  image={movie.horizontalPoster}
                  title={movie.name}
                  rating={2.5}
                  genres={["Adventure", "Comedy"]}
                  onRate={handleRate}
                  onAddToWatchlist={handleAddToWatchlist}
                />
                ))}
                {movies.map((movie) => (
              <MovieCard
              id={movie.id.toString()}
              image={movie.horizontalPoster}
              title={movie.name}
              rating={2.5}
              genres={["Adventure", "Comedy"]}
              onRate={handleRate}
              onAddToWatchlist={handleAddToWatchlist}
            />
            ))}
              </div>
            </div>
          </div>
        </section>
      </div>      
  );
};  

export default HomePage;
