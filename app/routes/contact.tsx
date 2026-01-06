import type { Route } from "./+types/contact";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { SEO, getOGImageMeta } from "../lib/constants";

export function meta({}: Route.MetaArgs) {
  const title = `Contact - ${SEO.authorName}`;
  const description = "Get in touch with Shashidhara Narayanappa for HCI research collaborations, VR development projects, and UX design opportunities. Based in Indianapolis, Indiana.";
  const url = `${SEO.siteUrl}/contact`;
  const image = `${SEO.siteUrl}${SEO.defaultImage}`;

  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    ...getOGImageMeta(image),
    { property: "og:site_name", content: SEO.siteName },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: SEO.twitterHandle },
    { name: "twitter:creator", content: SEO.twitterHandle },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    { name: "author", content: SEO.authorName },
    { name: "keywords", content: "contact, HCI researcher, UX designer, collaboration, VR development, research opportunities, Indiana University" },
  ];
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section id="main-content" className="pt-24 md:pt-32 pb-12 md:pb-16 lg:pb-24 px-4 md:px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium text-gray-900 dark:text-gray-100 mb-4 md:mb-6 leading-tight px-2">
              Let's collaborate on innovative HCI research
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto px-2">
              Interested in VR development, empathy research, or user-centered design? I'd love to hear from you.
            </p>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-100 mb-4">
                Send me an email
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto">
                Whether you're looking to collaborate on research, discuss a project, or just want to connect, I'm always open to new conversations.
              </p>
              <div className="flex justify-center px-2">
                <a
                  href="mailto:shashidharprakash33@gmail.com"
                  className="inline-flex items-center justify-center gap-2 md:gap-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-4 md:px-8 py-3 md:py-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200 font-medium text-sm md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-gray-100 w-full sm:w-auto max-w-full"
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="break-words text-center">shashidharprakash33@gmail.com</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4 md:mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <span className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Email</span>
                  <a
                    href="mailto:shashidharprakash33@gmail.com"
                    className="block text-base md:text-lg text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors mt-1 break-words"
                  >
                    shashidharprakash33@gmail.com
                  </a>
                </div>
                <div>
                  <span className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Phone</span>
                  <a 
                    href="tel:+13173844975" 
                    className="block text-base md:text-lg text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors mt-1"
                  >
                    +1 (317) 384-4975
                  </a>
                </div>
                <div>
                  <span className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">LinkedIn</span>
                  <a 
                    href="https://linkedin.com/in/meetshashi" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-base md:text-lg text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors mt-1 break-words"
                  >
                    linkedin.com/in/meetshashi
                  </a>
                </div>
                <div>
                  <span className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Portfolio</span>
                  <a 
                    href="https://shashidhara-n.vercel.app/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-base md:text-lg text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors mt-1 break-words"
                  >
                    shashidhara-n.vercel.app
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4 md:mb-6">Details</h2>
              <div className="space-y-6">
                <div>
                  <span className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Location</span>
                  <p className="text-base md:text-lg text-gray-900 dark:text-gray-100 mt-1">Indianapolis, Indiana, United States</p>
                </div>
                <div>
                  <span className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Current Role</span>
                  <p className="text-base md:text-lg text-gray-900 dark:text-gray-100 mt-1">Graduate VR Research and Development at SETH Lab, Indiana University</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
