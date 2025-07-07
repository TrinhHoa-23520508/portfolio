import React, { useState, useRef } from 'react';
import type { IExperience } from '@/types/type';

interface Position {
  x: number;
  y: number;
}

interface IProps {
  experience: IExperience;
  icon: React.ReactNode;
}

const ExperienceCard: React.FC<IProps> = ({ experience, icon }) => {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isIconHovered, setIsIconHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const getBorderGlow = () => {
    if (!isHovered) return '';
    const { x, y } = mousePosition;
    return `radial-gradient(220px circle at ${x}px ${y}px, rgba(236, 72, 153, 0.6), rgba(219, 39, 119, 0.4) 40%, rgba(157, 23, 77, 0.2) 60%, transparent 85%)`;
  };

  const getInnerGlow = () => {
    if (!isHovered) return '';
    const { x, y } = mousePosition;
    return `radial-gradient(300px circle at ${x}px ${y}px, rgba(236, 72, 153, 0.25), rgba(219, 39, 119, 0.15) 50%, transparent 80%)`;
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        className="relative w-full max-w-2xl rounded-2xl p-8 shadow-lg transition-all duration-500 dark:bg-pink-50 bg-white border-2 overflow-hidden"
        style={{
          border: isHovered ? '2px solid transparent' : '2px solid #e5e7eb',
          background: isHovered
            ? `linear-gradient(white, white) padding-box, ${getBorderGlow()} border-box`
            : undefined,
          boxShadow: isHovered
            ? '0 25px 50px -12px rgba(236, 72, 153, 0.25), 0 0 0 1px rgba(236, 72, 153, 0.1)'
            : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        }}
      >
        {/* Background gradient overlay */}
        {isHovered && (
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none opacity-100 transition-opacity duration-500"
            style={{
              background: getInnerGlow(),
            }}
          />
        )}

        {/* Subtle pattern overlay */}
        {isHovered && (
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none opacity-10 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(236, 72, 153, 0.3) 0%, transparent 50%)`,
            }}
          />
        )}

        <div className="flex items-start space-x-6 relative z-10">
          <div
            onMouseEnter={() => setIsIconHovered(true)}
            onMouseLeave={() => setIsIconHovered(false)}
            className={`flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-white to-pink-50 transition-all duration-500 shadow-lg ${isIconHovered
                ? 'scale-110 shadow-pink-300/60 shadow-2xl'
                : 'scale-100'
              }`}
            style={{
              background: isIconHovered
                ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(219, 39, 119, 0.05))'
                : 'linear-gradient(135deg, #ffffff, #fdf2f8)',
              boxShadow: isIconHovered
                ? '0 20px 25px -5px rgba(236, 72, 153, 0.3), 0 10px 10px -5px rgba(236, 72, 153, 0.2)'
                : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div className={`transition-all duration-300 ${isIconHovered ? 'scale-110' : 'scale-100'}`}>
              {icon}
            </div>
          </div>

          <div className="flex-1">
            <div className="text-sm text-pink-600 font-bold mb-2 tracking-wide uppercase">
              {experience.timeline}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
              {experience.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-base">
              {experience.description}
            </p>
          </div>
        </div>

        {/* Enhanced border glow effect */}
        {isHovered && (
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
            style={{
              background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(236, 72, 153, 0.08), transparent 70%)`,
              opacity: 0.8,
            }}
          />
        )}

        {/* Subtle inner border highlight */}
        {isHovered && (
          <div
            className="absolute inset-1 rounded-xl pointer-events-none opacity-30 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, transparent 0%, rgba(236, 72, 153, 0.1) 50%, transparent 100%)`,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;