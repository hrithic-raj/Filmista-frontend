import React, { useState } from "react";

interface CardProps {
  id: string;
  image: string;
  title: string;
  rating: number;
  genres: string[];
  onRate: (rating: number ,id:string) => void;
  onView: (id: string) => void;
  onAddToWatchlist: () => void;
}

const MovieCard: React.FC<CardProps> = ({
  id,
  image,
  title,
  rating,
  genres,
  onRate,
  onView,
  onAddToWatchlist,
}) => {

  const [hovered, setHovered] = useState(false);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  return (
    <div
      key={id}
      className="relative max-w-[24.3%] flex-shrink-0 sm:min-w-[20%] max-h-80 bg-gray-800 rounded-[25px] overflow-hidden shadow-lg cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setHoveredStar(null);
      }}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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
          {/* Title and Rating */}
          {!hovered && (
            <div>
              <h3 className="text-white text-lg font-bold">{title}</h3>
              <div>
              <p className="text-gray-400 text-sm">Rating: {rating.toFixed(1)}</p>
              </div>
            </div>
          )}

          {/* Hover Content */}
          {hovered && (
            <>
              {/* Genres */}
              <div className="text-white text-sm">
                Genres: {genres.join(", ")}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => onRate(star, id)}
                    onMouseEnter={() => setHoveredStar(star)}
                    onMouseLeave={() => setHoveredStar(null)}
                    className={`text-xl ${
                      star <= (hoveredStar || rating)
                        ? "text-yellow-400"
                        : "text-gray-400"
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>

              {/* Add to Watchlist*/}
              <div className="flex flex-col space-y-3">

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onView(id);
                  }}
                  className="px-4 py-2 border border-[#fefefe] text-white rounded-[16px] font-['Geologica'] hover:text-[#5cfef0] hover:border-[#5cfef0]"
                >
                  View Movie
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToWatchlist();
                  }}
                  className="px-4 py-2 border border-[#fefefe] text-white rounded-[16px] font-['Geologica'] hover:text-[#5cfef0] hover:border-[#5cfef0]"
                >
                  Add to Watchlist
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
