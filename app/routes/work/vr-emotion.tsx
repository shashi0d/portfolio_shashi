import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ImagePlaceholder } from "../../components/ImagePlaceholder";
import { COLORS } from "../../lib/constants";

export function meta() {
  return [
    { title: "VR Emotion Recognition - Shashidhara Narayanappa" },
    { name: "description", content: "Building the first VR emotion dataset with spontaneous facial expressions using Meta Quest Pro." },
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
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-12 group"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Work
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-gray-900 leading-tight mb-8">
              Emotion Recognition in Virtual Reality Using Meta Quest Pro
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-lg text-gray-600 mb-12">
              <span className="font-medium">2024–Present</span>
              <span className="text-gray-300">•</span>
              <span>Lead Researcher & VR Developer</span>
              <span className="text-gray-300">•</span>
              <span>VR Development, Data Collection</span>
            </div>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
              Building the first VR emotion dataset with spontaneous facial expressions. Designed the complete research pipeline in Unity, conducting 50 participant sessions to capture genuine emotional reactions across six basic emotions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                IEEE VR / Meaningful XR
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <Section>
        <div className="px-6 md:px-10 mb-24">
          <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden" style={{ borderTop: `4px solid ${accentColor}` }}>
            <ImagePlaceholder
              src="/images/vr-emotion/hero.png"
              alt="VR Emotion Recognition Research"
              aspectRatio="wide"
            />
          </div>
        </div>
      </Section>

      {/* Challenge */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6" style={{ borderLeft: `4px solid ${accentColor}`, paddingLeft: '1.5rem' }}>
              <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 mb-4">Challenge</h2>
              <p className="text-3xl md:text-4xl font-light text-gray-900 leading-snug">
                VR research was missing something fundamental—we had no datasets capturing what people's faces actually do when they experience genuine emotions in VR.
              </p>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              While plenty of studies explored emotions in virtual environments, they all relied on posed, acted expressions. The spontaneous, natural reactions that matter most remained uncaptured.
            </p>
          </div>
        </div>
      </Section>

      {/* Solution */}
      <Section delay={0.2}>
        <div className="px-6 md:px-10 mb-24 bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 mb-6">Solution</h2>
            <p className="text-xl md:text-2xl text-gray-900 leading-relaxed">
              I designed and built a complete research pipeline from scratch. Using the Meta Quest Pro's built-in facial tracking, I'm collecting spontaneous emotional expressions from <strong>50 university students</strong> as they watch validated emotional videos in VR. The result: the first dataset of its kind, capturing natural facial expressions across all six basic emotions in an immersive environment.
            </p>
          </div>
        </div>
      </Section>

      {/* Building the System */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-24">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">Building the System</h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  I developed the entire VR environment in Unity, complete with a virtual screen for video playback and real-time avatar mirroring. The Meta Quest Pro captures <strong>63 facial action units at 30 Hz</strong>—FACS-compatible data that can support everything from frame-based classification to time-series modeling.
                </p>
                <p>
                  The technical challenge wasn't just building it—it was building it right. Data synchronization, timestamp alignment, CSV export pipelines. Every detail mattered.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden">
              <ImagePlaceholder
                src="/images/vr-emotion/unity-environment.png"
                alt="Unity VR environment"
                aspectRatio="square"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Choosing Stimuli */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-24">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="rounded-xl overflow-hidden order-2 lg:order-1">
              <ImagePlaceholder
                src="/images/vr-emotion/stimuli.png"
                alt="Emotional stimuli selection"
                aspectRatio="square"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">Choosing the Right Stimuli</h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Not all emotional videos are created equal. I curated clips from the FilmStim dataset for five emotions (anger, disgust, sadness, surprise, fear) because of their high-definition quality and validated arousal-valence ratings. For happiness, I compiled clips from Friends—testing multiple versions to find what actually made people smile.
                </p>
                <p>
                  Between each emotional clip, participants see a 20-second neutral animation. Not glamorous, but essential for resetting their baseline state.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Data Collection */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-24 bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8">The Data Collection</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  I'm conducting all 50 sessions myself. <strong>30 participants complete, 20 to go.</strong> Each 30-minute session requires careful calibration, patient guidance, and meticulous data collection. It's exhausting. It's exhilarating.
                </p>
                <p className="font-medium text-gray-900">Every session generates:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>63 facial action unit values captured at 30 Hz</li>
                  <li>RGB avatar frames showing real-time expressions</li>
                  <li>Post-session self-reports (emotion identification, intensity ratings)</li>
                  <li>IRI empathy questionnaire responses</li>
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden">
                <ImagePlaceholder
                  src="/images/vr-emotion/data-collection.png"
                  alt="Data collection process"
                  aspectRatio="square"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Multi-Modal Data */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-24">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8">Multi-Modal Data Foundation</h3>
            <div className="mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                This isn't just a dataset—it's a foundation for future emotion recognition models that understand genuine human reactions in immersive environments.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden mb-8">
              <ImagePlaceholder
                src="/images/vr-emotion/multimodal-data.png"
                alt="Multi-modal data structure"
                aspectRatio="wide"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 rounded-xl">
                <h4 className="font-medium text-gray-900 mb-2">Frame-Based Classification</h4>
                <p className="text-sm text-gray-600">Using CNNs on avatar images</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h4 className="font-medium text-gray-900 mb-2">Time-Series Modeling</h4>
                <p className="text-sm text-gray-600">LSTM approaches on AU vectors</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <h4 className="font-medium text-gray-900 mb-2">Multi-Modal Fusion</h4>
                <p className="text-sm text-gray-600">Enhanced accuracy combining approaches</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Outcomes */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-24" style={{ backgroundColor: `${accentColor}10` }}>
          <div className="max-w-5xl mx-auto py-16">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 mb-12">Impact</h2>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-5xl font-medium text-gray-900 mb-2">30/50</div>
                <div className="text-lg text-gray-600">Participants Completed</div>
              </div>
              <div>
                <div className="text-5xl font-medium text-gray-900 mb-2">~54,000</div>
                <div className="text-lg text-gray-600">Data Points per Session</div>
              </div>
              <div>
                <div className="text-5xl font-medium text-gray-900 mb-2">63</div>
                <div className="text-lg text-gray-600">Facial Action Units</div>
              </div>
            </div>

            <div className="space-y-4 text-lg text-gray-900">
              <p className="text-2xl font-medium">
                First publicly available VR emotion dataset with spontaneous (not posed) expressions.
              </p>
              <p>
                High-fidelity FACS-based tracking across all six basic emotions. Targeting IEEE VR, Meaningful XR, or Empathic Computing conferences.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Reflection */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 mb-6">Reflection</h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Leading this project taught me what independent research really means. There's no one to ask "is this right?"—you have to know. From designing the study to debugging Unity crashes at 2 AM to explaining consent forms, every decision is mine. It's the best kind of pressure.
            </p>
          </div>
        </div>
      </Section>

      {/* Next Project */}
      <Section>
        <div className="px-6 md:px-10 mb-24">
          <div className="max-w-5xl mx-auto">
            <Link
              to="/work/wanderindy"
              className="group block p-8 border border-gray-200 rounded-2xl hover:border-gray-900 transition-all hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Next Project</p>
                  <h3 className="text-2xl md:text-3xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                    WanderIndy
                  </h3>
                </div>
                <svg className="w-8 h-8 text-gray-400 group-hover:text-gray-900 transition-colors transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
