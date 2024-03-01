import React, { useState, useEffect } from 'react';

import Script from 'next/script';

import config from '../config/index.json';

const Features = () => {
  const { features } = config;
  const { title, description: featuresList } = features;
  const [iframeHeight, setIframeHeight] = useState('1200px'); // Altura inicial para pantallas grandes

  useEffect(() => {
    const updateIframeHeight = () => {
      if (window.innerWidth < 480) {
        setIframeHeight('600px'); // Altura para dispositivos pequeños
      } else if (window.innerWidth < 768) {
        setIframeHeight('800px'); // Altura para dispositivos medianos
      } else {
        setIframeHeight('1200px'); // Altura para dispositivos grandes
      }
    };

    window.addEventListener('resize', updateIframeHeight);
    updateIframeHeight(); // Establece la altura inicial basada en el tamaño de pantalla actual

    // Limpieza al desmontar
    return () => window.removeEventListener('resize', updateIframeHeight);
  }, []);

  return (
    <>
      <Script
        src="https://cdn.lightwidget.com/widgets/lightwidget.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Puedes intentar ejecutar alguna lógica aquí si el script de LightWidget
          // proporciona alguna función de inicialización que deba llamarse
        }}
      />
      <div className="py-12 bg-background" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl text-vibrantYellow font-semibold tracking-wide uppercase">
              {title}
            </h2>
            <div className="mt-4 max-w-2xl text-xl text-white lg:mx-auto">
              {featuresList.map((paragraph, index) => (
                <p key={index} className="mt-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <div style={{ overflow: 'hidden' }}>
              {/* LightWidget WIDGET */}
              <iframe
                src="https://cdn.lightwidget.com/widgets/1138456a4fe058d5aa30aacdd3fc7d2b.html"
                scrolling="no"
                allowTransparency={true}
                className="lightwidget-widget text-white"
                style={{
                  width: '100%',
                  height: iframeHeight,
                  border: '0',
                  overflow: 'hidden',
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
