import React, { useState } from 'react';
import moonImg from '../assets/photos/moon.png';
import waterImg from '../assets/photos/water.png';
import starImg from '../assets/photos/star.png';
import fireImg from '../assets/photos/fire.png';
import mainbannerImg from '../assets/photos/mainbanner.png';
import { Link } from 'react-router-dom';

interface Theme {
  name: string;
  description: string;
  image: string;
  longDescription: string;
}

const themes: Theme[] = [
  {
    name: "Moon Energy",
    description: "Calming lunar vibes for peaceful nights.",
    image: moonImg,
    longDescription: "Immerse yourself in the serene energy of the moon. This theme features gentle lunar phases, soft glowing effects, and calming animations that help you find your inner peace. Perfect for evening meditation and deep relaxation sessions."
  },
  {
    name: "Water Healing",
    description: "Flowing waves to wash away stress.",
    image: waterImg,
    longDescription: "Let the gentle flow of water wash away your worries. This theme brings the soothing movement of waves and ripples to your screen, creating a peaceful atmosphere for emotional healing and stress relief."
  },
  {
    name: "Star Charm",
    description: "Twinkling stars for magical moments.",
    image: starImg,
    longDescription: "Experience the magic of a starry night sky. This theme features twinkling constellations and shooting stars that inspire wonder and creativity, perfect for moments of reflection and inspiration."
  },
  {
    name: "Fire Glow",
    description: "Warm flames to ignite your spirit.",
    image: fireImg,
    longDescription: "Feel the warmth and energy of dancing flames. This theme brings the dynamic movement of fire to your screen, helping you find motivation and inner strength during challenging times."
  }
];

const ThemePage = () => {
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  const [appliedThemeEffect, setAppliedThemeEffect] = useState<string | null>(null);

  const openModal = (theme: Theme) => {
    setSelectedTheme(theme);
  };

  const closeModal = () => {
    setSelectedTheme(null);
    setAppliedThemeEffect(null);
  };

  const handleApplyTheme = (themeName: string) => {
    setAppliedThemeEffect(themeName);
    setTimeout(() => {
      setAppliedThemeEffect(null);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      {/* The navbar JSX will be removed here */}

      {/* Hero Section */}
      <section 
        className="w-full h-[calc(100vh-80px)] min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden px-4"
        style={{
          backgroundImage: `url(${mainbannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        <h1 
          className="text-3xl md:text-5xl font-black mb-2 text-center text-white drop-shadow-lg relative z-10"
          style={{ textShadow: '0 0 1px #fff, 0 0 4px #fff, 0 0 0px #fff' }}
        >
          Themes
        </h1>
        <h2 
          className="text-2xl md:text-4xl font-bold mb-8 text-center text-gray-200 drop-shadow-md relative z-10"
          style={{ textShadow: '0 0 1px #ccc, 0 0 2px #ccc' }}
        >
          Choose Your Magic.
        </h2>
      </section>

      {/* Theme Banner Section */}
      <section className="w-full py-8 md:py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Explore Our Themes</h2>
            <p className="text-gray-600 text-base md:text-lg text-center max-w-2xl">
              Discover the unique visual and emotional experience each theme offers.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
            {/* Moon Theme Image */}
            <div className="aspect-square overflow-hidden rounded-xl shadow-lg">
              <img src={moonImg} alt="Moon Energy Theme" className="w-full h-full object-cover" />
            </div>

            {/* Water Theme Image */}
            <div className="aspect-square overflow-hidden rounded-xl shadow-lg">
              <img src={waterImg} alt="Water Healing Theme" className="w-full h-full object-cover" />
            </div>

            {/* Star Theme Image */}
            <div className="aspect-square overflow-hidden rounded-xl shadow-lg">
              <img src={starImg} alt="Star Charm Theme" className="w-full h-full object-cover" />
            </div>

            {/* Fire Theme Image */}
            <div className="aspect-square overflow-hidden rounded-xl shadow-lg">
              <img src={fireImg} alt="Fire Glow Theme" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Themes Grid */}
      <section className="min-h-screen flex flex-col items-center justify-center py-12 md:py-24 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {themes.map((theme, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full max-w-md h-[500px] md:h-[600px] bg-gray-50 rounded-3xl p-6 md:p-8 flex flex-col items-center justify-between shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-full h-[300px] md:h-[400px] bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img 
                    src={theme.image} 
                    alt={theme.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-4 md:mt-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{theme.name}</h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">{theme.description}</p>
                  <button 
                    onClick={() => openModal(theme)}
                    className="bg-black text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-medium hover:bg-gray-800 transition-colors text-sm md:text-base"
                  >
                    Select Theme
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Theme Reflections Section */}
      <section className="py-12 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Theme Reflections</h2>
          <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-12">
            Each theme is carefully crafted to create a unique atmosphere for your self-care rituals.
            Choose the one that resonates with your current mood and needs.
          </p>
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-semibold mb-2">Moon Energy</h3>
              <p className="text-gray-600">Perfect for nighttime relaxation and deep meditation.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-semibold mb-2">Water Healing</h3>
              <p className="text-gray-600">Ideal for emotional release and stress relief.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-semibold mb-2">Star Charm</h3>
              <p className="text-gray-600">Great for inspiration and creative moments.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-semibold mb-2">Fire Glow</h3>
              <p className="text-gray-600">Great for finding motivation and inner strength.</p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Theme Modal */}
      {selectedTheme && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={
            `bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 relative overflow-hidden ` +
            `${appliedThemeEffect === 'Moon Energy' ? 'theme-effect-moon' : ''} ` +
            `${appliedThemeEffect === 'Water Healing' ? 'theme-effect-water' : ''} ` +
            `${appliedThemeEffect === 'Star Charm' ? 'theme-effect-star' : ''} ` +
            `${appliedThemeEffect === 'Fire Glow' ? 'theme-effect-fire' : ''}`
          }
          >
            {/* Animation Overlay */}
            <div className={
              `absolute inset-0 pointer-events-none ` +
              `${appliedThemeEffect === 'Moon Energy' ? 'animate-theme-moon-glow bg-gradient-to-radial from-white to-transparent opacity-50' : ''} ` +
              `${appliedThemeEffect === 'Water Healing' ? 'animate-theme-water-pulse bg-blue-300 opacity-50' : ''} ` +
              `${appliedThemeEffect === 'Star Charm' ? 'animate-theme-star-twinkle' : ''} ` +
              `${appliedThemeEffect === 'Fire Glow' ? 'animate-theme-fire-flicker bg-gradient-to-t from-orange-500 to-transparent opacity-50' : ''}`
            }
            style={appliedThemeEffect === 'Star Charm' ? { clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' } : {}}
            > {appliedThemeEffect === 'Star Charm' && Array(50).fill(0).map((_, i) => (
              <span key={i} className="absolute text-white text-xs" style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `twinkle ${Math.random() * 1 + 0.5}s infinite alternate ease-in-out`,
                animationDelay: `${Math.random() * 0.5}s`,
                opacity: 0
                }}>*</span>
            ))}</div>

            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col items-center relative z-10">
              <div className="w-full h-[200px] md:h-[300px] bg-gray-100 rounded-2xl mb-4 md:mb-6 overflow-hidden">
                <img 
                  src={selectedTheme.image} 
                  alt={selectedTheme.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{selectedTheme.name}</h3>
              <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 text-center">
                {selectedTheme.longDescription}
              </p>
              <button 
                onClick={() => handleApplyTheme(selectedTheme.name)}
                className="bg-black text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-medium hover:bg-gray-800 transition-colors text-sm md:text-base"
              >
                Apply Theme
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemePage; 