import React, { useState, useEffect, useRef } from 'react';
import musicFile from '../assets/music.mp3';

const MeditationRitual: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState(60); // 60 seconds for the ritual
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (timeRemaining <= 0) {
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
      return;
    }

    const timerId = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeRemaining]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="flex flex-col items-center justify-center mt-8 z-10">
      <h3 className="text-2xl font-bold text-white mb-4">Meditation</h3>
      <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md text-center mb-4">
        <p className="text-xl text-gray-200 mb-4">Relax with soothing music</p>
        <button
          onClick={toggleAudio}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-semibold transition"
        >
          {isPlaying ? 'Pause Music' : 'Play Music'}
        </button>
      </div>
      <p className="mt-4 text-xl font-semibold text-black">Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
      <audio ref={audioRef} src={musicFile} loop />
    </div>
  );
};

export default MeditationRitual; 