import React, { useState, useEffect, useCallback } from "react";

interface CarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const getVisibleImages = useCallback(() => {
    const visibleImages = [];
    for (let i = 0; i < 10; i++) {
      const index = (currentIndex + i) % images.length;
      visibleImages.push(images[index]);
    }
    return visibleImages;
  }, [currentIndex, images]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);


  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [isAutoPlay, nextSlide]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden h-24">
        <div
          className="flex gap-2 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex % images.length) * (100 / images.length)}%)`,
          }}
        >
          {getVisibleImages().map((image, index) => (
            <div
              key={`${currentIndex}-${index}`}
              className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/7 flex-shrink-0"
            >
              <img
            src={image}
            alt={`Carousel image ${index + 1}`}
            className="w-fit object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute flex items-center top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-25 rounded-full p-2"
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute flex items-center top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-25 rounded-full p-2"
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>

      {/* Indicators */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-black" : "bg-black bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
