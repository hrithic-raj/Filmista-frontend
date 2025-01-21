import { useEffect, useState } from "react";
import IGenre from "../../../interfaces/GenreInterface";
import ILanguage from "../../../interfaces/LanguageInterface";
import SearchBox from "../SearchBox";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { fetchAllGenres } from "../../../redux/slices/admin/genreManagementSlice";
import { fetchAllLanguages } from "../../../redux/slices/admin/languageManagementSlice";

interface Part2Props {
  onNext: () => void;
  onPrev: () => void;
  onGenreChange: (newGenres: IGenre[]) => void;
  onLanguageChange: (newGenres: ILanguage[]) => void;
}

const Part2 = ({ onNext, onPrev, onGenreChange, onLanguageChange }: Part2Props) => {
  const genresData = useAppSelector((state)=>state.genreManagement.genres);
  const languagesData = useAppSelector((state)=>state.languageManagement.languages);
  // const [selectedGenres, setSelectedGenres] = useState<IGenre[]>([]);
  // const [selectedLanguages, setSelectedLanguages] = useState<ILanguage[]>([]);
  const dispatch = useAppDispatch();
  const {genres:selectedGenres, languages:selectedLanguages}= useAppSelector((state) => state.movieManagement);
  
  useEffect(()=>{
    dispatch(fetchAllGenres());
    dispatch(fetchAllLanguages());
  },[dispatch]);
  
  const addGenre = (genre: IGenre) => {
    if (!selectedGenres.find((g) => g._id === genre._id)) {
      onGenreChange([...selectedGenres, genre]);
    }
  };

  const removeGenre = (genreId: string) => {
    onGenreChange(selectedGenres.filter((genre) => genre._id !== genreId));
  };

  const addLanguage = (language: ILanguage) => {
    if (!selectedLanguages.find((l) => l._id === language._id)) {
      onLanguageChange([...selectedLanguages, language]);
    }
  };

  const removeLanguage = (languageId: string) => {
    onLanguageChange(
      selectedLanguages.filter((language) => language._id !== languageId)
    );
  };

  return (
    <div>
      <h2 className="text-xl text-gray-300 font-bold mb-4">
        Select Genres and Languages
      </h2>
      <div className="flex flex-col lg:flex-row w-full lg:space-x-5 space-x-0 lg:space-y-0 space-y-3">

        {/* Genres*/}
        <div className="mb-4 w-1/2">
          <h3 className="block text-sm font-medium text-gray-200">Genres</h3>
          <SearchBox
            data={genresData && genresData.map(({ _id, genre, poster }) => ({
              _id,
              genre,
              poster,
            }))}
            onSelect={addGenre}
            placeholder="Search for genres..."
          />
          <div className="mt-2">
            {selectedGenres && selectedGenres.map((genre) => (
              <div
                key={genre._id}
                className="flex items-center mb-2 p-2 bg-[rgb(44,44,44)] rounded"
              >
                <img
                  src={genre.poster}
                  alt={genre.genre}
                  className="w-8 h-10 mr-3 rounded"
                />
                <span className="text-gray-200">{genre.genre}</span>
                <button
                  onClick={() => removeGenre(genre._id)}
                  className="ml-auto text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex w-0.5 border-l border-dotted border-gray-400"></div>

        {/* Languages */}
        <div className="mb-4 w-1/2">
          <h3 className="block text-sm font-medium text-gray-200">Languages</h3>
          <SearchBox
            data={languagesData && languagesData.map(({ _id, language, poster }) => ({
              _id,
              language,
              poster,
            }))}
            onSelect={addLanguage}
            placeholder="Search for languages..."
          />
          <div className="mt-2">
            {selectedLanguages && selectedLanguages.map((language) => (
              <div
                key={language._id}
                className="flex items-center mb-2 p-2 bg-[rgb(44,44,44)] rounded"
              >
                <img
                  src={language.poster}
                  alt={language.language}
                  className="w-10 h-8 mr-3 rounded object-cover"
                />
                <span className="text-gray-200">{language.language}</span>
                <button
                  onClick={() => removeLanguage(language._id)}
                  className="ml-auto text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={onPrev}
        className="bg-gray-500 text-white px-4 py-2 rounded mr-4"
      >
        Previous
      </button>
      <button
        onClick={onNext}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Part2;