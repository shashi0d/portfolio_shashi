import type { Route } from "./+types/home";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PROJECTS } from "../lib/constants";
import clsx from "clsx";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Shashidhara Narayanappa - HCI Researcher & Design Enthusiast" },
    { name: "description", content: "Bridging technical depth with human insight. HCI researcher crafting meaningful interactions through VR, AI, and user-centered design." },
  ];
}

function FadeInWhenVisible({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: typeof PROJECTS[number]; index: number }) {
  return (
    <Link
      to={`/work/${project.id}`}
      className="group relative block"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 md:p-10 transition-all duration-300 hover:border-gray-300 hover:shadow-xl"
      >
        {/* Color accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: project.color }}
        />

        {/* Content */}
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2 flex-1">
              <h3 className="text-2xl md:text-3xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="flex-shrink-0">
              <svg
                className="w-6 h-6 text-gray-400 group-hover:text-gray-900 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-sm text-gray-500">
            <span className="font-medium">{project.year}</span>
            <span className="text-gray-300">•</span>
            <span>{project.role}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[90vh] px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-gray-900 leading-[1.1] tracking-tight">
              Bridging code and
              <span className="block font-medium mt-2">human experience</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              HCI researcher crafting meaningful interactions through VR, AI, and user-centered design
            </p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <a
                href="#work"
                className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                View Work
              </a>
              <Link
                to="/contact"
                className="px-8 py-3 border border-gray-300 text-gray-900 rounded-lg hover:border-gray-900 transition-colors font-medium"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-gray-400"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 md:py-32 px-6 md:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeInWhenVisible>
            <div className="mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
                Selected Work
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                Research and design projects exploring the intersection of technology and human behavior
              </p>
            </div>
          </FadeInWhenVisible>

          {/* Project Grid */}
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Photo */}
            <FadeInWhenVisible>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
                  <img
                    src="/images/headshot/headshot.png"
                    alt="Shashidhara Narayanappa"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const placeholder = target.nextElementSibling as HTMLElement;
                      if (placeholder) placeholder.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium">Profile Photo</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>

            {/* Bio */}
            <FadeInWhenVisible delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    From Developer to HCI Researcher
                  </h2>
                  <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                    <p>
                      I spent three years as a Full Stack Developer, honing technical fundamentals and leading teams in a startup environment. Now I'm pursuing a Master's in Human-Computer Interaction at Indiana University, exploring how HCI complements my engineering background to create better, more thoughtful design solutions.
                    </p>
                    <p>
                      My work bridges research rigor and technical execution—from building VR systems to conducting qualitative studies on AI adoption in design practice.
                    </p>
                    <p className="font-medium text-gray-900">
                      Currently seeking Product Researcher, Product Strategist, and UX Researcher roles.
                    </p>
                  </div>
                </div>

                {/* Quick Facts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">Education</h3>
                    <div className="space-y-2 text-gray-900">
                      <p className="font-medium">M.S., Human-Computer Interaction</p>
                      <p className="text-sm text-gray-600">Indiana University (2026)</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">Currently</h3>
                    <div className="space-y-2 text-gray-900">
                      <p className="font-medium">VR Research & Development</p>
                      <p className="text-sm text-gray-600">SETH Lab, IU</p>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Capabilities</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Qualitative Research",
                      "VR Development",
                      "Unity/Unreal",
                      "React/Next.js",
                      "User Testing",
                      "Prototyping",
                      "Data Analysis",
                      "Figma"
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
