import React, { useEffect, useState } from 'react'
import MovieCard from '../../components/MovieCard'
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
const HomeNew = () => {
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
    <div>
        <div className="w-full overflow-x-hidden">
  {/* Navbar */}
  <header className="w-full bg-black">
    <nav className="container mx-auto px-4 py-4 text-white">
      {/* Navbar content here */}
      Navbar Content
    </nav>
  </header>

  {/* Slider */}
  <section className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-h-full mb-3">
      <div className="relative bg-[#2C2C2C] rounded-[36px] shadow-lg w-full">
        <img
          src={movies[currentMovieIndex].poster}
          alt={movies[currentMovieIndex].name}
          className="rounded-[36px] w-full h-[364px] object-cover"
        />
      </div>
    </div>
  </section>

  {/* New Release Section */}
  <section className="mt-8 container mx-auto px-4">
    <h2 className="text-xl font-bold mb-4 text-white">New Release</h2>
    <div className="flex gap-4 overflow-x-auto no-scrollbar w-full pr-[170px]">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          image={movie.horizontalPoster}
          title={movie.name}
          rating={4.5}
          genres={["Adventure", "Comedy"]}
          onRate={handleRate}
          onAddToWatchlist={handleAddToWatchlist}
        />
      ))}
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          image={movie.horizontalPoster}
          title={movie.name}
          rating={4.5}
          genres={["Adventure", "Comedy"]}
          onRate={handleRate}
          onAddToWatchlist={handleAddToWatchlist}
        />
      ))}
    </div>
  </section>
</div>

    </div>
  )
}

export default HomeNew