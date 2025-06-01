import React from 'react';
import { useParams } from 'react-router-dom';
import moonImg from '../assets/photos/moon.png'; // Import needed for theme data
import waterImg from '../assets/photos/water.png'; // Import needed for theme data
import starImg from '../assets/photos/star.png'; // Import needed for theme data
import fireImg from '../assets/photos/fire.png'; // Import needed for theme data
import { useState } from 'react';
import DeepBreathingRitual from '../components/DeepBreathingRitual';
import MeditationRitual from '../components/MeditationRitual';
import FocusExerciseRitual from '../components/FocusExerciseRitual';

interface Theme {
  name: string;
  description: string;
  image: string;
  longDescription: string;
  color: string; // Add color property
}

const themes: Theme[] = [
  {
    name: "Moon Energy",
    description: "Calming lunar vibes for peaceful nights.",
    image: moonImg,
    longDescription: "Immerse yourself in the serene energy of the moon. This theme features gentle lunar phases, soft glowing effects, and calming animations that help you find your inner peace. Perfect for evening meditation and deep relaxation sessions.",
    color: "#1F2937" // Dark background color for moon theme
  },
  {
    name: "Water Healing",
    description: "Flowing waves to wash away stress.",
    image: waterImg,
    longDescription: "Let the gentle flow of water wash away your worries. This theme brings the soothing movement of waves and ripples to your screen, creating a peaceful atmosphere for emotional healing and stress relief.",
    color: "#B3E5FC" // Light bluish color for water
  },
  {
    name: "Star Charm",
    description: "Twinkling stars for magical moments.",
    image: starImg,
    longDescription: "Experience the magic of a starry night sky. This theme features twinkling constellations and shooting stars that inspire wonder and creativity, perfect for moments of reflection and inspiration.",
    color: "#1A237E" // Dark blue background for stars
  },
  {
    name: "Fire Glow",
    description: "Warm flames to ignite your spirit.",
    image: fireImg,
    longDescription: "Feel the warmth and energy of dancing flames. This theme brings the dynamic movement of fire to your screen, helping you find motivation and inner strength during challenging times.",
    color: "#FF9800" // Orange background for fire
  }
];

const ThemeDisplayPage = () => {
  const { themeName } = useParams();
  const [feeling, setFeeling] = useState<string | null>(null);
  const [activeRitual, setActiveRitual] = useState<string | null>(null);

  // Find the selected theme based on the URL parameter
  const selectedTheme = themes.find(theme => theme.name.toLowerCase().replace(/ /g, '-') === themeName);

  // Determine the background color
  const backgroundColor = selectedTheme ? selectedTheme.color : '#FFFFFF'; // Default to white if theme not found

  // You would fetch and display content based on themeName here

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden relative" style={{ backgroundColor: backgroundColor }}>
      {/* Glowing sphere for Moon Energy theme */}
      {selectedTheme?.name === 'Moon Energy' && (
        <div
          className="absolute w-96 h-96 bg-blue-300 rounded-full mix-blend-lighten filter blur-3xl opacity-50 animate-pulse"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} // Center the sphere
        ></div>
      )}
      {/* Star twinkling effect for Star Charm and Moon Energy themes */}
      {(selectedTheme?.name === 'Star Charm' || selectedTheme?.name === 'Moon Energy') && (
        <div className="absolute inset-0 pointer-events-none">
          {Array(100).fill(0).map((_, i) => (
            <span key={i} className="absolute text-white text-xs" style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 1 + 0.5}s infinite alternate ease-in-out`,
              animationDelay: `${Math.random() * 0.5}s`,
              opacity: 0
            }}>*</span>
          ))}
        </div>
      )}
      {/* Main content container */}
      <div className="z-10 flex flex-col items-center w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Theme Page: {themeName ? themeName.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Unknown Theme'}</h1>
        <p className="mt-4 text-lg text-gray-200 mb-8">This page will display content specific to the selected theme.</p>

        {/* Feeling selection menu or change button */}
        <div className="mt-8 z-10">
          {!feeling ? (
            // Show menu if no feeling is selected
            <>
              <h2 className="text-xl font-semibold text-white mb-4">How are you feeling?</h2>
              <select
                className="w-full p-3 rounded-md bg-white bg-opacity-20 text-white border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-white placeholder-opacity-50"
                value={feeling || ''}
                onChange={(e) => setFeeling(e.target.value)}
              >
                <option value="" disabled>Select your feeling</option>
                <option value="stressed">Stressed</option>
                <option value="anxious">Anxious</option>
                <option value="cant sleep">Can't Sleep</option>
                <option value="panic attack">Panic Attack</option>
                <option value="depressive">Depressive</option>
              </select>
            </>
          ) : (
            // Show button to change feeling if a feeling is selected
            <button 
              className="bg-gray-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-600 transition"
              onClick={() => setFeeling(null)}
            >
              Change Feeling ({feeling.charAt(0).toUpperCase() + feeling.slice(1).replace('cant sleep', "Can't Sleep").replace('panic attack', "Panic Attack")})
            </button>
          )}
        </div>

        {/* Content based on selected feeling */}
        {feeling === 'stressed' && (
          <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 flex flex-col items-center shadow-lg transition-shadow duration-300 text-black mt-8">
            {/* Close Button Placeholder */}
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-semibold">
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">STRESS:-</h3>
            {!activeRitual ? (
              // Show feature list if no ritual is active
              <div className="grid grid-cols-1 gap-6 w-full">
                <div 
                  className="bg-gray-100 p-6 rounded-lg shadow-md text-left cursor-pointer hover:bg-gray-200 transition"
                  onClick={() => setActiveRitual('deepBreathing')}
                >
                  <p className="text-lg font-semibold mb-2">Deep Breathing</p>
                  <p className="text-gray-600 text-sm"></p>
                </div>
                
                <div 
                  className="bg-gray-100 p-6 rounded-lg shadow-md text-left cursor-pointer hover:bg-gray-200 transition"
                  onClick={() => setActiveRitual('meditation')}
                >
                  <p className="text-lg font-semibold mb-2">Meditation</p>
                  <p className="text-gray-600 text-sm"></p>
                </div>
                
                <div 
                  className="bg-gray-100 p-6 rounded-lg shadow-md text-left cursor-pointer hover:bg-gray-200 transition"
                  onClick={() => setActiveRitual('focus')}
                >
                  <p className="text-lg font-semibold mb-2">Focus Exercise</p>
                  <p className="text-gray-600 text-sm"></p>
                </div>
              </div>
            ) : (
              // Render active ritual component
              <div className="w-full flex flex-col items-center">
                {activeRitual === 'deepBreathing' && <DeepBreathingRitual />}
                {activeRitual === 'meditation' && <MeditationRitual />}
                {activeRitual === 'focus' && <FocusExerciseRitual />}
                {/* Button to stop the ritual */}
                <button 
                  className="mt-8 bg-red-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-600 transition z-10"
                  onClick={() => setActiveRitual(null)}
                >
                  Stop Ritual
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeDisplayPage; 