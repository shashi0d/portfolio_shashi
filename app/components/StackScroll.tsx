import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

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

export function StackScroll({ projects }: StackScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardScales, setCardScales] = useState<number[]>(projects.map(() => 1));

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const cards = containerRef.current.querySelectorAll('.stack-card');
      const newScales: number[] = [];

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate scale based on position
        const distanceFromTop = rect.top;
        const maxScale = 1;
        const minScale = 0.95;

        if (distanceFromTop <= 100) {
          // Card is sticking, scale it down slightly
          const scale = Math.max(minScale, maxScale - (100 - distanceFromTop) / 500);
          newScales[index] = scale;
        } else {
          newScales[index] = maxScale;
        }
      });

      setCardScales(newScales);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="stack-card"
          style={{
            position: 'sticky',
            top: `${80 + index * 40}px`,
            marginBottom: index === projects.length - 1 ? '0' : '100vh',
            zIndex: 10 + index,
          }}
        >
          <div
            className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 ease-out"
            style={{
              transform: `scale(${cardScales[index]})`,
              transformOrigin: 'top center',
            }}
          >
            {/* Card Content */}
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8 items-start p-8 lg:p-12">
              {/* Project Details - 40% */}
              <div className="lg:col-span-4 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-medium text-gray-900 hover:text-gray-700 transition-colors">
                    <Link to={`/work/${project.id}`} className="hover:underline">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{project.description}</p>
                </div>

                {/* Project Info */}
                <div className="space-y-4 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-4 text-sm">
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
                    <p className="text-gray-900 font-medium">{project.scope}</p>
                  </div>

                  {/* Media Links */}
                  {project.media && (
                    <div>
                      <span className="text-gray-500 text-sm block mb-2">Media</span>
                      <div className="flex flex-wrap gap-4">
                        {project.media.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-900 hover:text-gray-600 transition-colors flex items-center gap-1 font-medium"
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
                    <div className="w-full rounded-xl overflow-hidden bg-gray-50">
                      <img
                        src={project.images[0]}
                        alt={`${project.title} - Project Image`}
                        className="w-full h-auto object-contain max-h-[500px]"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden w-full h-full min-h-[400px] flex items-center justify-center text-gray-400">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <span className="text-lg">📱</span>
                          </div>
                          <span className="text-sm">Project Image</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-100 rounded-xl aspect-[4/3] hover:bg-gray-200 transition-colors">
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-2xl">📱</span>
                        </div>
                        <span className="text-sm">Project Screenshots</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
