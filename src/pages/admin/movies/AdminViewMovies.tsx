import React from 'react'

const AdminViewMovies = () => {
    
  return (
    <div className='max-w-5xl mx-auto p-6 bg-[rgb(44,44,44)] shadow-md rounded-lg'>
        {/* <div className='flex flex-col lg:flex-row gap-3 justify-between bg-[#212121] p-6 rounded-lg shadow-sm'>
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
        </div> */}
    </div>
  )
}

export default AdminViewMovies