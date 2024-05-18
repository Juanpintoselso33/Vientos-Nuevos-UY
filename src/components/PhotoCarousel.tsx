import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PhotoCarousel = ({ images }: { images: string[] }) => (
  <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
    {images.map((src, index) => (
      <div
        key={index}
        style={{ height: '48rem', lineHeight: '48rem', textAlign: 'center' }}
      >
        <img
          src={src}
          alt={`carousel-${index}`}
          style={{
            maxHeight: '100%',
            maxWidth: '100%',
            height: '48rem',
            width: 'auto',
            verticalAlign: 'middle',
          }}
        />
      </div>
    ))}
  </Carousel>
);

export default PhotoCarousel;
