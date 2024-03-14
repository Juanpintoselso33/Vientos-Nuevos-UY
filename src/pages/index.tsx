import React from 'react';

import { Helmet } from 'react-helmet'; // Added import for Helmet

import AboutUs from '../components/AboutUs';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Contact from '../components/Contact';
import Donations from '../components/Donations';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import { AppConfig } from '../utils/AppConfig'; // Assuming AppConfig is correctly set up as per instructions

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <Helmet>
        <title>{AppConfig.title}</title>
      </Helmet>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <Canvas />
      <LazyShow>
        <>
          <AboutUs />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Features />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <Donations />
      </LazyShow>
      <LazyShow>
        <>
          <Canvas />
          <Contact />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Canvas />
          <Footer />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
