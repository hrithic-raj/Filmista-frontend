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
  // const trailerId = getVideoId(selectedMovie?.videos.trailer|| '');
  const embedUrl = convertToEmbedUrl(selectedMovie?.videos.trailer|| '');


  return (
    <div className="min-h-screen text-white p-6">
      <div className="mb-4 flex flex-col gap-1">
        <span className="text-white text-5xl font-bold font-['Gelasio']">{selectedMovie?.title}</span>
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
