import type { Route } from "./+types/home";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { StackScroll } from "../components/StackScroll";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Shashidhara Narayanappa - HCI Researcher & Design Enthusiast" },
    { name: "description", content: "I started my career as a Full Stack Developer, I've honed my skills and fundamentals in the field of Full Stack Development, and got valuable experience leading a team in a startup setting. currently I'm pursuing Master's in Human Computer Interaction, mainly to explore how HCI can contemplate my existing skills and make me a better developer and designer" },
  ];
}

const projects = [
  {
    id: "genai-ux",
    title: "Opportunities and Challenges for Generative AI in UX Design",
    description: "Investigated how UX professionals and students integrate GenAI tools across the design lifecycle through 25 retrospective interviews, revealing stark differences between ideation success and prototyping limitations.",
    years: "2025",
    role: "Secondary Author, Interview Lead",
    scope: "Qualitative Research, Thematic Analysis, Academic Writing",
    media: [
      { name: "ACM IUI '26", url: "#" },
      { name: "Case Study", url: "/work/genai-ux" }
    ],
    hasVideo: false,
    images: ["/images/genai-ux/image1.png", "/images/genai-ux/image2.png", "/images/genai-ux/image3.png"]
  },
  {
    id: "vr-emotion",
    title: "Emotion Recognition in Virtual Reality Using Meta Quest Pro",
    description: "Building the first VR emotion dataset with spontaneous facial expressions. Designed the complete research pipeline in Unity, conducting 50 participant sessions to capture genuine emotional reactions across six basic emotions.",
    years: "2024–Present",
    role: "Lead Researcher & VR Developer",
    scope: "VR Development, Research Design, Data Collection, Unity Development",
    media: [
      { name: "SETH Lab", url: "#" },
      { name: "IEEE VR / Meaningful XR", url: "#" }
    ],
    hasVideo: false,
    images: ["/images/vr-emotion/image1.png", "/images/vr-emotion/image2.png", "/images/vr-emotion/image3.png"]
  },
  {
    id: "wanderindy",
    title: "WanderIndy – Urban Exploration Wayfinding System",
    description: "Transformed Indianapolis into an interactive storybook through mood-based trails, stamp challenges, and sensor kiosks. Led kiosk design and field research to make hidden neighborhoods discoverable.",
    years: "2025",
    role: "UX Research & Design Lead",
    scope: "User Research, Interaction Design, Prototyping, Public Space Design, Accessibility",
    media: [
      { name: "Figma Prototype", url: "https://www.figma.com/proto/BSXT3AOcgOCiBYM5MMNyPs/WanderIndy?page-id=340%3A2353&node-id=358-6713&viewport=-2861%2C780%2C0.55&t=7GRgPpOICgJ9rEgZ-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=358%3A6685" },
      { name: "Case Study", url: "/work/wanderindy" }
    ],
    hasVideo: false,
    images: ["/images/wanderindy/image1.png", "/images/wanderindy/Image2.png", "/images/wanderindy/Image3.png"]
  }
];

const sections = [
  {
    title: "EDUCATION",
    items: [
      { name: "M.S., Human Computer Interaction", details: "May 2026 / Indiana University, Indianapolis, IN" },
      { name: "B.E., Computer Science and Engineering", details: "Apr 2020 / Visvesvaraya Technological University, Belgaum, India" }
    ]
  },
  {
    title: "WORK EXPERIENCE",
    items: [
      { name: "Graduate VR Research & Development", details: "2024–Present / Indiana University, SETH Lab" },
      { name: "Lead Full Stack Developer", details: "2022–2024 / Zero Distance Metaverse,Bengaluru,India" },
      { name: "Software Developer", details: "2021–2022 / Zero Distance Metaverse, Bengaluru, India" }
    ]
  },
  {
    title: "TECHNICAL SKILLS",
    items: [
      { name: "VR Technologies & Unity", details: "Meta Quest Pro, Unreal Engine, Interactive Design" },
      { name: "Full Stack Development", details: "React, Next.js, Node.js, Firebase, HTML5, CSS3, JavaScript" },
      { name: "UX Research & Design", details: "Figma, Optimal Workshop, User Interviews, Usability Testing" }
    ]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Footer />
      
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen px-10">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight mb-8">
            Innovative HCI Researcher &<br />
            <span className="font-medium">Design Enthusiast</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Hands-on experience in VR development, empathy research,<br />
            and user-centered design
          </p>
        </div>
      </section>

      {/* Work Section - Stack Scroll */}
      <section className="py-24 px-10">
        <div className="max-w-7xl mx-auto">
          <StackScroll projects={projects} />
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
            {/* Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-80 h-96 rounded-lg overflow-hidden">
                <img 
                  src="/images/headshot/headshot.png" 
                  alt="Shashidhara Narayanappa"
                  className="w-full h-full object-cover grayscale-[0.7] hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">👨‍💻</span>
                    </div>
                    <p className="text-sm">Shashidhara Narayanappa</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bio */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  For past 3 years, I've been working as a Full Stack Developer, I've honed my skills and fundamentals in the field of Full Stack Development, and got valuable experience leading a team in a startup setting. currently I'm pursuing Master's in Human Computer Interaction, mainly to explore how HCI can contemplate my existing skills and make me a better developer and designer
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Currently interested in Product researcher, product strategiest, Storyteller roles.
                </p>
              </div>
            </div>
          </div>
          
          {/* Additional Sections */}
          <div className="space-y-16">
            {sections.map((section, index) => (
              <div key={index} className="border-t border-gray-200 pt-8">
                <h2 className="text-lg font-medium text-gray-900 mb-8">{section.title}</h2>
                <div className="space-y-4">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-gray-900 font-medium">{item.name}</span>
                      <span className="text-gray-600 text-sm">{item.details}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
