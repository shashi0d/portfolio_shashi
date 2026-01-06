import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ImagePlaceholder } from "../../components/ImagePlaceholder";
import { COLORS, SEO, PROJECTS } from "../../lib/constants";

export function meta() {
  const project = PROJECTS.find(p => p.id === "wanderindy")!;
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

export default function WanderIndyPage() {
  const accentColor = COLORS.wanderIndy;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-12 group"
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-gray-900 dark:text-gray-100 leading-tight mb-8">
              Wander Indy – Urban Exploration Wayfinding System
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-lg text-gray-600 dark:text-gray-400 mb-12">
              <span className="font-medium">2025</span>
              <span className="text-gray-300 dark:text-gray-600">•</span>
              <span>UX Research & Design Lead</span>
              <span className="text-gray-300 dark:text-gray-600">•</span>
              <span>Interaction Design, Public Space</span>
            </div>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-12 max-w-4xl">
              Transformed Indianapolis into an interactive storybook through mood-based trails, stamp challenges, and sensor kiosks. Led kiosk design and field research to make hidden neighborhoods discoverable.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.figma.com/proto/BSXT3AOcgOCiBYM5MMNyPs/WanderIndy?page-id=340%3A2353&node-id=358-6713&viewport=-2861%2C780%2C0.55&t=7GRgPpOICgJ9rEgZ-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=358%3A6685"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors font-medium"
              >
                Figma Prototype
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
              src="/images/wanderindy/hero.png"
              alt="WanderIndy Urban Exploration System"
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
              <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-4">Challenge</h2>
              <p className="text-3xl md:text-4xl font-light text-gray-900 dark:text-gray-100 leading-snug">
                Exploring Indianapolis felt broken. Locals and tourists gravitated toward major landmarks while hidden gems stayed invisible.
              </p>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Existing tools apps, signs, maps felt impersonal and failed to guide meaningful exploration. Weekend outings lacked the magic of discovery.
            </p>
          </div>
        </div>
      </Section>

      {/* Solution */}
      <Section delay={0.2}>
        <div className="px-6 md:px-10 mb-24 bg-gray-50 dark:bg-gray-800 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-6">Solution</h2>
            <p className="text-xl md:text-2xl text-gray-900 dark:text-gray-100 leading-relaxed">
              We designed WanderIndy: a hybrid physical-digital system that turns Indianapolis into an interactive storybook. Pick a mood-based trail (foodie, artistic, musical, shopping), collect stamps through a 4-stop challenge, and unlock neighborhood stories through interactive kiosks. Every journey becomes an adventure, every outing becomes a memory.
            </p>
          </div>
        </div>
      </Section>

      {/* The Stamp Mechanic */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-24">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-100 mb-6">The Stamp Mechanic</h3>
              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Why four stamps? We spent a day observing Fountain Square, watching what people actually did. Food, music, art, shopping those four categories dominated. We designed around real behavior, not assumptions.
                </p>
                <p>
                  Four stamps meant trails were achievable in one outing. Too few and it felt trivial. Too many and people gave up. We struck the balance between variety and completion.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden">
              <ImagePlaceholder
                src="/images/wanderindy/stamps.png"
                alt="Stamp collection mechanic"
                aspectRatio="square"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Kiosks That Fit */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-24">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="rounded-xl overflow-hidden order-2 lg:order-1">
              <ImagePlaceholder
                src="/images/wanderindy/kiosk-design.png"
                alt="Interactive kiosk design"
                aspectRatio="square"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-100 mb-6">Kiosks That Actually Fit</h3>
              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Inspired by LinkNYC, we designed vertical kiosks for sidewalks. The format wasn't just aesthetic it solved real problems. Vertical saves sidewalk space. The top-down flow feels natural. Rain and sun protection matter in Indianapolis weather.
                </p>
                <p>
                  I took ChatGPT-generated mockups and AI-composited them into actual Fountain Square photos. Seeing the kiosk in context made the concept feel real, even before we built anything physical.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Design Evolution */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-24 bg-gray-50 dark:bg-gray-800 py-16">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-100 mb-8">Designing the Experience</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  From paper prototypes to mid-fi structures to high-fidelity polish, we iterated constantly. I designed the kiosk interface and interaction flows, ensuring the vertical format supported intuitive navigation.
                </p>
                <p>
                  We developed a full design system: Urbanist typography, color-coded trails (Food: Warm Coral, Art: Indigo Purple, Museums: Deep Teal, Shopping: Soft Gold), and hand-drawn doodles that added personality without overwhelming the minimal aesthetic.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden">
                <ImagePlaceholder
                  src="/images/wanderindy/design-evolution.png"
                  alt="Design evolution process"
                  aspectRatio="square"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* The Living Field Guide */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-24">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-100 mb-6">The Living Field Guide</h3>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                The app wasn't just about checking boxes it was about building a personal story. Your field guide grows with every journey, collecting badges, memories, and timestamps. Exploration becomes achievement. The city becomes yours.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <ImagePlaceholder
                src="/images/wanderindy/field-guide.png"
                alt="Living field guide interface"
                aspectRatio="wide"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Outcomes */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-24" style={{ backgroundColor: `${accentColor}10` }}>
          <div className="max-w-5xl mx-auto py-16">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-12">Impact</h2>
            <div className="space-y-6 text-lg text-gray-900 dark:text-gray-100 leading-relaxed">
              <p className="text-2xl font-medium">
                Complete mobile app prototype (high-fidelity), vertical kiosk interface designs, full brand system (typography, color, iconography, doodles), and feasibility analysis with AI-composited site photos.
              </p>
              <p>
                Successfully designed a comprehensive service system that turns Indianapolis into an interactive game of discovery.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Reflection */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-6">Reflection</h2>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
              What I'm most proud of is balancing ideas across a team of 5 without a formal leader. We each brought different perspectives, but the final concept felt unified. Also, using AI as a partner in rapid prototyping taught me its true value it's powerful for speed and iteration, but always needs human judgment to guide the vision.
            </p>
          </div>
        </div>
      </Section>

      {/* Next Project */}
      <Section>
        <div className="px-6 md:px-10 mb-24">
          <div className="max-w-5xl mx-auto">
            <Link
              to="/work/genai-ux"
              className="group block p-8 border border-gray-200 dark:border-gray-700 rounded-2xl hover:border-gray-900 dark:hover:border-gray-100 transition-all hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Next Project</p>
                  <h3 className="text-2xl md:text-3xl font-medium text-gray-900 group-hover:text-gray-600 dark:text-gray-300 transition-colors">
                    GenAI in UX Design
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
