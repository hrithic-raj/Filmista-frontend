import { useState } from 'react';
import Part1 from '../../../components/Admin/movies/Part1';
import Part2 from '../../../components/Admin/movies/Part2';
import Part3 from '../../../components/Admin/movies/Part3';
import Part4 from '../../../components/Admin/movies/Part4';


const AddMovieForm = () => {
  const [currentPart, setCurrentPart] = useState(1);

  const handleNext = () => {
    setCurrentPart(currentPart + 1);
  };

  const handlePrev = () => {
    setCurrentPart(currentPart - 1);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#2c2c2c] rounded-lg shadow-md">
        <h1 className='text-3xl font-fredoka text-center text-gray-200'>ADD MOVIE</h1>
        <div className='mt-5 mb-5 flex justify-between px-2 space-x-5'>
            <div className={`w-1/4 h-5 rounded-lg ${currentPart >= 1 ? 'bg-[#5CFEF0]': 'bg-white'}`}></div>
            <div className={`w-1/4 h-5 rounded-lg ${currentPart === 2 || currentPart === 3 ||  currentPart === 4 ? 'bg-[#5CFEF0]': 'bg-white'}`}></div>
            <div className={`w-1/4 h-5 rounded-lg ${currentPart === 3 || currentPart === 4 ? 'bg-[#5CFEF0]': 'bg-white'}`}></div>
            <div className={`w-1/4 h-5 rounded-lg ${currentPart === 4 ? 'bg-[#5CFEF0]': 'bg-white'}`}></div>
        </div>
      {currentPart === 1 && <Part1 onNext={handleNext} />}
      {currentPart === 2 && <Part2 onNext={handleNext} onPrev={handlePrev} />}
      {currentPart === 3 && <Part3 onNext={handleNext} onPrev={handlePrev} />}
      {currentPart === 4 && <Part4 onPrev={handlePrev} />}
    </div>
  );
};

export default AddMovieForm;
