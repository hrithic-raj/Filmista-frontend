// import { useState } from 'react';
// import FileUpload from '../FileUpload';
// import { useAppSelector } from '../../../hooks/reduxHooks';

// interface Part4Props {
//   onPrev: () => void;
//   onPosterChange: (newPoster: File) => void;
//   onHorizontalPosterChange: (newHorizontalPoster: File) => void;
//   onOtherImagesChange: (newImages: File[]) => void;
//   onTrailerChange: (newTrailer: string) => void;
//   onVideosChange: (newVideos: string[]) => void;
//   onSubmit: () => void;
// }

// const Part4: React.FC<Part4Props> = ({ 
//   onPrev,
//   onPosterChange,
//   onHorizontalPosterChange,
//   onOtherImagesChange,
//   onTrailerChange,
//   onVideosChange,
//   onSubmit
// }) => {

//   const { poster, horizontalPoster, otherImages, trailer, videos } = useAppSelector((state) => state.movieManagement);

//   const handleFileUpload = (type: string, files: File[]) => {
//     if (type === 'poster') {
//       onPosterChange(files[0]);
//     } else if (type === 'horizontalPoster') {
//       onHorizontalPosterChange(files[0]);
//     } else if (type === 'otherImages') {
//       onOtherImagesChange([...otherImages, ...files]);
//     }
//   };
//   const handleRemoveImage = (index:number)=>{
//     onOtherImagesChange(otherImages.filter((_,i)=> i !== index));
//   }

//   return (
//     <div>
//       <h2 className="text-xl text-gray-300 font-bold mb-4">Add Images and Videos</h2>

//       {/* Poster Upload */}
//       <div className="mb-4 flex space-x-4">
//         <div className="w-40 h-52 border">
//           {poster ? (
//             <img
//               src={URL.createObjectURL(poster)}
//               alt="Poster"
//               className="w-full h-full object-cover"
//             />
//           ) : (
//             <span className="text-gray-400 flex justify-center items-center h-full">No Poster</span>
//           )}
//         </div>
//         <div>
//           <label htmlFor="poster" className="block text-sm font-medium text-gray-200">
//             Poster
//           </label>
//           <FileUpload type="poster" onFileSelect={handleFileUpload} />
//         </div>
//       </div>

//       {/* Horizontal Poster Upload */}
//       <div className="mb-4 flex space-x-4">
//         <div className="w-52 h-32 border">
//           {horizontalPoster ? (
//             <img
//               src={URL.createObjectURL(horizontalPoster)}
//               alt="Horizontal Poster"
//               className="w-full h-full object-cover"
//             />
//           ) : (
//             <span className="text-gray-400 flex justify-center items-center h-full">No Horizontal Poster</span>
//           )}
//         </div>
//         <div>
//           <label
//             htmlFor="horizontalPoster"
//             className="block text-sm font-medium text-gray-200"
//           >
//             Horizontal Poster
//           </label>
//           <FileUpload type="horizontalPoster" onFileSelect={handleFileUpload} />
//         </div>
//       </div>

//       {/* Other Images Upload */}
//       <div className="mb-4">
//         <label htmlFor="otherImages" className="block text-sm font-medium text-gray-200">
//           Other Images
//         </label>
//         <FileUpload type="otherImages" onFileSelect={handleFileUpload} />
//         <div className="mt-4 flex gap-4 flex-wrap">
//           {otherImages.map((image, index) => (
//             <div key={index} className="group relative w-24 h-24 border rounded-lg">
//               <img
//                 src={URL.createObjectURL(image)}
//                 alt={`Other Image ${index + 1}`}
//                 className="w-full h-full object-cover group-hover:opacity-50 rounded-lg"
//               />
//               <button onClick={()=>handleRemoveImage(index)} className='hidden group-hover:flex absolute top-8 left-10 text-3xl text-gray-200'>X</button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Trailer URL */}
//       <div className="mb-4">
//         <label htmlFor="trailer" className="block text-sm font-medium text-gray-200">
//           Trailer URL
//         </label>
//         <input
//           type="text"
//           id="trailer"
//           value={trailer}
//           onChange={(e) => onTrailerChange(e.target.value)}
//           className="mt-1 block w-full px-3 py-2 bg-[rgb(44,44,44)] text-gray-100 border border-gray-200 rounded-md"
//         />
//       </div>

//       {/* Other Videos */}
//       <div className="mb-4">
//         <label htmlFor="otherVideos" className="block text-sm font-medium text-gray-200">
//           Other Videos
//         </label>
//         <button
//           onClick={() => onVideosChange([...videos, ''])}
//           className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
//         >
//           Add Video
//         </button>
//         {videos.map((video, index) => (
//           <input
//             key={index}
//             type="text"
//             value={video}
//             onChange={(e) => {
//               const newVideos = [...videos];
//               newVideos[index] = e.target.value;
//               onVideosChange(newVideos);
//             }}
//             className="mt-1 block w-full px-3 py-2 bg-[rgb(44,44,44)] text-gray-100 border border-gray-200 rounded-md"
//             placeholder="Video URL"
//           />
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         onClick={onPrev}
//         className="bg-gray-500 text-white px-4 py-2 rounded mr-4 mb-5"
//       >
//         Previous
//       </button>
//       <button
//         onClick={onSubmit}
//         className="bg-blue-500 text-white px-4 py-2 rounded mr-4 mb-5"
//       >
//         Submit
//       </button>
//     </div>
//   );
// };

