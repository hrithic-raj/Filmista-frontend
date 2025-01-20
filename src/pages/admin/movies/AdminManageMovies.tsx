import React from 'react'
import AdminMovieCard from '../../../components/Admin/AdminMovieCard';
import { useNavigate } from 'react-router-dom';

interface Movie {
    id: string;
    name: string;
    description: string;
    poster: string;
    horizontalPoster: string;
  }
  
  const movies: Movie[] = [
    {
      id: "1",
      name: "Cars 2",
      description:
        "Star race car Lightning McQueen and his pal Mater head overseas to compete in the World Grand Prix.",
      poster: "https://c4.wallpaperflare.com/wallpaper/996/743/625/pascal-blanche-dune-movie-dune-series-artwork-science-fiction-hd-wallpaper-preview.jpg",
      horizontalPoster:"https://c4.wallpaperflare.com/wallpaper/343/724/32/the-lion-king-2019-movie-poster-wallpaper-preview.jpg"
    },
    {
      id: "2",
      name: "Avatar",
      description: "An epic journey on the planet of Pandora.",
      poster: "https://c4.wallpaperflare.com/wallpaper/771/786/519/avatar-movie-characters-wallpaper-preview.jpg",
      horizontalPoster:"https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg"
    },
    {
      id: "3",
      name: "Joker",
      description: "A haunting origin story of Gotham's clown prince of crime.",
      poster: "https://c4.wallpaperflare.com/wallpaper/156/167/750/movies-thor-chris-hemsworth-black-background-wallpaper-preview.jpg",
      horizontalPoster:"https://c4.wallpaperflare.com/wallpaper/886/365/213/joker-2019-movie-joker-smile-digital-art-poster-hd-wallpaper-preview.jpg"
    },
    {
      id: "4",
      name: "Spider-Man",
      description: "The multiverse adventure of Spider-Man.",
      poster: "https://c4.wallpaperflare.com/wallpaper/987/280/934/the-croods-cartoon-movie-poster-2013-wallpaper-preview.jpg",
      horizontalPoster:"https://c4.wallpaperflare.com/wallpaper/846/216/1006/godzilla-movies-movie-poster-godzilla-king-of-the-monsters-wallpaper-preview.jpg"
    },
    {
      id: "5",
      name: "Ice Age",
      description: "The prehistoric animals on an icy adventure.",
      poster: "https://c4.wallpaperflare.com/wallpaper/263/88/60/ice-age-continental-drift-hd-wallpaper-preview.jpg",
      horizontalPoster:"https://c4.wallpaperflare.com/wallpaper/624/721/234/movie-poster-aliens-sigourney-weaver-h-r-giger-wallpaper-preview.jpg"
    },
  ];

const AdminManageMovies: React.FC = () => {
  const navigate = useNavigate();
    const handleViewMoview = (id:string) => {
        console.log(`view movie`);
      };
    
      const handleAddToWatchlist = () => {
        console.log("Added to Watchlist");
      };
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-7 bg-[rgb(44,44,44)] shadow rounded-lg hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-300">Total movies</h2>
            <p className="text-2xl font-bold text-gray-100">2743</p>
          </div>
          <div onClick={()=>navigate('/admin/movies/add-movies')} className="p-7 bg-[rgb(44,44,44)] flex justify-center items-center shadow rounded-lg hover:cursor-pointer hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-gray-200 select-none">Add movies</h2>
          </div>
          <div className="p-7 bg-[rgb(44,44,44)] flex justify-center items-center shadow rounded-lg hover:cursor-pointer hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-gray-300">Review Requests</h2>
            {/* <p className="text-2xl font-bold text-gray-100">2743</p> */}
          </div>
          <div className="p-7 bg-[rgb(44,44,44)] shadow rounded-lg hover:shadow-md transition">
            {/* <h2 className="text-lg font-semibold text-gray-300">Total movies</h2> */}
            {/* <p className="text-2xl font-bold text-gray-100">2743</p> */}
          </div>
      </div>
      <div className='flex flex-wrap gap-5 justify-center'>
        {movies.map((movie) => (
            <AdminMovieCard
              id={movie.id}
              image={movie.horizontalPoster}
              title={movie.name}
              rating={2.5}
              genres={["Adventure", "Comedy"]}
              viewMoview={handleViewMoview}
              onAddToWatchlist={handleAddToWatchlist}
            />
        ))}
        {movies.map((movie) => (
            <AdminMovieCard
              id={movie.id}
              image={movie.horizontalPoster}
              title={movie.name}
              rating={2.5}
              genres={["Adventure", "Comedy"]}
              viewMoview={handleViewMoview}
              onAddToWatchlist={handleAddToWatchlist}
            />
        ))}
      </div>
    </div>
  )
}

export default AdminManageMovies