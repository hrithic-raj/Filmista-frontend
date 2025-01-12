import React, { useState } from "react";

interface CardProps {
  id: string;
  image: string;
  genre: string;
  isArchive: boolean;
  editGenre: () => void;
  archiveGenre: (id: string) => void;
  viewGenre: (id: string) => void;
}

const AdminGenreCard: React.FC<CardProps> = ({
  id,
  image,
  genre,
  isArchive,
  editGenre,
  archiveGenre,
  viewGenre,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full sm:w-[48%] lg:w-[23%] max-w-xs bg-gray-800 rounded-[25px] overflow-hidden shadow-lg cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        src={image}
        alt={genre}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:opacity-40"
      />

      {/* Hover Overlay */}
      <div
        className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent ${
          hovered ? "h-3/4" : "h-20"
        } transition-all duration-300`}
      >
        <div
          className={`p-4 ${hovered ? "flex flex-col justify-center items-center space-y-3" : ""}`}
        >
          {!hovered && (
            <div>
              <h3 className="text-white text-lg font-bold">{genre}</h3>
            </div>
          )}

          {/* Hover Content */}
          {hovered && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  viewGenre(id); // Ensure the ID is passed correctly
                }}
                className="px-4 py-2 w-3/4 border border-[#fefefe] text-white rounded-[16px] font-['Geologica'] hover:text-[#5cfef0] hover:border-[#5cfef0] transition-colors"
              >
                View Genre
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  editGenre(); // Ensure the ID is passed correctly
                }}
                className="px-4 py-2 w-3/4 border border-[#fefefe] text-white rounded-[16px] font-['Geologica'] hover:text-[#5cfef0] hover:border-[#5cfef0] transition-colors"
              >
                Edit Genre
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  archiveGenre(id); // Ensure the ID is passed correctly
                }}
                className="px-4 w-3/4 py-2 border border-[#fefefe] text-white rounded-[16px] font-['Geologica'] hover:text-[#5cfef0] hover:border-[#5cfef0] transition-colors"
              >
                {isArchive ? "Unarchive" : "Archive"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminGenreCard;
