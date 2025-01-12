import React, { useState, useEffect } from 'react';
import { Accept, useDropzone } from 'react-dropzone';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { addGenre, updateGenre } from '../../../redux/slices/admin/genreManagementSlice';
import { FaCross, FaPlusCircle } from 'react-icons/fa';
import { FaDeleteLeft, FaSackXmark } from 'react-icons/fa6';

interface Movie {
    id: string;
    name: string;
    description: string;
    poster: string;
    horizontalPoster: string;
}

interface Genre {
    _id: string;
    genre: string;
    poster: string;
    isArchive: boolean;
    movies: Movie[]
}

interface AdminGenreModalProps {
  genre: Genre | null;
  onClose: () => void;
}

const AdminGenreModal: React.FC<AdminGenreModalProps> = ({ genre, onClose }) => {
  const [genreName, setGenreName] = useState(genre ? genre.genre : '');
  const [isArchive, setIsArchive] = useState(genre ? genre.isArchive : false);
  const [image, setImage] = useState<File | null>(null);
  const dispatch = useAppDispatch();
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*' as unknown as Accept,
    onDrop: (acceptedFiles) => {
      setImage(acceptedFiles[0]);
    },
  });

  useEffect(() => {
    if (genre) {
      setGenreName(genre.genre);
      setIsArchive(genre.isArchive);
      setImage(null);
    }
  }, [genre]);

  const handleSubmit = async() => {
    const jsonPayload = JSON.stringify({
      genre: genreName,
      isArchive: isArchive,
    })

    const formData = new FormData();
    // formData.append('genre', genreName);
    // formData.append('isArchive', isArchive);
    formData.append('data', jsonPayload);
    if (image) formData.append('poster', image);

    try{
      onClose();
      if(genre){
        await dispatch(updateGenre({genreId: genre._id, formData})).unwrap();
        console.log("Genre updated");
      }else{
        await dispatch(addGenre(formData)).unwrap();
        console.log("Genre added");
      }
    }catch(error){
      console.error('Error:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-40">
      <div className="bg-[rgb(44,44,44)] p-6 rounded-lg shadow-lg lg:w-2/3 w-96">
        <h2 className="text-gray-100 text-xl font-bold mb-4">{genre ? 'Edit Genre' : 'Add Genre'}</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-200">Genre Name</label>
          <input
            type="text"
            value={genreName}
            onChange={(e) => setGenreName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-[rgb(44,44,44)] text-gray-100 border border-gray-200 rounded-md"
          />
        </div>
        <div className="flex items-center gap-3 mb-4">
          <input
            type="checkbox"
            checked={isArchive}
            onChange={(e) => setIsArchive(e.target.checked)}
            className="mt-1 w-5 h-5"
          />
          <label className="block text-sm font-medium text-gray-200">Archive</label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-200">Poster Image</label>
          <div {...getRootProps()} className="border-dashed border-2 p-5 mt-2 py-28 text-center">
            <input {...getInputProps()} />
            {image ? (
              <div className='flex justify-center items-center gap-3'>
                <p className="text-gray-300">{image.name}</p>
                <FaDeleteLeft className='text-2xl text-gray-400 cursor-pointer' onClick={()=>setImage(null)}/>
              </div>
            ) : (
              <div className='flex flex-col justify-center items-center gap-3'>
                <FaPlusCircle className='text-3xl text-gray-400'/>
                <p className="text-gray-400">Drag & drop an image here, or click to select one</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between gap-3">
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AdminGenreModal;
