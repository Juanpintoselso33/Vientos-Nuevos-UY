import React, { useState, useEffect } from 'react';

import config from '../config/index.json';

const Features = () => {
  const { features } = config;
  const { title, subtitle, description, items: featuresList } = features;
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
    <div className="py-12 bg-background" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {description}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {featuresList.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-primary border-4">
                    <img
                      className="inline-block h-6 w-6 rounded-full"
                      src={feature.icon}
                      alt={feature.name}
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Widget de Instagram ajustado */}
        <div className="mt-12">
          <div style={{ overflow: 'hidden' }}>
            <iframe
              src="//lightwidget.com/widgets/1138456a4fe058d5aa30aacdd3fc7d2b.html"
              allowTransparency={true}
              scrolling="no"
              className="lightwidget-widget"
              style={{
                width: '100%',
                height: iframeHeight,
                border: 0,
                overflow: 'hidden',
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
