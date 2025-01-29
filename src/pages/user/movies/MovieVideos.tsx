// import React, { useState } from "react";

// const MovieVideos: React.FC = () => {
//   const movieData = {
//     videos: {
//       trailer: "https://www.youtube.com/embed/6LiKKFZyhRU",
//       others: [
//         "https://www.youtube.com/embed/bnBWYvaDWKA",
//         "https://www.youtube.com/embed/sD0NjbwqlYw",
//         "https://www.youtube.com/embed/HoBj23EH9K8",
//       ],
//     },
//   };

//   const [currentVideo, setCurrentVideo] = useState(movieData.videos.trailer);

//   return (
//     <div className="min-h-screen text-white p-6">
//       <h1 className="text-4xl font-bold mb-6">Movie Videos</h1>

//       {/* Main Video Player */}
//       <div className="mb-8">
//         <iframe
//           className="w-full h-[20rem] md:h-[30rem] rounded-lg shadow-lg"
//           src={currentVideo}
//           title="Movie Video Player"
//           allowFullScreen
//         ></iframe>
//       </div>

//       {/* Other Videos Section */}
//       <h2 className="text-2xl font-semibold mb-4">More Videos</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {movieData.videos.others.map((video, index) => (
//           <div
//             key={index}
//             className="cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
//             onClick={() => setCurrentVideo(video)}
//           >
//             {/* YouTube Thumbnail */}
//             <img
//               src={`https://img.youtube.com/vi/${video.split("/embed/")[1]}/0.jpg`}
//               alt={`Video ${index + 1}`}
//               className="w-full h-[10rem] object-cover"
//             />
//             <div className="p-2 bg-gray-800">
//               <p className="text-sm font-semibold text-center">Play Video {index + 1}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MovieVideos;


// import React, { useState } from "react";

// const MovieVideos: React.FC = () => {
//   const movieData = {
//     videos: {
//       trailer: "https://www.youtube.com/embed/6LiKKFZyhRU",
//       others: [
//         "https://www.youtube.com/embed/bnBWYvaDWKA",
//         "https://www.youtube.com/embed/sD0NjbwqlYw",
//         "https://www.youtube.com/embed/HoBj23EH9K8",
//       ],
//     },
//   };

//   const [currentVideo, setCurrentVideo] = useState(movieData.videos.trailer);

//   return (
//     <div className="min-h-screen text-white p-6">
//       <h1 className="text-4xl font-bold mb-6">Movie Videos</h1>

//       {/* Main Video Player */}
//       <div className="mb-8">
//         <iframe
//           className="w-full h-[20rem] md:h-[30rem] rounded-lg shadow-lg"
//           src={currentVideo}
//           title="Movie Video Player"
//           allowFullScreen
//         ></iframe>
//       </div>

//       {/* Trailer Button */}
//       <div className="flex justify-center mb-6">
//         {currentVideo !== movieData.videos.trailer && (
//           <button
//             onClick={() => setCurrentVideo(movieData.videos.trailer)}
//             className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700"
//           >
//             Play Trailer
//           </button>
//         )}
//       </div>

//       {/* Other Videos Section */}
//       <h2 className="text-2xl font-semibold mb-4">More Videos</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {movieData.videos.others.map((video, index) => (
//           <div
//             key={index}
//             className="cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
//             onClick={() => setCurrentVideo(video)}
//           >
//             {/* YouTube Thumbnail */}
//             <img
//               src={`https://img.youtube.com/vi/${video.split("/embed/")[1]}/0.jpg`}
//               alt={`Video ${index + 1}`}
//               className="w-full h-[10rem] object-cover"
//             />
//             <div className="p-2 bg-gray-800">
//               <p className="text-sm font-semibold text-center">Play Video {index + 1}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MovieVideos;




// import React, { useState } from "react";

// const MovieVideos: React.FC = () => {
//   const movieData = {
//     videos: {
//       trailer: "https://www.youtube.com/embed/6LiKKFZyhRU",
//       others: [
//         "https://www.youtube.com/embed/bnBWYvaDWKA",
//         "https://www.youtube.com/embed/sD0NjbwqlYw",
//         "https://www.youtube.com/embed/orxCH7LzJ9c",
//         "https://www.youtube.com/embed/57JFpCc23k0",
//         "https://www.youtube.com/embed/7X2TAY0U0LI",
//       ],
//     },
//   };

//   const [activeVideo, setActiveVideo] = useState<string | null>(null);

