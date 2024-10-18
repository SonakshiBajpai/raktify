import React, { useState } from 'react';

const images = [
  {
    src: 'https://emeritus.org/in/wp-content/uploads/sites/3/2022/03/What-is-Financial-Management.jpg.optimal.jpg',
    alt: 'Financial Management',
  },
  {
    src: 'https://marvel-b1-cdn.bc0a.com/f00000000180208/www-rocklandtrust-com.editor.banno.com/assets/files/GufEoD4N/three-financial-considerations-blended-families-header-banner.jpg',
    alt: 'Image 2',
  },
  {
    src: 'https://masandpas.com/wp-content/uploads/2018/11/saving-money-tips-for-saving-money-family-savings-4.jpg',
    alt: 'Image 3',
  },
  {
    src: 'https://cdn.whatmomslove.com/wp-content/uploads/2021/01/FEATURED-how-to-save-money-while-raising-family.png',
    alt: 'Image 4',
  },
  {
    src: 'https://www.shutterstock.com/image-photo/future-financial-technology-interface-graph-260nw-1504919225.jpg',
    alt: 'Image 5',
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="min-w-full">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-1/2 left-4 z-30 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-4 z-30 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition"
        onClick={nextSlide}
      >
        &gt;
      </button>
      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
