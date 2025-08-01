"use client";
import { useGSAPScroll } from "@/hooks/useGSAPScroll";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  useGSAPScroll();

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <CustomCursor />
      
      {/* Navbar - Clean & Minimal */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Navbar />
        </div>
      </div>

      {/* Hero Section - Modern & Elegant */}
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left - Title */}
            <div className="space-y-8 scroll-trigger from-left">
              <h1 className="text-6xl lg:text-8xl font-light leading-tight">
                FULLSTACK<br />
                <span className="text-green-400 font-medium">WEB DEVELOPER</span>
              </h1>
              <div className="w-24 h-1 bg-green-400"></div>
            </div>
            
            {/* Right - Info */}
            <div className="space-y-6 text-right scroll-trigger from-right">
              <h2 className="text-4xl lg:text-5xl font-light">IMAM BAHY PUTRA SUSETYO</h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg ml-auto">
                Hello, you can call me anytime if you need; a scalable website, designing your life, and hearing people says &apos;what a beautiful website!&apos;
              </p>
              <div className="flex justify-end gap-4 text-sm text-gray-400">
                <span>📍 Bekasi, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Me - Clean Section */}
      <div id="resume" className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto scroll-trigger">
          <AboutMe />
        </div>
      </div>

      {/* Skills - Modern Grid */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto scroll-trigger">
          <Skills />
        </div>
      </div>

      {/* Portfolio - Gallery Style */}
      <div id="projects" className="py-20 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto scroll-trigger">
          <Portfolio />
        </div>
      </div>

      {/* Experience - Timeline */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto scroll-trigger">
          <Experience />
        </div>
      </div>

      {/* Contact - Clean Form */}
      <div id="contact" className="py-20 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto scroll-trigger">
          <Contact />
        </div>
      </div>
    </div>
  );
}