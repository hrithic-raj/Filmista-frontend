import React, { useEffect, useState } from 'react';
import AdminLanguageCard from '../../../components/Admin/cards/AdminLanguageCard';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { useNavigate } from 'react-router-dom';
import LoadingPage from '../../../components/LoadingPage';
import { FaPlusCircle } from 'react-icons/fa';
import ILanguage from '../../../interfaces/LanguageInterface';
import { archiveLanguage, fetchAllLanguages } from '../../../redux/slices/admin/languageManagementSlice';
import AdminLanguageModal from '../../../components/Admin/modals/AdminLanguageModal';


const AdminManageLanguage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [showArchives, setShowArchives] = useState(false);
  const [showAddOrEditLanguage, setShowAddOrEditLanguage] = useState(false);
  const [editingLanguage, setEditingLanguage] = useState<ILanguage | null>(null); // To hold the genre being edited
  const { languages, loading } = useAppSelector((state) => state.languageManagement);

  useEffect(() => {
    dispatch(fetchAllLanguages());
  }, [dispatch]);

  const handleViewLanguage = (id: string) => {
    navigate(`/admin/language/${id}`);
  };

  const handleAddLanguage = () => {
    setEditingLanguage(null);
    setShowAddOrEditLanguage(true);
  };

  const handleEditLanguage = (language: ILanguage) => {
    setEditingLanguage(language);
    setShowAddOrEditLanguage(true);
  };

  const handleArchiveLanguage = (id: string) => {
    dispatch(archiveLanguage(id));
  };

  const maxCount = Math.max(...languages.map((language) => language.movies.length + 5));

  // if(loading) return <LoadingPage/>
  return (
    <div className="relative container w-full mx-auto px-4 sm:px-6 lg:px-8">
      {/* Blur Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <LoadingPage />
        </div>
      )}
      <div className={`relative ${loading ? "pointer-events-none" : ""}`}>
        <div className="grid grid-cols-1 lg:grid-rows-2 lg:grid-cols-[1fr,3fr] max-h-1/2 gap-4 mb-8">
          <div className="p-7 bg-[rgb(44,44,44)] shadow rounded-lg hover:shadow-md transition">
            <h2 className="text-xl text-center lg:text-left font-semibold text-gray-300">
              Total Language
            </h2>
            <p className="text-2xl text-center lg:text-left font-bold text-gray-100">
              {languages?.length}
            </p>
          </div>
          <div
            onClick={handleAddLanguage}
            className="flex flex-col gap-2 p-7 lg:order-3 bg-[rgb(44,44,44)] justify-center items-center shadow rounded-lg hover:cursor-pointer hover:shadow-md transition"
          >
            <FaPlusCircle className="text-3xl text-gray-200" />
            <h2 className="text-2xl font-semibold text-gray-200 select-none">
              Add Language
            </h2>
          </div>
          <div className="w-full max-h-[330px] lg:max-h-[330px] bg-[rgb(44,44,44)] shadow rounded-lg hover:shadow-md transition row-span-2 mx-auto font-sans overflow-y-auto custom-scrollbar">
            <h1 className="text-2xl mt-2 font-bold mb-4 text-center text-gray-300">
              Language and Movie Counts
            </h1>
            <div className="space-y-4 pb-5">
              {languages.map((language) => (
                <div key={language._id} className="flex items-center pr-5">
                  <span className="w-[20%] text-sm text-center font-medium text-blue-600">
                    {language.language}
                  </span>
                  <div className="relative flex-1 h-4 bg-gray-200 rounded-lg overflow-hidden z-10">
                    <div
                      className="absolute z-10 top-0 left-0 h-full bg-yellow-400 transition-all duration-500"
                      style={{
                        width: `${(language.movies.length / maxCount) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="w-[5%] text-sm text-gray-300 text-right">
                    {language.movies.length}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <h3 className="mb-5 font-fredoka text-2xl text-white">Language</h3>
        <div className="lg:w-[20%] w-[30%] flex justify-between my-5 gap-3">
          <button
            onClick={() => setShowArchives(false)}
            className={`border w-full h-10 px-1 flex items-center justify-center rounded-lg text-lg ${
              showArchives
                ? "text-gray-400 border-gray-500"
                : "text-gray-200 border-gray-200"
            }`}
          >
            Languages
          </button>
          <button
            onClick={() => setShowArchives(true)}
            className={`border w-full h-10 px-1 flex items-center justify-center rounded-lg text-lg ${
              showArchives
                ? "text-gray-200 border-gray-200"
                : "text-gray-400 border-gray-500"
            }`}
          >
            Archives
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {!showArchives
            ? languages.map(
                (language) =>
                  !language.isArchive && (
                    <AdminLanguageCard
                      key={language._id}
                      id={language._id}
                      image={language.poster}
                      title={language.language}
                      isArchive={language.isArchive}
                      edit={() => handleEditLanguage(language)}
                      archive={handleArchiveLanguage}
                      view={handleViewLanguage}
                    />
                  )
              )
            : languages.map(
                (language) =>
                  language.isArchive && (
                    <AdminLanguageCard
                      key={language._id}
                      id={language._id}
                      image={language.poster}
                      title={language.language}
                      isArchive={language.isArchive}
                      edit={() => handleEditLanguage(language)}
                      archive={handleArchiveLanguage}
                      view={handleViewLanguage}
                    />
                  )
              )}
        </div>
        {showAddOrEditLanguage && (
          <AdminLanguageModal
            language={editingLanguage}
            onClose={() => setShowAddOrEditLanguage(false)}
          />
        )}
      </div>
    </div>
  );

};

export default AdminManageLanguage;