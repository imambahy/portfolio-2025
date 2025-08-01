"use client";

const experiences = [
  {
    title: "Software Engineer Internship",
    company: "PT Artha Puncak Semesta Indonesia",
    time: "2023 - 2024",
    details: [
      "Learned about project management with Trello",
      "Learned about Time Management",
      "Learned about CodeIgniter, Vue.js and PostgreSQL",
      "Created a Dashboard for Truck Tracking Website (undone)"
    ]
  },
  {
    title: "Cloud Computing Student",
    company: "Bangkit Academy",
    time: "2023",
    details: [
      "Learned about Google Cloud Services",
      "Learned about JavaScript and Node.js",
      "Created an API for a mental health chatbot (SMILE)",
      "Deployed the SMILE project to Google Cloud using Google Cloud Run",
      "Created a Dashboard for Truck Tracking Website (undone)"
    ]
  },
  {
    title: "Programmer Internship",
    company: "PT Hexaon Business Mitrasindo",
    time: "2022 - 2023",
    details: [
      "Learned about PHP with Laravel and CodeIgniter frameworks",
      "Created a Pie Chart using chart.js for data visualization",
      "Designed a homepage using Bootstrap 3"
    ]
  }
];

export default function Experience() {
  return (
    <section className="space-y-12 animate-fade-in-up">
      <h3 className="text-3xl font-light text-green-400 mb-12">
        {/* EXPERIENCE */}
      </h3>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-transparent"></div>

        <div className="space-y-12 stagger-children">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-20"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-green-400 rounded-full animate-pulse-slow"></div>

              {/* Content */}
              <div className="p-8 border border-white/20 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-medium text-green-400">{exp.title}</h4>
                    <p className="text-gray-300 mt-1">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-400 bg-white/10 px-3 py-1 rounded-full">
                    {exp.time}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="text-gray-300 leading-relaxed hover:text-white transition-colors duration-300"
                    >
                      • {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}