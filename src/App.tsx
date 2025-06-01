import React, { useEffect, useState, useCallback, useMemo } from 'react';
import stressImg from './assets/photos/stress.png';
import mainpageImg from './assets/photos/mainpage.png';
import anxietyImg from './assets/photos/anxiety.png';
import insomniaImg from './assets/photos/insomnia.png';
import soothingImg from './assets/photos/soothing.png';
import gentleImg from './assets/photos/gentle.png';
import depressionImg from './assets/photos/depression.png';
import smoothImg from './assets/photos/smooth.png';
import mainbannerImg from './assets/photos/banner.png';
import smileImg from './assets/photos/smile.png';
import panicattackImg from './assets/photos/panicattack.png';
import { Fade, Slide } from 'react-awesome-reveal';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
// @ts-ignore // Temporarily ignore type definition issue for tsparticles-slim
import { loadSlim } from "tsparticles-slim";

import { Routes, Route, Link, useLocation } from 'react-router-dom';
import ThemePage from './pages/ThemePage';
import HowItWorksPage from './pages/HowItWorksPage';
import ContactPage from './pages/ContactPage';
import JoinMagicPage from './pages/JoinMagicPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ThemeSelectionPage from './pages/ThemeSelectionPage';
import ThemeDisplayPage from './pages/ThemeDisplayPage';

