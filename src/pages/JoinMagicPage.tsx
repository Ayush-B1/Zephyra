import React from 'react';
import smileImg from '../assets/photos/smile.png';
import { Link } from 'react-router-dom';

const JoinMagicPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Join the Magic</h1>
      <div className="w-64 h-64 rounded-full overflow-hidden mb-8">
        <img src={smileImg} alt="Smile" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col space-y-4 w-full max-w-xs">
        <Link to="/login" className="bg-black text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-800 transition text-center inline-block">
          Login
        </Link>
        <Link to="/signup" className="bg-gray-200 text-black px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-300 transition text-center inline-block">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default JoinMagicPage; 