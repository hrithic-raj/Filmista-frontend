import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { useEffect } from "react";
import { fetchWatchlist, removeFromWatchlist } from "../../redux/slices/user/watchlistSlice";
import LoadingPage from "../../components/LoadingPage";
// import { useState } from "react";

const Watchlist = () => {
    const dispatch = useAppDispatch();
    const { movies: watchlistMovies, loading } = useAppSelector((state) => state.watchlist);
  
    useEffect(() => {
      dispatch(fetchWatchlist());
    }, [dispatch]);
    const handleRemoveFromWatchlist = async (id: string) => {
        if (id) await dispatch(removeFromWatchlist(id));
    };
  return (
    <div className="min-h-screen text-white p-6">
      {loading && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <LoadingPage />
        </div>
      )}
      <h1 className="text-3xl font-bold mb-6">My Watchlist</h1>

      {!loading && watchlistMovies.length === 0 ? (
        <div className="text-center mt-20">
          <h2 className="text-2xl font-semibold">Your watchlist is empty 😢</h2>
          <p className="text-gray-400 mt-2">Add movies to watch later!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {watchlistMovies.map((movie) => (
            <div key={movie.movieId._id} className="bg-[rgb(44,44,44)] p-4 rounded-lg shadow-lg relative">
              {/* Movie Poster */}
              <Link to={`/movies/${movie.movieId?._id}`}>
                <img 
                  src={movie.movieId?.images?.poster || "/placeholder.jpg"} 
                  alt={movie.movieId?.title} 
                  className="w-full h-60 object-cover rounded-md transition-transform hover:scale-105"
                />
              </Link>

              {/* Movie Info */}
              <div className="mt-3">
                <h3 className="text-lg font-semibold">{movie.movieId?.title}</h3>
                <p className="text-gray-400 text-sm">{movie.movieId?.duration || "N/A"} | ⭐ {movie.movieId?.rating ? movie.movieId.rating.toFixed(1) : "0.0"}</p>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => handleRemoveFromWatchlist(movie.movieId?._id)}
                className="absolute top-2 right-2 bg-red-400 p-2 rounded-full hover:bg-red-700 transition"
              >
                <FaTrashAlt className="text-white" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Watchlist