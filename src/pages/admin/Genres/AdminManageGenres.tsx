import React, { useEffect, useState } from 'react';
import AdminGenreCard from '../../../components/Admin/cards/AdminFormCard';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { useNavigate } from 'react-router-dom';
import { archiveGenre, fetchAllGenres } from '../../../redux/slices/admin/genreManagementSlice';
import AdminGenreModal from '../../../components/Admin/modals/AdminGenreModal';
import LoadingPage from '../../../components/LoadingPage';
import { FaPlusCircle } from 'react-icons/fa';
import IGenre from '../../../interfaces/GenreInterface';

const AdminManageGenres: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [showArchives, setShowArchives] = useState(false);
  const [showAddOrEditGenre, setShowAddOrEditGenre] = useState(false);
  const [editingGenre, setEditingGenre] = useState<IGenre | null>(null); // To hold the genre being edited
  const { genres, loading } = useAppSelector((state) => state.genreManagement);

  useEffect(() => {
    dispatch(fetchAllGenres());
  }, [dispatch]);

  const handleViewGenre = (id: string) => {
    navigate(`/admin/genres/${id}`);
  };

  const handleAddGenre = () => {
    setEditingGenre(null); // Clear editing genre for adding new one
    setShowAddOrEditGenre(true);
  };

  const handleEditGenre = (genre: IGenre) => {
    setEditingGenre(genre); // Set the genre being edited
    setShowAddOrEditGenre(true);
  };

  const handleArchiveGenre = (id: string) => {
    dispatch(archiveGenre(id));
  };

  const maxCount = Math.max(...genres.map((genre) => genre.movies.length + 5));

  // if(loading) return <LoadingPage/>
  return (
    <div className="relative container w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`fixed inset-0 bg-gray-900 bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-45 ${
    loading ? 'block' : 'hidden'
  }`}/>
      <div className="grid grid-cols-1 lg:grid-rows-2 lg:grid-cols-[1fr,3fr] max-h-1/2 gap-4 mb-8">
        <div className="p-7 bg-[rgb(44,44,44)] shadow rounded-lg hover:shadow-md transition">
          <h2 className="text-xl text-center lg:text-left font-semibold text-gray-300">Total Genres</h2>
          <p className="text-2xl text-center lg:text-left font-bold text-gray-100">{genres?.length}</p>
        </div>
        <div onClick={handleAddGenre} className="flex flex-col gap-2 p-7 lg:order-3 bg-[rgb(44,44,44)] justify-center items-center shadow rounded-lg hover:cursor-pointer hover:shadow-md transition">
          <FaPlusCircle className='text-3xl text-gray-200'/>
          <h2 className="text-2xl font-semibold text-gray-200 select-none">Add Genre</h2>
        </div>
        <div className="w-full max-h-[330px] lg:max-h-[330px] bg-[rgb(44,44,44)] shadow rounded-lg hover:shadow-md transition row-span-2 mx-auto font-sans overflow-y-auto custom-scrollbar">
          <h1 className="text-2xl mt-2 font-bold mb-4 text-center text-gray-300">Genres and Movie Counts</h1>
          <div className="space-y-4 pb-5">
            {genres.map((genre) => (
              <div key={genre._id} className="flex items-center pr-5">
                <span className="w-[20%] text-sm text-center font-medium text-blue-600">{genre.genre}</span>
                <div className="relative flex-1 h-4 bg-gray-200 rounded-lg overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-yellow-400 transition-all duration-500"
                    style={{
                      width: `${(genre.movies.length || 0 / maxCount) * 100}%`,
                    }}
                  />
                </div>
                <span className="w-[5%] text-sm text-gray-300 text-right">{genre.movies.length}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h3 className="mb-5 font-fredoka text-2xl text-white">Genres</h3>
      <div className="w-[15%] flex justify-between my-5 gap-3">
        <button onClick={() => setShowArchives(false)} className={`border w-full h-10 flex items-center justify-center rounded-lg text-lg ${showArchives ? 'text-gray-400 border-gray-500' : 'text-gray-200 border-gray-200'}`}>
          Genres
        </button>
        <button onClick={() => setShowArchives(true)} className={`border w-full h-10 flex items-center justify-center rounded-lg text-lg ${showArchives ? 'text-gray-200 border-gray-200' : 'text-gray-400 border-gray-500'}`}>
          Archives
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {!showArchives ? (
          genres.map((genre) => (
            !genre.isArchive && (
              <AdminGenreCard
                key={genre._id}
                id={genre._id}
                image={genre.poster}
                title={genre.genre}
                isArchive={genre.isArchive}
                edit={() => handleEditGenre(genre)}
                archive={handleArchiveGenre}
                view={handleViewGenre}
              />
            )
          ))
        ) : (
          genres.map((genre) => (
            genre.isArchive && (
              <AdminGenreCard
                key={genre._id}
                id={genre._id}
                image={genre.poster}
                title={genre.genre}
                isArchive={genre.isArchive}
                edit={() => handleEditGenre(genre)}
                archive={handleArchiveGenre}
                view={handleViewGenre}
              />
            )
          ))
        )}
      </div>
      {showAddOrEditGenre && (
        <AdminGenreModal
          genre={editingGenre}
          onClose={() => setShowAddOrEditGenre(false)}
        />
      )}

      {loading&& <LoadingPage/>}
    </div>
  );
};

export default AdminManageGenres;