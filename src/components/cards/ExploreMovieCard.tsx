import { useNavigate } from "react-router-dom";
import { IMovie } from "../../interfaces/MovieInterface";

const ExploreMovieCard = ({ movie }:{movie:IMovie}) => {
    const navigate = useNavigate();
    return (
      <div onClick={()=>navigate(`/movies/${movie._id}`)} className="relative group bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform transform hover:scale-105">
        <img src={movie.images.poster} alt={movie.title} className="w-full h-[300px] object-cover" />
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4 transition-opacity">
          <h2 className="text-xl font-semibold">{movie.title}</h2>
          <p className="text-sm text-gray-300">⭐ {movie?.rating? movie.rating.toFixed(1) : "0.0"}</p>
        </div>
      </div>
    );
  };
  
  export default ExploreMovieCard;