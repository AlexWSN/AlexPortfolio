import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "IceCream",
      desc: "Responsive website using Parcel, SCSS, and JavaScript.",
      links: [
        { label: "Repo", href: "https://github.com/AlexWSN/IceCreamProject" },
        { label: "Live", href: "https://alexwsn.github.io/IceCreamProject/" },
      ],
    },
    {
      title: "Scary Frog Graphics",
      desc: "A responsive, visually engaging graphics portfolio using HTML, Tailwind CSS, and JavaScript.",
      links: [
        { label: "Repo", href: "https://github.com/AlexWSN/ScaryFrogGraphics" },
        { label: "Live", href: "https://alexwsn.github.io/ScaryFrogGraphics/" },
      ],
    },
    {
      title: "Interactive image gallery",
      desc: "Created an interactive image gallery using JavaScript. Added click-to-open full-size images with a modal window.Used SimpleLightbox library for better navigation and captions.",
      links: [
        { label: "Repo", href: "https://github.com/AlexWSN/goit-js-hw-07" },
        { label: "Live", href: "https://alexwsn.github.io/goit-js-hw-07/" },
      ],
    },
    {
      title: "Image Search App",
      desc: "Developed a front-end application that searches and displays images by keyword using an external API.",
      links: [
        { label: "Repo", href: "https://github.com/AlexWSN/goit-hw-11-js" },
        { label: "Live", href: "https://alexwsn.github.io/goit-hw-11-js/" },
      ],
    },
    {
      title: "Front-end JavaScript Practice Project",
      desc: "Implemented multiple interactive UI components using vanilla JavaScript, including dynamic list rendering, image gallery creation, form validation, event handling, and DOM manipulation. Developed responsive features such as counters, input validation, and color-changing backgrounds, demonstrating proficiency in manipulating HTML elements, managing events, and applying CSS styles programmatically.",
      links: [
        { label: "Repo", href: "https://github.com/AlexWSN/goit-js-hw-06" },
        { label: "Live", href: "https://alexwsn.github.io/goit-js-hw-06/" },
      ],
    },
    {
      title: "Cat Finder – Frontend Application",
      desc: "Developed a frontend app to search and display information about cat breeds based on user input. Implemented API integration, dynamic rendering of breed data, and user-friendly interface with responsive design.",
      links: [
        { label: "Live", href: "https://alexwsn.github.io/goit-hw-10-js/" },
      ],
    },
    {
      title: "JavaScript UI Widgets & Async Tasks",
      desc: "Implemented interactive JavaScript widgets including a color switcher, countdown timer with date picker, and a promise generator. Used event handling, DOM manipulation, and asynchronous programming concepts. Integrated external libraries like flatpickr for date selection and demonstrated clean, modular code with proper user feedback.",
      links: [
        { label: "Live", href: "https://alexwsn.github.io/goit-hw-9-js/" },
      ],
    },
    {
      title: "Frontend JavaScript Project – Interactive Widgets & State Management",
      desc: "Developed advanced frontend components using modern JavaScript and ES6 modules, integrating third-party libraries such as SimpleLightbox, Vimeo Player, and lodash.throttle. Implemented features include a photo gallery with lightbox functionality, a video player that saves and restores playback position using localStorage, and a feedback form with real-time data saving and throttling. Built and optimized the project using Parcel, adhering to quality and performance standards.",
      links: [
        { label: "Live", href: "https://alexwsn.github.io/goit-hw-08-js/" },
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-[#151515] py-12 px-4 text-gray-300 flex flex-col justify-start min-h-[70vh]"
      data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#00df9a] mb-2">Projects</h2>
          <p className="text-gray-400">
            A selection of my work during the GoIT course and personal practice
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-gray-900 rounded-xl shadow-xl hover:shadow-[#00df9a]/50 transition-shadow duration-300 p-6">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 text-justify">{project.desc}</p>
              <div className="flex gap-4 flex-wrap">
                {project.links.map((link, j) => (
                  <a
                    key={j}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00df9a] hover:underline font-medium">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
