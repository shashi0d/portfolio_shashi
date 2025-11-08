import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  years: string;
  role: string;
  scope: string;
  media?: { name: string; url: string }[];
  hasVideo: boolean;
  images: string[];
}

interface StackScrollProps {
  projects: Project[];
}

function StackCard({ project, index, totalCards }: { project: Project; index: number; totalCards: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const stickyTop = 80 + index * 100; // Sticky position for this card (100px apart for title visibility)

      // Calculate when this card should start scaling down
      const distanceFromStickyPoint = rect.top - stickyTop;

      // Scale down as the card gets covered by the next card
      if (rect.top <= stickyTop) {
        const progress = Math.max(0, Math.min(1, -distanceFromStickyPoint / 300));
        const newScale = 1 - progress * 0.05; // Scale down to 0.95
        const newOpacity = 1 - progress * 0.1; // Fade slightly
        setScale(newScale);
        setOpacity(newOpacity);
      } else {
        setScale(1);
        setOpacity(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="stack-card relative"
      style={{
        position: 'sticky',
        top: `${80 + index * 100}px`, // 100px spacing to show titles
        marginBottom: index === totalCards - 1 ? '0' : '70vh',
        zIndex: 50 + index, // Higher base z-index
      }}
    >
      <motion.div
        className="bg-white rounded-xl md:rounded-2xl shadow-2xl overflow-hidden mx-auto max-w-6xl"
        style={{
          transform: `scale(${scale})`,
          opacity: opacity,
          transformOrigin: 'top center',
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Card Content */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 md:gap-6 lg:gap-8 items-start p-4 md:p-8 lg:p-12">
          {/* Project Details - 40% */}
          <div className="lg:col-span-4 space-y-4 md:space-y-6">
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 hover:text-gray-700 transition-colors">
                <Link to={`/work/${project.id}`} className="hover:underline">
                  {project.title}
                </Link>
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Project Info */}
            <div className="space-y-3 md:space-y-4 pt-4 md:pt-6 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-3 md:gap-4 text-sm">
                <div>
                  <span className="text-gray-500 block mb-1">Years</span>
                  <p className="text-gray-900 font-medium">{project.years}</p>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">Role</span>
                  <p className="text-gray-900 font-medium">{project.role}</p>
                </div>
              </div>
              <div>
                <span className="text-gray-500 text-sm block mb-1">Scope</span>
                <p className="text-gray-900 font-medium text-sm md:text-base">{project.scope}</p>
              </div>

              {/* Media Links */}
              {project.media && (
                <div>
                  <span className="text-gray-500 text-sm block mb-2">Media</span>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    {project.media.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm md:text-base text-gray-900 hover:text-gray-600 transition-colors flex items-center gap-1 font-medium"
                      >
                        {link.name} ↗
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Project Images - 60% */}
          <div className="lg:col-span-6">
            {project.images && project.images.length > 0 ? (
              <div className="relative w-full flex justify-center">
                <div className="w-full rounded-lg md:rounded-xl overflow-hidden bg-gray-50">
                  <img
                    src={project.images[0]}
                    alt={`${project.title} - Project Image`}
                    className="w-full h-auto object-contain max-h-[300px] md:max-h-[400px] lg:max-h-[500px]"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full min-h-[300px] md:min-h-[400px] flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-base md:text-lg">📱</span>
                      </div>
                      <span className="text-xs md:text-sm">Project Image</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-100 rounded-lg md:rounded-xl aspect-[4/3] hover:bg-gray-200 transition-colors">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-xl md:text-2xl">📱</span>
                    </div>
                    <span className="text-xs md:text-sm">Project Screenshots</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function StackScroll({ projects }: StackScrollProps) {
  return (
    <div className="relative w-full">
      <div className="px-4 md:px-0">
        {projects.map((project, index) => (
          <StackCard
            key={project.id}
            project={project}
            index={index}
            totalCards={projects.length}
          />
        ))}
      </div>
    </div>
  );
}
