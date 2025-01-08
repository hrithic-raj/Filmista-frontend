import React, { useState } from 'react'

interface CardProps {
    id: string,
    profilePicture: string;
    name: string;
    email: string;
    viewUser:(id: string) => void;
    blockUser: (id: string) => void;
}

const AdminUserCard: React.FC<CardProps> = ({
    id,
    profilePicture,
    name,
    email,
    viewUser,
    blockUser,
}) => {
    const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative max-w-[24.3%] flex justify-center py-8 sm:min-w-[18%] min-h-64 bg-[rgb(44,44,44)] rounded-[25px] overflow-hidden shadow-lg cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      {/* Image */}
        <img
            src={profilePicture}
            alt={name}
            className="w-40 h-40 rounded-full border object-cover transition-transform duration-300 group-hover:scale-110 group-hover:opacity-40"
        />

      {/* Hover Overlay */}
      <div
        className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent ${
          hovered ? "h-3/4" : "h-20"
        } transition-all duration-300`}
      >
        <div
          className={`p-4 ${
            hovered ? "flex flex-col justify-center items-center space-y-3" : ""
          }`}
        >
          {/* name */}
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
              {/* Block User*/}
              <div className='flex gap-2'>
                <button
                    onClick={(e) => {
                    e.stopPropagation();
                    blockUser(id);
                    }}
                    className="px-2 py-2 border border-[#fefefe] text-white rounded-[16px] font-['Geologica'] hover:text-[#5cfef0] hover:border-[#5cfef0]"
                >
                    BLOCK
                </button>
                <button
                    onClick={(e) => {
                    e.stopPropagation();
                    viewUser(id);
                    }}
                    className="px-2 py-2 border border-[#fefefe] text-white rounded-[16px] font-['Geologica'] hover:text-[#5cfef0] hover:border-[#5cfef0]"
                >
                    VIEW
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminUserCard