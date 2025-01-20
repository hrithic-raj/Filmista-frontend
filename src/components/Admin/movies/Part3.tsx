import { useState } from 'react';
import { Celebrity, CastMember } from '../../../interfaces/MovieInterface';
import SearchBox from '../SearchBox';
import hrj from '../../../assets/images/hrjlogo.png'
interface Part3Props {
  onNext: () => void;
  onPrev: () => void;
}

const Part3 = ({ onNext, onPrev }: Part3Props) => {
  const [castMembers, setCastMembers] = useState<CastMember[]>([]);
  const [selectedCelebrity, setSelectedCelebrity] = useState<Celebrity | null>(null);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const addCastMember = () => {
    const newCast = {
      name,
      role,
      profilePicture: selectedCelebrity?.profilePicture || '',
    };
    setCastMembers([...castMembers, newCast]);
    setName('');
    setRole('');
  };

  const handleCelebritySelect = (celebrity: Celebrity) => {
    setSelectedCelebrity(celebrity);
    setName(celebrity.name); // Autofill name when celebrity is selected
  };

  return (
    <div>
      <h2 className="text-xl text-gray-300 font-bold mb-4">Add Cast Members</h2>
      <div className='flex flex-col lg:flex-row space-x-5 mb-5'>
        <div className='rounded-full lg:w-1/2 lg:h-max w-1/2 h-[200px] self-center border'>
            <img src={hrj} className='object-cover' alt="" />
        </div>
        <div className='w-full'>
            <SearchBox
                onSelect={handleCelebritySelect}
                placeholder="Search for celebrities..."
            />
            <div className="mt-4">
                <div className="mb-4">
                <label htmlFor="role" className="block text-sm font-medium text-gray-200">Name</label>
                <input
                    type="text"
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-[rgb(44,44,44)] text-gray-100 border border-gray-200 rounded-md"
                />
                </div>
                <div className="mb-4">
                <label htmlFor="role" className="block text-sm font-medium text-gray-200">Role</label>
                <input
                    type="text"
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-[rgb(44,44,44)] text-gray-100 border border-gray-200 rounded-md"
                />
                </div>
                <button onClick={addCastMember} className="bg-blue-500 text-white px-4 py-2 rounded">Add Cast</button>
            </div>                                                    
        </div>
      </div>
            <div className="mt-4 flex flex-wrap">
                {castMembers.map((cast, index) => (
                <div key={index} className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-gray-200">
                    <img src={cast.profilePicture} alt={cast.name} className="w-full h-full rounded-full object-cover" />
                    </div>
                    <span className="ml-2">{cast.name} - {cast.role}</span>
                </div>
                ))}
            </div>
      <button onClick={onPrev} className="bg-gray-500 text-white px-4 py-2 rounded mr-4">Previous</button>
      <button onClick={onNext} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
    </div>
  );
};

export default Part3;