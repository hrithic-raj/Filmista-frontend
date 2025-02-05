import { useAppSelector } from '../../../hooks/reduxHooks';

interface Part1Props {
  onNext: () => void;
  onTitleChange:(newTitle: string)=> void;
  onDescriptionChange:(newDescription: string)=> void;
  onReleaseDateChange:(newReleaseDate: string)=> void;
  onDurationChange:(newDuration: string)=> void;
}

const Part1 = ({ onNext, onTitleChange, onDescriptionChange, onReleaseDateChange, onDurationChange }: Part1Props) => {
  const {title, description, releaseDate, duration } = useAppSelector((state) => state.movieManagement);
  const handleSubmit = () => {
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
          onChange={(e) => onTitleChange(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-[rgb(44,44,44)] text-gray-100 border border-gray-200 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-200">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => onDescriptionChange(e.target.value)}
          className="mt-1 w-full p-2 px-3 py-2 bg-[rgb(44,44,44)] text-gray-100 border border-gray-200 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="releaseDate" className="block text-sm font-medium text-gray-200">Release Date</label>
        <input
          type="date"
          id="releaseDate"
          value={releaseDate}
          onChange={(e) => onReleaseDateChange(e.target.value)}
          className="mt-1 w-full p-2 px-3 py-2 bg-[rgb(44,44,44)] text-gray-100 border border-gray-200 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="duration" className="block text-sm font-medium text-gray-200">Duration (min)</label>
        <input
          type="text"
          id="duration"
          value={duration}
          onChange={(e) => onDurationChange(e.target.value.toString())}
          className="mt-1 w-full p-2 px-3 py-2 bg-[rgb(44,44,44)] text-gray-100 border border-gray-200 rounded-md"
        />
      </div>
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
    </div>
  );
};

export default Part1;
