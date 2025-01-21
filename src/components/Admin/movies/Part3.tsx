import React, { useState, useRef } from 'react';
import hrj from '../../../assets/images/hrjlogo.png';
import ICelebrity from '../../../interfaces/CelebrityInterface';
import { CastMember } from '../../../interfaces/MovieInterface';
import SearchBox from '../SearchBox';

interface Part3Props {
  onNext: () => void;
  onPrev: () => void;
  celebrities: ICelebrity[];
  onCastChange: (newCast: CastMember[]) => void;
  castMembers: CastMember[];
}

const Part3: React.FC<Part3Props> = ({ onNext, onPrev, celebrities, castMembers, onCastChange }) => {
  // const [castMembers, setCastMembers] = useState<CastMember[]>([]);
  const [selectedCelebrity, setSelectedCelebrity] = useState<ICelebrity | null>(null);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const addCastMember = () => {
    const newCast = {
      name,
      role,
      profilePicture,
    };
    onCastChange([...castMembers, newCast]);
    setName('');
    setRole('');
    setProfilePicture('');
    setSelectedCelebrity(null);
  };

  const clearCastMember = () => {
    setName('');
    setRole('');
    setProfilePicture('');
    setSelectedCelebrity(null);
  };
  
  const handleCelebritySelect = (celebrity: ICelebrity) => {
    setSelectedCelebrity(celebrity);
    setName(celebrity.userId.name);
    setProfilePicture(celebrity.userId.profilePicture || hrj);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfilePicture(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };


  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <h2 className="text-xl text-gray-300 font-bold mb-4">Add Cast Members</h2>
      <div className="flex flex-col lg:flex-row space-x-5 mb-5">
        <div className="relative rounded-full lg:w-1/2 lg:h-max w-1/2 h-[200px] self-center border">
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleFileChange}
            ref={fileInputRef}
            disabled={!!selectedCelebrity}
          />

          <div
            onClick={handleImageClick}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 rounded-full cursor-pointer"
          >
            {!profilePicture && (
              <span className="text-white text-3xl">+</span>
            )}
          </div>
          {profilePicture!=='' && (
            <button
              onClick={()=>setProfilePicture('')}
              className="absolute bottom-5 left-[35%] bg-red-500 text-white px-4 py-2 rounded"
            >
              Clear
            </button>
          )}
          <img
            src={profilePicture}
            className="object-cover w-full h-full lg:min-h-[280px] max-h-[280px] rounded-full"
            alt="Profile"
          />
        </div>
        <div className="w-full">
          <SearchBox
            data={celebrities.map((celebrity) => ({
              celebrity,
              _id: celebrity._id || '',
              name: celebrity.userId?.name,
              profilePicture: celebrity.userId?.profilePicture,
            }))}
            onSelect={handleCelebritySelect}
            placeholder="Search for celebrities..."
          />
          <div className="mt-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-[rgb(44,44,44)] text-gray-100 border border-gray-200 rounded-md"
                disabled={!!selectedCelebrity} // Disable name input if a celebrity is selected
              />
            </div>
            <div className="mb-4">
              <label htmlFor="role" className="block text-sm font-medium text-gray-200">
                Role
              </label>
              <input
                type="text"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-[rgb(44,44,44)] text-gray-100 border border-gray-200 rounded-md"
              />
            </div>
            <div className="flex justify-end space-x-3">
              <button
                onClick={clearCastMember}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Clear
              </button>
              <button
                onClick={addCastMember}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add Cast
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex gap-4 flex-wrap">
        {castMembers.map((cast, index) => (
          <div key={index} className="flex flex-col p-5 w-[20%] lg:w-[15%] items-center border rounded-lg mb-2">
            <div className="w-10 h-10 rounded-full bg-gray-200">
              <img
                src={cast.profilePicture}
                alt={cast.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <span className="ml-2 text-gray-200">
              {cast.name}
            </span>
            <span className="ml-2 text-gray-200">
              {cast.role}
            </span>
          </div>
        ))}
      </div>
      <button
        onClick={onPrev}
        className="bg-gray-500 text-white px-4 py-2 rounded mr-4"
      >
        Previous
      </button>
      <button onClick={onNext} className="bg-blue-500 text-white px-4 py-2 rounded">
        Next
      </button>
    </div>
  );
};

export default Part3;
