// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useDropzone , Accept} from 'react-dropzone';
// // import { addGenre, updateGenre } from '../../../redux/slices/admin/genreManagementSlice';

// type ModalProps = {
//   genreId?: string; // optional for update
//   existingGenreData?: { genre: string; isArchive: boolean; posterUrl: string }; // optional for update
// };

// const AdminGenreModal: React.FC<ModalProps> = ({ genreId, existingGenreData }) => {
//   const dispatch = useDispatch();
//   const [genre, setGenre] = useState(existingGenreData?.genre || '');
//   const [isArchive, setIsArchive] = useState(existingGenreData?.isArchive || false);
//   const [image, setImage] = useState<File | null>(null);

//   // handle genre change
//   const handleGenreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setGenre(event.target.value);
//   };

//   // handle isArchive change
//   const handleIsArchiveChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setIsArchive(event.target.checked);
//   };

//   // handle image change from drag and drop or file explorer
//   const onDrop = (acceptedFiles: File[]) => {
//     setImage(acceptedFiles[0]);
//   };

//   // Create a form submission handler
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const formData = {
//       genre,
//       isArchive,
//       image,
//     };

//     if (genreId) {
//       // If genreId exists, we are updating an existing genre
//     //   dispatch(updateGenre({ ...formData, id: genreId }));
//     } else {
//       // If genreId does not exist, we are adding a new genre
//     //   dispatch(addGenre(formData));
//     }
//   };

//   // React Dropzone options
//   const { getRootProps, getInputProps } = useDropzone({
//     accept: 'image/*' as unknown as Accept, // Only accept image files
//     onDrop,
//   });

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="genre">Genre</label>
//         <input
//           id="genre"
//           type="text"
//           value={genre}
//           onChange={handleGenreChange}
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="isArchive">Is Archive</label>
//         <input
//           id="isArchive"
//           type="checkbox"
//           checked={isArchive}
//           onChange={handleIsArchiveChange}
//         />
//       </div>

//       <div>
//         <label htmlFor="poster">Poster Image</label>
//         <div
//           {...getRootProps()}
//           style={{
//             border: '2px dashed #ddd',
//             padding: '20px',
//             cursor: 'pointer',
//             textAlign: 'center',
//           }}
//         >
//           <input {...getInputProps()} id="poster" />
//           {!image ? (
//             <p>Drag and drop an image here, or click to select</p>
//           ) : (
//             <p>{image.name}</p>
//           )}
//         </div>
//       </div>

//       <button type="submit">{genreId ? 'Update Genre' : 'Add Genre'}</button>
//     </form>
//   );
// };

// export default AdminGenreModal;



import React, { useState, useEffect } from 'react';
import { Accept, useDropzone } from 'react-dropzone';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { addGenre, updateGenre } from '../../../redux/slices/admin/genreManagementSlice';

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
      <div className="bg-white p-6 rounded-lg shadow-lg lg:w-1/2 w-96">
        <h2 className="text-xl font-bold mb-4">{genre ? 'Edit Genre' : 'Add Genre'}</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Genre Name</label>
          <input
            type="text"
            value={genreName}
            onChange={(e) => setGenreName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Archive</label>
          <input
            type="checkbox"
            checked={isArchive}
            onChange={(e) => setIsArchive(e.target.checked)}
            className="mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Poster Image</label>
          <div {...getRootProps()} className="border-dashed border-2 p-4 text-center">
            <input {...getInputProps()} />
            {image ? (
              <p className="text-gray-500">{image.name}</p>
            ) : (
              <p className="text-gray-500">Drag & drop an image here, or click to select one</p>
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
