import React, { useState } from 'react';

import emailjs from 'emailjs-com';

import config from '../config/index.json';

const Contact = () => {
  const { contact } = config;
  const [statusMessage, setStatusMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setStatusMessage('');

    const form = event.currentTarget as HTMLFormElement; // TypeScript type assertion
    emailjs
      .sendForm(
        'service_6vvle0q',
        'template_w8qdxtr',
        form,
        'xRY-cXYFUPf570twL'
      )
      .then(
        (_) => {
          setStatusMessage(
            'Mensaje enviado correctamente. Gracias por contactarnos!'
          );
          setSubmitting(false);
          form.reset(); // Optional: to reset the form fields after successful submission
        },
        (_) => {
          setStatusMessage(
            'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.'
          );
          setSubmitting(false);
        }
      );
  };

  if (!contact) {
    return null;
  }
  return (
    <section id="contact" className="bg-background text-white py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mt-5 mb-5">
          <h2 className="text-5xl font-bold text-center mb-4 text-vibrantYellow">
            Contactarnos
          </h2>
          <p className="text-lg mb-4">
            En esta seccion podes dejarnos un mensaje
          </p>
        </div>
        <div className="flex justify-center">
          <form onSubmit={handleSubmit} className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  htmlFor="from_name"
                  className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                >
                  Nombre Completo
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                  id="from_name"
                  type="text"
                  placeholder="Jane Doe"
                  name="from_name"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  htmlFor="user_email"
                  className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                >
                  Correo Electrónico
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                  id="user_email"
                  type="email"
                  placeholder="email@example.com"
                  name="user_email"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  htmlFor="message"
                  className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500 h-48 resize-none"
                  id="message"
                  placeholder="Escribe tu mensaje aquí..."
                  name="message"
                  required
                ></textarea>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mt-6">
              <div className="w-full px-3 text-center">
                <button
                  disabled={submitting}
                  className="btn border mt-5 border-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-vibrantYellow"
                  type="submit"
                >
                  {submitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </div>
            </div>
          </form>
        </div>
        {statusMessage && (
          <div className="text-center text-lg mt-10">{statusMessage}</div>
        )}
      </div>
    </section>
  );
};

export default Contact;
