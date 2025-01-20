import { useState } from 'react';

interface Part1Props {
  onNext: () => void;
}

const Part1 = ({ onNext }: Part1Props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [duration, setDuration] = useState(30);

  const handleSubmit = () => {
    // Validate
    onNext();
  };

  return (
    <div>
      <h2 className="text-xl text-gray-300 font-bold mb-4">Add Movie Information</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-200">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-[rgb(44,44,44)] text-gray-100 border border-gray-200 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-200">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 w-full p-2 px-3 py-2 bg-[rgb(44,44,44)] text-gray-100 border border-gray-200 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="releaseDate" className="block text-sm font-medium text-gray-200">Release Date</label>
        <input
          type="date"
          id="releaseDate"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
          className="mt-1 w-full p-2 px-3 py-2 bg-[rgb(44,44,44)] text-gray-100 border border-gray-200 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="duration" className="block text-sm font-medium text-gray-200">Duration (min)</label>
        <input
          type="number"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="mt-1 w-full p-2 px-3 py-2 bg-[rgb(44,44,44)] text-gray-100 border border-gray-200 rounded-md"
        />
      </div>
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
    </div>
  );
};

export default Part1;
