"use client";

import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-5 flex justify-center lg:justify-start animate-fade-in-left">
        <div className="relative">
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 animate-scale-in">
            <Image
              src="/assets/img/pp.jpeg"
              alt="Profile"
              width={320}
              height={320}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-pulse-slow"></div>
        </div>
      </div>

      <div className="lg:col-span-7 space-y-8 animate-fade-in-right">
        <div>
          <h3 className="text-3xl font-light mb-6 text-green-400">ABOUT ME</h3>
          <p className="text-xl leading-relaxed text-gray-300 mb-6">
            Hi, I&apos;m Imam Bahy Putra Susetyo! Fresh graduate in System Information from Gunadarma University, 
            passionate about web development and cloud computing. My goal is to create impactful projects 
            while continuously learning and improving my skills.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 stagger-children">
          {["#Bekasi, Indonesia", "#Gunadarma University", "#imambahyp@gmail.com", "#LinkedIn: imambahyputra", "#Medium: imambahyp"].map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-green-400 font-mono hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-105"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}