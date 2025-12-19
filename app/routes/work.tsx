import type { Route } from "./+types/work";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { PROJECTS, SEO } from "../lib/constants";
import { ImagePlaceholder } from "../components/ImagePlaceholder";

export function meta({}: Route.MetaArgs) {
  const title = `Work - ${SEO.authorName}`;
  const description = "Portfolio of HCI research and UX design projects: VR emotion recognition, AI in design, urban exploration systems, and enterprise dashboard design.";
  const url = `${SEO.siteUrl}/work`;
  const image = `${SEO.siteUrl}${SEO.defaultImage}`;

  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:site_name", content: SEO.siteName },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: SEO.twitterHandle },
    { name: "twitter:creator", content: SEO.twitterHandle },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    { name: "author", content: SEO.authorName },
    { name: "keywords", content: "UX portfolio, HCI research, design case studies, VR development, user research" },
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
        className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-gray-300 dark:border-gray-600 hover:shadow-lg"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden bg-white aspect-[16/10]">
          <ImagePlaceholder
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
            aspectRatio="wide"
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
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 flex-shrink-0">{project.year}</span>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-3 group-hover:text-gray-600 dark:text-gray-100 dark:group-hover:text-gray-300 transition-colors">
            {project.title}
          </h3>

          {/* Description - Single line */}
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

export default function Work() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
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
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
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
