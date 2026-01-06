import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ImagePlaceholder } from "../../components/ImagePlaceholder";
import { COLORS, SEO, PROJECTS } from "../../lib/constants";

export function meta() {
  const project = PROJECTS.find(p => p.id === "vr-emotion")!;
  const title = `${project.title} - ${SEO.authorName}`;
  const description = project.seoDescription;
  const url = `${SEO.siteUrl}/work/${project.id}`;
  const image = `${SEO.siteUrl}${project.image}`;

  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "article" },
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
    { name: "keywords", content: `${project.tags.join(", ")}, HCI research, UX design case study` },
  ];
}

function Section({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function VrEmotionPage() {
  const accentColor = COLORS.vrEmotion;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-8 md:mb-12 group"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium text-gray-900 dark:text-gray-100 leading-tight mb-6">
              Emotion Recognition in VR: Building the First Spontaneous Expression Dataset
            </h1>

            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 md:mb-12">
              <span className="font-medium">2024–Present</span>
              <span className="text-gray-300 dark:text-gray-600">•</span>
              <span>Lead Researcher</span>
              <span className="text-gray-300 dark:text-gray-600">•</span>
              <span>SETH Lab, Indiana University</span>
            </div>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
              Designing and conducting a VR research study to capture genuine emotional expressions from 37 participants, creating the first publicly-available dataset of spontaneous (not posed) facial reactions in virtual reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Info Cards */}
      <Section>
        <div className="px-6 md:px-10 mb-16 md:mb-24">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-6 rounded-xl">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Client</div>
              <div className="font-medium text-gray-900 dark:text-gray-100">SETH Lab</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-6 rounded-xl">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Duration</div>
              <div className="font-medium text-gray-900 dark:text-gray-100">Aug '24 - Present</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-6 rounded-xl">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Role</div>
              <div className="font-medium text-gray-900 dark:text-gray-100">Lead Researcher</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-6 rounded-xl">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Tools</div>
              <div className="font-medium text-gray-900 dark:text-gray-100">Unity, Meta Quest Pro</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Problem */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-16 md:mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-4">Problem</h2>
            <p className="text-2xl md:text-3xl font-light text-gray-900 dark:text-gray-100 leading-snug mb-6">
              VR systems for education, therapy, and social connection remain effectively "emotion blind" unable to detect users' emotional states or provide emotionally-safe, adaptive experiences.
            </p>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              While VR increases emotional engagement compared to traditional media, existing emotion recognition datasets rely on posed expressions or limited emotion classes, leaving researchers without the data needed to build truly empathetic, responsive VR systems.
            </p>
          </div>
        </div>
      </Section>

      {/* Insight */}
      <Section delay={0.2}>
        <div className="px-6 md:px-10 mb-16 md:mb-24 bg-gray-50 dark:bg-gray-800 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-4">Insight</h2>
            <p className="text-xl md:text-2xl text-gray-900 dark:text-gray-100 leading-relaxed mb-6">
              Not all emotions show on your face the same way. Our research revealed a hierarchy of convergence between what participants felt and what their facial expressions showed:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base md:text-lg">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                <div><strong className="text-gray-900 dark:text-gray-100">Happiness:</strong> Strong alignment</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
                <div><strong className="text-gray-900 dark:text-gray-100">Sadness:</strong> Moderate convergence</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                <div><strong className="text-gray-900 dark:text-gray-100">Disgust:</strong> Substantial divergence</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                <div><strong className="text-gray-900 dark:text-gray-100">Fear:</strong> Weakly observable</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Research Process Diagram */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-16 md:mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-8">Research Methods</h2>
            
            {/* Process Flow */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-12">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Stimulus Selection</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">FilmStim validated clips for 4 emotions</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">VR Environment</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Unity virtual theater with Meta Quest Pro</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Data Collection</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">63 FACS AUs at 30Hz + self-reports</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600 dark:text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Analysis</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Convergence validation across modalities</p>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6">
              <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">Study Design</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                37 participants watched validated emotion-eliciting film clips in VR while I recorded 63 FACS-based facial action units, eye tracking, real-time avatar animations, and post-clip self-reports, yielding 222 synchronized emotion-viewing sessions.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Research Findings */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-16 md:mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-8">Research Findings</h2>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-gray-100 mb-2">37</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Participants</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-gray-100 mb-2">222</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">VR Sessions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-gray-100 mb-2">63</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Facial AUs Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-gray-100 mb-2">30Hz</div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Capture Rate</div>
              </div>
            </div>

            {/* Findings List */}
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Happiness: Reliably Observable</h3>
                <p className="text-gray-700 dark:text-gray-300">Strong convergence between self-reported emotion and facial action units. VR facial tracking is trustworthy for detecting positive emotions.</p>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Sadness: Moderate Convergence</h3>
                <p className="text-gray-700 dark:text-gray-300">Participants reported feeling sad, but facial expressions were more subtle than expected multi-modal validation essential.</p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Disgust & Fear: Weakly Observable</h3>
                <p className="text-gray-700 dark:text-gray-300">Substantial divergence between internal experience and facial behavior. Facial cues alone are unreliable self-report or physiological measures needed.</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">First VR-Native Spontaneous Dataset</h3>
                <p className="text-gray-700 dark:text-gray-300">Unlike existing datasets with posed expressions, our data captures genuine, spontaneous reactions in immersive environments using consumer-grade hardware.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Content Themes (Word Cloud Placeholder) */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-16 md:mb-24 bg-gray-50 dark:bg-gray-800 py-12 md:py-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-8">Key Concepts</h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-sm md:text-base">
              <span className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-gray-900 dark:text-gray-100 text-lg md:text-xl font-medium">spontaneous</span>
              <span className="px-3 py-1.5 bg-white dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">FACS</span>
              <span className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-gray-900 dark:text-gray-100 text-lg font-medium">biometric</span>
              <span className="px-3 py-1.5 bg-white dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">immersive</span>
              <span className="px-3 py-1.5 bg-white dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">convergence</span>
              <span className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-gray-900 dark:text-gray-100 text-lg font-medium">emotion</span>
              <span className="px-3 py-1.5 bg-white dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">empathy</span>
              <span className="px-3 py-1.5 bg-white dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">validation</span>
              <span className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-gray-900 dark:text-gray-100 text-lg md:text-xl font-medium">VR-native</span>
              <span className="px-3 py-1.5 bg-white dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">facial tracking</span>
              <span className="px-3 py-1.5 bg-white dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">Meta Quest Pro</span>
              <span className="px-3 py-1.5 bg-white dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">multimodal</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Impact & Applications */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-16 md:mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-8">Design Implications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Adaptive Learning</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Systems can adjust pace and complexity when frustration or disengagement detected</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Empathy & Social VR</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Understanding how real emotions translate to avatars for authentic social presence</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Safety & Wellbeing</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Knowing when facial cues are unreliable prevents over-reliance when monitoring distress</p>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6">
              <p className="text-gray-900 dark:text-gray-100 font-medium mb-2">Target Publication</p>
              <p className="text-gray-700 dark:text-gray-300">Meaningful XR Conference / Empathic Computing Journal (February 2026 submission)</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Reflection */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-16 md:mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-4">Reflection</h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              This project taught me that meaningful research requires more than technical execution it demands understanding when findings challenge your assumptions. Discovering that fear and disgust don't reliably show on faces was initially frustrating, but it became the most valuable insight: knowing when a method fails is just as important as knowing when it works. That clarity will make future VR systems safer and more trustworthy.
            </p>
          </div>
        </div>
      </Section>

      {/* Next Project */}
      <Section>
        <div className="px-6 md:px-10 mb-16 md:mb-24">
          <div className="max-w-5xl mx-auto">
            <Link
              to="/work/secs"
              className="group block p-6 md:p-8 border border-gray-200 dark:border-gray-700 rounded-2xl hover:border-gray-900 dark:hover:border-gray-100 transition-all hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-2">Next Project</p>
                  <h3 className="text-xl md:text-3xl font-medium text-gray-900 group-hover:text-gray-600 dark:text-gray-300 transition-colors">
                    Mobility as Social Service
                  </h3>
                </div>
                <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-400 group-hover:text-gray-900 transition-colors transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}