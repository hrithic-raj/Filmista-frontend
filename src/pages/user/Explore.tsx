import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import ExploreMovieCard from "../../components/cards/ExploreMovieCard";
import LoadingPage from "../../components/LoadingPage";
import { fetchExploreMovies, setPage } from "../../redux/slices/user/movieSlice";

const Explore = () => {
  const dispatch= useAppDispatch();
  const { exploreMovies:movies, currentPage, totalPages, exploreLoading } = useAppSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchExploreMovies(currentPage));
  }, [dispatch, currentPage]);

  return (
    <div className="min-h-screen text-white p-6">
      {exploreLoading && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <LoadingPage />
        </div>
      )}
    <h1 className="text-3xl font-bold mb-6">Explore Movies</h1>

    {/* Movies Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {exploreLoading
        ? Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="w-full h-[300px] bg-[rgb(44,44,44)] animate-pulse rounded-lg"></div>
          ))
        : movies.map((movie) => <ExploreMovieCard key={movie._id} movie={movie} />)}
    </div>

    {/* Pagination */}
    <div className="flex justify-center mt-10 space-x-4">
      <button
        className={`px-4 py-2 rounded-lg ${
          currentPage === 1 ? "bg-[rgb(44,44,44)] cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
        }`}
        disabled={currentPage === 1}
        onClick={() => dispatch(setPage(currentPage - 1))}
      >
        Previous
      </button>
      <span className="text-lg font-semibold">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className={`px-4 py-2 rounded-lg ${
          currentPage === totalPages ? "bg-[rgb(44,44,44)] cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
        }`}
        disabled={currentPage === totalPages}
        onClick={() => dispatch(setPage(currentPage + 1))}
      >
        Next
      </button>
    </div>
  </div>
  );
};

export default Explore;