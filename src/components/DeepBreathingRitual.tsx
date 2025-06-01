import React, { useState, useEffect } from 'react';

const DeepBreathingRitual: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState(60); // 60 seconds for the ritual
  const [isBreathingIn, setIsBreathingIn] = useState(true);

  useEffect(() => {
    if (timeRemaining <= 0) return;

    const timerId = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeRemaining]);

  // Simple effect to toggle inhale/exhale state for visual cue
  useEffect(() => {
    const breatheTimer = setInterval(() => {
      // A simple 4-second inhale, 4-second exhale pattern
      setIsBreathingIn(prevState => !prevState);
    }, 4000); // Toggle every 4 seconds

    return () => clearInterval(breatheTimer);
  }, []);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="flex flex-col items-center justify-center mt-8 z-10">
      <h3 className="text-2xl font-bold text-white mb-4">Deep Breathing</h3>
      <div className={
        `w-48 h-48 rounded-full bg-blue-400 flex items-center justify-center text-white text-xl font-bold transition-all duration-[4000ms] ease-in-out 
        ${isBreathingIn ? 'scale-110 opacity-100' : 'scale-90 opacity-75'}`
      }>
        {isBreathingIn ? 'Inhale' : 'Exhale'}
      </div>
      <p className="mt-4 text-xl font-semibold text-black">Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
    </div>
  );
};

export default DeepBreathingRitual; 