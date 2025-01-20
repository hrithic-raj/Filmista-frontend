// // SearchBox.tsx
// import { useState } from 'react';

// interface SearchBoxProps {
//   onSelect: (item: any) => void;
//   placeholder: string;
// }

// const SearchBox = ({ onSelect, placeholder }: SearchBoxProps) => {
//   const [query, setQuery] = useState('');

//   // Simulate fetching data from the backend
//   const handleSearch = (query: string) => {
//     if (query === '') return [];
//     return [{ _id: '1', name: query }]; // Sample data, replace with API call
//   };

//   const results = handleSearch(query);

//   return (
//     <div>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder={placeholder}
//         className="mt-1 block w-full min-w-1/2 px-3 py-2 bg-[rgb(44,44,44)] text-gray-100 border border-gray-200 rounded-md placeholder:text-gray-200"
//       />
//       {results.length > 0 && (
//         <ul className="mt-2">
//           {results.map((item) => (
//             <li
//               key={item._id}
//               className="cursor-pointer block text-sm font-medium text-gray-200"
//               onClick={() => onSelect(item)}
//             >
//               {item.name}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SearchBox;



import { useState } from "react";

interface SearchBoxProps {
  data: { _id: string; genre?: string; language?: string; poster: string }[]; // Data can be genre or language
  onSelect: (item: any) => void;
  placeholder: string;
}

const SearchBox = ({ data, onSelect, placeholder }: SearchBoxProps) => {
  const [query, setQuery] = useState("");

  // Filter data based on the query
  const filteredData = query
  ? (data || []).filter((item) => {
      const name = item.genre || item.language;
      return name ? name.toLowerCase().includes(query.toLowerCase()) : false;
    })
  : [];

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="mt-1 block w-full min-w-1/2 px-3 py-2 bg-[rgb(44,44,44)] text-gray-100 border border-gray-200 rounded-md placeholder:text-gray-200"
      />
      {filteredData.length > 0 && (
        <ul className="mt-2 bg-[rgb(30,30,30)] border border-gray-700 rounded">
          {filteredData.map((item) => (
            <li
              key={item._id}
              className="flex items-center cursor-pointer py-2 px-3 hover:bg-gray-700"
              onClick={() => onSelect(item)}
            >
              <img
                src={item.poster}
                alt={item.genre || item.language}
                className="w-8 h-8 mr-3 rounded"
              />
              <span className="text-gray-200 font-medium">
                {item.genre || item.language}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;