//   return (
//     <div className="min-h-screen text-white p-6">
//         <div className='mb-4 flex flex-col gap-1'>
//           <span className="text-white text-5xl font-bold font-['Gelasio']">Joker</span>
//         </div>
//       {/* Trailer Section */}
//       <div className="mb-8">
//         <iframe
//           className="w-full h-[20rem] md:h-[30rem] rounded-lg shadow-lg"
//           src={movieData.videos.trailer}
//           title="Movie Trailer"
//           allowFullScreen
//           onError={(e) => {
//             e.currentTarget.src = ""; // Clear the iframe if video fails
//             alert("This video is unavailable. Please try another.");
//           }}
//         ></iframe>
//       </div>

//       {/* Other Videos Section */}
//       <h2 className="text-2xl font-semibold mb-4">More Videos</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {movieData.videos.others.map((video, index) => (
//           <div
//             key={index}
//             className={`relative transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl ${
//               activeVideo === video ? "col-span-2 row-span-2 scale-105" : ""
//             }`}
//           >
//             {activeVideo === video ? (
//               // If this video is active, display it as an iframe
//               <iframe
//                 className="w-full h-[20rem] md:h-[25rem] rounded-lg"
//                 src={video}
//                 title={`Video ${index + 1}`}
//                 allowFullScreen
//                 onError={(e) => {
//                     e.currentTarget.src = ""; // Clear the iframe if video fails
//                     alert("This video is unavailable. Please try another.");
//                   }}
//               ></iframe>
//             ) : (
//               // Default video card
//               <div
//                 onClick={() => setActiveVideo(video)}
//                 className="cursor-pointer overflow-hidden"
//               >
//                 <img
//                   src={`https://img.youtube.com/vi/${video.split("/embed/")[1]}/0.jpg`}
//                   alt={`Video ${index + 1}`}
//                   className="w-full h-[10rem] object-cover rounded-lg"
//                 />
//                 <div className="p-2 bg-gray-800">
//                   <p className="text-sm font-semibold text-center">
//                     Play Video {index + 1}
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MovieVideos;



// import React, { useState } from "react";

// const MovieVideos: React.FC = () => {
//   const movieData = {
//     videos: {
//       trailer: "https://www.youtube.com/embed/6LiKKFZyhRU",
//       others: [
//         "https://www.youtube.com/embed/bnBWYvaDWKA",
//         "https://www.youtube.com/embed/sD0NjbwqlYw",
//         "https://www.youtube.com/embed/orxCH7LzJ9c",
//         "https://www.youtube.com/embed/57JFpCc23k0",
//         "https://www.youtube.com/embed/7X2TAY0U0LI",
//         "https://youtu.be/DuH3VpwRWDM?si=rF3DAZdFMHyk1ELf",
//         "https://youtu.be/KZZLqoRuuHw?si=2MTJ_cs_z1tDf7VR"
//       ],
//     },
//   };

//   const [activeVideo, setActiveVideo] = useState<string | null>(null);

//   // Function to extract video ID from embed URL or regular YouTube URL
//   const getVideoId = (url: string) => {
//     let videoId = "";
//     const embedMatch = url.match(/(?:https:\/\/www\.youtube\.com\/embed\/)([^\/?]+)/);
//     const standardMatch = url.match(/(?:https:\/\/youtu\.be\/)([^\/?]+)/);

//     if (embedMatch) {
//       videoId = embedMatch[1];
//     } else if (standardMatch) {
//       videoId = standardMatch[1];
//     }

//     return videoId;
//   };

//   return (
//     <div className="min-h-screen text-white p-6">
//       <div className="mb-4 flex flex-col gap-1">
//         <span className="text-white text-5xl font-bold font-['Gelasio']">Joker</span>
//       </div>
      
//       {/* Trailer Section */}
//       <div className="mb-8">
//         <iframe
//           className="w-full h-[20rem] md:h-[30rem] rounded-lg shadow-lg"
//           src={movieData.videos.trailer}
//           title="Movie Trailer"
//           allowFullScreen
//           onError={(e) => {
//             e.currentTarget.src = ""; // Clear the iframe if video fails
//             alert("This video is unavailable. Please try another.");
//           }}
//         ></iframe>
//       </div>

