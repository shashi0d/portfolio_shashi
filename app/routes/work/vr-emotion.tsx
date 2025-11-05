import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router";
import { vrEmotionProject } from "./data/vr-emotion";

export function meta() {
  return [
    { title: `${vrEmotionProject.title} - Shashidhara Narayanappa` },
    { name: "description", content: vrEmotionProject.description },
  ];
}

export default function VrEmotionPage() {
  const project = vrEmotionProject;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="mb-16">
          <Link to="/" className="text-black hover:text-gray-600 transition-colors mb-12 inline-block text-lg px-16">
            ← Back to Work
          </Link>
          
          <header className="grid grid-cols-16 gap-12 px-16 pt-8 pb-24">
            <div className="col-start-1 col-end-7 text-logline-mobile lg:text-logline text-black">
              {project.title}
            </div>
            <div className="col-start-1 col-end-13 lg:col-start-7 lg:col-end-15 lg:text-case lg:pt-6 text-black">
              {project.description}
            </div>
            <div className="text-case lg:text-base-desktop col-start-1 lg:col-start-7 col-end-17 mt-3 py-1">
              <table className="table-auto tracking-[.03em]">
                <tr>
                  <td className="pb-1 pr-24 text-table text-black align-top">Years</td>
                  <td className="pb-1 pr-24 text-table text-black align-top">Role</td>
                  <td className="pb-1 text-table text-black align-top">Scope</td>
                </tr>
                <tr>
                  <td className="pr-24 whitespace-nowrap align-top text-black">{project.years}</td>
                  <td className="pr-24 whitespace-nowrap align-top text-black">{project.role}</td>
                  <td className="align-top text-black">{project.scope}</td>
                </tr>
              </table>
            </div>
          </header>
          
          {/* Media Links */}
          {project.media && (
            <div className="flex flex-wrap gap-4 px-16">
              {project.media.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors flex items-center gap-2 border border-black px-6 py-3 hover:bg-black hover:text-white"
                >
                  {link.name} ↗
                </a>
              ))}
            </div>
          )}
        </div>
        
        {/* Challenge & Solution - 4/8 Column Layout */}
        <div className="grid grid-cols-16 gap-12 px-16 mb-24">
          <div className="col-start-1 col-end-7">
            <h2 className="text-header-touch lg:text-base-desktop uppercase font-medium tracking-[.04em] text-black mb-8">CHALLENGE</h2>
          </div>
          <div className="col-start-7 col-end-17">
            <p className="text-black leading-tight" style={{fontSize: '-webkit-xxx-large'}}>{project.challenge}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-16 gap-12 px-16 mb-24">
          <div className="col-start-1 col-end-5">
            <h2 className="text-header-touch lg:text-base-desktop uppercase font-medium tracking-[.04em] text-black mb-8">SOLUTION</h2>
          </div>
          <div className="col-start-5 col-end-13">
            <p className="lg:text-case text-black">{project.solution}</p>
          </div>
        </div>
        
        {/* Project Sections */}
        {project.sections.map((section, index) => (
          <div key={index} className="mb-24">
            <div className="grid grid-cols-16 gap-12 px-16">
              <div className="col-start-1 col-end-5">
                <h2 className="text-header-touch lg:text-base-desktop uppercase font-medium tracking-[.04em] text-black mb-8">{section.header}</h2>
              </div>
              <div className="col-start-5 col-end-13">
                <div className="lg:text-case text-black whitespace-pre-line mb-8">
                  {section.content}
                </div>
                {section.visual && (
                  <div className="mt-8">
                    <img 
                      src={section.visual} 
                      alt={section.header}
                      className="w-full rounded-4xl"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {/* Outcomes */}
        <div className="mb-24">
          <div className="grid grid-cols-16 gap-12 px-16">
            <div className="col-start-1 col-end-5">
              <h2 className="text-header-touch lg:text-base-desktop uppercase font-medium tracking-[.04em] text-black mb-8">OUTCOMES</h2>
            </div>
            <div className="col-start-5 col-end-13">
              {project.outcomes.metrics && (
                <div className="grid grid-cols-3 gap-8 mb-12">
                  {project.outcomes.metrics.map((metric, i) => (
                    <div key={i}>
                      <div className="pb-2 text-logline-mobile lg:text-logline text-black">{metric.value}</div>
                      <div className="lg:text-case text-black">{metric.label}</div>
                    </div>
                  ))}
                </div>
              )}
              <div className="lg:text-case text-black whitespace-pre-line">
                {project.outcomes.text}
              </div>
            </div>
          </div>
        </div>
        
        {/* Reflection */}
        <div className="mb-24">
          <div className="grid grid-cols-16 gap-12 px-16">
            <div className="col-start-1 col-end-5">
              <h2 className="text-header-touch lg:text-base-desktop uppercase font-medium tracking-[.04em] text-black mb-8">REFLECTION</h2>
            </div>
            <div className="col-start-5 col-end-13">
              <p className="lg:text-case text-black">{project.reflection}</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

