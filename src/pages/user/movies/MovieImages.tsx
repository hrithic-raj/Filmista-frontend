import React, { useState } from 'react'

const MovieImages: React.FC = () => {
    const movieData = {
        images: {
            poster: "https://m.media-amazon.com/images/M/MV5BMWNhM2JiMzItMTg3Yi00OGU3LWE2MmEtNTY3YTgxMmRkOTllXkEyXkFqcGc@._V1_FMjpg_UX1086_.jpg",
            horizontalPoster: "https://m.media-amazon.com/images/M/MV5BNDVjNDMxMTctNDBhNS00ZjA3LTgyZjItZTQ2MDliOWE5ZTUxXkEyXkFqcGc@._V1_FMjpg_UX1920_.jpg",
            other: [
                "https://m.media-amazon.com/images/M/MV5BMjI0M2JmMDctNGQzMi00Mjc5LTk5YWUtMTk2YzRiOTVjNjI1XkEyXkFqcGc@._V1_FMjpg_UX1920_.jpg",
                "https://res.cloudinary.com/duklokwdi/image/upload/v1737610113/filmista/MV5BZmJhNWIyMjMtMGM5ZC00YzI5LWI1YjgtMmFkNDkzYjQ2NjhlXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw%40%40.jpg",
                "https://res.cloudinary.com/duklokwdi/image/upload/v1737610113/filmista/MV5BMjI0M2JmMDctNGQzMi00Mjc5LTk5YWUtMTk2YzRiOTVjNjI1XkEyXkFqcGc%40.jpg",
                "https://m.media-amazon.com/images/M/MV5BMWNhM2JiMzItMTg3Yi00OGU3LWE2MmEtNTY3YTgxMmRkOTllXkEyXkFqcGc@._V1_FMjpg_UX1086_.jpg",
                "https://res.cloudinary.com/duklokwdi/image/upload/v1737610113/filmista/MV5BMjY5NzFjNmItNjBjZC00MGMwLWJiYjktMDNhNzNiZjQ2M2M0XkEyXkFqcGc%40.jpg",
                "https://m.media-amazon.com/images/M/MV5BMWNhM2JiMzItMTg3Yi00OGU3LWE2MmEtNTY3YTgxMmRkOTllXkEyXkFqcGc@._V1_FMjpg_UX1086_.jpg",
                "https://m.media-amazon.com/images/M/MV5BMWNhM2JiMzItMTg3Yi00OGU3LWE2MmEtNTY3YTgxMmRkOTllXkEyXkFqcGc@._V1_FMjpg_UX1086_.jpg",
                "https://m.media-amazon.com/images/M/MV5BMWNhM2JiMzItMTg3Yi00OGU3LWE2MmEtNTY3YTgxMmRkOTllXkEyXkFqcGc@._V1_FMjpg_UX1086_.jpg",
                "https://res.cloudinary.com/duklokwdi/image/upload/v1737610113/filmista/MV5BMjY5NzFjNmItNjBjZC00MGMwLWJiYjktMDNhNzNiZjQ2M2M0XkEyXkFqcGc%40.jpg",
                "https://m.media-amazon.com/images/M/MV5BMWNhM2JiMzItMTg3Yi00OGU3LWE2MmEtNTY3YTgxMmRkOTllXkEyXkFqcGc@._V1_FMjpg_UX1086_.jpg",
                "https://m.media-amazon.com/images/M/MV5BMWNhM2JiMzItMTg3Yi00OGU3LWE2MmEtNTY3YTgxMmRkOTllXkEyXkFqcGc@._V1_FMjpg_UX1086_.jpg",
                "https://m.media-amazon.com/images/M/MV5BMWNhM2JiMzItMTg3Yi00OGU3LWE2MmEtNTY3YTgxMmRkOTllXkEyXkFqcGc@._V1_FMjpg_UX1086_.jpg",
                "https://res.cloudinary.com/duklokwdi/image/upload/v1737610113/filmista/MV5BMjY5NzFjNmItNjBjZC00MGMwLWJiYjktMDNhNzNiZjQ2M2M0XkEyXkFqcGc%40.jpg",
                "https://m.media-amazon.com/images/M/MV5BMWNhM2JiMzItMTg3Yi00OGU3LWE2MmEtNTY3YTgxMmRkOTllXkEyXkFqcGc@._V1_FMjpg_UX1086_.jpg",
                "https://m.media-amazon.com/images/M/MV5BMWNhM2JiMzItMTg3Yi00OGU3LWE2MmEtNTY3YTgxMmRkOTllXkEyXkFqcGc@._V1_FMjpg_UX1086_.jpg",
                "https://m.media-amazon.com/images/M/MV5BMWNhM2JiMzItMTg3Yi00OGU3LWE2MmEtNTY3YTgxMmRkOTllXkEyXkFqcGc@._V1_FMjpg_UX1086_.jpg",
                "https://res.cloudinary.com/duklokwdi/image/upload/v1737610113/filmista/MV5BMjY5NzFjNmItNjBjZC00MGMwLWJiYjktMDNhNzNiZjQ2M2M0XkEyXkFqcGc%40.jpg",
                "https://m.media-amazon.com/images/M/MV5BMWNhM2JiMzItMTg3Yi00OGU3LWE2MmEtNTY3YTgxMmRkOTllXkEyXkFqcGc@._V1_FMjpg_UX1086_.jpg",
                "https://m.media-amazon.com/images/M/MV5BMWNhM2JiMzItMTg3Yi00OGU3LWE2MmEtNTY3YTgxMmRkOTllXkEyXkFqcGc@._V1_FMjpg_UX1086_.jpg",
                "https://m.media-amazon.com/images/M/MV5BMWNhM2JiMzItMTg3Yi00OGU3LWE2MmEtNTY3YTgxMmRkOTllXkEyXkFqcGc@._V1_FMjpg_UX1086_.jpg",
                "https://res.cloudinary.com/duklokwdi/image/upload/v1737610113/filmista/MV5BMjY5NzFjNmItNjBjZC00MGMwLWJiYjktMDNhNzNiZjQ2M2M0XkEyXkFqcGc%40.jpg",
                "https://m.media-amazon.com/images/M/MV5BMWNhM2JiMzItMTg3Yi00OGU3LWE2MmEtNTY3YTgxMmRkOTllXkEyXkFqcGc@._V1_FMjpg_UX1086_.jpg",
                "https://m.media-amazon.com/images/M/MV5BMWNhM2JiMzItMTg3Yi00OGU3LWE2MmEtNTY3YTgxMmRkOTllXkEyXkFqcGc@._V1_FMjpg_UX1086_.jpg",
            ]
        },
      };
    
      const [visibleImages, setVisibleImages] = useState(10);
    
      const allImages = [
        movieData.images.poster,
        movieData.images.horizontalPoster,
        ...movieData.images.other,
      ];
    
      const loadMoreImages = () => {
        setVisibleImages((prev) => prev + 4);
      };
  return (
    <div className="min-h-screen text-white p-6">
        <div className='mb-4 flex flex-col gap-1'>
          <span className="text-white text-5xl font-bold font-['Gelasio']">Joker</span>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
        {allImages.slice(0, visibleImages).map((image, index) => (
            <div
            key={index}
            className="mb-4 break-inside-avoid rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
            <img
                src={image}
                alt={`Movie Image ${index + 1}`}
                className="w-full h-auto rounded-lg"
            />
            </div>
        ))}
        </div>

        {visibleImages < allImages.length && (
        <div className="flex justify-center mt-6">
            <button
            onClick={loadMoreImages}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700"
            >
            Load More
            </button>
        </div>
        )}
    </div>
  )
}

export default MovieImages