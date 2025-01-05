import { useState } from 'react';

const HomePage = () => {
  const slides = [
    { id: 1, title: 'The Croods 2', genre: 'Adventure, Comedy', image: 'https://via.placeholder.com/600x300' },
    { id: 2, title: 'Avatar 2', genre: 'Sci-Fi, Fantasy', image: 'https://via.placeholder.com/600x300' },
    { id: 3, title: 'Joker', genre: 'Drama, Thriller', image: 'https://via.placeholder.com/600x300' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
      <div className="p-4">
        {/* Slider */}
          <div className='flex space-x-8'>
            <div className="relative w-[80%]">
            <div className=" h-64 overflow-hidden rounded-lg">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
            >
              ❯
            </button>
            </div>
            <div className='bg-white rounded-full h-64 w-16'>
          </div>
        </div>

        {/* New Release */}
        <section className="mt-8">
          <h2 className="text-xl font-bold mb-4">New Release</h2>
          <div className="grid grid-cols-4 gap-4">
            {['Godzilla', 'Joker', 'Avatar', 'Batman'].map((movie) => (
              <div key={movie} className="bg-gray-800 p-4 rounded-lg">
                <img
                  src="https://via.placeholder.com/200"
                  alt={movie}
                  className="rounded-lg mb-2"
                />
                <h3>{movie}</h3>
                <p className="text-sm text-gray-400">Rating: 4.5</p>
              </div>
            ))}
          </div>
        </section>
      </div>
  );
};

export default HomePage;
