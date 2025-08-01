"use client";

export default function Skills() {
  const skillCategories = [
    {
      title: "Technical Skills",
      items: [
        "Languages: PHP, JavaScript, HTML, CSS",
        "Frameworks: Laravel, Bootstrap",
        "UI/UX Tools: Figma, Adobe Creative Suite",
        "Database: MySQL",
        "Version Control: Git"
      ]
    },
    {
      title: "On-Learning",
      items: [
        "Cloud Services: Google Cloud",
        "Frontend: React.js"
      ]
    },
    {
      title: "Soft Skills",
      items: [
        "Communication",
        "Critical Thinking",
        "Problem-Solving",
        "Teamwork",
        "Detail-Oriented",
        "Public Speaking"
      ]
    }
  ];

  return (
    <section className="space-y-12 animate-fade-in-up">
      <h3 className="text-3xl font-light text-green-400 mb-12">
        {/* WORKFLOW & SKILLS */}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="group p-8 border border-white/20 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-500 hover:border-green-400/50 hover:scale-105"
          >
            <h4 className="text-xl font-medium text-green-400 mb-6">{category.title}</h4>
            <ul className="space-y-4">
              {category.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="text-gray-300 leading-relaxed hover:text-white transition-colors duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="mt-16 p-8 border border-white/20 rounded-lg bg-white/5 animate-slide-in-bottom">
        <h4 className="text-xl font-medium text-green-400 mb-6">Certifications</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 stagger-children">
          {[
            "Udemy: The Ultimate React Course 2024",
            "Coursera: Foundations of UX Design",
            "Dicoding: Web Programming, Backend, Cloud Computing",
            "Google Cloud: Foundations, Networking, Data, ML, AI"
          ].map((cert, index) => (
            <div
              key={index}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}