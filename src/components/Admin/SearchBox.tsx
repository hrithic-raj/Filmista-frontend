import { useState } from "react";
import ICelebrity from "../../interfaces/CelebrityInterface";

interface SearchBoxProps {
  data: {
    _id: string;
    genre?: string;
    language?: string;
    name?: string;
    profilePicture?: string;
    celebrity?: ICelebrity;
    poster?: string;
  }[];
  onSelect: (item: any) => void;
  placeholder: string;
}

const SearchBox = ({ data, onSelect, placeholder}: SearchBoxProps) => {
  const [query, setQuery] = useState("");

  const filteredData = query
    ? data.filter((item) => {
        const searchFields = [item.genre, item.language, item.name];
        return searchFields.some((field) =>
          field?.toLowerCase().includes(query.toLowerCase())
        );
      })
    : [];

  const handleSelect = (item: any) => {
    if(item.celebrity) onSelect(item.celebrity);
    else onSelect(item);
    setQuery("");
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className=" mt-1 block w-full min-w-1/2 px-3 py-2 bg-[rgb(44,44,44)] text-gray-100 border border-gray-200 rounded-md placeholder:text-gray-200"
      />
      {filteredData.length > 0 && (
        <ul className="absolute w-full mt-2 bg-[rgb(30,30,30)] border border-gray-700 rounded">
          {filteredData.map((item) => (
            <li
              key={item._id}
              className="flex items-center cursor-pointer py-2 px-3 hover:bg-gray-700"
              onClick={() => handleSelect(item)}
            >
              {item.profilePicture || item.poster ? (
                <img
                  src={item.profilePicture || item.poster}
                  alt={item.name || item.genre || item.language}
                  className="w-10 h-8 mr-3 rounded object-cover"
                />
              ) : (
                <div className="w-10 h-8 mr-3 bg-gray-600 flex items-center justify-center rounded">
                  <span className="text-white text-xs">N/A</span>
                </div>
              )}
              <span className="text-gray-200 font-medium">
                {item.name || item.genre || item.language}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;