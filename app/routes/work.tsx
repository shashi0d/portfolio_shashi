import type { Route } from "./+types/work";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { PROJECTS } from "../lib/constants";

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
        className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 md:p-10 transition-all duration-300 hover:border-gray-300 hover:shadow-xl"
      >
        {/* Color accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: project.color }}
        />

        {/* Content */}
        <div className="space-y-4">
          {/* Category Badges */}
          <div className="flex flex-wrap gap-2">
            {project.categories.map((category) => (
              <span
                key={category}
                className="px-3 py-1 text-xs font-semibold rounded-md border-2"
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
          <div className="grid grid-cols-1 gap-6 md:gap-8">
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
