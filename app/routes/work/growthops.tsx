import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ImagePlaceholder } from "../../components/ImagePlaceholder";
import { COLORS } from "../../lib/constants";

export function meta() {
  return [
    { title: "GrowthOps Dashboard - Shashidhara Narayanappa" },
    { name: "description", content: "Unified dashboard transforming operational chaos into clarity for small business founders through intelligent tool integration and AI insights." },
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

export default function GrowthOpsPage() {
  const accentColor = COLORS.growthOps;

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
              GrowthOps Dashboard  Operations Command Center for SMB Founders
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-lg text-gray-600 mb-12">
              <span className="font-medium">2024</span>
              <span className="text-gray-300">"</span>
              <span>Technical Architecture & Integration Strategy</span>
              <span className="text-gray-300">"</span>
              <span>Dashboard Design, User Research, AI Integration</span>
            </div>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
              Unified dashboard bringing together fragmented operational tools into one intelligent interface. Transformed chaos into clarity for small business founders juggling finances, sales, and team management.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                View Prototype
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Team Credits */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">Project Team</p>
              <p className="text-base text-gray-700">
                <span className="font-medium">Team JARS:</span> Jayanthi Sai Krishna Reddy Kotapati, Akshay Sonawane, Roopa K R, Shashidhara D Narayanappa
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <Section>
        <div className="px-6 md:px-10 mb-24">
          <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden" style={{ borderTop: `4px solid ${accentColor}` }}>
            <ImagePlaceholder
              src="/images/growthops/hero.png"
              alt="GrowthOps Dashboard Interface"
              aspectRatio="wide"
            />
          </div>
        </div>
      </Section>

      {/* Challenge - Sarah's Story */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6" style={{ borderLeft: `4px solid ${accentColor}`, paddingLeft: '1.5rem' }}>
              <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 mb-4">Challenge</h2>
              <p className="text-3xl md:text-4xl font-light text-gray-900 leading-snug">
                Meet Sarah. Every morning started with chaosjumping between QuickBooks for accounting, Salesforce for pipeline tracking, Slack for team updates, and Google Analytics for website performance.
              </p>
            </div>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                She wasn't alone. <strong>66% of small business representatives felt overwhelmed</strong> managing fragmented tools, with 68% reporting decision paralysis from conflicting data across platforms.
              </p>
              <p>
                Every decision required mentally stitching together scattered information. Monitoring cash flow meant three tabs. Checking team performance meant switching apps. Understanding customer trends felt impossible without dedicating hours to manual synthesis.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Solution Overview */}
      <Section delay={0.2}>
        <div className="px-6 md:px-10 mb-24 bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 mb-6">Solution</h2>
            <p className="text-xl md:text-2xl text-gray-900 leading-relaxed mb-8">
              We designed GrowthOps: a unified command center that brings all critical business data into one intelligent dashboard. Three core principles guided our design:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-medium mb-2" style={{ color: accentColor }}>Visualize</div>
                <p className="text-gray-700">See everything that matters in one place</p>
              </div>
              <div>
                <div className="text-4xl font-medium mb-2" style={{ color: accentColor }}>Analyze</div>
                <p className="text-gray-700">AI-powered insights from your data</p>
              </div>
              <div>
                <div className="text-4xl font-medium mb-2" style={{ color: accentColor }}>Act</div>
                <p className="text-gray-700">Make confident decisions faster</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Research Process */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-24">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">Understanding the Problem</h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  We conducted think-aloud usability sessions with small business owners, asking them to walk through their typical morning routine. Watching them navigate between 5-7 different tools revealed the true cost of fragmentation.
                </p>
                <p>
                  Each 30-minute session exposed consistent pain points: context switching fatigue, data reconciliation errors, and the mental burden of remembering which tool held which metric.
                </p>
                <p className="font-medium text-gray-900">
                  The insight: It wasn't about adding more features. It was about reducing cognitive load.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden">
              <ImagePlaceholder
                src="/images/growthops/research.png"
                alt="User research process"
                aspectRatio="square"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Feature 1: Tool Integration */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-24 bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="rounded-xl overflow-hidden order-2 lg:order-1">
                <ImagePlaceholder
                  src="/images/growthops/integration.png"
                  alt="Tool integration interface"
                  aspectRatio="square"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: `${accentColor}20`, color: accentColor }}>
                  Feature 01
                </div>
                <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">Seamless Tool Integration</h3>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Connect QuickBooks, Salesforce, Google Workspace, Slackall the tools you already use. Data flows automatically into unified views without manual imports or exports.
                  </p>
                  <p>
                    Users rated integration setup at <strong>4.5/5 for ease of use</strong>. One participant said: <em>"I expected this to take hours. It took 10 minutes."</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Feature 2: AI Insights */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: `${accentColor}20`, color: accentColor }}>
                  Feature 02
                </div>
                <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">AI-Powered Insights</h3>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Built-in AI analyzes patterns across your data and surfaces actionable recommendations. See trends you'd otherwise miss, get alerts for anomalies, and receive plain-English explanations of complex metrics.
                  </p>
                  <blockquote className="border-l-4 pl-6 italic text-xl text-gray-900" style={{ borderLeftColor: accentColor }}>
                    "It's like having a business analyst on call 24/7."
                  </blockquote>
                  <p className="text-base text-gray-600"> Small business owner, 15 employees</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden">
                <ImagePlaceholder
                  src="/images/growthops/ai-insights.png"
                  alt="AI insights interface"
                  aspectRatio="square"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Feature 3: Customizable Dashboard */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-24 bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="rounded-xl overflow-hidden order-2 lg:order-1">
                <ImagePlaceholder
                  src="/images/growthops/customization.png"
                  alt="Dashboard customization"
                  aspectRatio="square"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: `${accentColor}20`, color: accentColor }}>
                  Feature 03
                </div>
                <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">Your Dashboard, Your Way</h3>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Drag-and-drop widgets to prioritize what matters most to your business. Sales leader? Feature pipeline metrics. Finance-focused? Highlight cash flow and expenses. Every founder's dashboard looks differentexactly as it should.
                  </p>
                  <p>
                    Customization flexibility rated <strong>4.7/5</strong>, with users appreciating how quickly they could reconfigure layouts without technical knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Validation Results */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-24">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8">Validation Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 rounded-xl border-2" style={{ borderColor: accentColor }}>
                <div className="text-5xl font-medium mb-2" style={{ color: accentColor }}>4.5/5</div>
                <p className="text-gray-700 font-medium">Integration Ease</p>
              </div>
              <div className="text-center p-6 rounded-xl border-2" style={{ borderColor: accentColor }}>
                <div className="text-5xl font-medium mb-2" style={{ color: accentColor }}>4.3/5</div>
                <p className="text-gray-700 font-medium">AI Insight Quality</p>
              </div>
              <div className="text-center p-6 rounded-xl border-2" style={{ borderColor: accentColor }}>
                <div className="text-5xl font-medium mb-2" style={{ color: accentColor }}>4.7/5</div>
                <p className="text-gray-700 font-medium">Customization</p>
              </div>
            </div>
            <div className="space-y-6">
              <blockquote className="border-l-4 pl-6 py-4 bg-gray-50" style={{ borderLeftColor: accentColor }}>
                <p className="text-xl italic text-gray-900 mb-2">
                  "This is exactly what I've been looking for. I can finally see my whole business at a glance."
                </p>
                <p className="text-sm text-gray-600"> E-commerce founder, 8 employees</p>
              </blockquote>
              <blockquote className="border-l-4 pl-6 py-4 bg-gray-50" style={{ borderLeftColor: accentColor }}>
                <p className="text-xl italic text-gray-900 mb-2">
                  "The AI insights caught a cash flow issue I would have missed until it became critical."
                </p>
                <p className="text-sm text-gray-600"> SaaS startup founder</p>
              </blockquote>
            </div>
          </div>
        </div>
      </Section>

      {/* Design Iterations */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-24 bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8">Critical Design Changes</h3>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">1. Widget Density</h4>
                  <p>Initial mockups were too dense. We reduced default widgets from 12 to 6, allowing breathing room and reducing cognitive load.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">2. AI Transparency</h4>
                  <p>Early AI insights felt like "black box" recommendations. We added "How we calculated this" tooltips to build trust.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">3. Mobile-First Metrics</h4>
                  <p>Founders checked dashboards on phones constantly. We redesigned critical widgets to work beautifully on small screens.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">4. Onboarding Flow</h4>
                  <p>Initial setup was overwhelming. We created a guided 3-step onboarding: Connect ’ Customize ’ Launch.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">5. Color System</h4>
                  <p>Financial metrics used red/green naively. We switched to contextual colors (red = urgent, not always bad) after user confusion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Impact & Feasibility */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-24" style={{ backgroundColor: `${accentColor}10` }}>
          <div className="max-w-5xl mx-auto py-16">
            <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500 mb-12">Impact & Feasibility</h2>
            <div className="space-y-6 text-lg text-gray-900 leading-relaxed">
              <p className="text-2xl font-medium">
                High validation scores across all key features. Strong product-market fit for SMB operations.
              </p>
              <p>
                Technical feasibility confirmed through API documentation review for major platforms (QuickBooks, Salesforce, Google Workspace, Slack). All required integrations are achievable with existing OAuth 2.0 authentication flows and REST APIs.
              </p>
              <p>
                Primary challenge: maintaining real-time sync performance across multiple data sources. Proposed solution: intelligent caching with configurable refresh intervals per widget type.
              </p>
              <p className="font-medium">
                Next steps: Build MVP focusing on QuickBooks + Salesforce integration, validate with 10 beta customers, iterate before expanding tool ecosystem.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* My Role */}
      <Section delay={0.1}>
        <div className="px-6 md:px-10 mb-24">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">My Role</h3>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                I led the technical architecture strategy, researching API capabilities for each integration and designing the data synchronization flow. I also collaborated on user research, conducting think-aloud sessions and synthesizing findings into actionable design requirements.
              </p>
              <p>
                The most challenging aspect was balancing technical constraints with user needsfinding ways to deliver real-time insights without overwhelming API rate limits or creating laggy experiences. Working with Team JARS taught me how to navigate trade-offs collaboratively and advocate for both user experience and technical feasibility.
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
              This project reinforced a core lesson: the best solutions often aren't about adding featuresthey're about removing friction. Sarah didn't need another tool. She needed the tools she already used to work together intelligently. That shift in perspectivefrom creation to orchestrationfundamentally changed how I approach product design.
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
