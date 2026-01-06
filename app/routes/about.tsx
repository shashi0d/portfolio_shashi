import type { Route } from "./+types/about";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - Shashidhara Narayanappa" },
    { name: "description", content: "I've been designing and researching at the intersection of technology and human experience since joining Indiana University's HCI program in 2024" },
  ];
}

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <Footer />

      <main id="main-content" className="pt-24 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100 leading-tight">
              About
            </h1>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I've been designing and researching at the intersection of technology and human experience since joining Indiana University's HCI program in 2024. Currently, I'm leading VR emotion research at SETH Lab while contributing to academic studies on AI's role in design practice.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                As a researcher and designer, I aim to understand how emerging technologies reshape human behavior and creative work. I believe the most elegant solutions combine rigorous methodology with thoughtful design grounded in evidence, refined in details.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                In my free time, I experiment with VR development, explore new design tools, and occasionally use AI to speed up the boring parts so I can focus on the interesting problems.
              </p>
            </div>

            <div className="space-y-6 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div>
                <span className="text-gray-500 dark:text-gray-400 text-sm">Currently</span>
                <p className="text-gray-900 dark:text-gray-100 font-medium">Graduate Research Assistant at SETH Lab, Indiana University</p>
              </div>

              <div>
                <span className="text-gray-500 dark:text-gray-400 text-sm">Previously</span>
                <p className="text-gray-900 dark:text-gray-100 font-medium">Lead Full Stack Developer at Zero Distance Metaverse (2022–2024)</p>
              </div>

              <div>
                <span className="text-gray-500 dark:text-gray-400 text-sm">Education</span>
                <div className="space-y-2">
                  <p className="text-gray-900 dark:text-gray-100 font-medium">M.S., Human Computer Interaction – Indiana University (Expected May 2026)</p>
                  <p className="text-gray-900 dark:text-gray-100 font-medium">B.E., Computer Science and Engineering – Visvesvaraya Technological University (2020)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
