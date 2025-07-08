import type { IItemCarousel } from '@/types/type';
import React, { useState, useEffect, useRef } from 'react';

interface IProps {
    items: IItemCarousel[]
}

const InfiniteScroll: React.FC<IProps> = (prop: IProps) => {
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const {items} = prop;


  const duplicatedSkills = [...items, ...items];

  useEffect(() => {
    if (isPaused) return;

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 0.5;
    let animationId: number;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollSpeed;
      }

      if (!isPaused) {
        animationId = requestAnimationFrame(scroll);
      }
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused]);

  return (
    <div className="w-80 md:w-full">
      <div className="max-w-6xl mx-auto">
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setHoveredIndex(null);
          }}
        >
          <div
            ref={scrollRef}
            className="flex gap-6 py-4 overflow-hidden"
            style={{
              scrollBehavior: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {duplicatedSkills.map((item, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-36 h-36 rounded-xl flex flex-col items-center justify-center bg-gray-100 dark:bg-gradient-to-b from-pink-100 to-pink-300 shadow-md transition-all duration-300 ease-in-out transform ${
                  hoveredIndex === index ? 'scale-110 z-10' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="text-4xl mb-2 text-blue-500 dark:text-pink-500">{item.icon}</div>
                <div className="font-medium text-gray-900  text-center">
                  {item.name}
                </div>
                {hoveredIndex === index && (
                  <div className="text-xs text-gray-600 mt-1 text-center">
                    {item.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
