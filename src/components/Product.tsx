import React, { useEffect, useRef } from 'react';

import config from '../config/index.json';

const Product = () => {
  const { product } = config;
  // Ajusta useRef para especificar que es un elemento de video HTML.
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Función para cargar el último frame del video como póster
    const loadLastFrameAsPoster = () => {
      // Ahora TypeScript sabe que videoRef.current es un HTMLVideoElement o null.
      const video = videoRef.current;
      if (video) {
        // Carga el video y configura el evento 'loadedmetadata'
        video.load();
        video.addEventListener('loadedmetadata', () => {
          if (video.duration) {
            video.currentTime = video.duration;
          }
        });

        // Configura el evento 'seeked' que se activa cuando se alcanza el frame buscado
        video.addEventListener('seeked', () => {
          const canvas = document.createElement('canvas');
          if (video.videoWidth && video.videoHeight) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d');
            if (ctx) {
              // Dibuja el frame actual en el canvas
              ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
              // Convierte el canvas a una imagen DataURL
              video.poster = canvas.toDataURL();
            }
          }
        });
      }
    };

    loadLastFrameAsPoster();
  }, []);

  return (
    <div className={`py-12 bg-background`} id="product">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-base text-primary font-semibold tracking-wide uppercase`}
          >
            {product.title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Descubre más sobre nuestros productos
          </p>
          {product.items[0] && (
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              {product.items[0].description}
            </p>
          )}
        </div>
        <div className="mt-10">
          <video ref={videoRef} controls style={{ maxWidth: '100%' }}>
            {product.items[0]?.url && (
              <source src={product.items[0].url} type="video/mp4" />
            )}
            Tu navegador no soporta el elemento <code>video</code>.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Product;
