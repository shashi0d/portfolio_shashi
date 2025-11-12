import type { Route } from "./+types/contact";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact - Shashidhara Narayanappa" },
    { name: "description", content: "Get in touch with Shashidhara Narayanappa for HCI research collaborations and opportunities" },
  ];
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <Footer />

      <main id="main-content" className="pt-24 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100 mb-6">
              Let's collaborate on innovative HCI research
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Interested in VR development, empathy research, or user-centered design?
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-6">Get in touch</h2>
                <div className="space-y-4">
                  <div>
                    <a
                      href="mailto:shashidharprakash33@gmail.com"
                      className="text-lg text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors flex items-center gap-2"
                    >
                      shashidharprakash33@gmail.com ↗
                    </a>
                  </div>
                  <div>
                    <a 
                      href="tel:+13173844975" 
                      className="text-lg text-gray-900 hover:text-gray-600 transition-colors flex items-center gap-2"
                    >
                      +1 (317) 384-4975 ↗
                    </a>
                  </div>
                  <div>
                    <a 
                      href="https://linkedin.com/in/meetshashi" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-gray-900 hover:text-gray-600 transition-colors flex items-center gap-2"
                    >
                      linkedin.com/in/meetshashi ↗
                    </a>
                  </div>
                  <div>
                    <a 
                      href="https://shashidhara-n.vercel.app/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-gray-900 hover:text-gray-600 transition-colors flex items-center gap-2"
                    >
                      shashidhara-n.vercel.app ↗
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Location</h3>
                <p className="text-gray-700 dark:text-gray-300">Indianapolis, Indiana, United States</p>
              </div>

              <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Current Role</h3>
                <p className="text-gray-700 dark:text-gray-300">Graduate VR Research and Development at SETH Lab, Indiana University</p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-6">Send a message</h2>
              <form className="space-y-6" aria-label="Contact form">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name <span className="text-red-600" aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-600" aria-label="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                  >
                    <option value="">Select a topic</option>
                    <option value="vr-research">VR Research Collaboration</option>
                    <option value="hci-research">HCI Research Opportunities</option>
                    <option value="ux-design">UX Design Projects</option>
                    <option value="fullstack">Full Stack Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-600" aria-label="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project or research interest..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 py-3 px-6 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-300 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
