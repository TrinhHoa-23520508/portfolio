import React, { useState, useRef, useEffect } from "react";
import { FaGithub } from "react-icons/fa6";
import { VscPreview } from "react-icons/vsc";
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  demoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  githubLink,
  demoLink,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkDarkMode = () =>
      setIsDarkMode(document.documentElement.classList.contains("dark"));

    checkDarkMode(); 

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };

  return (
    <div className="p-10 flex items-center justify-center">
      <div
        ref={cardRef}
        className="relative max-w-md mx-auto rounded-xl overflow-hidden shadow-2xl bg-slate-500 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 transition-all duration-300 cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          background: isHovered
            ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%), linear-gradient(135deg, ${
                isDarkMode ? "#1e293b 0%, #0f172a 100%" : "#ffffff 0%, #f8fafc 100%"
              })`
            : `linear-gradient(135deg, ${
                isDarkMode ? "#1e293b 0%, #0f172a 100%" : "#ffffff 0%, #f8fafc 100%"
              })`,
        }}
      >
        {/* Animated Border */}
        <div
          className="absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${
              isDarkMode ? "rgba(59, 130, 246, 0.8)" : "rgba(59, 130, 246, 0.6)"
            }, transparent 40%)`,
            padding: "2px",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "subtract",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "subtract",
          }}
        />

        {/* Spotlight Layer */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: isHovered ? 0.3 : 0,
            background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, ${
              isDarkMode ? "rgba(168, 85, 247, 0.4)" : "rgba(168, 85, 247, 0.2)"
            }, transparent 40%)`,
          }}
        />

        {/* Image */}
        <div className="relative bg-gray-50 dark:bg-slate-700/50 p-6 flex justify-center">
          <img
            src={image}
            alt={title}
            className="h-48 object-contain transition-transform duration-300 hover:scale-105"
          />
          <div
            className="absolute inset-0 rounded-t-xl transition-opacity duration-300 pointer-events-none"
            style={{
              opacity: isHovered ? 0.2 : 0,
              background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, ${
                isDarkMode ? "rgba(34, 197, 94, 0.3)" : "rgba(34, 197, 94, 0.2)"
              }, transparent 60%)`,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative px-6 py-4">
          <h2 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">{title}</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
            style={{
              opacity: isHovered ? 0.1 : 0,
              background: `radial-gradient(250px circle at ${mousePosition.x}px ${mousePosition.y - 200}px, ${
                isDarkMode ? "rgba(236, 72, 153, 0.3)" : "rgba(236, 72, 153, 0.15)"
              }, transparent 60%)`,
            }}
          />
        </div>

        {/* Buttons */}
        <div className="relative px-6 pb-6 flex gap-3">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 border border-gray-300 dark:border-slate-600 hover:border-blue-500 text-gray-700 dark:text-white font-medium px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group"
          >
            <i className="fa-brands fa-github group-hover:rotate-12 transition-transform" />
            <FaGithub/>
            <span>GitHub</span>
          </a>
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 border border-gray-300 dark:border-slate-600 hover:border-purple-500 text-gray-700 dark:text-white font-medium px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group"
          >
            <i className="fa-solid fa-play group-hover:scale-110 transition-transform" />
            <VscPreview/>
            <span>Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
