import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PhotoCarousel = ({ images }: { images: string[] }) => (
  <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
    {images.map((src, index) => (
      <div key={index} className="text-center">
        <img
          src={src}
          alt={`carousel-${index}`}
          className="max-h-[96rem] md:max-h-[48rem] w-full md:max-w-screen-lg object-contain"
        />
      </div>
    ))}
  </Carousel>
);

export default PhotoCarousel;
