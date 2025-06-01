import React from 'react';
import { useState } from 'react';
import moonImg from '../assets/photos/moon.png';
import waterImg from '../assets/photos/water.png';
import starImg from '../assets/photos/star.png';
import fireImg from '../assets/photos/fire.png';
import mainbannerImg from '../assets/photos/mainbanner.png'; // Although not used in the ThemeSelectionPage currently, it might be useful later.
import { useNavigate } from 'react-router-dom';

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

const ThemeSelectionPage = () => {
  // State for a visual indication of applying a theme (optional, could be expanded)
  const [applyingTheme, setApplyingTheme] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleApplyTheme = (themeName: string) => {
    // In a real app, this would apply the theme globally or save the preference
    console.log(`Applying theme: ${themeName}`); // Placeholder for applying theme
    setApplyingTheme(themeName); // Optional: set state to show an applying effect
    // Navigate to the theme-specific page
    const themeUrlName = themeName.toLowerCase().replace(/ /g, '-');
    navigate(`/themes/${themeUrlName}`);
    setTimeout(() => {
      setApplyingTheme(null); // Clear the applying effect after a short time
    }, 1000); // Clear effect after 1 second
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Title */}
      <section className="w-full py-8 md:py-16 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Select Your Theme</h1>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Choose a theme that resonates with you to personalize your experience.
        </p>
      </section>

      {/* Themes Grid */}
      <section className="py-12 md:py-24 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {themes.map((theme, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Card Container */}
              <div className="relative w-full max-w-sm bg-white rounded-3xl p-6 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Close Button Placeholder */}
                <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-semibold">
                  &times;
                </button>
                {/* Image Container */}
                <div className="w-full h-48 rounded-2xl flex items-center justify-center overflow-hidden mb-4">
                  <img 
                    src={theme.image} 
                    alt={theme.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Text Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{theme.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{theme.description}</p>
                  {/* Apply Theme Button */}
                  <button 
                    onClick={() => handleApplyTheme(theme.name)}
                    className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors text-sm"
                  >
                    Apply Theme
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ThemeSelectionPage; 