function App() {
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [isStressModalOpen, setIsStressModalOpen] = useState(false);
  const [isAnxietyModalOpen, setIsAnxietyModalOpen] = useState(false);
  const [isPanicModalOpen, setIsPanicModalOpen] = useState(false);
  const [isInsomniaModalOpen, setIsInsomniaModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [breathingPhase, setBreathingPhase] = useState('Get ready...');
  const [puzzlePieces, setPuzzlePieces] = useState<{
    id: number; top: number; left: number; correctTop: number; correctLeft: number
  }[]>([]);
  const [draggingPieceId, setDraggingPieceId] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isSolved, setIsSolved] = useState(false);
  const [insomniaTimeLeft, setInsomniaTimeLeft] = useState(60);
  const [motivationalQuote, setMotivationalQuote] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const motivationalQuotes = [
    "You are stronger than you think.",
    "This too shall pass.",
    "Breathe. You are okay.",
    "One step at a time.",
    "You are not alone.",
    "Feel the feeling, but don't become the feeling.",
    "Be kind to yourself.",
    "This is temporary.",
    "You are safe.",
    "Inhale calm, exhale fear.",
  ];

  useEffect(() => {
    setIsPageTransitioning(true);
    const timer = setTimeout(() => {
      setIsPageTransitioning(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    let insomniaTimer: NodeJS.Timeout | null = null;

    if (isInsomniaModalOpen) {
      setInsomniaTimeLeft(60);

      insomniaTimer = setInterval(() => {
        setInsomniaTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      if (insomniaTimer) clearInterval(insomniaTimer);
    }

    return () => {
      if (insomniaTimer) clearInterval(insomniaTimer);
    };
  }, [isInsomniaModalOpen]);

  useEffect(() => {
    let timerInterval: NodeJS.Timeout | null = null;
    let breathingInterval: NodeJS.Timeout | null = null;

    if (isStressModalOpen) {
      setTimeLeft(60);
      setBreathingPhase('Get ready...');

      timerInterval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      let phase = 'inhale';
      let phaseDuration = 4000;
      let totalTime = 60;
      let elapsed = 0;

      breathingInterval = setInterval(() => {
        elapsed++;
        const secondsLeft = totalTime - elapsed;

        if (secondsLeft < 0) {
          clearInterval(breathingInterval as NodeJS.Timeout);
          setBreathingPhase('Finished!');
          return;
        }

        const cycleTime = 4 * 4;
        const timeInCycle = secondsLeft % cycleTime;

        if (timeInCycle >= 12) {
          setBreathingPhase('Inhale');
        } else if (timeInCycle >= 8) {
          setBreathingPhase('Hold');
        } else if (timeInCycle >= 4) {
          setBreathingPhase('Exhale');
        } else {
          setBreathingPhase('Hold');
        }
      }, 1000);
    } else {
      if (timerInterval) clearInterval(timerInterval);
      if (breathingInterval) clearInterval(breathingInterval);
    }

    return () => {
      if (timerInterval) clearInterval(timerInterval);
      if (breathingInterval) clearInterval(breathingInterval);
    };
  }, [isStressModalOpen]);

  const options = useMemo(() => {
    return {
      background: {
        color: { value: "#1f1730" },
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: { push: { quantity: 4 }, repulse: { distance: 100 } },
      },
      particles: {
        links: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: { enable: true, speed: 1 },
        opacity: { value: 0.5 },
        size: { value: 1 },
      },
    };
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openStressModal = () => {
    setIsStressModalOpen(true);
  };

  const closeStressModal = () => {
    setIsStressModalOpen(false);
  };

  const openAnxietyModal = () => {
    setIsAnxietyModalOpen(true);
    initializePuzzle();
  };

  const closeAnxietyModal = () => {
    setIsAnxietyModalOpen(false);
    setIsSolved(false);
  };

  const openInsomniaModal = () => {
    setIsInsomniaModalOpen(true);
  };

  const closeInsomniaModal = () => {
    setIsInsomniaModalOpen(false);
  };

  const openPanicRitualModal = () => {
    setIsPanicModalOpen(true);
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    setMotivationalQuote(motivationalQuotes[randomIndex]);
  };

  const closePanicRitualModal = () => {
    setIsPanicModalOpen(false);
  };

  const initializePuzzle = () => {
    const pieceSize = 100;
    const containerSize = 200;
    const pieces = [
      { id: 0, correctTop: 0, correctLeft: 0 },
      { id: 1, correctTop: 0, correctLeft: pieceSize },
      { id: 2, correctTop: pieceSize, correctLeft: 0 },
      { id: 3, correctTop: pieceSize, correctLeft: pieceSize },
    ];

    for (let i = pieces.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
    }

    const initialPieces = pieces.map((piece, index) => ({
      ...piece,
      top: Math.random() * (containerSize - pieceSize),
      left: Math.random() * (containerSize - pieceSize),
    }));

    setPuzzlePieces(initialPieces);
    setIsSolved(false);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    const piece = puzzlePieces.find(p => p.id === id);
    if (piece) {
      setDraggingPieceId(id);
      setDragOffset({
        x: e.clientX - piece.left,
        y: e.clientY - piece.top,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (draggingPieceId !== null) {
      const newPieces = puzzlePieces.map(piece => {
        if (piece.id === draggingPieceId) {
          return {
            ...piece,
            top: e.clientY - dragOffset.y,
            left: e.clientX - dragOffset.x,
          };
        }
        return piece;
      });
      setPuzzlePieces(newPieces);
    }
  };

  const handleMouseUp = () => {
    setDraggingPieceId(null);
    // TODO: Add snapping logic and win condition check here
  };

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-white flex flex-col" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
        {/* Local Navbar for App.tsx (Home Page) */}
        <nav className="flex items-center px-8 py-4 w-full justify-between">
          {/* Logo Left */}
          <Link to="/" className="font-black text-2xl tracking-widest">Zephyra</Link>
          {/* Nav Links Center */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center gap-4">
              <Link to="/" className="bg-gray-100 px-6 py-2 rounded-full text-base font-medium">Home</Link>
              <Link to="/how-it-works" className="bg-gray-100 px-6 py-2 rounded-full text-base font-medium">How It Works</Link>
              <Link to="/themes" className="bg-gray-100 px-6 py-2 rounded-full text-base font-medium">Themes</Link>
              <Link to="/contact" className="bg-gray-100 px-6 py-2 rounded-full text-base font-medium">Contact</Link>
            </div>
          </div>
          {/* Download Button Right */}
          <button className="hidden md:block bg-black text-white px-6 py-2 rounded-full text-base font-semibold">Download</button>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-500 focus:outline-none focus:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white px-8 pt-2 pb-4 shadow-lg">
            <div className="flex flex-col items-center gap-4">
              <Link to="/" className="block text-center w-full bg-gray-100 px-6 py-2 rounded-full text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/how-it-works" className="block text-center w-full bg-gray-100 px-6 py-2 rounded-full text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>How It Works</Link>
              <Link to="/themes" className="block text-center w-full bg-gray-100 px-6 py-2 rounded-full text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>Themes</Link>
              <Link to="/contact" className="block text-center w-full bg-gray-100 px-6 py-2 rounded-full text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              <button className="block text-center w-full bg-black text-white px-6 py-2 rounded-full text-base font-semibold">Download</button>
            </div>
          </div>
        )}

        <Particles
          id="tsparticles"
          init={particlesInit}
          options={options}
        />

        <div className={`page-transition ${isPageTransitioning ? 'page-transitioning' : ''}`}>
          <Routes location={location}>
            <Route path="/" element={(
              <>
                <section 
                  className="w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center relative overflow-hidden px-4"
                  style={{
                    backgroundImage: `url(${mainbannerImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
                  <h1 
                    className="text-4xl md:text-5xl font-black mb-2 text-center text-white drop-shadow-lg relative z-10 px-4"
                  >
                    Zephyra
                  </h1>
                  <h2 
                    className="text-2xl md:text-4xl font-bold mb-8 text-center text-gray-200 drop-shadow-md relative z-10 px-4"
                  >
                    Magical 60-Second Rituals for Self-Care.
                  </h2>
                </section>

                <Parallax speed={-2}>
                  <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden py-8 md:py-16 px-4 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
                    <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-br from-purple-400 via-indigo-300 to-pink-300 opacity-30 rounded-full blur-3xl animate-pulse z-0" />
                    <div className="absolute bottom-[-15%] right-[-10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-gradient-to-tr from-pink-400 via-purple-300 to-indigo-200 opacity-30 rounded-full blur-3xl animate-pulse z-0" />
                    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-8 md:gap-16 relative z-10">
                      <Slide direction="left">
                        <div className="flex-1 flex flex-col items-center md:items-start justify-center max-w-xl text-center md:text-left">
                          <h3 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 text-gray-900 drop-shadow-lg">Stress</h3>
                          <p className="text-gray-700 text-lg md:text-2xl leading-relaxed mb-6 md:mb-8 drop-shadow-md">
                            Life's demands can leave us feeling overwhelmed.<br className="hidden md:block" />
                            Micro-Magic offers deep breathing, meditation, and focus rituals—each lasting just 60 seconds.
                          </p>
                          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mb-6 md:mb-8" />
                          <button 
                            onClick={openStressModal}
                            className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 text-white font-semibold rounded-full shadow-xl hover:scale-105 transition text-base md:text-lg"
                          >
                            Try a Stress Ritual
                          </button>
                        </div>
                      </Slide>
                      <Slide direction="right">
                        <div className="flex-1 flex justify-center items-center relative">
                          <div className="absolute w-[300px] md:w-[420px] h-[300px] md:h-[420px] rounded-full bg-blue-300 opacity-40 blur-3xl z-0 animate-pulse" />
                          <img
                            src={stressImg}
                            alt="Stress Relief"
                            className="w-[250px] md:w-[95%] h-[250px] md:h-[95%] object-contain rounded-3xl relative z-10 drop-shadow-2xl"
                          />
                        </div>
                      </Slide>
                    </div>
                  </section>
                </Parallax>

                <Fade cascade duration={1000} triggerOnce>
                  <Parallax speed={-1}>
                    <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden py-8 md:py-16 px-4 bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-100">
                      <div className="absolute top-[5%] right-[-5%] w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-gradient-to-br from-blue-300 via-green-300 to-indigo-200 opacity-30 rounded-full blur-3xl animate-pulse-slow z-0" />
                      <div className="absolute bottom-[-5%] left-[10%] w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-gradient-to-tr from-green-300 via-blue-200 to-indigo-100 opacity-30 rounded-full blur-3xl animate-pulse-slow delay-500 z-0" />
                      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-8 md:gap-16 relative z-10">
                        <Slide direction="up">
                          <div className="flex-1 flex justify-center items-center relative order-1 md:order-1">
                            <div className="relative w-[300px] md:w-[480px] h-[300px] md:h-[480px] flex items-center justify-center -mb-8 md:mb-0">
                              <div className="absolute w-[250px] md:w-[420px] h-[250px] md:h-[420px] rounded-full bg-purple-300 opacity-40 blur-3xl animate-pulse" />
                              <img
                                src={anxietyImg}
                                alt="Anxiety Relief"
                                className="w-[250px] md:w-[95%] h-[250px] md:h-[95%] object-contain rounded-3xl relative z-10 drop-shadow-2xl"
                              />
                            </div>
                          </div>
                        </Slide>
                        <Slide direction="down">
                          <div className="flex-1 flex flex-col items-center md:items-start justify-center max-w-xl text-center md:text-left">
                            <h3 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 text-gray-900 drop-shadow-lg">Anxiety</h3>
                            <p className="text-gray-700 text-lg md:text-2xl leading-relaxed mb-6 md:mb-8 drop-shadow-md">
                              Racing thoughts and restlessness steal your peace. Micro-Magic's puzzles, visuals, and mini-games bring calm when you need it most.
                            </p>
                            <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mb-6 md:mb-8" />
                            <button 
                              onClick={openAnxietyModal}
                              className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-indigo-500 via-blue-500 to-green-400 text-white font-semibold rounded-full shadow-xl hover:scale-105 transition text-base md:text-lg"
                            >
                              Try an Anxiety Ritual
                            </button>
                          </div>
                        </Slide>
                      </div>
                    </section>
                  </Parallax>
                </Fade>

                <Fade cascade duration={1000} triggerOnce>
                  <Parallax speed={-1}>
                    <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden py-8 md:py-16 px-4 bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
                      <div className="absolute top-[-10%] left-[15%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-gradient-to-br from-pink-300 via-red-300 to-purple-200 opacity-30 rounded-full blur-3xl animate-pulse-fast z-0" />
                      <div className="absolute bottom-[10%] right-[5%] w-[250px] md:w-[300px] h-[250px] md:h-[300px] bg-gradient-to-tr from-red-300 via-pink-200 to-purple-100 opacity-30 rounded-full blur-3xl animate-pulse-fast delay-500 z-0" />
                      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-8 md:gap-16 relative z-10">
                        <Slide direction="right">
                          <div className="flex-1 flex flex-col items-center md:items-start justify-center max-w-xl text-center md:text-left">
                            <h3 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 text-gray-900 drop-shadow-lg">Insomnia</h3>
                            <p className="text-gray-700 text-lg md:text-2xl leading-relaxed mb-6 md:mb-8 drop-shadow-md">
                              Your mind won't settle, and the night drags on. Eye exercises, journaling, and blackout rituals help you rest.
                            </p>
                            <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-red-400 rounded-full mb-6 md:mb-8" />
                            <button 
                              onClick={openInsomniaModal}
                              className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 text-white font-semibold rounded-full shadow-xl hover:scale-105 transition text-base md:text-lg"
                            >
                              Try an Insomnia Ritual
                            </button>
                          </div>
                        </Slide>
                        <Slide direction="left">
                          <div className="flex-1 flex justify-center items-center relative">
                            <div className="relative w-[300px] md:w-[480px] h-[300px] md:h-[480px] flex items-center justify-center -mb-8 md:mb-0">
                              <div className="absolute w-[250px] md:w-[420px] h-[250px] md:h-[420px] rounded-full bg-pink-300 opacity-40 blur-3xl animate-pulse" />
                              <img
                                src={depressionImg}
                                alt="Insomnia Relief"
                                className="w-[250px] md:w-[95%] h-[250px] md:h-[95%] object-contain rounded-3xl relative z-10 drop-shadow-2xl"
                              />
                            </div>
                          </div>
                        </Slide>
                      </div>
                    </section>
                  </Parallax>
                </Fade>

                <Fade cascade duration={1000} triggerOnce>
                  <Parallax speed={-1}>
                    <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden py-8 md:py-16 px-4 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
                      <div className="absolute top-[10%] left-[5%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-gradient-to-br from-purple-300 via-blue-300 to-pink-200 opacity-30 rounded-full blur-3xl animate-pulse-slow z-0" />
                      <div className="absolute bottom-[-10%] right-[15%] w-[250px] md:w-[300px] h-[250px] md:h-[300px] bg-gradient-to-tr from-blue-300 via-purple-200 to-pink-100 opacity-30 rounded-full blur-3xl animate-pulse-slow delay-500 z-0" />
                      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-8 md:gap-16 relative z-10">
                        <Slide direction="left">
                          <div className="flex-1 flex justify-center items-center relative order-1 md:order-1">
                            <div className="relative w-[300px] md:w-[480px] h-[300px] md:h-[420px] flex items-center justify-center -mb-8 md:mb-0 rounded-3xl overflow-hidden">
                              <div className="absolute w-[250px] md:w-[420px] h-[250px] md:h-[420px] rounded-full bg-purple-300 opacity-40 blur-3xl animate-pulse" />
                              <img
                                src={panicattackImg}
                                alt="Panic Attack Relief"
                                className="w-[250px] md:w-[100%] h-[250px] md:h-[110%] object-contain relative z-10 drop-shadow-2xl rounded-xl"
                              />
                            </div>
                          </div>
                        </Slide>
                        <Slide direction="right">
                          <div className="flex-1 flex flex-col items-center md:items-start justify-center max-w-xl text-center md:text-left">
                            <h3 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 text-gray-900 drop-shadow-lg">Panic Attack</h3>
                            <p className="text-gray-700 text-lg md:text-2xl leading-relaxed mb-6 md:mb-8 drop-shadow-md">
                              Grounding techniques and calming exercises to help you through a panic attack.
                            </p>
                            <div className="h-1 w-32 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mb-6 md:mb-8" />
                            <button 
                              onClick={openPanicRitualModal}
                              className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-white font-semibold rounded-full shadow-xl hover:scale-105 transition text-base md:text-lg"
                            >
                              Try a Panic Ritual
                            </button>
                          </div>
                        </Slide>
                      </div>
                    </section>
                  </Parallax>
                </Fade>

                <Fade cascade duration={1000} damping={0.1} triggerOnce>
                  <Parallax speed={-0.5}>
                    <section className="w-full py-12 md:py-24 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 border-t border-b">
                      <div className="max-w-6xl mx-auto px-4 md:px-6">
                        <div className="text-center max-w-4xl mx-auto">
                          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">Explore Zephyra Features</h2>
                          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                            Beyond our core rituals, Zephyra includes features like soothing sounds, gentle parallax scrolling,
                            and smooth animations to enhance your journey towards calm and focus.
                          </p>
                        </div>
                      </div>
                    </section>
                  </Parallax>
                </Fade>

                <section className="w-full bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-8 md:pt-16 mt-0">
                  <Fade duration={1000} triggerOnce>
                    <Parallax speed={-0.2}>
                      <section className="flex flex-col items-center justify-center py-16 md:py-36 px-4">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 mt-4 text-center">
                          Ready to experience Zephyra?
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl mb-6 md:mb-10 text-center">
                          Coming soon to Android &amp; iOS.
                        </p>
                        <Link to="/join-magic" className="bg-black text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-medium text-base md:text-lg shadow-lg inline-block">
                          Join the Magic
                        </Link>
                      </section>
                    </Parallax>
                  </Fade>

                  <Parallax speed={0}>
                    <footer className="w-full border-t pt-8 md:pt-16 pb-12 md:pb-24 px-4 md:px-8 flex flex-col md:flex-row justify-between items-start max-w-6xl mx-auto mt-4 md:mt-8 gap-8 md:gap-32">
                      <div className="mb-4 md:mb-0 opacity-30">
                        <span className="font-black text-2xl tracking-widest">■●▲</span>
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
                    </footer>
                  </Parallax>
                </section>
              </>
            )} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/themes" element={<ThemePage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/join-magic" element={<JoinMagicPage />} />
            <Route path="/select-theme" element={<ThemeSelectionPage />} />
            <Route path="/themes/:themeName" element={<ThemeDisplayPage />} />
          </Routes>
        </div>

        {isStressModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-8 relative flex flex-col items-center">
              <button 
                onClick={closeStressModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="text-2xl font-bold mb-4">Stress Ritual</h3>
              <div className="text-5xl font-mono mb-2">{timeLeft}</div>
              <div className="text-xl font-semibold text-gray-600 mb-6">{breathingPhase}</div>

              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-6">
                <div 
                  className="h-full bg-green-500 transition-all duration-1000 ease-linear"
                  style={{ width: `${(timeLeft / 60) * 100}%` }}
                ></div>
              </div>

              <div className="w-40 h-40 rounded-full overflow-hidden mb-6">
                <img src={smileImg} alt="Smile" className="w-full h-full object-cover" />
              </div>
              <button 
                onClick={closeStressModal}
                className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                Close Ritual
              </button>
            </div>
          </div>
        )}

        {isAnxietyModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-8 relative flex flex-col items-center">
              <button 
                onClick={closeAnxietyModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="text-2xl font-bold mb-4">Anxiety Ritual</h3>
              <div
                className="relative w-[200px] h-[200px] border-2 border-gray-300 rounded-lg overflow-hidden mb-6"
                onMouseLeave={() => setDraggingPieceId(null)}
              >
                {puzzlePieces.map(piece => (
                  <div
                    key={piece.id}
                    className={`absolute w-[100px] h-[100px] cursor-grab ${draggingPieceId === piece.id ? 'cursor-grabbing z-20' : ''}`}
                    style={{
                      top: `${piece.top}px`,
                      left: `${piece.left}px`,
                      backgroundImage: `url(${smileImg})`,
                      backgroundSize: '200% 200%',
                      backgroundPosition: `${piece.correctLeft}px ${piece.correctTop}px`,
                    }}
                    onMouseDown={(e) => handleMouseDown(e, piece.id)}
                  />
                ))}
              </div>

              <div className="w-40 h-40 rounded-full overflow-hidden mb-6">
                <img src={smileImg} alt="Smile" className="w-full h-full object-cover" />
              </div>
              <button 
                onClick={closeAnxietyModal}
                className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                Close Ritual
              </button>
            </div>
          </div>
        )}

        {isInsomniaModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-8 relative flex flex-col items-center">
              <button 
                onClick={closeInsomniaModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="text-2xl font-bold mb-4">Insomnia Ritual</h3>
              <p className="text-center text-gray-700 mb-6">Blink your eyes real fast for the next 60 seconds.</p>
              <div className="text-5xl font-mono mb-6">{insomniaTimeLeft}</div>

              <div className="w-40 h-40 rounded-full overflow-hidden mb-6">
                <img src={smileImg} alt="Smile" className="w-full h-full object-cover" />
              </div>
              <button 
                onClick={closeInsomniaModal}
                className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                Close Ritual
              </button>
            </div>
          </div>
        )}

        {isPanicModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-8 relative flex flex-col items-center">
              <button 
                onClick={closePanicRitualModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="text-2xl font-bold mb-4">Panic Attack Ritual</h3>
              <div className="text-center text-xl font-semibold text-gray-800 mb-6">
                {motivationalQuote}
              </div>

              <div className="w-40 h-40 rounded-full overflow-hidden mb-6">
                <img src={smileImg} alt="Smile" className="w-full h-full object-cover" />
              </div>
              <button 
                onClick={closePanicRitualModal}
                className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                Close Ritual
              </button>
            </div>
          </div>
        )}

    </div>
    </ParallaxProvider>
  );
}

export default App;
