import React from "react";

interface VideoModalProps {
  videoUrl: string;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/50 transition-opacity duration-300 animate-fadeIn">
      <div className="relative w-full max-w-3xl p-4 mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-white dark:bg-slate-800 text-black dark:text-white border border-gray-300 dark:border-slate-600 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition-all duration-200"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Video Content */}
        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-xl border border-white/10 bg-black">
          <video
            src={videoUrl}
            controls
            autoPlay
            className="w-full h-full object-contain bg-black"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
