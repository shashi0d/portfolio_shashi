import type { Route } from "./+types/work";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { PROJECTS } from "../lib/constants";
import { ImagePlaceholder } from "../components/ImagePlaceholder";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Work - Shashidhara Narayanappa" },
    { name: "description", content: "Selected research and design projects exploring the intersection of technology and human behavior." },
  ];
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
        className="relative overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:shadow-2xl"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gray-50 aspect-[16/10]">
          <ImagePlaceholder
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            aspectRatio="wide"
          />

          {/* Color accent border - shows on hover */}
          <div
            className="absolute inset-0 border-4 border-transparent group-hover:border-current transition-all duration-300 pointer-events-none"
            style={{ color: project.color }}
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Header: Categories + Year */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex flex-wrap gap-2">
              {project.categories.map((category) => (
                <span
                  key={category}
                  className="px-3 py-1 text-xs font-semibold rounded-full border-2"
                  style={{
                    borderColor: project.color,
                    color: project.color,
                    backgroundColor: `${project.color}10`
                  }}
                >
                  {category}
                </span>
              ))}
            </div>
            <span className="text-sm font-medium text-gray-500 flex-shrink-0">{project.year}</span>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
            {project.title}
          </h3>

          {/* Description - Single line */}
          <p className="text-base md:text-lg text-gray-600 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

export default function Work() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-medium text-gray-900 leading-tight mb-6">
              Selected Work
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
              Research and design projects exploring the intersection of technology and human behavior
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 md:pb-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
