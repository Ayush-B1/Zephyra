import React, { useState, useEffect } from 'react';

const FocusExerciseRitual: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState(60); // 60 seconds for the ritual

  useEffect(() => {
    if (timeRemaining <= 0) return;

    const timerId = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeRemaining]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="flex flex-col items-center justify-center mt-8 z-10">
      <h3 className="text-2xl font-bold text-white mb-4">Focus Exercise</h3>
      <p className="text-xl text-gray-200 mb-4">Placeholder for color dot tracking cursor on screen for 60s.</p>
      <p className="mt-4 text-xl font-semibold text-black">Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
    </div>
  );
};

export default FocusExerciseRitual; 