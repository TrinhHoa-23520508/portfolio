import type { IProject } from "@/types/type";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { VscPreview } from "react-icons/vsc";

interface Props extends IProject {
  onClose: () => void;
}

const ProjectDetailModal: React.FC<Props> = ({
  title,
  description,
  githubLink,
  demoLink,
  image,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/50 px-2 md:px-4">
  <div className="relative w-full max-w-3xl md:max-w-4xl bg-white dark:bg-slate-800 rounded-xl shadow-2xl overflow-hidden animate-fade-in">
    <button
      onClick={onClose}
      className="absolute top-4 right-4 text-2xl text-white bg-red-500 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center z-50"
    >
      ×
    </button>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6">
      <div className="flex justify-center items-center">
        <img
          src={image}
          alt={title}
          className="w-full h-auto max-h-60 md:max-h-80 object-contain"
        />
      </div>

      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-4">
          {title}
        </h2>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 px-4 py-2 rounded-lg flex items-center gap-2 border dark:border-slate-600 text-gray-800 dark:text-white transition"
          >
            <FaGithub /> GitHub
          </a>

          {demoLink !== "#" && demoLink.endsWith(".mp4") && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-100 dark:bg-purple-800 hover:bg-purple-200 dark:hover:bg-purple-700 px-4 py-2 rounded-lg flex items-center gap-2 border dark:border-purple-600 text-purple-800 dark:text-white transition"
            >
              <VscPreview /> Video
            </a>
          )}
        </div>
      </div>
    </div>

    {demoLink !== "#" && demoLink.includes("drive.google.com") && (
      <div className="px-4 md:px-6 pb-4 md:pb-6">
        <iframe
          src={demoLink.replace("/view", "/preview")}
          allow="autoplay"
          allowFullScreen
          className="w-full h-[200px] md:h-[400px] rounded-lg shadow-md border dark:border-gray-700"
        />
      </div>
    )}
  </div>
</div>

  );
};

export default ProjectDetailModal;
