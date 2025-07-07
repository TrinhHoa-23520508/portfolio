import React, { useState, useRef } from 'react';
import { User } from 'lucide-react';
import type { IExperience } from '@/types/type';

interface Position {
  x: number;
  y: number;
}

interface IProps {
    experience: IExperience;
    icon: React.ReactNode;
}
const ExperienceCard: React.FC<IProps> = (prop: IProps) => {
    const {experience, icon} = prop;
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

  const getBorderGradient = () => {
    if (!isHovered) return '';
    const { x, y } = mousePosition;
    return `radial-gradient(150px circle at ${x}px ${y}px, oklch(58.6% 0.253 17.585), transparent 70%)`;
  };

  return (
    <div className="flex items-center justify-center p-3" >
      <div
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        className="relative rounded-2xl p-8 shadow-lg transition-all duration-300 w-96 dark:bg-pink-100"
        style={{
          background: isHovered
            ? `linear-gradient(oklch(97.7% 0.014 308.299), oklch(94.8% 0.028 342.258)) padding-box, ${getBorderGradient()} border-box`
            : '',
          border: isHovered ? '2px solid transparent' : '2px solid #e5e7eb',
        }}
      >
        <div className="flex items-start space-x-4">
          <div
            onMouseEnter={() => setIsIconHovered(true)}
            onMouseLeave={() => setIsIconHovered(false)}
            className={`flex items-center justify-center w-12 h-12 rounded-lg transition-transform duration-300 will-change-transform ${
              isIconHovered ? 'scale-110' : 'scale-100'
            }`}
          >
            {icon}
          </div>

          <div className="flex-1">
            <div className="text-sm text-pink-500 font-medium mb-2">
              {experience.timeline}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {experience.title}
            </h3>
            <p className="text-gray-600 font-medium">{experience.description}</p>
          </div>
        </div>

        {isHovered && (
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none opacity-20 transition-opacity duration-300"
            style={{
              background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(236, 72, 153, 0.1), transparent 70%)`,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
