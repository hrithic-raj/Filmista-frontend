import React, { useState, useEffect } from 'react';
import { Accept, useDropzone } from 'react-dropzone';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { addGenre, updateGenre } from '../../../redux/slices/admin/genreManagementSlice';
import { FaPlusCircle } from 'react-icons/fa';
import { FaDeleteLeft, FaSackXmark } from 'react-icons/fa6';
import ILanguage from '../../../interfaces/LanguageInterface';
import { addLanguage, updateLanguage } from '../../../redux/slices/admin/languageManagementSlice';

interface AdminLanguageModalProps {
    language: ILanguage | null;
    onClose: () => void;
}

const AdminLanguageModal: React.FC<AdminLanguageModalProps> = ({ language, onClose }) => {
  const [languageName, setLanguageName] = useState(language ? language.language : '');
  const [isArchive, setIsArchive] = useState(language ? language.isArchive : false);
  const [image, setImage] = useState<File | null>(null);
  const dispatch = useAppDispatch();
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*' as unknown as Accept,
    onDrop: (acceptedFiles) => {
      setImage(acceptedFiles[0]);
    },
  });
  useEffect(() => {
    if (language) {
      setLanguageName(language.language);
      setIsArchive(language.isArchive);
      setImage(null);
    }
  }, [language]);

  const handleSubmit = async() => {
    const jsonPayload = JSON.stringify({
        language: languageName,
        isArchive: isArchive,
    })

    const formData = new FormData();
    formData.append('data', jsonPayload);
    if (image) formData.append('poster', image);

    try{
      onClose();
      if(language){
        await dispatch(updateLanguage({langId: language._id, formData})).unwrap();
        console.log("Language updated");
      }else{
        await dispatch(addLanguage(formData)).unwrap();
        console.log("Language added");
      }
    }catch(error){
      console.error('Error:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-40">
      <div className="bg-[rgb(44,44,44)] p-6 rounded-lg shadow-lg lg:w-2/3 w-96">
        <h2 className="text-gray-100 text-xl font-bold mb-4">{language ? 'Edit Language' : 'Add Language'}</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-200">Language Name</label>
          <input
            type="text"
            value={languageName}
            onChange={(e) => setLanguageName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-[rgb(44,44,44)] text-gray-100 border border-gray-200 rounded-md"
          />
        </div>
        <div className="flex items-center gap-3 mb-4">
          <input
            type="checkbox"
            checked={isArchive}
            onChange={(e) => setIsArchive(e.target.checked)}
            className="mt-1 w-5 h-5"
          />
          <label className="block text-sm font-medium text-gray-200">Archive</label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-200">Poster Image</label>
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
                <p className="text-gray-400">Drag & drop an image here, or click to select one</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end gap-5 pr-2">
          <button onClick={onClose} className="border text-white hover:border-[#5cfef0] hover:text-[#5cfef0] px-4 py-2 rounded">Cancel</button>
          <button onClick={handleSubmit} className="border text-white hover:border-[#5cfef0] hover:text-[#5cfef0] px-4 py-2 rounded">Save</button>
        </div>
      </div>
    </div>
  );
};

export default AdminLanguageModal;
