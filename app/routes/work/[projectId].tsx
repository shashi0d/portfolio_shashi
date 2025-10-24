import type { Route } from "./+types/[projectId]";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router";

interface ProjectSection {
  type: string;
  title: string;
  content: string | string[];
  subtitle?: string;
  subsections?: Array<{
    title: string;
    content: string | string[];
  }>;
  features?: string[];
}

interface ProjectData {
  id: string;
  title: string;
  subtitle?: string;
  tagline?: string;
  description: string;
  years: string;
  role: string;
  scope: string;
  media?: Array<{ name: string; url: string }>;
  awards?: Array<{ name: string; category: string; result: string; years: string }>;
  content: ProjectSection[];
  images: string[];
}

export function meta({ params }: Route.MetaArgs) {
  const project = getProjectData(params.projectId);
  return [
    { title: `${project.title} - Shashidhara Narayanappa` },
    { name: "description", content: project.description },
  ];
}

// Project data - in a real app, this would come from a CMS or database
const projectData: Record<string, ProjectData> = {
  "wanderindy": {
    id: "wanderindy",
    title: "WanderIndy - Citywide Storybook",
    subtitle: "Discover WanderIndy",
    tagline: "Every neighborhood has a story. Collect it, one stamp at a time.",
    description: "Turn exploration into an adventure with trails, challenges, and personal memories across Indianapolis.",
    years: "2024",
    role: "UX Research & Design Lead",
    scope: "User Research, Interaction Design, Prototyping, Public Space Design, Accessibility",
    media: [
      { name: "Figma Prototype", url: "https://www.figma.com/proto/BSXT3AOcgOCiBYM5MMNyPs/WanderIndy?page-id=340%3A2353&node-id=358-6713&viewport=-2861%2C780%2C0.55&t=7GRgPpOICgJ9rEgZ-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=358%3A6685" }
    ],
    content: [
      {
        type: "section",
        title: "Why Exploration Feels Broken",
        content: "Exploring Indianapolis today feels disconnected. Locals and visitors flock to major landmarks, while hidden gems remain invisible. Existing tools—apps, signs, and maps—feel impersonal and fail to guide meaningful exploration."
      },
      {
        type: "section",
        title: "Who We Heard From (Personas & Pain Points)",
        content: [
          "**Jordan (25, local student):** Loves live music, but feels indie venues are hidden and hard to discover.",
          "**Emily (34, tourist):** Wants authentic cultural experiences but finds maps overwhelming and generic.",
          "**Carlos (42, local parent):** Enjoys weekend outings, but kids lose interest quickly without engaging activities."
        ]
      },
      {
        type: "section",
        title: "A Citywide Storybook",
        content: "Our vision was simple: connect the digital, physical, and personal sides of exploration. WanderIndy does this by blending **mood-based trails**, **stamp challenges**, and **sensor kiosks** into one seamless experience. It turns Indianapolis into more than a destination—it becomes a living memory map."
      },
      {
        type: "section",
        title: "What I Worked On (My Role & Contributions)",
        content: [
          "Led **research on existing systems** (IKE, LinkNYC, cultural kiosks).",
          "Came up with the **core idea** of stamps and neighborhood trails.",
          "Helped **prototype the kiosk** and define interaction flows.",
          "Documented the entire journey and crafted the **final presentation showcase**."
        ]
      },
      {
        type: "section",
        title: "How We Designed It",
        subtitle: "From sketches to kiosks, WanderIndy was shaped by iteration and feedback at every step.",
        content: "Our design process involved multiple iterations and user feedback at every step.",
        subsections: [
          {
            title: "Imagining the Journey (Storyboards & Paper Prototypes)",
            content: "We started with low-fi storyboards and paper flows to imagine how stamps, mood trails, and neighborhoods could guide exploration. These quick sketches let us test ideas before committing to design."
          },
          {
            title: "Structuring the Experience (Mid-Fidelity Prototypes)",
            content: "We created mid-fi prototypes to refine the structure of the app—exploring layouts for the field guide map, stamp challenges, and kiosk interactions."
          },
          {
            title: "Bringing It to Life (High-Fidelity Designs)",
            content: "We developed a celebratory, playful style across mobile and kiosk touchpoints. Inspired by LinkNYC, kiosks were designed in a vertical format to save sidewalk space and support intuitive top-down flows."
          },
          {
            title: "Why Four Stamps?",
            content: "In our field research at Fountain Square, we observed that food, music, art, and shopping were the most popular categories of outings. We chose **four stamps** to balance variety with simplicity, making trails achievable in one outing."
          },
          {
            title: "Learning from Feedback (User Testing & Iteration)",
            content: "Testing revealed key insights: onboarding needed clarity, map tap targets were too small, and visited vs. unvisited places looked too similar. We refined these flows step by step, making the experience more intuitive and rewarding."
          }
        ]
      },
      {
        type: "section",
        title: "What You Can Do (Key Features)",
        content: "WanderIndy makes every outing an adventure with features that surprise and reward:",
        features: [
          "Pick a **mood trail**—foodie, artistic, musical, or shopping.",
          "Collect **stamps** through a 4-stop challenge.",
          "Stop by **interactive kiosks** to unlock hidden stories.",
          "Track progress with a **living field guide** that grows with every journey.",
          "Celebrate with **badges and memories** that turn exploration into achievement."
        ]
      },
      {
        type: "section",
        title: "What Happened & What's Next",
        content: "The project outcomes and future directions for WanderIndy.",
        subsections: [
          {
            title: "Celebrating Every Journey",
            content: "WanderIndy turned Indianapolis into more than a city—it became a game of discovery. Users collected badges, filled their personal field guides, and uncovered hidden stories that made each outing memorable."
          },
          {
            title: "Looking Ahead",
            content: "Our kiosks currently tell the stories of nearby places. In the future, we'll expand with **immersive audio, spatial interactions, and new storytelling layers**—making the experience even more engaging and alive."
          }
        ]
      },
      {
        type: "section",
        title: "Designing for Public Space (Accessibility & Precedents)",
        content: "We drew inspiration from inclusive urban systems like **IKE** and **LinkNYC**. Our kiosks are:",
        features: [
          "Accessible from standing or wheelchair height.",
          "Weather-ready for Indianapolis' conditions.",
          "Designed with clear, high-contrast visuals for all users."
        ]
      },
      {
        type: "section",
        title: "What I Learned (Reflections & AI)",
        content: [
          "**On placemaking:** Good design turns space into experience.",
          "**On iteration:** Small refinements (like tap targets) transform usability.",
          "**On AI:** Using AI as a partner in research and documentation helped us synthesize quickly, but also taught me its limits—it's powerful for speed, but must be guided by human judgment.",
          "**On collaboration:** Balancing ideas across a team sharpened the concept and presentation."
        ]
      }
    ],
    images: ["/wanderindy-1.png", "/wanderindy-2.png", "/wanderindy-3.png", "/wanderindy-4.png", "/wanderindy-5.png", "/wanderindy-6.png"]
  },
  "project-1": {
    id: "project-1",
    title: "VR Emotional Recognition Research",
    subtitle: "Advancing Empathetic Interactions in Virtual Reality",
    description: "Leading research study focused on emotional recognition in VR environments using Meta Quest Pro headset.",
    years: "2024–Present",
    role: "Graduate VR Research and Development",
    scope: "VR Development, HCI Research, Qualitative Methods, Literature Review",
    media: [
      { name: "SETH Lab", url: "#" },
      { name: "Indiana University", url: "#" }
    ],
    content: [
      {
        type: "section",
        title: "Project Overview",
        content: "This research focuses on developing and testing emotional recognition algorithms within VR environments to enhance empathetic interactions and user experiences."
      }
    ],
    images: ["/vr-research-1.png", "/vr-research-2.png", "/vr-research-3.png", "/vr-research-4.png"]
  },
  "project-2": {
    id: "project-2",
    title: "Interactive Display Kiosk CMS",
    subtitle: "Revolutionizing Brand Storytelling Through Interactive Design",
    description: "Developed a comprehensive CMS for an Interactive Display Kiosk application in Unity.",
    years: "2022–2024",
    role: "Lead Full Stack Developer",
    scope: "Unity Development, CMS Design, Interactive Design, Project Management",
    media: [
      { name: "Zero Distance Metaverse", url: "#" },
      { name: "Unity Technologies", url: "#" }
    ],
    content: [
      {
        type: "section",
        title: "Project Overview",
        content: "Created an innovative CMS system for interactive kiosks that increased usability and ease of access by 40%."
      }
    ],
    images: ["/kiosk-1.png", "/kiosk-2.png", "/kiosk-3.png", "/kiosk-4.png", "/kiosk-5.png"]
  },
  "project-3": {
    id: "project-3",
    title: "Web Metaverse Application",
    subtitle: "Pioneering Proof of Concept in Web3 Technologies",
    description: "Coordinated cross-functional teams to integrate modules for a Web Metaverse application.",
    years: "2022–2024",
    role: "Lead Full Stack Developer",
    scope: "Full Stack Development, Team Management, Metaverse Technologies, Character Customization",
    awards: [
      { name: "Project Delivery", category: "Team Management", result: "30% Increase", years: "2024" },
      { name: "Innovation Award", category: "Metaverse Development", result: "Pioneer PoC", years: "2023" }
    ],
    media: [
      { name: "Zero Distance Metaverse", url: "#" },
      { name: "Web3 Technologies", url: "#" }
    ],
    content: [
      {
        type: "section",
        title: "Project Overview",
        content: "Developed a pioneer proof of concept Web Metaverse application with character customization and multiplayer features."
      }
    ],
    images: ["/metaverse-1.png", "/metaverse-2.png", "/metaverse-3.png", "/metaverse-4.png", "/metaverse-5.png", "/metaverse-6.png"]
  }
};

