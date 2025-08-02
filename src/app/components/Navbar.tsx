"use client";

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex justify-between items-center w-full">
      {/* Left - Name */}
      <div className="text-white font-opensauce text-sm animate-fade-in-left">
        IMAM<br />
        BAHY
      </div>

      {/* Center - Title */}
      <div className="text-white font-opensauce text-sm animate-fade-in-up text-center">
        FULLSTACK DEVELOPER<br />
        FOLIO // 2025
      </div>

      {/* Right - Contact Button */}
      <div className="animate-fade-in-right">
        <button 
          onClick={() => scrollToSection('contact')}
          className="btn-outline font-opensauce text-xs"
        >
          CONTACT
        </button>
      </div>
    </nav>
  );
}