//       {/* Other Videos Section */}
//       <h2 className="text-2xl font-semibold mb-4">More Videos</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {movieData.videos.others.map((video, index) => {
//           const videoId = getVideoId(video);
//           return (
//             <div
//               key={index}
//               className={`relative transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl ${
//                 activeVideo === video ? "col-span-2 row-span-2 scale-105" : ""
//               }`}
//             >
//               {activeVideo === video ? (
//                 // If this video is active, display it as an iframe
//                 <iframe
//                   className="w-full h-[20rem] md:h-[25rem] rounded-lg"
//                   src={video}
//                   title={`Video ${index + 1}`}
//                   allowFullScreen
//                   onError={(e) => {
//                     e.currentTarget.src = ""; // Clear the iframe if video fails
//                     alert("This video is unavailable. Please try another.");
//                   }}
//                 ></iframe>
//               ) : (
//                 // Default video card
//                 <div
//                   onClick={() => setActiveVideo(video)}
//                   className="cursor-pointer overflow-hidden"
//                 >
//                   <img
//                     src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
//                     alt={`Video ${index + 1}`}
//                     className="w-full h-[10rem] object-cover rounded-lg"
//                   />
//                   <div className="p-2 bg-gray-800">
//                     <p className="text-sm font-semibold text-center">
//                       Play Video {index + 1}
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default MovieVideos;



import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { useParams } from "react-router-dom";
import { fetchMoviesById } from "../../../redux/slices/user/movieSlice";

const MovieVideos: React.FC = () => {
  const {selectedMovie} = useAppSelector((state)=> state.movie)
  const {id} = useParams();
  const dispatch = useAppDispatch();
  useEffect(()=>{
    if(id) dispatch(fetchMoviesById(id))
  },[dispatch])
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const convertToEmbedUrl = (url: string) => {
    if (url.includes("youtu.be")) {
      const videoId = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  };


  const getVideoId = (url: string) => {
    let videoId = "";
    const embedMatch = url.match(/(?:https:\/\/www\.youtube\.com\/embed\/)([^\/?]+)/);
    const standardMatch = url.match(/(?:https:\/\/youtu\.be\/)([^\/?]+)/);

    if (embedMatch) {
      videoId = embedMatch[1];
    } else if (standardMatch) {
      videoId = standardMatch[1];
    }

    return videoId;
  };
  const trailerId = getVideoId(selectedMovie?.videos.trailer|| '');
  const embedUrl = convertToEmbedUrl(selectedMovie?.videos.trailer|| '');


  return (
    <div className="min-h-screen text-white p-6">
      <div className="mb-4 flex flex-col gap-1">
        <span className="text-white text-5xl font-bold font-['Gelasio']">Joker</span>
      </div>
      
      {/* Trailer Section */}
        <div className="mb-8">
          <iframe
            className="w-full h-[20rem] md:h-[30rem] rounded-lg shadow-lg"
            src={embedUrl}
            title="Movie Trailer"
            allowFullScreen
            onError={(e) => {
              e.currentTarget.src = "";
              alert("This video is unavailable. Please try another.");
            }}
          ></iframe>
        </div>

      {/* Other Videos Section */}
      {
        selectedMovie && selectedMovie.videos.others.length>0 && (
          <>
            <h2 className="text-2xl font-semibold mb-4">More Videos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedMovie?.videos.others.map((video, index) => {
                const videoId = getVideoId(video);
                const embedUrl = convertToEmbedUrl(video);
                return (
                  <div
                    key={index}
                    className={`relative transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl ${
                      activeVideo === video ? "col-span-2 row-span-2 scale-105" : ""
                    }`}
                  >
                    {activeVideo === video ? (
                      <iframe
                        className="w-full h-[20rem] md:h-[25rem] rounded-lg"
                        src={embedUrl}
                        title={`Video ${index + 1}`}
                        allowFullScreen
                        onError={(e) => {
                          e.currentTarget.src = "";
                          alert("This video is unavailable. Please try another.");
                        }}
                      ></iframe>
                    ) : (
                      <div
                        onClick={() => setActiveVideo(video)}
                        className="cursor-pointer h-[10rem] overflow-hidden"
                      >
                        <img
                          src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
                          alt={`Video ${index + 1}`}
                          className="w-full h-[10rem] object-cover rounded-lg"
                        />
                        {/* <div className="p-2 bg-gray-800">
                          <p className="text-sm font-semibold text-center">
                            Play Video {index + 1}
                          </p>
                        </div> */}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )
      }
    </div>
  );
};

export default MovieVideos;
