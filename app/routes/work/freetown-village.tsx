import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ImagePlaceholder } from "../../components/ImagePlaceholder";
import { COLORS, SEO, PROJECTS, getOGImageMeta } from "../../lib/constants";

export function meta() {
  const project = PROJECTS.find(p => p.id === "freetown-village")!;
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
    ...getOGImageMeta(image),
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

export default function FreetownVillagePage() {
  const accentColor = COLORS.freetown;

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
            Back to Work
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium text-gray-900 dark:text-gray-100 leading-tight mb-6 md:mb-8">
              Freetown Village: Sustainable Revenue Strategy for Cultural Heritage Nonprofit
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 md:mb-10 max-w-3xl">
              Recommending a 3-tier membership model and integrated digital platform to reduce 80% donation dependency, based on research into willingness-to-pay and competitive platform analysis.
            </p>

            {/* Prototype CTA */}
            <a 
              href="https://freetown-village.netlify.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white transition-all hover:shadow-lg transform hover:-translate-y-0.5"
              style={{ backgroundColor: accentColor }}
            >
              <span>View Live Prototype</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <Section>
        <div className="px-6 md:px-10 mb-16 md:mb-24">
          <div className="max-w-6xl mx-auto rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
            <ImagePlaceholder
              src="/images/freetown-village/card.png"
              alt="Freetown Village Walker Theatre facade - historic brick building with marquee, warm afternoon lighting, Indianapolis downtown context, showing the physical cultural institution where live performances happen"
              aspectRatio="wide"
            />
          </div>
        </div>
      </Section>

      {/* Project Info Grid - Card Style */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-16 md:mb-24">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-6 rounded-xl">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Client</div>
              <div className="font-medium text-gray-900 dark:text-gray-100">Freetown Village</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-6 rounded-xl">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Duration</div>
              <div className="font-medium text-gray-900 dark:text-gray-100">Sep - Dec 2024</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-6 rounded-xl">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Role</div>
              <div className="font-medium text-gray-900 dark:text-gray-100">Business Research</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-6 rounded-xl">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Tools</div>
              <div className="font-medium text-gray-900 dark:text-gray-100">Figma, Three.js</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Problem */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-16 md:mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-4">Problem</h2>
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 dark:text-gray-100 leading-snug mb-6">
              Freetown Village reaches only 25-60 people per live performance and depends on grants for 80% of revenue. They knew they needed digital presence but not what form it should take or how to monetize without betraying their cultural mission.
            </p>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              To achieve sustainable growth, we defined the challenge in two parts:
            </p>
            
            <div className="space-y-4 text-base md:text-lg text-gray-900 dark:text-gray-100">
              <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="font-medium mb-2">What digital experience would younger audiences actually pay for?</p>
              </div>
              <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="font-medium mb-2">How might we build sustainable revenue without explicit "selling" of culture?</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Insight Preview */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-16 md:mb-24 bg-gray-50 dark:bg-gray-800 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-6">Insight</h2>
            <p className="text-xl md:text-2xl text-gray-900 dark:text-gray-100 leading-relaxed mb-6">
              Research findings showed an effective path forward: integrated watch parties and 3D virtual museum features that transform passive viewing into active cultural participation creating sustainable revenue through meaningful engagement.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8">
              <div className="p-4 md:p-6 bg-white dark:bg-gray-900 rounded-lg">
                <p className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">What would audiences pay for?</p>
                <p className="text-base md:text-lg" style={{ color: accentColor }}>Social experiences over solo content people pay to "support the mission" when engagement feels communal</p>
              </div>
              <div className="p-4 md:p-6 bg-white dark:bg-gray-900 rounded-lg">
                <p className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">How to monetize respectfully?</p>
                <p className="text-base md:text-lg" style={{ color: accentColor }}>Frame pricing as supporting cultural preservation, not buying entertainment language matters as much as features</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Solution Overview */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-16 md:mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-100 mb-8 md:mb-12">Integrated Solution: Watch Parties + 3D Museum</h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 md:mb-12">
              The trickier question was: how do features work together? Watch parties create recurring social moments. The 3D museum gives those moments lasting meaning. Together they transform one-time viewers into engaged community members building personal cultural collections.
            </p>

            {/* 3-tier pricing visual */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-sm mb-8">
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-100 mb-6">Revenue Model</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Free Tier */}
                <div className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <div className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">Free</div>
                  <div className="text-3xl font-bold mb-2" style={{ color: accentColor }}>$0</div>
                  <div className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Community Explorer</div>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Event clips</li>
                    <li>• Basic museum room</li>
                    <li>• Public discussions</li>
                    <li>• Weekly content drops</li>
                  </ul>
                </div>

                {/* Basic Tier */}
                <div className="border-2 rounded-lg p-6" style={{ borderColor: accentColor }}>
                  <div className="text-sm font-medium uppercase tracking-wide mb-2" style={{ color: accentColor }}>Basic</div>
                  <div className="text-3xl font-bold mb-2" style={{ color: accentColor }}>$6.99<span className="text-lg">/mo</span></div>
                  <div className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Digital Historian</div>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Full video-on-demand</li>
                    <li>• Join all watch parties</li>
                    <li>• Complete museum access</li>
                    <li>• All chats & forums</li>
                  </ul>
                </div>

                {/* Premium Tier */}
                <div className="border-2 border-gray-800 dark:border-gray-200 rounded-lg p-6 bg-gray-50 dark:bg-gray-900">
                  <div className="text-sm font-medium uppercase tracking-wide text-gray-800 dark:text-gray-200 mb-2">Premium</div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">$19.99<span className="text-lg">/mo</span></div>
                  <div className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Cultural Curator</div>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Everything in Basic</li>
                    <li>• Unlimited watch parties</li>
                    <li>• Private party hosting</li>
                    <li>• Early merch access</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
                <p className="text-sm md:text-base font-medium text-gray-900 dark:text-gray-100">Projected: $283K annual revenue at 2,000 users (35% conversion)</p>
              </div>
            </div>

            {/* Key features visual */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: `${accentColor}20` }}>
                  <svg className="w-6 h-6" style={{ color: accentColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Live Watch Parties</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Social viewing with live chat, interactive quizzes, points earning. Private party hosting for Premium users brings theater's communal nature online.</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: `${accentColor}20` }}>
                  <svg className="w-6 h-6" style={{ color: accentColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">3D Virtual Museum</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Collect digital artifacts through participation. Three.js prototype lets users walk through galleries, click artifacts for stories, curate personal cultural collections.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Research Methods */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-16 md:mb-24 bg-gray-50 dark:bg-gray-800 py-12 md:py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-100 mb-6 md:mb-8">Research Methods Used</h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 md:mb-12">
              We chose exploratory methods user interviews, competitive analysis, willingness-to-pay integration, and design validation to understand what the community valued and what they'd sustainably support.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* User Interviews */}
              <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-xl">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg mb-4 md:mb-6 flex items-center justify-center" style={{ backgroundColor: `${accentColor}20` }}>
                  <svg className="w-6 h-6 md:w-7 md:h-7" style={{ color: accentColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100 mb-3 md:mb-4">User Interviews</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  4 interviews with African American community members 2 students, 2 Walker Theatre managers. Focused on:
                </p>
                <ul className="space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Cultural connection & identity building</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Trust & authenticity requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Willingness-to-pay for cultural platforms</span>
                  </li>
                </ul>
              </div>

              {/* Competitive Analysis */}
              <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-xl">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg mb-4 md:mb-6 flex items-center justify-center" style={{ backgroundColor: `${accentColor}20` }}>
                  <svg className="w-6 h-6 md:w-7 md:h-7" style={{ color: accentColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100 mb-3 md:mb-4">Competitive Analysis</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Analyzed 4 platforms for pricing, features, and value propositions:
                </p>
                <ul className="space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>KweliTV: $49.99/year, cultural content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Mighty Networks: $109/mo, community tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Smithsonian: $75-500 tiered memberships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>BroadwayHD: $199/year, theater streaming</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process Diagram */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-16 md:mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-100 mb-8 md:mb-12">Process</h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <div className="w-full md:w-auto bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900 dark:to-amber-800 p-6 md:p-8 rounded-2xl transform rotate-0 md:rotate-45 shadow-lg">
                <div className="transform md:-rotate-45">
                  <h3 className="text-base md:text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 text-center">User Interviews</h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 text-center">Exploring community needs</p>
                </div>
              </div>

              <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-400 rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>

              <div className="w-full md:w-auto bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-800 dark:to-amber-700 p-6 md:p-8 rounded-2xl transform rotate-0 md:rotate-45 shadow-lg">
                <div className="transform md:-rotate-45">
                  <h3 className="text-base md:text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 text-center">Competitive Analysis</h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 text-center">Pricing & feature benchmarks</p>
                </div>
              </div>

              <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-400 rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>

              <div className="w-full md:w-auto bg-gradient-to-br from-amber-200 to-amber-300 dark:from-amber-700 dark:to-amber-600 p-6 md:p-8 rounded-2xl transform rotate-0 md:rotate-45 shadow-lg">
                <div className="transform md:-rotate-45">
                  <h3 className="text-base md:text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 text-center">Design Validation</h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 text-center">Testing comprehension</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Key Findings */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-16 md:mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-100 mb-6 md:mb-8">Key Insights</h2>
            
            <div className="space-y-6 md:space-y-8">
              <div className="border-l-4 pl-4 md:pl-6 py-2" style={{ borderColor: accentColor }}>
                <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">Cultural learning is identity building, not content consumption</h3>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  One user felt disconnected before exploring his roots. Another wanted to bridge African and African American histories. This wasn't about watching it was about supporting people building something deeply personal.
                </p>
              </div>

              <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 md:pl-6 py-2">
                <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">Trust requires the "Rule of Three"</h3>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Users needed three sources before trusting narratives: academic rigor, lived experience, engaging storytelling. The platform had to fund research, not just production.
                </p>
              </div>

              <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 md:pl-6 py-2">
                <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">Community validation drives engagement</h3>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Mighty Networks charges $109/month because people stay for each other, not content. Young people engage when they feel seen shape features for creation and recognition, not passive consumption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Impact & Validation */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-16 md:mb-24 bg-gray-50 dark:bg-gray-800 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-100 mb-6 md:mb-8">Impact & Validation</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
              <div className="p-6 bg-white dark:bg-gray-900 rounded-lg">
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: accentColor }}>85%</div>
                <p className="text-base md:text-lg text-gray-900 dark:text-gray-100 font-medium mb-2">Comprehension Rate</p>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">After reframing "unlock with points" to "earned through participation" language matters</p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-900 rounded-lg">
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: accentColor }}>$283K</div>
                <p className="text-base md:text-lg text-gray-900 dark:text-gray-100 font-medium mb-2">Projected Annual Revenue</p>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">At 2,000 users with 35% conversion to paid tiers</p>
              </div>
            </div>

            <div className="p-6 md:p-8 bg-white dark:bg-gray-900 rounded-xl mb-6">
              <p className="text-lg md:text-xl text-gray-900 dark:text-gray-100 leading-relaxed mb-4">
                What landed with Freetown Village leadership: having the complete picture. Product concept (watch parties + museum), revenue model (build costs, operating costs, revenue projections), technical proof (working Three.js prototype), and validation (85% comprehension).
              </p>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                They told us they "wouldn't have thought of watch parties" and requested full board documentation. Implementation pending approval but they now have clear direction for how to go digital.
              </p>
            </div>

            {/* Prototype Link in Impact Section */}
            <div className="text-center">
              <a 
                href="https://freetown-village.netlify.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 rounded-lg font-medium transition-all hover:shadow-lg transform hover:-translate-y-0.5"
                style={{ borderColor: accentColor, color: accentColor }}
              >
                <span>Explore the 3D Museum Prototype</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Reflection */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-16 md:mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-100 mb-6 md:mb-8">Reflection</h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Here's the thing: features need to reinforce each other. Watch parties alone are events that end. The museum alone is a collection without context. Together, they create a loop where each watch party enriches your museum, and your museum motivates the next watch party.
            </p>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              The pricing lesson surprised me. Users responded completely differently to "support our mission" versus "get premium access" for identical features. When testing showed people felt we were selling culture, we didn't change the product we changed how we talked about it.
            </p>
          </div>
        </div>
      </Section>

      {/* Next Project */}
      <Section>
        <div className="px-6 md:px-10 mb-16 md:mb-24">
          <div className="max-w-5xl mx-auto">
            <Link
              to="/work/genai-ux"
              className="group block p-6 md:p-8 border border-gray-200 dark:border-gray-700 rounded-xl md:rounded-2xl hover:border-gray-900 dark:hover:border-gray-100 transition-all hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-2">Next Project</p>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 group-hover:text-gray-600 dark:text-gray-300 transition-colors">
                    GenAI in UX Design
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