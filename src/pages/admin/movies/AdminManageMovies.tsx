import React, { useEffect } from 'react'
import AdminMovieCard from '../../../components/Admin/AdminMovieCard';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { fetchAllMovies } from '../../../redux/slices/admin/movieManagementSlice';
import IGenre from '../../../interfaces/GenreInterface';

const AdminManageMovies: React.FC = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { movies } = useAppSelector((state) => state.movieManagement)
  useEffect(()=>{
    dispatch(fetchAllMovies())
  },[])

    const handleViewMoview = (id:string) => {
        console.log(`view movie${id}`);
      };
    
    const handleEditMovie = (id: string) => {
      navigate(`/admin/movies/edit-movies/${id}`);
    };
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-7 bg-[rgb(44,44,44)] shadow rounded-lg hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-300">Total movies</h2>
            <p className="text-2xl font-bold text-gray-100">{movies.length}</p>
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
              id={movie._id}
              image={movie.images.poster}
              title={movie.title}
              rating={movie.rating}
              genres={movie.genres.map((g : IGenre) => g.genre)}
              viewMoview={handleViewMoview}
              onEditMovie={()=>handleEditMovie(movie._id)}
            />
        ))}
      </div>
    </div>
  )
}

export default AdminManageMovies