function getProjectData(projectId: string): ProjectData {
  return projectData[projectId] || projectData["project-1"];
}

export default function ProjectPage({ params }: Route.ComponentProps) {
  const project = getProjectData(params.projectId);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Footer />
      
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <Link to="/" className="text-gray-500 hover:text-gray-700 transition-colors mb-8 inline-block">
              ← Back to Work
            </Link>
            
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-4">
                  {project.title}
                </h1>
                {project.subtitle && (
                  <h2 className="text-2xl font-medium text-gray-700 mb-2">
                    {project.subtitle}
                  </h2>
                )}
                {project.tagline && (
                  <p className="text-xl text-gray-600 italic mb-4">
                    {project.tagline}
                  </p>
                )}
                <p className="text-lg text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              {/* Project Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <span className="text-gray-500 text-sm">Years</span>
                  <p className="text-gray-900 font-medium">{project.years}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Role</span>
                  <p className="text-gray-900 font-medium">{project.role}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Scope</span>
                  <p className="text-gray-900 font-medium">{project.scope}</p>
                </div>
              </div>
              
              {/* Media Links */}
              {project.media && (
                <div className="flex flex-wrap gap-4 pt-4">
                  {project.media.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-gray-600 transition-colors flex items-center gap-1 border border-gray-300 px-4 py-2 rounded-lg hover:border-gray-400"
                    >
                      {link.name} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Project Content */}
          <div className="space-y-16">
            {project.content.map((section, index) => (
              <div key={index} className="space-y-8">
                <div>
                  <h2 className="text-2xl font-medium text-gray-900 mb-4">{section.title}</h2>
                  {section.subtitle && (
                    <p className="text-lg text-gray-600 mb-6 italic">{section.subtitle}</p>
                  )}
                  
                  {Array.isArray(section.content) ? (
                    <div className="space-y-4">
                      {section.content.map((item, i) => (
                        <p key={i} className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: section.content }} />
                  )}
                  
                  {section.features && (
                    <ul className="list-disc list-inside space-y-2 mt-4">
                      {section.features.map((feature, i) => (
                        <li key={i} className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: feature }} />
                      ))}
                    </ul>
                  )}
                  
                  {section.subsections && (
                    <div className="space-y-8 mt-8">
                      {section.subsections.map((subsection, i) => (
                        <div key={i} className="space-y-4">
                          <h3 className="text-xl font-medium text-gray-900">{subsection.title}</h3>
                          {Array.isArray(subsection.content) ? (
                            <div className="space-y-2">
                              {subsection.content.map((item, j) => (
                                <p key={j} className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                              ))}
                            </div>
                          ) : (
                            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: subsection.content }} />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Awards Section */}
          {project.awards && (
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-medium text-gray-900 mb-6">Achievements</h2>
              <div className="space-y-4">
                {project.awards.map((award, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-gray-900 font-medium">{award.category} ↗</span>
                    <span className="text-gray-600 text-sm">{award.years} / {award.name} / {award.result}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
