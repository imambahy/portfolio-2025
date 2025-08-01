"use client";

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex justify-between items-center">
      <div className="text-xl font-light animate-fade-in-left">
        IBP
      </div>

      {/* Navigation */}
      <div className="flex gap-8 animate-fade-in-right">
        <button 
          onClick={() => scrollToSection('resume')}
          className="text-white/80 hover:text-green-400 transition-all duration-300 relative group cursor-none"
        >
          RESUME
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
        </button>
        <button 
          onClick={() => scrollToSection('projects')}
          className="text-white/80 hover:text-green-400 transition-all duration-300 relative group cursor-none"
        >
          PROJECTS
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="text-white/80 hover:text-green-400 transition-all duration-300 relative group cursor-none"
        >
          CONTACT
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>
    </nav>
  );
}