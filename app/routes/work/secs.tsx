import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ImagePlaceholder } from "../../components/ImagePlaceholder";
import { COLORS, SEO, PROJECTS } from "../../lib/constants";

export function meta() {
  const project = PROJECTS.find(p => p.id === "secs")!;
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

export default function SecsPage() {
  const accentColor = COLORS.secs;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-12 md:pb-16 px-4 md:px-10">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm md:text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-8 md:mb-12 group"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              Understanding Service Engagement at Food Pantries
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 md:mb-12 max-w-3xl">
              Southeast Community Services (SECS) runs a weekly food pantry serving hundreds of families. They also offer job coaching, financial counseling, and education programs in the same building. Almost no one uses them. We partnered with SECS and Toyota Mobility Foundation to understand why.
            </p>

            {/* Client Info Grid - Mobile Optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
              <div>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-1 md:mb-2">Client</p>
                <p className="text-sm md:text-base font-medium text-gray-900 dark:text-gray-100">Toyota Mobility Foundation + SECS</p>
              </div>
              <div>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-1 md:mb-2">Duration</p>
                <p className="text-sm md:text-base font-medium text-gray-900 dark:text-gray-100">Aug 2025 - May 2026</p>
              </div>
              <div>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-1 md:mb-2">Role</p>
                <p className="text-sm md:text-base font-medium text-gray-900 dark:text-gray-100">Lead Researcher</p>
              </div>
              <div>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-1 md:mb-2">Team</p>
                <p className="text-sm md:text-base font-medium text-gray-900 dark:text-gray-100">4 Researchers</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8 md:mb-12">
              <span className="px-3 py-1 text-xs md:text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">AI Interview Design</span>
              <span className="px-3 py-1 text-xs md:text-sm bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">Qualitative Analysis</span>
              <span className="px-3 py-1 text-xs md:text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">Participatory Design</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <Section delay={0.1}>
        <div className="px-4 md:px-10 mb-16 md:mb-24">
          <div className="max-w-6xl mx-auto rounded-lg md:rounded-xl overflow-hidden">
            <ImagePlaceholder
              src="/images/secs/card.png"
              alt="SECS research team conducting interviews and sticker wall activities at food pantry"
              aspectRatio="wide"
            />
          </div>
        </div>
      </Section>

      {/* Problem */}
      <Section delay={0.1}>
        <div className="px-4 md:px-10 mb-16 md:mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xs md:text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-4 md:mb-6">The Challenge</h2>
            <p className="text-2xl md:text-3xl font-light text-gray-900 dark:text-gray-100 leading-snug mb-6">
              SECS leadership believed it was an awareness problem. If people just knew about job coaching and financial counseling, they would use these services.
            </p>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              They had tried flyers, staff mentions during food pickup, and signage. Nothing worked. Our team suspected the problem went deeper than awareness.
            </p>
          </div>
        </div>
      </Section>

      {/* Insight Callout - Mobile Optimized */}
      <Section delay={0.1}>
        <div className="px-4 md:px-10 mb-16 md:mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg md:rounded-2xl p-6 md:p-12" style={{ borderLeft: `4px solid ${accentColor}` }}>
              <h2 className="text-xs md:text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-6">Key Insight</h2>
              <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 dark:text-gray-100 mb-4">
                Awareness doesn't equal engagement
              </p>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                People knew services existed but faced time scarcity, stigma, unclear pathways, and transportation barriers that prevented access. Understanding these hidden barriers required us to look beneath the surface.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Spatial Understanding */}
      <Section delay={0.1}>
        <div className="px-4 md:px-10 mb-16 md:mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 dark:text-gray-100 mb-6 md:mb-8">Understanding the Physical Service Flow</h2>
            
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 md:mb-12">
              Before choosing research methods, we mapped how people actually move through SECS. The pantry operates as a drive-through during food distribution, with walk-in neighbors waiting briefly outside. This spatial understanding revealed natural moments for different types of engagement.
            </p>

            {/* Spatial Map Image */}
            <div className="mb-8 md:mb-12 rounded-lg md:rounded-xl overflow-hidden">
              <ImagePlaceholder
                src="/images/secs/spatial-service-map.png"
                alt="Spatial service design map showing drive-through flow, waiting areas, and service touchpoints at SECS food pantry"
                aspectRatio="wide"
              />
            </div>

            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              The physical layout showed us that food pickup is rushed and transactional. People squeeze visits between work shifts or school pickups. We also had to consider our audience: families experiencing food insecurity, many balancing multiple jobs, caregiving responsibilities, and varying levels of comfort sharing vulnerable details with strangers.
            </p>
          </div>
        </div>
      </Section>

      {/* Research Approach - Condensed */}
      <Section delay={0.1}>
        <div className="px-4 md:px-10 mb-16 md:mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 dark:text-gray-100 mb-6 md:mb-8">Research Methods</h2>
            
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 md:mb-12">
              Based on the spatial service map and our understanding of the audience, we designed three complementary methods. Each method matched a different physical space and level of vulnerability: private conversations for sensitive topics, quick visual engagement for public spaces, and deeper group reflection for those willing to share more.
            </p>

            {/* Method Cards - Mobile Stacked */}
            <div className="space-y-6 md:space-y-8">
              {/* AI Interviews */}
              <div className="bg-white dark:bg-gray-800 rounded-lg md:rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">AI Interviews (Breadth)</h3>
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                      For people waiting in cars during the drive-through, we designed 10-minute voice conversations using Genway AI. Private, bilingual (English/Spanish), no appointment needed. This format worked for sensitive topics people might not share face-to-face, capturing 27 voices across both pantries.
                    </p>
                    <p className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400">
                      27 participants (22 English, 5 Spanish) • 60% faster than traditional methods
                    </p>
                  </div>
                </div>
              </div>

              {/* Sticker Walls */}
              <div className="bg-white dark:bg-gray-800 rounded-lg md:rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">Sticker Walls (Patterns)</h3>
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                      For walk-in neighbors waiting briefly outside, we installed visual, interactive posters asking "What stops you from using services?" This public format worked for quick engagement without requiring vulnerability, revealing which barriers mattered most across the community.
                    </p>
                    <p className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400">
                      ~70 participants • 2-week installation
                    </p>
                  </div>
                </div>
              </div>

              {/* Focus Groups */}
              <div className="bg-white dark:bg-gray-800 rounded-lg md:rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">Insight Box (Depth)</h3>
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                      For registered clients willing to engage more deeply, we facilitated creative drawing sessions using an "ideal meal" metaphor. This format created a safe space for vulnerability. When someone drew sweet potato pie and shared it was her late husband's favorite, we understood food carries memory, family, dignity.
                    </p>
                    <p className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400">
                      10 participants • 3 sessions (45-60 min each)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Methods Image */}
            {/* <div className="mt-8 md:mt-12 rounded-lg md:rounded-xl overflow-hidden">
              <ImagePlaceholder
                src="/images/secs/research-methods.jpg"
                alt="Three research methods in action: AI interview on tablet in car, sticker wall with participants adding dots, focus group drawing ideal meals"
                aspectRatio="wide"
              />
            </div> */}
          </div>
        </div>
      </Section>

      {/* Findings - The Iceberg */}
      <Section delay={0.1}>
        <div className="px-4 md:px-10 mb-16 md:mb-24 bg-gray-50 dark:bg-gray-800 py-12 md:py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 dark:text-gray-100 mb-6 md:mb-8">What We Discovered</h2>
            
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 md:mb-12">
              After analyzing responses from all three methods, we visualized the problem as an iceberg. Awareness sits above the waterline, visible and easy to address. But the bulk of the challenge lies beneath: structural barriers that compound and reinforce each other.
            </p>

            {/* Iceberg Visual */}
            <div className="mb-8 md:mb-12 rounded-lg md:rounded-xl overflow-hidden">
              <ImagePlaceholder
                src="/images/secs/iceberg-barriers.png"
                alt="Iceberg diagram showing 'Awareness Gap' above waterline and deeper barriers below: Time Scarcity, Stigma and Fear, Language Barriers, Unclear Pathways, Transportation and Mobility"
                aspectRatio="wide"
              />
            </div>

            <div className="space-y-6 md:space-y-8 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <div>
                <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100 mb-3">Time scarcity hits working families</h3>
                <p>Many clients work multiple jobs but remain food-insecure, the "working hungry." Services assumed unemployment. What they needed: job advancement coaching, benefits navigation for "benefits cliffs," and evening/weekend hours.</p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100 mb-3">Stigma is structural, not personal</h3>
                <p>Services labeled "for those who need extra help" created identity barriers. Unclear pathways were not just confusing, they protected people from facing the stigma of trying.</p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100 mb-3">Language blocks employment, not just communication</h3>
                <p>Spanish speakers needed English to get jobs, but ESL classes were separate from job coaching. Bundling them solves both problems at once.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Recommendations - Grid */}
      <Section delay={0.1}>
        <div className="px-4 md:px-10 mb-16 md:mb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 dark:text-gray-100 mb-6 md:mb-8">Recommendations</h2>
            
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 md:mb-12">
              We proposed four strategies designed to integrate services into the natural flow of neighbors' lives:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white dark:bg-gray-900 rounded-lg md:rounded-xl p-6 border-t-4" style={{ borderTopColor: accentColor }}>
                <h3 className="text-base md:text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Multi-Channel Outreach</h3>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  Transition from passive, single-channel communication to active "Inbound + Outbound" ecosystem.
                </p>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  Create Service Hours before pantry opens. Use food boxes as communication channels. Leverage Hot Meal Programs and social events for relationship building. Place materials at frequented locations like gas stations, clinics, schools, and faith organizations.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg md:rounded-xl p-6 border-t-4" style={{ borderTopColor: accentColor }}>
                <h3 className="text-base md:text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Infrastructure of Care</h3>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  Embed SECS into the trusted network neighbors already rely on.
                </p>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  Equip school counselors with Simple Referral Checklists. Partner with faith leaders for service announcements framing help as community stewardship. Place Resource Guides in clinic waiting rooms. Optimize digital visibility to match physical outreach.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg md:rounded-xl p-6 border-t-4" style={{ borderTopColor: accentColor }}>
                <h3 className="text-base md:text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Neighbor-to-Neighbor Stories</h3>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  Replace public ambassadors with anonymous "Notes of Hope" to respect privacy.
                </p>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  Invite service graduates to write short, anonymous notes of encouragement. Display handwritten notes on a "Community Wall of Strength." Transforms stigma into solidarity while honoring the aspiration to give back without public visibility.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg md:rounded-xl p-6 border-t-4" style={{ borderTopColor: accentColor }}>
                <h3 className="text-base md:text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Journey-Based Messaging</h3>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  Match messages to neighbor readiness stages. First-time visitors need safety, regular users need challenge.
                </p>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  For new neighbors: "Welcome! We're here to walk alongside your family." For regular users: "What would help you build the stable future your kids deserve?" Frame services around goals, not deficits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Impact */}
      <Section delay={0.1}>
        <div className="px-4 md:px-10 mb-16 md:mb-24" style={{ backgroundColor: `${accentColor}10` }}>
          <div className="max-w-5xl mx-auto py-12 md:py-16">
            <h2 className="text-xs md:text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-8 md:mb-12">Impact & Next Steps</h2>
            
            <blockquote className="border-l-4 pl-6 py-4 mb-8" style={{ borderColor: accentColor }}>
              <p className="text-lg md:text-xl text-gray-900 dark:text-gray-100 italic leading-relaxed">
                "These are very new insights... and also verifications for things we knew but now have data for."
              </p>
              <cite className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-2 block">
                SECS Executive Director
              </cite>
            </blockquote>

            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-900 dark:text-gray-100 leading-relaxed mb-8 md:mb-12">
              <p>
                SECS valued both discoveries (working hungry population, stigma's structural nature) and confirmation (language barriers, time constraints). Having data gave them confidence to pitch changes to their board.
              </p>
              <p>
                <strong>Spring 2026:</strong> We'll facilitate co-design workshops with SECS staff, mobility leaders from Toyota, and design professionals to explore how autonomous vehicles could function as social service infrastructure, addressing time scarcity, not just distance.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">27</p>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">AI Interviews</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">~70</p>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Sticker Wall</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">10</p>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Focus Groups</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">4</p>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Strategies</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">60%</p>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Faster Collection</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Reflection */}
      <Section delay={0.1}>
        <div className="px-4 md:px-10 mb-16 md:mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xs md:text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-4 md:mb-6">Reflection</h2>
            <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4 md:mb-6">
              Design methods that match constraints and participants' realities
            </p>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Pantries are rushed? Use 10-minute tools. People are visual? Give them stickers. Need emotional depth? Create space for stories. No single method captures everything. Community research requires reciprocity. Trust is not built through consent forms alone, but by ensuring communities benefit from research, not just researchers.
            </p>
          </div>
        </div>
      </Section>

      {/* Next Project */}
      <Section>
        <div className="px-4 md:px-10 mb-16 md:mb-24">
          <div className="max-w-5xl mx-auto">
            <Link
              to="/work/freetown-village"
              className="group block p-6 md:p-8 border border-gray-200 dark:border-gray-700 rounded-xl md:rounded-2xl hover:border-gray-900 dark:hover:border-gray-100 transition-all hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-2">Next Project</p>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 group-hover:text-gray-600 dark:text-gray-300 transition-colors">
                    Freetown Village Revenue Model
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