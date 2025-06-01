import React from 'react';
import mainbannerImg from '../assets/photos/mainbanner.png';
import { Link } from 'react-router-dom';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      {/* The navbar JSX will be removed here */}

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Zephyra</h1>
        <h2 className="text-3xl md:text-4xl font-light text-center mb-8 md:mb-12">How It Really Works?</h2>
        
        {/* Steps Section */}
        <section className="w-full py-8 md:py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">Your Pocket Companion</h2>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                Zephyra is a mobile app designed to be your instant companion for mental wellness. Whether you're experiencing stress, anxiety, insomnia, or panic attacks, Zephyra provides quick, effective 60-second rituals to help you find your calm.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                Available for both Android and iOS, Zephyra brings these powerful features to your fingertips:
              </p>
              <ul className="list-disc list-inside text-base md:text-lg text-gray-700 space-y-2 md:space-y-4 mb-6 md:mb-8">
                <li>Guided breathing exercises with visual timers</li>
                <li>Interactive puzzles and calming games</li>
                <li>Eye exercises for better sleep</li>
                <li>Motivational quotes and grounding techniques</li>
                <li>Soothing sounds and gentle animations</li>
                <li>Customizable themes to match your mood</li>
              </ul>
            </div>

            <div className="mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">Core Rituals</h2>
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-800">Stress Relief</h3>
                  <p className="text-base md:text-lg text-gray-700 mb-3 md:mb-4">
                    When stress overwhelms you, our 60-second breathing exercises guide you through calming patterns. Watch the visual timer, follow the gentle prompts, and feel your tension melt away.
                  </p>
                  <ul className="list-disc list-inside text-base md:text-lg text-gray-700 space-y-1 md:space-y-2">
                    <li>4-4-4 breathing technique with visual guidance</li>
                    <li>Progress bar showing your breathing rhythm</li>
                    <li>Soothing background sounds</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-800">Anxiety Management</h3>
                  <p className="text-base md:text-lg text-gray-700 mb-3 md:mb-4">
                    Distract and calm your racing thoughts with our interactive puzzles. These simple yet engaging activities help redirect your focus and bring you back to the present moment.
                  </p>
                  <ul className="list-disc list-inside text-base md:text-lg text-gray-700 space-y-1 md:space-y-2">
                    <li>Drag-and-drop puzzle challenges</li>
                    <li>Pattern matching exercises</li>
                    <li>Visual focus activities</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-800">Sleep Support</h3>
                  <p className="text-base md:text-lg text-gray-700 mb-3 md:mb-4">
                    Can't sleep? Our eye exercises and relaxation techniques help prepare your mind and body for rest. Simple, effective, and perfect for bedtime.
                  </p>
                  <ul className="list-disc list-inside text-base md:text-lg text-gray-700 space-y-1 md:space-y-2">
                    <li>Guided eye movement exercises</li>
                    <li>Rapid blinking technique</li>
                    <li>60-second countdown timer</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-800">Panic Attack Relief</h3>
                  <p className="text-base md:text-lg text-gray-700 mb-3 md:mb-4">
                    During moments of panic, our app provides immediate grounding techniques and calming words. Quick, accessible support when you need it most.
                  </p>
                  <ul className="list-disc list-inside text-base md:text-lg text-gray-700 space-y-1 md:space-y-2">
                    <li>Random motivational quotes</li>
                    <li>Grounding exercise prompts</li>
                    <li>Simple breathing guidance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">Personalization</h2>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                Make Zephyra your own with our customizable themes and features:
              </p>
              <ul className="list-disc list-inside text-base md:text-lg text-gray-700 space-y-2 md:space-y-4">
                <li>Choose from Moon Energy, Water Healing, Star Charm, and Fire Glow themes</li>
                <li>Adjust sound levels and animation preferences</li>
                <li>Save your favorite rituals for quick access</li>
                <li>Track your usage and progress over time</li>
              </ul>
            </div>

            <div className="mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">Download Zephyra Today</h2>
              <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
                Experience the power of 60-second rituals designed to bring you back to center. Zephyra is your pocket companion for mental wellness, ready whenever you need it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg shadow-lg hover:scale-105 transition">
                  Download for iOS
                </button>
                <button className="bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg shadow-lg hover:scale-105 transition">
                  Download for Android
                </button>
              </div>
            </div>

            <div className="mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">Why 60 Seconds?</h2>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                We believe that even the busiest person can spare a minute for their mental wellbeing. Our 60-second rituals are designed to be:
              </p>
              <ul className="list-disc list-inside text-base md:text-lg text-gray-700 space-y-2 md:space-y-4">
                <li>Quick and effective - no long sessions needed</li>
                <li>Easy to integrate into your daily routine</li>
                <li>Perfect for those moments when you need immediate relief</li>
                <li>Designed to be done anywhere, anytime</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="w-full border-t pt-8 md:pt-16 pb-12 md:pb-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-32">
          <div className="mb-4 md:mb-0 opacity-30">
            <span className="font-black text-2xl tracking-widest">Zephyra</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full md:w-auto">
            <div>
              <h5 className="font-semibold mb-3 md:mb-4">Product</h5>
              <ul className="text-gray-500 space-y-2 text-sm md:text-base">
                <li>Features</li>
                <li>Themes</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3 md:mb-4">Company</h5>
              <ul className="text-gray-500 space-y-2 text-sm md:text-base">
                <li>About</li>
                <li>Contact</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3 md:mb-4">Resources</h5>
              <ul className="text-gray-500 space-y-2 text-sm md:text-base">
                <li>Blog</li>
                <li>Privacy</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HowItWorksPage; 