import React, { useState } from "react";

interface CardProps {
  id: string;
  image: string;
  title: string;
  isArchive: boolean;
  edit: () => void;
  archive: (id: string) => void;
  view: (id: string) => void;
}

const AdminLanguageCard: React.FC<CardProps> = ({
  id,
  image,
  title,
  isArchive,
  edit,
  archive,
  view,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full sm:w-[48%] lg:w-[23%] max-w-xs bg-gray-800 rounded-lg z-30 overflow-hidden shadow-lg cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="w-full aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:opacity-40"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Hover Overlay */}
      <div
        className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent ${
          hovered ? "h-full" : "h-20"
        } transition-all duration-300`}
      >
        <div
          className={`p-4 flex flex-col items-center ${
            hovered ? "justify-center space-y-3" : "justify-start"
          }`}
        >
          {/* Title */}
          {!hovered && (
            <div className="flex justify-start">
              <h3 className="text-white text-lg font-bold">{title}</h3>
            </div>
          )}

          {/* Hover Content */}
          {hovered && (
            <div className="flex flex-col items-center space-y-2 w-3/4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  view(id);
                }}
                className="px-4 sm:py-1 py-2 w-full border border-[#fefefe] text-white rounded-md hover:text-[#5cfef0] hover:border-[#5cfef0] transition-colors"
              >
                View
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  edit();
                }}
                className="px-4 sm:py-1 py-2 w-full border border-[#fefefe] text-white rounded-md hover:text-[#5cfef0] hover:border-[#5cfef0] transition-colors"
              >
                Edit
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  archive(id);
                }}
                className="px-4 sm:py-1 py-2 w-full border border-[#fefefe] text-white rounded-md hover:text-[#5cfef0] hover:border-[#5cfef0] transition-colors"
              >
                {isArchive ? "Unarchive" : "Archive"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminLanguageCard;