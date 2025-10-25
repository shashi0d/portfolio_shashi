import { Link } from "react-router";
import { useState, useRef, useEffect } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  years: string;
  role: string;
  scope: string;
  media?: Array<{ name: string; url: string }>;
  awards?: Array<{ name: string; category: string; result: string; years: string }>;
  hasVideo: boolean;
  videoUrl?: string;
  images: string[];
}

interface WorkCarouselProps {
  projects: Project[];
}

export function WorkCarousel({ projects }: WorkCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState<{ [key: string]: number }>({});
  const [autoRotate, setAutoRotate] = useState<{ [key: string]: boolean }>({});
  const carouselRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleNextSlide = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    const current = currentSlide[projectId] || 0;
    const next = (current + 1) % project.images.length;
    setCurrentSlide(prev => {
      const newState = { ...prev };
      newState[projectId] = next;
      return newState;
    });
  };

  const handlePrevSlide = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const current = currentSlide[projectId] || 0;
    const prevIndex = current === 0 ? project.images.length - 1 : current - 1;
    setCurrentSlide(prev => {
      const newState = { ...prev };
      newState[projectId] = prevIndex;
      return newState;
    });
  };

  const handleSlideTo = (projectId: string, index: number) => {
    setCurrentSlide(prev => {
      const newState = { ...prev };
      newState[projectId] = index;
      return newState;
    });
  };

  // Auto-rotation effect
  useEffect(() => {
    const intervals: { [key: string]: NodeJS.Timeout } = {};
    
    projects.forEach(project => {
      if (project.images && project.images.length > 1) {
        // Start auto-rotation for each project
        setAutoRotate(prev => ({ ...prev, [project.id]: true }));
        
        intervals[project.id] = setInterval(() => {
          setCurrentSlide(prev => {
            const newState = { ...prev };
            const current = newState[project.id] || 0;
            newState[project.id] = (current + 1) % project.images.length;
            return newState;
          });
        }, 3000); // Rotate every 3 seconds
      }
    });

    // Cleanup intervals on unmount
    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, [projects]);

  return (
    <div className="py-24">
      {projects.map((project, index) => (
        <div key={project.id} className="mb-48 last:mb-0">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8 items-start w-full px-6">
            {/* Project Details - 30% */}
            <div className="lg:col-span-3 space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-medium text-gray-900 hover:text-gray-700 transition-colors">
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
                    <span className="text-gray-500">Years</span>
                    <p className="text-gray-900 font-medium">{project.years}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Role</span>
                    <p className="text-gray-900 font-medium">{project.role}</p>
                  </div>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Scope</span>
                  <p className="text-gray-900 font-medium">{project.scope}</p>
                </div>
                
                {/* Media Links */}
                {project.media && (
                  <div>
                    <span className="text-gray-500 text-sm">Media</span>
                    <div className="flex flex-wrap gap-4 mt-2">
                      {project.media.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-900 hover:text-gray-600 transition-colors flex items-center gap-1"
                        >
                          {link.name} ↗
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Awards */}
                {project.awards && (
                  <div>
                    <span className="text-gray-500 text-sm">Achievements</span>
                    <div className="space-y-2 mt-2">
                      {project.awards.map((award, i) => (
                        <div key={i} className="text-sm">
                          <span className="text-gray-900 font-medium">{award.category} ↗</span>
                          <span className="text-gray-600"> {award.years} / {award.name} / {award.result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
                         {/* Project Images - 70% */}
             <div className="lg:col-span-7 space-y-8">
              {project.hasVideo ? (
                /* Video Layout */
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-lg aspect-video hover:bg-gray-200 transition-colors">
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-2xl">▶️</span>
                        </div>
                        <span className="text-sm">{project.title} Demo Video</span>
                      </div>
                    </div>
                  </div>
                </div>
                                                                                                                       ) : project.images && project.images.length > 0 ? (
                            project.images.length === 1 ? (
                              /* Single Large Image Display - True Size */
                              <div className="relative w-full flex justify-center">
                                <div className="max-w-full rounded-2xl overflow-hidden">
                                  <img 
                                    src={project.images[0]} 
                                    alt={`${project.title} - Project Image`}
                                    className="w-auto h-auto max-w-full max-h-[600px] object-contain"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement;
                                      target.style.display = 'none';
                                      target.nextElementSibling?.classList.remove('hidden');
                                    }}
                                  />
                                  <div className="hidden w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
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
                              /* 3D Image Carousel with Previous/Next Visible */
                              <div className="relative group flex justify-center">
                                {/* 3D Carousel Container - Fixed Width with Better Spacing */}
                                <div 
                                  className="relative w-full max-w-3xl h-[500px] flex items-center justify-center perspective-1000 rounded-2xl"
                                  ref={(el) => { carouselRefs.current[project.id] = el; }}
                                >
                                {project.images.map((image, index) => {
                                  const isCurrent = index === (currentSlide[project.id] || 0);
                                  const isPrev = index === ((currentSlide[project.id] || 0) - 1 + project.images.length) % project.images.length;
                                  const isNext = index === ((currentSlide[project.id] || 0) + 1) % project.images.length;
                                  
                                  let transform = '';
                                  let scale = '';
                                  let opacity = '';
                                  let zIndex = '';
                                  
                                  if (isCurrent) {
                                    // Current image - centered and prominent
                                    transform = 'translateX(0) rotateY(0deg)';
                                    scale = 'scale(1)';
                                    opacity = 'opacity-100';
                                    zIndex = 'z-20';
                                  } else if (isPrev) {
                                    // Previous image - left side with rotation
                                    transform = 'translateX(-65%)';
                                    scale = 'scale(0.75)';
                                    opacity = 'opacity-80';
                                    zIndex = 'z-10';
                                  } else if (isNext) {
                                    // Next image - right side with rotation
                                    transform = 'translateX(65%)';
                                    scale = 'scale(0.75)';
                                    opacity = 'opacity-80';
                                    zIndex = 'z-10';
                                  } else {
                                    // Background images - subtle positioning
                                    transform = 'translateX(0)';
                                    scale = 'scale(0.55)';
                                    opacity = 'opacity-30';
                                    zIndex = 'z-0';
                                  }
                                  
                                  return (
                                    <div 
                                      key={index} 
                                      className={`absolute transition-all duration-1000 ease-in-out ${opacity} ${zIndex}`}
                                      style={{ 
                                        transform: `${transform} ${scale}`
                                      }}
                                    >
                                      {/* Mobile Screenshot Container with 16:9 aspect ratio - 25% smaller */}
                                      <div className="relative mx-auto w-full max-w-[210px] md:max-w-[240px] lg:max-w-[270px] xl:max-w-[300px]">
                                        <div className="relative w-full aspect-[393/852] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                         <img 
                                           src={image} 
                                           alt={`${project.title} - Screenshot ${index + 1}`}
                                           className="w-full h-full object-cover"
                                           onError={(e) => {
                                             const target = e.target as HTMLImageElement;
                                             target.style.display = 'none';
                                             target.nextElementSibling?.classList.remove('hidden');
                                           }}
                                         />
                                         <div className="hidden w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
                                           <div className="text-center">
                                             <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                                               <span className="text-lg">📱</span>
                                               </div>
                                               <span className="text-sm">Screenshot {index + 1}</span>
                                             </div>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                   );
                                 })}
                               </div>                      
                             </div>
                            )
              ) : (
                /* Fallback for projects without images */
                <div className="bg-gray-100 rounded-lg aspect-[4/3] hover:bg-gray-200 transition-colors">
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
      ))}
    </div>
  );
}
