import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
      <section className="pt-32 pb-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-8 group"
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
            <h1 className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-gray-100 leading-tight mb-12">
              Opportunities and Challenges for Generative AI in UX Design
            </h1>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12 max-w-3xl">
              Understanding how UX professionals integrate GenAI tools to inform the development of better human-AI collaboration systems, based on research into real-world design practices.
            </p>

            {/* Project Meta Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 pb-12 border-b border-gray-200 dark:border-gray-700">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Client</p>
                <p className="text-base font-medium text-gray-900 dark:text-gray-100">Academic Research</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Duration</p>
                <p className="text-base font-medium text-gray-900 dark:text-gray-100">Sep 2024 - Dec 2024</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Role</p>
                <p className="text-base font-medium text-gray-900 dark:text-gray-100">Secondary Author, Interview Lead</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Tools</p>
                <p className="text-base font-medium text-gray-900 dark:text-gray-100">Zoom, FigJam, ChatGPT, Otter.ai</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <Section>
        <div className="px-6 md:px-10 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-6">Problem</h2>
            <p className="text-xl md:text-2xl text-gray-900 dark:text-gray-100 leading-relaxed mb-6">
              GenAI tools are rapidly transforming UX design workflows, but adoption patterns across the design lifecycle remain unclear.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Existing research primarily focuses on ideation, leaving critical gaps in understanding how designers use AI for prototyping, testing, and research activities.
            </p>
            <div className="space-y-3">
              <p className="text-base text-gray-700 dark:text-gray-300">
                <strong>Can GenAI tools effectively support designers across all phases of the design process?</strong>
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300">
                <strong>What barriers prevent designers from using AI tools in later-stage design activities?</strong>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Insight */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-20 bg-gray-50 dark:bg-gray-800 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-6">Insight</h2>
            <p className="text-xl text-gray-900 dark:text-gray-100 leading-relaxed mb-6">
              GenAI adoption follows a clear inverse relationship with design phase progression. While tools excel at early-stage divergent thinking, they struggle with the precision and contextual nuance required in later phases.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-gray-900 rounded-lg">
                <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Early phases (Research & Ideation):</strong>
                </p>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  High adoption for brainstorming, research synthesis, and domain knowledge gathering. 90% of participants used ChatGPT primarily in these phases.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-900 rounded-lg">
                <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Later phases (Prototyping & Testing):</strong>
                </p>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  Limited utility due to lack of precision, design fixation concerns, and inability to generate context-specific solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Recommendations */}
      <Section delay={0.2}>
        <div className="px-6 md:px-10 mb-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-8">Recommendations</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
              Based on identified pain points, we propose design patterns to improve GenAI tool effectiveness across the design lifecycle.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Recommendation 1 */}
              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${accentColor}20` }}>
                    <svg className="w-6 h-6" style={{ color: accentColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Prompt Scaffolding Interfaces</h3>
                    <p className="text-base text-gray-600 dark:text-gray-400">
                      Provide phase-specific prompt templates to help designers craft effective queries without extensive AI literacy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Recommendation 2 */}
              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${accentColor}20` }}>
                    <svg className="w-6 h-6" style={{ color: accentColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Co-Creative Feedback Loops</h3>
                    <p className="text-base text-gray-600 dark:text-gray-400">
                      Enable iterative refinement where AI presents multiple alternatives and learns from designer selection patterns.
                    </p>
                  </div>
                </div>
              </div>

              {/* Recommendation 3 */}
              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${accentColor}20` }}>
                    <svg className="w-6 h-6" style={{ color: accentColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Divergence Control Mechanisms</h3>
                    <p className="text-base text-gray-600 dark:text-gray-400">
                      Combat design fixation by enforcing multiple solution generation before revealing any single option.
                    </p>
                  </div>
                </div>
              </div>

              {/* Recommendation 4 */}
              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${accentColor}20` }}>
                    <svg className="w-6 h-6" style={{ color: accentColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Thematic Traceability Dashboards</h3>
                    <p className="text-base text-gray-600 dark:text-gray-400">
                      Track how research insights connect to design decisions, making AI-assisted synthesis more transparent and auditable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Research Methods */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-20 bg-gray-50 dark:bg-gray-800 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-6">Research Methods Used</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              We employed mixed qualitative methods to capture comprehensive data on GenAI usage patterns across the design lifecycle.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-white dark:bg-gray-900">
                  <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-2">Retrospective Interviews</h3>
                  <p className="text-base text-gray-600 dark:text-gray-400">
                    Conducted 25 semi-structured interviews (60-90 minutes each) with UX professionals and students, asking participants to walk through recent projects and describe GenAI tool usage across different design phases.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-white dark:bg-gray-900">
                  <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-2">Thematic Analysis</h3>
                  <p className="text-base text-gray-600 dark:text-gray-400">
                    Interview transcripts were analyzed using affinity mapping in FigJam. AI tools assisted with initial grouping, followed by rigorous human validation to identify recurring patterns and pain points.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Flow */}
      <Section delay={0.2}>
        <div className="px-6 md:px-10 mb-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-8">Process</h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <div className="w-full md:w-auto flex-1 max-w-xs">
                <div className="p-6 rounded-lg text-center" style={{ backgroundColor: `${accentColor}15`, border: `2px solid ${accentColor}` }}>
                  <h3 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-2">Literature Review</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Analyzing existing research patterns</p>
                </div>
              </div>

              <svg className="w-8 h-8 text-gray-400 transform md:rotate-0 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>

              <div className="w-full md:w-auto flex-1 max-w-xs">
                <div className="p-6 rounded-lg text-center" style={{ backgroundColor: `${accentColor}15`, border: `2px solid ${accentColor}` }}>
                  <h3 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-2">Interviews</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Gathering user insights</p>
                </div>
              </div>

              <svg className="w-8 h-8 text-gray-400 transform md:rotate-0 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>

              <div className="w-full md:w-auto flex-1 max-w-xs">
                <div className="p-6 rounded-lg text-center" style={{ backgroundColor: `${accentColor}15`, border: `2px solid ${accentColor}` }}>
                  <h3 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-2">Analysis & Synthesis</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Deriving themes and recommendations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Research Findings */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-8">Research Findings</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-5xl font-bold mb-3" style={{ color: accentColor }}>90%</div>
                <p className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Used ChatGPT</p>
                <p className="text-base text-gray-600 dark:text-gray-400">Primarily for ideation, brainstorming, and research synthesis</p>
              </div>

              <div className="p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-5xl font-bold mb-3" style={{ color: accentColor }}>60%</div>
                <p className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Students vs 40% Professionals</p>
                <p className="text-base text-gray-600 dark:text-gray-400">Student adoption higher due to fewer organizational restrictions</p>
              </div>

              <div className="p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-5xl font-bold mb-3" style={{ color: accentColor }}>75%</div>
                <p className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Concerned About Fixation</p>
                <p className="text-base text-gray-600 dark:text-gray-400">Worried AI suggestions limit creative exploration</p>
              </div>

              <div className="p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-5xl font-bold mb-3" style={{ color: accentColor }}>35%</div>
                <p className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Used AI in Prototyping</p>
                <p className="text-base text-gray-600 dark:text-gray-400">Adoption drops significantly in later design phases</p>
              </div>
            </div>

            <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Key Insight</h3>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                GenAI tools demonstrate clear phase-specific utility patterns. While highly effective for divergent tasks like brainstorming and research synthesis, they struggle with convergent activities requiring precision, contextual understanding, and domain-specific constraints.
              </p>
              <blockquote className="border-l-4 pl-4 italic text-base text-gray-600 dark:text-gray-400" style={{ borderLeftColor: accentColor }}>
                "I always do something on my own first because I don't want to get influenced by its first response."
              </blockquote>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">- Senior UX Designer, 8 years experience</p>
            </div>
          </div>
        </div>
      </Section>

      {/* My Contributions */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-20 bg-gray-50 dark:bg-gray-800 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-6">My Contributions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Interview Leadership</h3>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  Conducted 5 of 25 interviews with UX professionals and students. Developed probing questions to uncover nuanced patterns in AI tool usage across design phases.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Thematic Analysis</h3>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  Led synthesis of interview data using hybrid human-AI approach. Used ChatGPT for initial grouping while maintaining rigorous human oversight to preserve nuance. Conducted affinity mapping sessions in FigJam to identify recurring themes and pain points.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Design Recommendations</h3>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  Contributed to formulation of design patterns for future AI tools, translating research findings into actionable interface and interaction concepts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Challenges */}
      <Section delay={0.2}>
        <div className="px-6 md:px-10 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-6">Challenges</h2>
            <div className="space-y-6">
              <div className="p-6 border-l-4 bg-gray-50 dark:bg-gray-800" style={{ borderLeftColor: accentColor }}>
                <h3 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-2">Managing Qualitative Data Volume</h3>
                <p className="text-base text-gray-700 dark:text-gray-300">
                  Each 60-90 minute interview generated extensive transcripts. Balancing AI efficiency with human oversight was critical to preserve important details while managing scale.
                </p>
              </div>
              <div className="p-6 border-l-4 bg-gray-50 dark:bg-gray-800" style={{ borderLeftColor: accentColor }}>
                <h3 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-2">Maintaining Analytical Rigor</h3>
                <p className="text-base text-gray-700 dark:text-gray-300">
                  Using AI to analyze research about AI created meta-challenges. Required careful prompting strategies and validation steps to ensure AI assistance enhanced rather than compromised analytical depth.
                </p>
              </div>
              <div className="p-6 border-l-4 bg-gray-50 dark:bg-gray-800" style={{ borderLeftColor: accentColor }}>
                <h3 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-2">Capturing Diverse Perspectives</h3>
                <p className="text-base text-gray-700 dark:text-gray-300">
                  Students and professionals had vastly different usage patterns and constraints. Ensuring themes reflected both groups without oversimplifying required nuanced synthesis approaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Impact & Future Work */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-20" style={{ backgroundColor: `${accentColor}10` }}>
          <div className="max-w-5xl mx-auto py-12">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-8">Impact & Future Work</h2>
            <div className="space-y-6 text-base text-gray-900 dark:text-gray-100 leading-relaxed">
              <p className="text-xl font-medium">
                First comprehensive study mapping GenAI adoption across the complete UX design lifecycle.
              </p>
              <p>
                Findings reveal clear phase-specific patterns that can inform development of next-generation design AI tools. Identified four design patterns (prompt scaffolding, co-creative feedback, divergence control, thematic traceability) that address current limitations.
              </p>
              <p>
                Paper submitted to ACM IUI 2026. Results contribute to academic understanding of human-AI collaboration in creative professional contexts and provide empirical foundation for future tool development.
              </p>
              <p className="font-medium">
                Ongoing work explores how these patterns can be implemented in prototype systems to validate effectiveness.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Reflection */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-6">Reflection</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              This project reinforced a critical lesson about AI tools: they amplify human judgment rather than replace it. Using AI to analyze research about AI gave me direct experience with the limitations we were studying. Speed gains are real, but maintaining analytical depth requires constant human oversight. The most valuable insight was learning to strategically combine AI efficiency with human critical thinking rather than treating them as alternatives.
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
              className="group block p-8 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-gray-900 dark:hover:border-gray-100 transition-all hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Next Project</p>
                  <h3 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                    VR Emotion Recognition
                  </h3>
                </div>
                <svg className="w-8 h-8 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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