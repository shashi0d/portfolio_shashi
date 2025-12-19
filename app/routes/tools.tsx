import type { Route } from "./+types/tools";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TOOLS, TOOL_CATEGORIES, SEO } from "../lib/constants";

export function meta({}: Route.MetaArgs) {
  const title = `Tools - ${SEO.authorName}`;
  const description = "AI-powered design and development tools I use daily: ChatGPT, Claude, Figma, GitHub Copilot, and more. My toolkit for research, design, and rapid prototyping.";
  const url = `${SEO.siteUrl}/tools`;
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
    { name: "keywords", content: "AI tools, design tools, ChatGPT, Claude AI, Figma, GitHub Copilot, UX tools, research tools" },
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

function ToolCard({ tool, index }: { tool: typeof TOOLS[number]; index: number }) {
  return (
    <motion.a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative block p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-gray-300 dark:border-gray-600 hover:shadow-lg transition-all duration-300"
    >
      {/* Icon */}
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{tool.icon}</div>
        <svg
          className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>

      {/* Content */}
      <div className="space-y-2">
        {/* Category */}
        <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
          {tool.category}
        </div>

        {/* Title */}
        <h3 className="text-xl font-medium text-gray-900 group-hover:text-gray-600 dark:text-gray-100 dark:group-hover:text-gray-300 transition-colors">
          {tool.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {tool.description}
        </p>
      </div>
    </motion.a>
  );
}

export default function Tools() {
  // Group tools by category
  const toolsByCategory = Object.values(TOOL_CATEGORIES).map(category => ({
    category,
    tools: TOOLS.filter(tool => tool.category === category)
  }));

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section id="main-content" className="pt-32 pb-16 md:pb-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-medium text-gray-900 leading-tight mb-6">
              Tools
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
              AI-powered tools that accelerate my design and research workflow. From ideation to implementation, these tools help transform ideas into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid by Category */}
      {toolsByCategory.map((group, groupIndex) => (
        group.tools.length > 0 && (
          <section key={group.category} className="pb-16 md:pb-24 px-6 md:px-10">
            <div className="max-w-6xl mx-auto">
              <FadeInWhenVisible delay={groupIndex * 0.1}>
                {/* Category Header */}
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-medium text-gray-900">
                    {group.category}
                  </h2>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.tools.map((tool, index) => (
                    <ToolCard key={tool.name} tool={tool} index={index} />
                  ))}
                </div>
              </FadeInWhenVisible>
            </div>
          </section>
        )
      ))}

      <Footer />
    </div>
  );
}
