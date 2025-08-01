"use client";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Bangkit Mental Health Chatbot",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center",
    description: "Learning how to make an API for a mental health chatbot (SMILE) as part of the Bangkit Academy Final Task.",
    technologies: "Node.js, GCP",
    role: "Contributor",
    github: "https://github.com/zaidannoor/Bangkit-capstone?tab=readme-ov-file"
  },
  {
    title: "Kicksolution - Shoe Care Services Website",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=400&fit=crop&crop=center",
    description: "Built a website using Laravel for managing shoe care services.",
    technologies: "PHP (Laravel), MySQL, Ajax",
    role: "Developer",
    github: "https://github.com/imambahy/kicksolution"
  },
  {
    title: "Komorebi",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=center",
    description: "A modern company profile website for TechCorp/Komorebi, built with Next.js and Tailwind CSS. Features company info, services, teams, testimonials, and blog.",
    technologies: "Next.js, TypeScript, Tailwind CSS",
    role: "Fullstack Developer",
    github: "https://github.com/imambahy/komorebi",
    demo: "https://komorebi-zeta.vercel.app/"
  }
];

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="space-y-12 animate-fade-in-up">
      <h3 className="text-3xl font-light text-green-400 mb-12">
        {/* PORTFOLIO */}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg bg-white/5 border border-white/20 hover:scale-105 transition-all duration-500"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = `https://via.placeholder.com/600x400?text=${project.title}`;
                }}
              />
            </div>

            {/* Overlay */}
            <div
              className={`absolute inset-0 bg-black/80 flex flex-col justify-end p-8 transition-all duration-300 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="space-y-4">
                <h4 className="text-2xl font-medium text-green-400">{project.title}</h4>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-green-400">{project.technologies}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">{project.role}</span>
                </div>
                <div className="flex gap-4 mt-2">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-green-400 underline hover:text-white transition"
                      onClick={e => e.stopPropagation()}
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-green-400 underline hover:text-white transition"
                    onClick={e => e.stopPropagation()}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}