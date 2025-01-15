import React, { useState, useEffect } from 'react';
import { Accept, useDropzone } from 'react-dropzone';
import { FaPlusCircle } from 'react-icons/fa';
import { FaDeleteLeft, FaSackXmark } from 'react-icons/fa6';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { submitCelebrityRequest } from '../../api/userApis';

interface ModalProps {
  onClose: () => void;
}

const CelebrityRequestModal: React.FC<ModalProps> = ({ onClose }) => {
  const [image, setImage] = useState<File | null>(null);
  const dispatch = useAppDispatch();
  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'application/pdf': ['.pdf'], 'image/*': ['.jpg', '.jpeg', '.png'] } as unknown as Accept,
    onDrop: (acceptedFiles) => {
      setImage(acceptedFiles[0]);
    },
  });

  const handleSubmit = async() => {
    const formData = new FormData();
    if (image) formData.append('proofDocument', image);

    try{
      await submitCelebrityRequest(formData);
      console.log("Genre updated")
      onClose();
    }catch(error){
      console.error('Error:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-40">
      <div className="bg-[rgb(44,44,44)] p-6 rounded-lg shadow-lg lg:w-1/2 w-96">
        <h2 className="text-gray-100 text-xl font-bold mb-4">Celebrity Request</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-200">Submit a proof document</label>
          <div {...getRootProps()} className="border-dashed border-2 p-5 mt-2 py-28 text-center">
            <input {...getInputProps()} />
            {image ? (
              <div className='flex justify-center items-center gap-3'>
                <p className="text-gray-300">{image.name}</p>
                <FaDeleteLeft className='text-2xl text-gray-400 cursor-pointer' onClick={()=>setImage(null)}/>
              </div>
            ) : (
              <div className='flex flex-col justify-center items-center gap-3'>
                <FaPlusCircle className='text-3xl text-gray-400'/>
                <p className="text-gray-400">Drag & drop an image or pdf here, or click to select one</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end gap-5 pr-2">
          <button onClick={onClose} className="border text-white hover:border-[#5cfef0] hover:text-[#5cfef0] px-4 py-2 rounded">Cancel</button>
          <button onClick={handleSubmit} className="border text-white hover:border-[#5cfef0] hover:text-[#5cfef0] px-4 py-2 rounded">Sent Request</button>
        </div>
      </div>
    </div>
  );
};

export default CelebrityRequestModal;