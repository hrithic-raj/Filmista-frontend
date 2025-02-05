import React, { useState, useRef } from 'react';
import ICelebrity from '../../../interfaces/CelebrityInterface';
import { CastMember } from '../../../interfaces/MovieInterface';
import SearchBox from '../SearchBox';
import uploadFileToCloudinary from '../../../utils/uploadFileToCloudinary';

interface Part3Props {
  onNext: () => void;
  onPrev: () => void;
  celebrities: ICelebrity[];
  onCastChange: (newCast: CastMember[]) => void;
  castMembers: CastMember[];
}

const Part3: React.FC<Part3Props> = ({ onNext, onPrev, celebrities, castMembers, onCastChange }) => {
  const [selectedCelebrity, setSelectedCelebrity] = useState<ICelebrity | null>(null);
  const [name, setName] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [celebrityId, setCelebrityId] = useState('');
  const [profilePicture, setProfilePicture] = useState<string>('');
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const addCastMember = () => {
    const newCast = {
      name,
      role,
      profilePicture,
      celebrityId
    };
    onCastChange([...castMembers, newCast]);
    resetForm();
  };

  const updateCastMember = () => {
    if (editIndex !== null) {
      const updatedCastMembers = [...castMembers];
      updatedCastMembers[editIndex] = {
        ...updatedCastMembers[editIndex],
        name,
        role,
        profilePicture,
        celebrityId
      };
      onCastChange(updatedCastMembers);
      resetForm();
    }
  };

  const clearCastMember = () => {
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setRole('');
    setProfilePicture('');
    setSelectedCelebrity(null);
    setCelebrityId('');
    setEditIndex(null);
  };

const handleCelebritySelect = (celebrity: ICelebrity) => {
  setSelectedCelebrity(celebrity);
  setName(celebrity.userId.name);
  setProfilePicture(celebrity.userId.profilePicture || 'https://m.media-amazon.com/images/M/MV5BODQ2NTlkYjItZTIyNi00ZTM0LTk3OTctNzkzYWI1ZWI0ODEyXkEyXkFqcGc@._V1_.jpg');
  setCelebrityId(celebrity._id!);
};

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = await uploadFileToCloudinary(file);
      setProfilePicture(imageUrl);
    }
  };

  const handleRemoveCast = async (index: number) => {
    onCastChange(castMembers.filter((_, i) => i !== index));
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleEditCast = (index: number) => {
    const castToEdit = castMembers[index];
    setEditIndex(index);
    setName(castToEdit.name || '');
    setRole(castToEdit.role);
    setProfilePicture(castToEdit.profilePicture || ''); // Default to empty string
    setCelebrityId(castToEdit.celebrityId || '');
  };

  return (
    <div>
      <h2 className="text-xl text-gray-300 font-bold mb-4">Add/Edit Cast Members</h2>
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
          {profilePicture && (
            <button
              onClick={() => setProfilePicture('')}
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
                disabled={!!selectedCelebrity}
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
                onClick={editIndex !== null ? updateCastMember : addCastMember}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                {editIndex !== null ? 'Save Changes' : 'Add Cast'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex gap-4 flex-wrap">
        {castMembers.map((cast, index) => (
          <div key={index} className="group relative flex flex-col p-5 w-[20%] lg:w-[15%] items-center border rounded-lg mb-2">
            <div className="w-10 h-10 rounded-full bg-gray-200 group-hover:opacity-30">
              <img
                src={cast.profilePicture}
                alt={cast.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <span className="ml-2 text-gray-200 group-hover:opacity-50">
              {cast.name}
            </span>
            <span className="ml-2 text-gray-200 group-hover:opacity-50">
              {cast.role}
            </span>
            <div className='hidden group-hover:flex flex-col gap-3 absolute bottom-[30%] left-[25%]'>
              <button
                onClick={() => handleRemoveCast(index)}
                className="bg-[#5cfef0] p-2 rounded-lg text-sm text-black"
              >
                Remove
              </button>
              <button
                onClick={() => handleEditCast(index)}
                className="bg-[#5cfef0] p-2 rounded-lg text-sm text-black"
              >
                Edit
              </button>
            </div>
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
