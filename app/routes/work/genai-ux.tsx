import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ImagePlaceholder } from "../../components/ImagePlaceholder";
import { COLORS, SEO, PROJECTS } from "../../lib/constants";

export function meta() {
  const project = PROJECTS.find(p => p.id === "genai-ux")!;
  const title = `${project.title} - ${SEO.authorName}`;
  const description = project.seoDescription;
  const url = `${SEO.siteUrl}/work/${project.id}`;
  const image = `${SEO.siteUrl}${project.image}`;

  return [
    { title },
    { name: "description", content: description },

    // Open Graph
    { property: "og:type", content: "article" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:site_name", content: SEO.siteName },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: SEO.twitterHandle },
    { name: "twitter:creator", content: SEO.twitterHandle },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },

    // Additional SEO
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

export default function GenaiUxPage() {
  const accentColor = COLORS.genai;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
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
            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-gray-900 leading-tight mb-8">
              Opportunities and Challenges for Generative AI in UX Design
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-lg text-gray-600 mb-12">
              <span className="font-medium">2025</span>
              <span className="text-gray-300">•</span>
              <span>Secondary Author, Interview Lead</span>
              <span className="text-gray-300">•</span>
              <span>Qualitative Research</span>
            </div>

            {/* Lede */}
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
              Investigated how UX professionals and students integrate GenAI tools across the design lifecycle through 25 retrospective interviews, revealing stark differences between ideation success and prototyping limitations.
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                ACM IUI '26 (Under Review)
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
              src="/images/genai-ux/hero.png"
              alt="GenAI in UX Design Research"
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
                GenAI tools like ChatGPT and Midjourney were rapidly transforming how designers work, but we had no clear picture of how they fit into the full design lifecycle.
              </p>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Most research focused only on early-stage ideation, leaving us blind to what was actually happening in prototyping and testing phases.
            </p>
          </div>
        </div>
      </Section>

      {/* Solution */}
      <Section delay={0.2}>
        <div className="px-6 md:px-10 mb-24 bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 mb-6">Approach</h2>
            <p className="text-xl md:text-2xl text-gray-900 leading-relaxed">
              We conducted retrospective interviews with <strong>25 UX professionals and students</strong>, asking them to walk through past projects and reflect on exactly how, when, and why they used AI tools. By analyzing their real experiences across research, ideation, prototyping, and testing, we uncovered the true patterns of AI adoption—and its limitations.
            </p>
          </div>
        </div>
      </Section>

      {/* Students vs. Professionals */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-24">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">Students vs. Professionals</h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  The divide was striking. Students treated ChatGPT as a research assistant—helping them draft interview questions, generate ideas, and learn domain knowledge. They experimented freely, unbound by organizational constraints.
                </p>
                <p>
                  Professionals, on the other hand, were cautious. They used AI to accelerate workflows but expressed deep concerns about accuracy, data privacy, and design fixation. Many worked in companies where GenAI tools were restricted entirely.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden">
              <ImagePlaceholder
                src="/images/genai-ux/comparison.png"
                alt="Students vs Professionals comparison"
                aspectRatio="square"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Where AI Works */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-24">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">Where AI Actually Works</h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  AI shined brightest in the early phases. <strong>90% of participants used ChatGPT</strong>, primarily for brainstorming, summarizing research, and structuring ideas. Tools like Perplexity and Claude helped gather domain knowledge quickly.
                </p>
                <p>
                  But the further we moved through the design cycle, the more AI fell short. In prototyping and testing, outputs lacked precision, contextual sensitivity, and the nuance needed for professional work. Designers consistently chose manual work over fighting with generic AI suggestions.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden">
              <ImagePlaceholder
                src="/images/genai-ux/usage-graph.png"
                alt="AI usage across design phases"
                aspectRatio="wide"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Fixation Problem */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-24 bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">The Fixation Problem</h3>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                A recurring theme emerged: design fixation. When designers relied too heavily on AI's first suggestions, they converged too early on mediocre ideas. The AI became a crutch rather than a collaborator.
              </p>
              <blockquote className="border-l-4 pl-6 italic text-xl text-gray-900 dark:text-gray-100" style={{ borderLeftColor: accentColor }}>
                "I always do something on my own first because I don't want to get influenced by its first response."
              </blockquote>
              <p className="text-base text-gray-600 dark:text-gray-400">— Senior UX Designer, 8 years experience</p>
            </div>
          </div>
        </div>
      </Section>

      {/* My Role */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-24">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="rounded-xl overflow-hidden">
              <ImagePlaceholder
                src="/images/genai-ux/affinity-mapping.png"
                alt="Affinity mapping process"
                aspectRatio="square"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">My Role</h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  As secondary author, I led 5 of the 25 interviews and took charge of deriving themes from the data. The biggest challenge? Managing massive amounts of qualitative data—each 1-hour interview generated extensive transcripts.
                </p>
                <p>
                  I used AI itself to help group responses into themes (meta, right?), but I had to carefully prompt it to preserve important details. The synthesis process was extensive: raw transcripts → FigJam affinity mapping → refined themes. It taught me how to balance AI efficiency with human oversight.
                </p>
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
            <div className="space-y-6 text-lg text-gray-900 leading-relaxed">
              <p className="text-2xl font-medium">
                First comprehensive study of GenAI use across the full UX lifecycle.
              </p>
              <p>
                Clear evidence of phase-specific adoption patterns. Design recommendations for future AI tools including prompt scaffolding interfaces, co-creative feedback loops, divergence control mechanisms, and thematic traceability dashboards.
              </p>
              <p className="font-medium">
                Contributing to academic knowledge of human-AI collaboration in design practice.
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
              What I'm most proud of is experiencing firsthand the challenges we were researching. Using AI to analyze research about AI taught me its true limitations—it's powerful for speed, but requires constant human judgment to maintain quality and depth.
            </p>
          </div>
        </div>
      </Section>

      {/* Next Project */}
      <Section>
        <div className="px-6 md:px-10 mb-24">
          <div className="max-w-5xl mx-auto">
            <Link
              to="/work/vr-emotion"
              className="group block p-8 border border-gray-200 rounded-2xl hover:border-gray-900 transition-all hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Next Project</p>
                  <h3 className="text-2xl md:text-3xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                    VR Emotion Recognition
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
