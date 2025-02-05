import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { archiveGenre, fetchGenreById } from '../../../redux/slices/admin/genreManagementSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import IGenre from '../../../interfaces/GenreInterface';
import LoadingPage from '../../../components/LoadingPage';
import AdminGenreModal from '../../../components/Admin/modals/AdminGenreModal';


const AdminViewGenre: React.FC = () => {
  const {id} = useParams<{id: string}>();
  const dispatch = useAppDispatch();
  const {selectedGenre, loading} = useAppSelector(state=>state.genreManagement)
  const [showAddOrEditGenre, setShowAddOrEditGenre] = useState(false);
  const [editingGenre, setEditingGenre] = useState<IGenre | null>(null);

  useEffect(()=>{
    if(id) dispatch(fetchGenreById(id));
  },[dispatch, id]);

  const handleEditGenre = () => {
      setEditingGenre(selectedGenre);
      setShowAddOrEditGenre(true);
  };
  
    const handleArchiveGenre = (id: string) => {
      if(id) dispatch(archiveGenre(id));
    };
  return (
    <div className='max-w-5xl mx-auto p-6 bg-[rgb(44,44,44)] shadow-md rounded-lg'>
        <div className='flex flex-col lg:flex-row gap-3 justify-between bg-[#212121] p-6 rounded-lg shadow-sm'>
            <div className='flex space-x-6'>
              <img
                  src={selectedGenre?.poster}
                  alt={`${id}'s profile`}
                  className="w-52 h-64 rounded-lg object-cover border"
              />
              <div className='space-y-5'>
                  <h2 className="text-2xl font-semibold text-gray-200">Genre: {selectedGenre?.genre}</h2>
                  <p className="text-gray-400">Movies: {selectedGenre?.movies.length}</p>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <button onClick={()=>handleArchiveGenre(selectedGenre?._id as string)} className='border text-white hover:border-[#5cfef0] hover:text-[#5cfef0] px-4 py-2 rounded'>
                {selectedGenre?.isArchive?'UNARCHIVE':'ARCHIVE'}
                </button>
              <button onClick={handleEditGenre} className='border text-white hover:border-[#5cfef0] hover:text-[#5cfef0] px-4 py-2 rounded'>EDIT</button>
            </div>
        </div>
        {
          selectedGenre?.movies.length?(
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-200 mb-4">{selectedGenre.genre} movies</h3>

        </div>
          ):(
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-200 mb-4">No Movies found in this genre</h3>

        </div>

          )
        }

        {showAddOrEditGenre && (
          <AdminGenreModal
            genre={editingGenre}
            onClose={() => setShowAddOrEditGenre(false)}
          />
        )}

        {loading&& <LoadingPage/>}
    </div>
  )
}

export default AdminViewGenre