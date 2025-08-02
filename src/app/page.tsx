"use client";
import { useGSAPScroll } from "@/hooks/useGSAPScroll";
import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  useGSAPScroll();
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const windowHeight = window.innerHeight;
      
      projectRefs.current.forEach((ref, index) => {
        if (ref && index < 3) { // Only handle 3 projects
          const rect = ref.getBoundingClientRect();
          const elementTop = rect.top;
          const elementHeight = rect.height;
          
          // Check if element is in viewport
          if (elementTop < windowHeight && elementTop > -elementHeight) {
            const progress = (windowHeight - elementTop) / (windowHeight + elementHeight);
            const isOdd = index % 2 === 0;
            
            if (isOdd) {
              // Slide from left
              ref.style.transform = `translateX(${Math.max(-100 + progress * 100, 0)}%)`;
            } else {
              // Slide from right
              ref.style.transform = `translateX(${Math.min(100 - progress * 100, 0)}%)`;
            }
            
            ref.style.opacity = Math.min(progress * 2, 1).toString();
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mini Game functionality
  useEffect(() => {
    const target = document.getElementById('game-target');
    const scoreElement = document.getElementById('game-score');
    const timeElement = document.getElementById('game-time');
    const startButton = document.getElementById('start-game');
    
    let score = 0;
    let timeLeft = 30;
    let gameInterval: NodeJS.Timeout;
    let timeInterval: NodeJS.Timeout;
    let isGameActive = false;

    const moveTarget = () => {
      if (!target) return;
      
      const container = target.parentElement;
      if (!container) return;
      
      const containerRect = container.getBoundingClientRect();
      const targetSize = 32; // 8 * 4 (w-8 = 2rem = 32px)
      
      const maxX = containerRect.width - targetSize;
      const maxY = containerRect.height - targetSize;
      
      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;
      
      target.style.left = `${randomX}px`;
      target.style.top = `${randomY}px`;
      target.style.transform = 'translate(0, 0)';
    };

    const startGame = () => {
      if (isGameActive) return;
      
      isGameActive = true;
      score = 0;
      timeLeft = 30;
      
      if (scoreElement) scoreElement.textContent = score.toString();
      if (timeElement) timeElement.textContent = timeLeft.toString();
      if (startButton) startButton.textContent = 'Game Running...';
      
      moveTarget();
      
      gameInterval = setInterval(moveTarget, 1500);
      
      timeInterval = setInterval(() => {
        timeLeft--;
        if (timeElement) timeElement.textContent = timeLeft.toString();
        
        if (timeLeft <= 0) {
          endGame();
        }
      }, 1000);
    };

    const endGame = () => {
      isGameActive = false;
      clearInterval(gameInterval);
      clearInterval(timeInterval);
      
      if (startButton) startButton.textContent = `Game Over! Score: ${score}`;
      
      setTimeout(() => {
        if (startButton) startButton.textContent = 'Play Again';
      }, 2000);
    };

    const handleTargetClick = () => {
      if (!isGameActive) return;
      
      score++;
      if (scoreElement) scoreElement.textContent = score.toString();
      
      moveTarget();
    };

    if (target) {
      target.addEventListener('click', handleTargetClick);
    }
    
    if (startButton) {
      startButton.addEventListener('click', startGame);
    }

    return () => {
      if (target) {
        target.removeEventListener('click', handleTargetClick);
      }
      if (startButton) {
        startButton.removeEventListener('click', startGame);
      }
      clearInterval(gameInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const addProjectRef = (el: HTMLDivElement | null, index: number) => {
    projectRefs.current[index] = el;
  };

  return (
    <div className="min-h-screen bg-black text-white font-opensauce">
      <CustomCursor />

      {/* Navbar - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Navbar />
        </div>
      </div>

      {/* Hero Section - Improved Text Positioning */}
      <div className="relative min-h-screen flex items-center px-6 pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Large Hero Text */}
            <div className="scroll-trigger from-left">
              <h1 className="text-hero font-bebas text-white leading-none">
                FULLSTACK
                <br />
                —— WEB
                <br />
                DEVELOPER
              </h1>
            </div>

            {/* Right - About Section with Improved Layout */}
            <div className="scroll-trigger from-right">
              <div className="space-y-8">
                <h2 className="text-white font-opensauce text-sm uppercase tracking-wider">
                  About
                </h2>
                <div className="about-text">
                  <p className="mb-4">
                    Hey! I’m a web developer from{" "}
                    <span className="about-highlight">Bekasi, Indonesia</span>{" "}
                    who loves crafting smooth, interactive experiences on the
                    web. Whether it’s building out{" "}
                    <span className="about-highlight">e-commerce sites</span> or
                    coding{" "}
                    <span className="about-highlight">
                      cloud-powered chatbots
                    </span>
                    , I’m all about writing code that clicks — both functionally
                    and visually.
                  </p>
                  <p>
                    Always up for collaboration, good ideas, or just nerding out
                    over design systems. Let’s connect and create something
                    awesome together!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span className="text-white/60 font-opensauce text-sm">
            Scroll down
          </span>
        </div>
      </div>

      {/* Featured Projects Section with Side Parallax */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-trigger">
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-white font-opensauce text-sm uppercase tracking-wider">
                FEATURED PROJECTS (3)
              </h2>
              <div className="text-white font-opensauce text-sm uppercase tracking-wider">
                FULLSTACK DEVELOPMENT / WEB APPLICATIONS
              </div>
            </div>
            
            <div className="projects-grid">
              {/* Project 1 - Komorebi */}
              <div className="project-item scroll-trigger" ref={(el) => addProjectRef(el, 0)}>
                <a href="https://komorebi-zeta.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">
                  <div className="project-category">
                    Fullstack Development / Web Application
                  </div>
                  <h3 className="project-title">
                    KOMOREBI — COMPANY PROFILE WEBSITE
                  </h3>
                  <div className="project-visit">
                    Visit Site →
                  </div>
                </a>
              </div>

              {/* Project 2 - SMILE (Bangkit Capstone) */}
              <div className="project-item scroll-trigger" ref={(el) => addProjectRef(el, 1)}>
                <a href="https://github.com/zaidannoor/Bangkit-capstone?tab=readme-ov-file" target="_blank" rel="noopener noreferrer" className="project-link">
                  <div className="project-category">
                    Mental Health / AI Chatbot Application
                  </div>
                  <h3 className="project-title">
                    SMILE — MENTAL HEALTH SUPPORT CHATBOT
                  </h3>
                  <div className="project-visit">
                    View on GitHub →
                  </div>
                </a>
              </div>

              {/* Project 3 - Kicksolution */}
              <div className="project-item scroll-trigger" ref={(el) => addProjectRef(el, 2)}>
                <a href="https://github.com/imambahy/kicksolution/tree/master" target="_blank" rel="noopener noreferrer" className="project-link">
                  <div className="project-category">
                    E-commerce / Shoe Store Platform
                  </div>
                  <h3 className="project-title">
                    KICKSOLUTION — SHOE CLEANING SERVICE
                  </h3>
                  <div className="project-visit">
                    View on GitHub →
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Icebreakers Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-trigger">
            <h2 className="text-white font-opensauce text-sm uppercase tracking-wider mb-12">
              ICEBREAKERS
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left - Interests */}
              <div className="space-y-8">
                <h3 className="text-white font-opensauce text-lg mb-6">
                  When I'm not coding, you'll find me:
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 group cursor-none">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                      <span className="text-2xl">🎵</span>
                    </div>
                    <div>
                      <h4 className="text-white font-opensauce text-base">Listening to Music</h4>
                      <p className="text-white/60 font-opensauce text-sm">Electronic, Alt, Lo-fi, Jazz</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group cursor-none">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                      <span className="text-2xl">🎮</span>
                    </div>
                    <div>
                      <h4 className="text-white font-opensauce text-base">Gaming</h4>
                      <p className="text-white/60 font-opensauce text-sm">RPG, Strategy, Indie Games</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group cursor-none">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                      <span className="text-2xl">📚</span>
                    </div>
                    <div>
                      <h4 className="text-white font-opensauce text-base">Reading</h4>
                      <p className="text-white/60 font-opensauce text-sm">Tech, Sci-fi, Self-development</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group cursor-none">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                      <span className="text-2xl">✍️</span>
                    </div>
                    <div>
                      <h4 className="text-white font-opensauce text-base">Writing</h4>
                      <p className="text-white/60 font-opensauce text-sm">Blog posts, Tech articles</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right - Mini Game */}
              <div className="space-y-6">
                <h3 className="text-white font-opensauce text-lg mb-6">
                  Quick Game: Click the moving target
                </h3>
                
                <div className="relative w-full h-64 bg-white/5 rounded-lg overflow-hidden border border-white/10">
                  <div 
                    id="game-target"
                    className="absolute w-8 h-8 bg-white rounded-full cursor-none transition-all duration-200 hover:scale-110"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                  ></div>
                  
                  <div className="absolute bottom-4 left-4 text-white/60 font-opensauce text-sm">
                    Score: <span id="game-score">0</span>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 text-white/60 font-opensauce text-sm">
                    Time: <span id="game-time">30</span>s
                  </div>
                </div>
                
                <div className="text-center">
                  <button 
                    id="start-game"
                    className="btn-outline font-opensauce text-xs"
                  >
                    Start Game
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-white/80 font-opensauce text-lg leading-relaxed max-w-3xl mx-auto">
                Want to know more about me? Let's connect and share our interests! 
                I'm always open to discussing music, games, books, or any tech topics.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="contact-section py-20 px-6 always-visible">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <h2 className="text-white font-opensauce text-sm uppercase tracking-wider">
              Got a question, proposal or project or want to work together on
              something? Feel free to reach out.
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://github.com/imambahy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline font-opensauce text-xs cursor-none"
              >
                LET'S COLLABORATE
              </a>
              <a 
                href="https://www.linkedin.com/in/imambahyputra/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline font-opensauce text-xs cursor-none"
              >
                SAY HELLO
              </a>
            </div>
            <div className="pt-8">
              <p className="text-white/80 font-opensauce text-sm">
                imambahyp@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
