import React from 'react';

import config from '../config/index.json';

const Contact = () => {
  const { contact } = config;

  if (!contact) {
    return null;
  }

  return (
    <section id="contact" className="bg-background text-white py-8 mt-10">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col items-center mt-5 mb-5">
          <h2 className="text-5xl font-bold text-center mb-4 text-vibrantYellow">
            {contact.title}
          </h2>
          {contact.description.map((paragraph, index) => (
            <p key={index} className="text-md mb-4">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex justify-center">
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                  htmlFor="grid-name"
                >
                  Nombre Completo
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-name"
                  type="text"
                  placeholder="Jane Doe"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                  htmlFor="grid-email"
                >
                  Correo Electrónico
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="email"
                  placeholder="email@example.com"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                  htmlFor="grid-message"
                >
                  Mensaje
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="grid-message"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mt-6">
              <div className="w-full px-3 text-center">
                <button
                  className="btn border border-primary hover:text-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Enviar Mensaje
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
