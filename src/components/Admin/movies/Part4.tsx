// Part4.tsx
import { useState } from 'react';
import FileUpload from '../FileUpload';

const Part4 = ({ onPrev }: { onPrev: () => void }) => {
  const [poster, setPoster] = useState<string>('');
  const [horizontalPoster, setHorizontalPoster] = useState<string>('');
  const [otherImages, setOtherImages] = useState<string[]>([]);
  const [trailer, setTrailer] = useState<string>('');
  const [videos, setVideos] = useState<string[]>([]);

  const handleFileUpload = (type: string, files: string[]) => {
    if (type === 'poster') {
      setPoster(files[0]);
    } else if (type === 'horizontalPoster') {
      setHorizontalPoster(files[0]);
    } else {
      setOtherImages(files);
    }
  };

  const handleVideoUpload = (type: string, url: string) => {
    if (type === 'trailer') {
      setTrailer(url);
    } else {
      setVideos([...videos, url]);
    }
  };

  return (
    <div>
      <h2 className="text-xl text-gray-300 font-bold mb-4">Add Images and Videos</h2>
      <div className="mb-4 flex space-x-4">
        <div className='w-40 h-52 border'>

        </div>
        <div>
            <label htmlFor="poster" className="block text-sm font-medium text-gray-200">Poster</label>
            <FileUpload type="poster" onFileSelect={handleFileUpload} />
        </div>
      </div>
      <div className="mb-4 flex space-x-4">
        <div className='w-52 h-32 border'>

        </div>
        <div>
            <label htmlFor="horizontalPoster" className="block text-sm font-medium text-gray-200">Horizontal Poster</label>
            <FileUpload type="horizontalPoster" onFileSelect={handleFileUpload} />
        </div>
      </div>
      <div className="mb-4 space-y-4">
        <label htmlFor="otherImages" className="block text-sm font-medium text-gray-200">Other Images</label>
        <FileUpload type="otherImages" onFileSelect={handleFileUpload} />
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2">Add Image</button>
      </div>
      <div className="mb-4">
        <label htmlFor="trailer" className="block text-sm font-medium text-gray-200">Trailer URL</label>
        <input
          type="text"
          id="trailer"
          value={trailer}
          onChange={(e) => setTrailer(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-[rgb(44,44,44)] text-gray-100 border border-gray-200 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="otherVideos" className="block text-sm font-medium text-gray-200">Other Videos</label>
        <button onClick={() => setVideos([...videos, ''])} className="bg-blue-500 text-white px-4 py-2 rounded mb-2">Add Video</button>
        {videos.map((video, index) => (
          <input
            key={index}
            type="text"
            value={video}
            onChange={(e) => {
              const newVideos = [...videos];
              newVideos[index] = e.target.value;
              setVideos(newVideos);
            }}
            className="mt-1 block w-full px-3 py-2 bg-[rgb(44,44,44)] text-gray-100 border border-gray-200 rounded-md"
            placeholder="Video URL"
          />
        ))}
      </div>
      <button onClick={onPrev} className="bg-gray-500 text-white px-4 py-2 rounded mr-4 mb-5">Previous</button>
    </div>
  );
};

export default Part4;