// export default Part4;


import { useState } from 'react';
import FileUpload from '../FileUpload';
import { useAppSelector } from '../../../hooks/reduxHooks';

interface Part4Props {
  onPrev: () => void;
  onPosterChange: (newPoster: File | string) => void;
  onHorizontalPosterChange: (newHorizontalPoster: File | string) => void;
  onOtherImagesChange: (newImages: (File | string)[]) => void;
  onTrailerChange: (newTrailer: string) => void;
  onVideosChange: (newVideos: string[]) => void;
  onSubmit: () => void;
  isEditMode: boolean;
}

const Part4: React.FC<Part4Props> = ({ 
  onPrev,
  onPosterChange,
  onHorizontalPosterChange,
  onOtherImagesChange,
  onTrailerChange,
  onVideosChange,
  onSubmit,
  isEditMode
}) => {

  const { poster, horizontalPoster, otherImages, trailer, videos } = useAppSelector((state) => state.movieManagement);

  const handleFileUpload = (type: string, files: (string | File)[]) => {
    if (type === 'poster') {
      onPosterChange(files[0]);
    } else if (type === 'horizontalPoster') {
      onHorizontalPosterChange(files[0]);
    } else if (type === 'otherImages') {
      onOtherImagesChange([...otherImages, ...files]);
    }
  };
  
  

  const handleRemoveImage = (index: number) => {
    onOtherImagesChange(otherImages.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2 className="text-xl text-gray-300 font-bold mb-4">
        {isEditMode ? "Edit Movie Images & Videos" : "Add Images and Videos"}
      </h2>

      {/* Poster Upload */}
      <div className="mb-4 flex space-x-4">
        <div className="w-40 h-52 border">
          {poster ? (
            <img
              src={typeof poster === 'string' ? poster : URL.createObjectURL(poster)}
              alt="Poster"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-400 flex justify-center items-center h-full">No Poster</span>
          )}
        </div>
        <div>
          <label htmlFor="poster" className="block text-sm font-medium text-gray-200">
            Poster
          </label>
          <FileUpload type="poster" onFileSelect={handleFileUpload} />
        </div>
      </div>

      {/* Horizontal Poster Upload */}
      <div className="mb-4 flex space-x-4">
        <div className="w-52 h-32 border">
          {horizontalPoster ? (
            <img
              src={typeof horizontalPoster === 'string' ? horizontalPoster : URL.createObjectURL(horizontalPoster)}
              alt="Horizontal Poster"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-400 flex justify-center items-center h-full">No Horizontal Poster</span>
          )}
        </div>
        <div>
          <label htmlFor="horizontalPoster" className="block text-sm font-medium text-gray-200">
            Horizontal Poster
          </label>
          <FileUpload type="horizontalPoster" onFileSelect={handleFileUpload} />
        </div>
      </div>

      {/* Other Images Upload */}
      <div className="mb-4">
        <label htmlFor="otherImages" className="block text-sm font-medium text-gray-200">
          Other Images
        </label>
        <FileUpload type="otherImages" onFileSelect={handleFileUpload} />
        <div className="mt-4 flex gap-4 flex-wrap">
          {otherImages.map((image, index) => (
            <div key={index} className="group relative w-24 h-24 border rounded-lg">
              <img
                src={typeof image === 'string' ? image : URL.createObjectURL(image)}
                alt={`Other Image ${index + 1}`}
                className="w-full h-full object-cover group-hover:opacity-50 rounded-lg"
              />
              <button 
                onClick={() => handleRemoveImage(index)} 
                className="hidden group-hover:flex absolute top-8 left-10 text-3xl text-gray-200"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Trailer URL */}
      <div className="mb-4">
        <label htmlFor="trailer" className="block text-sm font-medium text-gray-200">
          Trailer URL
        </label>
        <input
          type="text"
          id="trailer"
          value={trailer}
          onChange={(e) => onTrailerChange(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-[rgb(44,44,44)] text-gray-100 border border-gray-200 rounded-md"
        />
      </div>

      {/* Other Videos */}
      <div className="mb-4">
        <label htmlFor="otherVideos" className="block text-sm font-medium text-gray-200">
          Other Videos
        </label>
        <button
          onClick={() => onVideosChange([...videos, ''])}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
        >
          Add Video
        </button>
        {videos.map((video, index) => (
          <input
            key={index}
            type="text"
            value={video}
            onChange={(e) => {
              const newVideos = [...videos];
              newVideos[index] = e.target.value;
              onVideosChange(newVideos);
            }}
            className="mt-1 block w-full px-3 py-2 bg-[rgb(44,44,44)] text-gray-100 border border-gray-200 rounded-md"
            placeholder="Video URL"
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={onPrev}
        className="bg-gray-500 text-white px-4 py-2 rounded mr-4 mb-5"
      >
        Previous
      </button>
      <button
        onClick={onSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-4 mb-5"
      >
        {isEditMode ? "Update Movie" : "Submit"}
      </button>
    </div>
  );
};

export default Part4;