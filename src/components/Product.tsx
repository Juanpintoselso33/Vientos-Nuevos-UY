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
          <h2 className={`text-vibrantYellow text-5xl font-bold tracking-wide`}>
            {product.title}
          </h2>

          {product.items[0] && (
            <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto">
              {product.items[0].description.map((paragraph, index) => (
                <p key={index} className="mb-4 text-lg">
                  {paragraph}
                </p>
              ))}
            </p>
          )}
        </div>
        <div className="mt-20">
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
