import fs from 'fs';
import path from 'path';

import React from 'react';

import Markdown from 'markdown-to-jsx';
import Link from 'next/link';

import PhotoCarousel from '../components/PhotoCarousel';

const CartaWilson = ({
  content,
  images,
}: {
  content: string;
  images: string[];
}) => (
  <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-20">
    <Link href="/" className="mb-8">
      <img
        src="/assets/images/logo-byn.PNG"
        alt="Logo"
        className="mx-auto h-32 w-auto cursor-pointer"
      />
    </Link>
    <div className="mt-8 mb-12 text-2xl leading-relaxed text-left mx-auto max-w-4xl space-y-8">
      <Markdown
        options={{
          overrides: {
            p: {
              props: {
                className: 'text-2xl leading-relaxed my-6',
              },
            },
            h1: {
              props: {
                className: 'text-5xl font-bold text-center my-8 mb-12',
              },
            },
          },
        }}
      >
        {content}
      </Markdown>
    </div>
    <div className="mx-auto mt-8">
      <PhotoCarousel images={images} />
    </div>
  </div>
);

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'src/content/carta-wilson.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const imagesDir = path.join(
    process.cwd(),
    'public/assets/images/cartaWilson'
  );
  const filenames = fs.readdirSync(imagesDir);
  const images = filenames.map((name) => `/assets/images/cartaWilson/${name}`);

  return { props: { content: fileContent, images } };
}

export default CartaWilson;
