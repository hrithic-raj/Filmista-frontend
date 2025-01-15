import React, { useState } from "react";

interface CardProps {
    _id: string,
    profilePicture: string;
    name: string;
    email: string;
    isBlocked:boolean;
    view:(id: string) => void;
    block: (id: string) => void;
}

const AdminCelebrityCard: React.FC<CardProps> = ({
    _id,
    profilePicture,
    name,
    email,
    isBlocked,
    view,
    block,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full sm:w-[48%] lg:w-[23%] max-w-xs bg-gray-800 rounded-[25px] z-30 overflow-hidden shadow-lg cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        src={profilePicture}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:opacity-40"
      />

      {/* Hover Overlay */}
      <div
        className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent ${
          hovered ? "h-3/4" : "h-16"
        } transition-all duration-300`}
      >
        <div
          className={`p-4 ${hovered ? "flex flex-col justify-center items-center space-y-3" : ""}`}
        >
          {!hovered && (
            <div>
              <h3 className="text-white text-lg font-bold">{name}</h3>
            </div>
          )}

          {/* Hover Content */}
          {hovered && (
            <>
            <h3 className="text-white text-lg font-bold">{name}</h3>
            <h3 className="text-white font-bold">{email}</h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  view(_id);
                }}
                className="px-4 py-2 w-3/4 border border-[#fefefe] text-white rounded-[16px] font-['Geologica'] hover:text-[#5cfef0] hover:border-[#5cfef0] transition-colors"
              >
                View
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  block(_id);
                }}
                className="px-4 w-3/4 py-2 border border-[#fefefe] text-white rounded-[16px] font-['Geologica'] hover:text-[#5cfef0] hover:border-[#5cfef0] transition-colors"
              >
                {isBlocked ? "UNBLOCK" : "BLOCK"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminCelebrityCard;