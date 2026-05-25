import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';
import '../styles/case-study-mobility.css';
import '../styles/case-study-wanderindy.css';
import { TweaksPanel, useTweaks } from '../components/TweaksPanel';
import Cursor from '../components/Cursor';
import Reveal from '../components/Reveal';
import Nav from '../components/Nav';

const WI_DEFAULTS = { accent: '#B07B3C', gradient: 'warm-gold' };
const WIReveal = Reveal;

/* ── Slideshow ── */
function WISlideshow({ images }) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx(i => (i - 1 + images.length) % images.length);
  const next = () => setIdx(i => (i + 1) % images.length);
  const cur = images[idx];
  return (
    <div className="wi-slideshow">
      <div className="wi-slideshow-stage">
        <img src={cur.src} alt={cur.alt} className="wi-slideshow-img" />
        {images.length > 1 && (
          <>
            <button
              className="wi-slideshow-arrow wi-slideshow-arrow--prev"
              onClick={prev}
              aria-label="Previous slide"
            >
              &#8592;
            </button>
            <button
              className="wi-slideshow-arrow wi-slideshow-arrow--next"
              onClick={next}
              aria-label="Next slide"
            >
              &#8594;
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="wi-slideshow-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`wi-slideshow-dot${i === idx ? ' active' : ''}`}
              onClick={() => setIdx(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const DESIGN_GUIDE_SLIDES = [
  {
    src: '/images/wanderindy/styleguide1.png',
    alt: 'Brand style guide overview WanderIndy logo, illustrated city skyline, and product positioning.',
  },
  {
    src: '/images/wanderindy/styleguide2.png',
    alt: 'Color system Indy Blue (#00427C) primary, Warm Coral (#E4572E) accent, Off-White (#F9F7F2) background, with secondary palette.',
  },
  {
    src: '/images/wanderindy/styleguide3.png',
    alt: 'Typography Urbanist, a geometric sans-serif chosen for clarity, versatility, and calm personality across app, kiosk, and signage.',
  },
  {
    src: '/images/wanderindy/styleguide4.png',
    alt: 'Iconography NextUI Design Kit, Line Duotone variation. Clean modern outline with subtle depth.',
  },
  {
    src: '/images/wanderindy/styleguide5.png',
    alt: 'Doodle elements hand-drawn accents used in onboarding, empty states, and badge screens to add warmth without clutter.',
  },
];

/* ── 1 HERO ── */
function WIHero() {
  const heroRef = useRef(null);
  useEffect(() => {
    const t = setTimeout(() => heroRef.current?.classList.add('loaded'), 80);
    return () => clearTimeout(t);
  }, []);
  return (
    <section className="cs-hero hero" ref={heroRef} id="top" data-screen-label="01 Hero">
      <div className="cs-hero-inner">
        <Link className="cs-back" to="/">
          <span>←</span><span>Back to portfolio</span>
        </Link>
        <div className="cs-eyebrow">
          <span className="cs-eyebrow-pill">Interaction Design</span>
          <span className="cs-eyebrow-pill">Prototyping</span>
          <span className="cs-eyebrow-pill">Phygital Systems</span>
          <span className="cs-eyebrow-pill">2024—2025</span>
        </div>
        <h1 className="cs-title">
          <span className="l1">Wander</span>
          <span className="l2">Indy.</span>
        </h1>
        <p className="cs-sub">
          A discovery system that transforms Indianapolis into your own living field guide
          across mobile and physical space.
        </p>
        <div className="cs-meta">
          <div className="cs-meta-cell">
            <span className="k">Context</span>
            <span className="v">Interaction Design, Indianapolis</span>
          </div>
          <div className="cs-meta-cell">
            <span className="k">Team</span>
            <span className="v">Agastya · Karuna · Shashidhara · Shraddha · Shwetha</span>
          </div>
          <div className="cs-meta-cell">
            <span className="k">Role</span>
            <span className="v">Interaction Designer &amp; Prototyper</span>
          </div>
          <div className="cs-meta-cell">
            <span className="k">Fidelity Range</span>
            <span className="v">Paper → Mid-Fi → Hi-Fi</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 2 HERO BAND ── */
function WIHeroBand() {
  return (
    <section className="wi-hero-band" aria-label="Wander Indy project overview">
      <div className="wi-hero-band-inner">
        <span className="wi-hero-band-cap">Fig. H · Fountain Square, Indianapolis</span>
        <img
          src="/images/wanderindy/hero.png"
          alt="Wander Indy Fountain Square, Indianapolis"
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain', objectPosition: 'bottom' }}
        />
      </div>
    </section>
  );
}

/* ── 3 PROBLEM ── */
function WIProblem() {
  return (
    <section className="cs-section" data-screen-label="02 Problem">
      <div className="cs-inner">
        <WIReveal>
          <div className="cs-label">The Challenge</div>
        </WIReveal>
        <WIReveal delay={0.05}>
          <h2 className="cs-h2">
            The city is full of stories<br />
            no one told you about.
          </h2>
        </WIReveal>
        <WIReveal delay={0.1}>
          <div className="cs-body">
            <p>
              Indianapolis has hidden gems murals, pop-up music corners, independent shops tucked
              behind major landmarks. But the tools people use to explore the city are built around
              efficiency, not discovery. Mobile apps route you to the well-known. Signage tells you
              where you are, not what you might find. Locals and visitors alike default to the obvious,
              not because they want to, but because nothing surfaces anything else.
            </p>
            <p>
              The question we started with: <strong>how do you design for serendipity?</strong>
            </p>
          </div>
        </WIReveal>
        <WIReveal delay={0.15}>
          <div className="wi-artifact" style={{ marginTop: 56, boxShadow: 'none' }}>
            <img
              src="/images/wanderindy/problem.png"
              alt="Problem framing: three pain points exploration tools feel disconnected, hidden gems remain invisible without real-time discovery, and locals navigate only to major landmarks missing deeper stories."
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
            />
          </div>
        </WIReveal>
      </div>
    </section>
  );
}

/* ── 4 CONTEXT ── */
function WIContext() {
  return (
    <section className="cs-section" style={{ paddingTop: 0 }} data-screen-label="03 Context & Role">
      <div className="cs-inner">
        <WIReveal>
          <div className="cs-label">Context</div>
        </WIReveal>
        <WIReveal delay={0.05}>
          <h2 className="cs-h2">
            Designing for a city that hides<br />
            its best stories.
          </h2>
        </WIReveal>
        <WIReveal delay={0.1} className="brief-context">
          <div>
            <div className="brief-col-label">About the project</div>
            <div className="cs-body" style={{ margin: 0, maxWidth: '44ch' }}>
              <p>
                We set out to design a discovery system for Indianapolis one that surfaces the
                stories hiding behind the city's major landmarks and routes people toward the
                unexpected. The brief required both a mobile application and a physical kiosk
                component, designed as a coherent phygital system.
              </p>
              <p>
                The team of five brought together design, research, and engineering perspectives.
                We defined the concept, ran the full research and design process, and delivered
                a clickable hi-fi prototype across both form factors.
              </p>
            </div>
          </div>
          <div>
            <div className="skill-block">
              <div className="skill-block-label">My Role</div>
              <div className="cs-body" style={{ margin: 0, fontSize: 15, color: 'var(--ink-2)' }}>
                Interaction design, journey mapping, prototyping (mid-fi to hi-fi), user testing
              </div>
            </div>
            <div className="skill-block">
              <div className="skill-block-label">Methods</div>
              <div className="skill-chips">
                {[
                  'Persona Development', 'User Journey Mapping', 'Storyboarding',
                  'Paper Prototyping', 'Mid-Fi Wireframing', 'Hi-Fi Prototyping',
                  'Usability Testing', 'Design System Authorship',
                ].map(t => (
                  <span key={t} className="skill-chip">{t}</span>
                ))}
              </div>
            </div>
            <div className="skill-block">
              <div className="skill-block-label">Deliverables</div>
              <div className="skill-chips">
                {[
                  'Clickable hi-fi prototype (mobile + kiosk)',
                  'Style guide',
                  'Kiosk placement map',
                ].map(t => (
                  <span key={t} className="skill-chip">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </WIReveal>
      </div>
    </section>
  );
}

/* ── 5A PROCESS: RESEARCH ──────────────────────────────────────────────────
   Image: prelimresearch.png
   Shows: Pinterest-style research board access points (Indianapolis tourism,
   Cultural Trail, Downtown Indy, IU wayfinding), wayfinding exemplars
   (Legible London, LinkNYC), interactive kiosk deployments, best-in-class
   wayfinding features. Phase renamed from "Understand" to "Research" to
   match the image content.
───────────────────────────────────────────────────────────────────────────── */
function WIProcessResearch() {
  return (
    <section className="cs-section" data-screen-label="04 Research">
      <div className="cs-inner">
        <WIReveal>
          <span className="wi-phase-pill">01 · Research</span>
        </WIReveal>
        <WIReveal delay={0.05}>
          <h2 className="cs-h2">
            We looked at how cities<br />
            already guide people.
          </h2>
        </WIReveal>
        <WIReveal delay={0.1}>
          <div className="cs-body">
            <p>
              Before defining the problem, we mapped the landscape. Legible London demonstrated
              what pedestrian wayfinding looks like at urban scale a full system, not just a sign.
              LinkNYC showed how a kiosk becomes urban infrastructure, not a tourism afterthought.
              The Indianapolis Cultural Trail proved the city had already committed to guided
              discovery in physical space.
            </p>
            <p>
              The gap was consistent across every reference: existing systems tell you where you
              are. None of them tell you what's worth finding.
            </p>
          </div>
        </WIReveal>
        <WIReveal delay={0.15}>
          <div className="cs-label" style={{ marginTop: 72, marginBottom: 12 }}>
            Fig. 3.1 · Preliminary Research Board
          </div>
          <div className="wi-journey-map" style={{ boxShadow: 'none' }}>
            <img
              src="/images/wanderindy/prelimresearch.png"
              alt="Preliminary research board: access points related to Indianapolis (wayfinding systems, Cultural Trail, Downtown Indy), wayfinding exemplars (Legible London, LinkNYC), interactive kiosk deployments, and best-in-class features research."
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
            />
          </div>
        </WIReveal>
      </div>
    </section>
  );
}

/* ── 5B PROCESS: UNDERSTAND ────────────────────────────────────────────────
   Image: persona.png
   Shows: Jordan Mitchell persona card + 8-stage journey map (Stages, Actions,
   Thoughts, Touchpoints, Emotions, Opportunities). Phase renamed from "Define"
   to "Understand" to match image content. Caption updated from
   "Journey Flow + Hand-drawn Storyboard" to "User Persona + Journey Map".
───────────────────────────────────────────────────────────────────────────── */
function WIProcessUnderstand() {
  return (
    <section className="cs-section" style={{ paddingTop: 0 }} data-screen-label="05 Understand">
      <div className="cs-inner">
        <WIReveal>
          <span className="wi-phase-pill">02 · Understand</span>
        </WIReveal>
        <WIReveal delay={0.05}>
          <h2 className="cs-h2">
            We built one user to keep<br />
            the whole team honest.
          </h2>
        </WIReveal>
        <WIReveal delay={0.1}>
          <div className="cs-body">
            <p>
              Before sketching anything, we aligned on who we were designing for. Jordan Mitchell —
              a young professional who knows the city well enough to be bored by it, curious enough
              to want something new, and busy enough that exploration has to feel effortless. She
              already lives in Indianapolis. She doesn't want a tour. She wants a discovery.
            </p>
            <p>
              The 8-stage journey map we built for Jordan wasn't documentation it was a design
              constraint. Every time a feature idea emerged, we checked it against her arc: would
              this help her move from "Interested" at Stage 1 to "Happy" at Stage 7? Would it avoid
              leaving her "Confused" at Stage 8?
            </p>
          </div>
        </WIReveal>
        <WIReveal delay={0.15}>
          <div className="cs-label" style={{ marginTop: 72, marginBottom: 12 }}>
            Fig. 4.1 · User Persona + Journey Map
          </div>
          <div className="wi-journey-map" style={{ boxShadow: 'none' }}>
            <img
              src="/images/wanderindy/persona.png"
              alt="Jordan Mitchell persona card and 8-stage journey map: Stages, Actions, Thoughts, Touchpoints, Emotions, and Opportunities across her full exploration arc from Planning Her Day to Post Visit Reflection."
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
            />
          </div>
        </WIReveal>
      </div>
    </section>
  );
}

/* ── 5C PROCESS: BUILD ── */
function WIProcessBuild() {
  return (
    <section className="cs-section" style={{ paddingTop: 0 }} data-screen-label="06 Build">
      <div className="cs-inner">
        <WIReveal>
          <span className="wi-phase-pill">03 · Build</span>
        </WIReveal>
        <WIReveal delay={0.05}>
          <h2 className="cs-h2">Paper first. Always.</h2>
        </WIReveal>
        <WIReveal delay={0.1}>
          <div className="cs-body">
            <p>
              Three prototyping rounds, each answering a different question.
            </p>
            <p>
              Paper prototypes tested the core flow without visual noise. We built mobile screens
              for the full journey splash, area selection, map, pass categories, directions,
              arrival and physical kiosk screens on real hardware mockups. Testing the kiosk
              physically revealed something digital wireframes never would have: people hesitated
              before tapping. The kiosk needed a welcome state something that made the interaction
              feel invited, not cold.
            </p>
            <p>
              Mid-fi moved us to digital wireframes. Map interactions got structured. Onboarding
              emerged as its own flow. At this fidelity we could already see that the map's visual
              language wasn't distinguishing explored from unexplored neighbourhoods clearly enough —
              a finding user testing would later confirm.
            </p>
          </div>
        </WIReveal>
        <WIReveal delay={0.15}>
          <div className="wi-fidelity-steps">
            {[
              {
                n: '01',
                label: 'Paper',
                desc: 'Core flow validation without visual noise. Mobile screens + physical kiosk mockups built from cardboard and sticky notes.',
              },
              {
                n: '02',
                label: 'Mid-Fi',
                desc: 'Digital wireframes. Map interactions structured. Onboarding emerged as a standalone flow. Visual language stress-tested.',
              },
              {
                n: '03',
                label: 'Hi-Fi',
                desc: 'Pixel-perfect clickable prototype across mobile and kiosk. Design system applied. Three testing findings implemented.',
              },
            ].map(s => (
              <div key={s.n} className="wi-fidelity-step">
                <span className="wi-fidelity-n">{s.n}</span>
                <span className="wi-fidelity-label">{s.label}</span>
                <span className="wi-fidelity-desc">{s.desc}</span>
              </div>
            ))}
          </div>
        </WIReveal>
        <WIReveal delay={0.2}>
          <div className="cs-label" style={{ marginTop: 72, marginBottom: 12 }}>
            Fig. 4.2 · Paper Prototypes Mobile + Kiosk
          </div>
          <img
            src="/images/wanderindy/paper.png"
            alt="Paper prototype spread: 10 mobile phone-frame screens (splash, area selection, map, pass categories, directions, arrival, QR scan) and 3 physical kiosk mockups with hand-off documentation on a tray."
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
          />
        </WIReveal>
        <WIReveal delay={0.25}>
          <div className="cs-label" style={{ marginTop: 48, marginBottom: 12 }}>
            Fig. 4.3 · Mid-Fi Wireframes Mobile + Kiosk
          </div>
          <img
            src="/images/wanderindy/midfi.png"
            alt="Mid-fi wireframe spread: mobile screens covering onboarding, city map, neighbourhood selection, trail list, and QR scan plus kiosk wireframes for landing, trail activation, restaurant menu, and dish detail."
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
          />
        </WIReveal>
      </div>
    </section>
  );
}

/* ── 5D PROCESS: TEST ── */
function WIProcessTest() {
  const findings = [
    {
      n: '01',
      title: "Users didn't know how to start.",
      body: "The map launched straight into content without explaining what a trail was or how the stamp system worked. Users had no frame for what they were building toward.",
      action: 'Added dedicated 2-screen onboarding before the home map',
    },
    {
      n: '02',
      title: 'Tap targets were too small.',
      body: "Users tapped at neighbourhoods without confidence. The interaction was unclear people weren't sure whether they were selecting, exploring, or navigating.",
      action: 'Increased target areas + explicit visual affordances for tappable regions',
    },
    {
      n: '03',
      title: 'Explored and unexplored looked identical.',
      body: "The central promise your map grows as you explore was invisible. Users couldn't tell what they'd seen from what was still waiting. The motivation to continue was broken.",
      action: 'Faded outlines for unexplored, signature colour fill for explored',
    },
  ];

  return (
    <section className="cs-section" style={{ paddingTop: 0 }} data-screen-label="07 Test">
      <div className="cs-inner">
        <WIReveal>
          <span className="wi-phase-pill">04 · Test</span>
        </WIReveal>
        <WIReveal delay={0.05}>
          <h2 className="cs-h2">
            Three findings.<br />
            Three decisions.
          </h2>
        </WIReveal>
        <WIReveal delay={0.1}>
          <div className="cs-body">
            <p>
              We ran usability sessions on the mid-fi prototype. Three findings shaped the hi-fi
              significantly not as minor tweaks, but as structural changes that altered the
              core interaction model.
            </p>
          </div>
        </WIReveal>
        <WIReveal delay={0.15}>
          <div className="wi-findings">
            {findings.map(f => (
              <div key={f.n} className="wi-finding">
                <span className="wi-finding-n">Finding {f.n}</span>
                <div className="wi-finding-title">{f.title}</div>
                <div className="wi-finding-body">{f.body}</div>
                <div className="wi-finding-action">→ {f.action}</div>
              </div>
            ))}
          </div>
        </WIReveal>
        <WIReveal delay={0.2}>
          <div className="cs-label" style={{ marginTop: 64, marginBottom: 12 }}>
            Fig. 4.4 · User Testing Insights
          </div>
          <img
            src="/images/wanderindy/userinsights.png"
            alt="User testing insights: three findings illustrated onboarding clarity (users needed context before the map), map tap target redesign, and explored vs. unexplored visual distinction."
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
          />
        </WIReveal>
      </div>
    </section>
  );
}

/* ── 6 INSIGHT ── */
function WIInsight() {
  return (
    <section className="wi-insight" data-screen-label="08 Insight">
      <div className="wi-insight-inner">
        <WIReveal>
          <div className="wi-insight-label">What Testing Revealed</div>
        </WIReveal>
        <WIReveal delay={0.05}>
          <h2 className="wi-insight-headline">
            The map was supposed to<br />
            motivate exploration.<br />
            Testing showed users{' '}
            <em>couldn't read it.</em>
          </h2>
        </WIReveal>
        <WIReveal delay={0.1}>
          <div className="wi-insight-body">
            <p>
              The central promise of Wander Indy is your personal field guide a city map that
              fills in as you explore, growing more yours with every trail you complete. That
              progression is the reason to come back. It's what separates Wander Indy from
              simply opening Google Maps.
            </p>
            <p>
              When we tested the mid-fi prototype, that core loop was broken. Explored and
              unexplored neighbourhoods looked nearly identical. Users couldn't tell what they'd
              already seen from what was still waiting. The feedback they were supposed to feel —
              "my map is growing" wasn't visible. Neither was the motivation to continue.
            </p>
            <p>
              The fix in the hi-fi was structural:{' '}
              <strong>
                unexplored neighbourhoods render as faded outlines; explored ones fill with colour.
              </strong>{' '}
              A small change in the visual language, but it restored the entire motivational logic
              of the app. Progress has to be legible for it to mean anything.
            </p>
            <p>
              A second finding reinforced the same principle: users who launched straight into the
              map had no frame for what a trail was, how stamps worked, or what they were building
              toward. The onboarding sequence we added two screens, one action each wasn't
              about explanation. It was about making the destination visible before the journey starts.
            </p>
          </div>
        </WIReveal>
      </div>
    </section>
  );
}

/* ── 7A SOLUTION: FEATURES ── */
function WISolutionFeatures() {
  const features = [
    {
      n: '01',
      title: 'Dynamic Field Guide Map',
      tag: 'Core loop',
      body: "The home screen. Every neighborhood starts as unexplored territory. Your map fills in as you visit a personal record of the city you know.",
    },
    {
      n: '02',
      title: 'Mood-Based Trails',
      tag: 'Discovery',
      body: 'Four categories: Art, Food, Music, Shopping. Choose one and the app builds a curated route. No forced sequence pick your own order.',
    },
    {
      n: '03',
      title: '4-Stamp Discovery Challenge',
      tag: 'Engagement',
      body: 'Each trail has four locations to unlock. The constraint creates focus: not "explore everything," but "find these four things."',
    },
    {
      n: '04',
      title: 'Sensor-Activated Kiosks',
      tag: 'Phygital',
      body: 'Physical kiosks at neighborhood entry points. Tap your phone to activate the trail and access hyper-local content about each spot.',
    },
    {
      n: '05',
      title: 'Celebratory Badges and Memories',
      tag: 'Reward',
      body: 'Complete a trail and your neighborhood fills in. A badge unlocks. Your field guide grows.',
    },
  ];

  return (
    <section className="cs-section" data-screen-label="09 Solution Features">
      <div className="cs-inner">
        <WIReveal>
          <div className="cs-label">The Solution</div>
        </WIReveal>
        <WIReveal delay={0.05}>
          <h2 className="cs-h2">
            A phygital discovery system<br />
            in five parts.
          </h2>
        </WIReveal>
        <WIReveal delay={0.1}>
          <div className="cs-body">
            <p>
              Every feature was evaluated against one question: does this make Jordan feel like
              she's discovering something? The five that made the cut work together as a complete
              loop the map motivates, the trail guides, the kiosk activates, the stamp rewards,
              and the badge proves she was there.
            </p>
          </div>
        </WIReveal>
        <WIReveal delay={0.15}>
          <div className="wi-features">
            {features.map(f => (
              <div key={f.n} className="wi-feature-card">
                <span className="wi-feature-n">{f.n}</span>
                <div className="wi-feature-title">{f.title}</div>
                <span className="wi-feature-tag">{f.tag}</span>
                <div className="wi-feature-body">{f.body}</div>
              </div>
            ))}
          </div>
        </WIReveal>
        <WIReveal delay={0.2}>
          <div className="cs-label" style={{ marginTop: 64, marginBottom: 12 }}>
            Fig. 6.1 · Key Features Overview
          </div>
          <img
            src="/images/wanderindy/keyfeatures.png"
            alt="Five key features illustrated: Dynamic Field Guide Map, Mood-Based Trails, 4-Stamp Discovery Challenge, Sensor-Activated Kiosks, and Celebratory Badges and Memories."
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
          />
        </WIReveal>
      </div>
    </section>
  );
}

/* ── 7B SOLUTION: MOBILE ── */
function WISolutionMobile() {
  const screens = [
    'Splash',
    'Explore & Fill Your Map',
    'Collect Stamps & Unlock Offers',
    'Learn the Stories',
    'Welcome back, Jordan',
  ];

  return (
    <section className="cs-section" style={{ paddingTop: 0 }} data-screen-label="10 Hi-Fi Mobile">
      <div className="cs-inner">
        <WIReveal>
          <div className="cs-label">Mobile</div>
        </WIReveal>
        <WIReveal delay={0.05}>
          <h2 className="cs-h2">
            The app that tracks your city,<br />
            one neighbourhood at a time.
          </h2>
        </WIReveal>
        <WIReveal delay={0.1}>
          <div className="cs-body">
            <p>
              Five screens, one coherent flow. The onboarding sequence frames what the app is and
              what it's building before the map opens directly addressing the testing finding
              that users had no frame for what they were working toward. The home map is the
              centrepiece: every neighbourhood a territory waiting to be claimed, explored ones
              filled with colour, unexplored ones waiting as outlines.
            </p>
          </div>
        </WIReveal>
        <WIReveal delay={0.15}>
          <div className="wi-phone-row">
            {screens.map((label, i) => (
              <div key={i} className="wi-phone-frame">
                <img
                  className="wi-phone-screen"
                  src={`/images/wanderindy/hifi${i + 1}.png`}
                  alt={`Wander Indy hi-fi screen: ${label}`}
                />
              </div>
            ))}
          </div>
        </WIReveal>
      </div>
    </section>
  );
}

/* ── 7C SOLUTION: KIOSK ── */
function WISolutionKiosk() {
  return (
    <section className="cs-section" style={{ paddingTop: 0 }} data-screen-label="11 Hi-Fi Kiosk">
      <div className="cs-inner">
        <WIReveal>
          <div className="cs-label">Kiosk</div>
        </WIReveal>
        <WIReveal delay={0.05}>
          <h2 className="cs-h2">
            The moment the<br />
            city opens up.
          </h2>
        </WIReveal>
        <WIReveal delay={0.1}>
          <div className="cs-body">
            <p>
              The kiosk prototype was built to real dimensions, modeled after LinkNYC's vertical
              format. The full kiosk experience for World Famous HotBoys in Fountain Square includes
              a landing screen, brand story, menu navigation, and signature dish detail view.
            </p>
            <p>
              The <strong>Switch to Mobile</strong> button connects both experiences start on the
              kiosk, continue on your phone. Tapping your phone at a kiosk outside Fountain Square
              is categorically different from scrolling a list at home. The physical touchpoint is
              what makes the discovery feel <em>earned.</em>
            </p>
          </div>
        </WIReveal>
        <WIReveal delay={0.2}>
          <div className="cs-label" style={{ marginTop: 48, marginBottom: 12 }}>
            Fig. 6.2 · Hi-Fi Kiosk Prototype
          </div>
          <div className="wi-kiosk-img-row">
            <img
              src="/images/wanderindy/kiosk1.png"
              alt="Kiosk landing screen World Famous HotBoys main menu with Signature Dish, Merch, Menu, Gallery, Reviews, and Offers."
            />
            <img
              src="/images/wanderindy/kiosk2.png"
              alt="Kiosk brand story World Famous HotBoys origin, founders, and community involvement at Fountain Square."
            />
            <img
              src="/images/wanderindy/kiosk3.png"
              alt="Kiosk signature dish detail The Sando with what makes it special, toppings, accolades, and Order Now CTA."
            />
          </div>
        </WIReveal>
        <WIReveal delay={0.25}>
          <div className="wi-product-callout">
            The kiosk in its current form is informational it surfaces the story of every place
            near it. The mobile screen alone can't replicate the feeling of stumbling upon something
            surprising. The kiosk became the <strong>activation mechanism</strong> that turned
            passive browsing into an intentional, place-anchored moment.
          </div>
        </WIReveal>
      </div>
    </section>
  );
}

/* ── 7D SOLUTION: SPATIAL ── */
function WISolutionSpatial() {
  return (
    <section className="cs-section" style={{ paddingTop: 0 }} data-screen-label="12 Spatial Design">
      <div className="cs-inner">
        <WIReveal>
          <div className="cs-label">Spatial Design</div>
        </WIReveal>
        <WIReveal delay={0.05}>
          <h2 className="cs-h2">
            Where the kiosk stands matters<br />
            as much as what it shows.
          </h2>
        </WIReveal>
        <WIReveal delay={0.1}>
          <div className="cs-body">
            <p>
              Four kiosk placements across Fountain Square, positioned at neighborhood entry points
              and high foot-traffic intersections. Vertical format saves sidewalk space. Top-down
              layout supports natural content scanning. Entry-point placement ensures first contact
              happens before exploration begins, not midway through it.
            </p>
          </div>
        </WIReveal>
        <WIReveal delay={0.15}>
          <div className="cs-label" style={{ marginTop: 56, marginBottom: 12 }}>
            Fig. 6.3 · Kiosk Placement Map Fountain Square
          </div>
          <div className="wi-map-card">
            <img
              src="/images/wanderindy/kiosk4.png"
              alt="Google Maps overlay of Fountain Square with four kiosk positions marked at neighbourhood entry points and high foot-traffic intersections."
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
            />
          </div>
        </WIReveal>
        <WIReveal delay={0.2}>
          <div className="cs-label" style={{ marginTop: 48, marginBottom: 12 }}>
            Fig. 6.4 · Kiosk Design Considerations
          </div>
          <img
            src="/images/wanderindy/kiosk5.png"
            alt="Three kiosk renders in the outdoor Fountain Square context with HotBoys storefront behind illustrating vertical format, LinkNYC-modeled design, and entry-point placement rationale."
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
          />
        </WIReveal>
      </div>
    </section>
  );
}

/* ── 7E SOLUTION: DESIGN SYSTEM ── */
function WISolutionDesignSystem() {
  return (
    <section className="cs-section" style={{ paddingTop: 0 }} data-screen-label="13 Design System">
      <div className="cs-inner">
        <WIReveal>
          <div className="cs-label">Design Language</div>
        </WIReveal>
        <WIReveal delay={0.05}>
          <h2 className="cs-h2">
            A style guide built for place.
          </h2>
        </WIReveal>
        <WIReveal delay={0.1}>
          <div className="cs-body">
            <p>
              We designed Wander Indy's visual identity as a deliberate system not a mood board,
              but a set of decisions with rationale. Urbanist for its geometric friendliness across
              app and signage. Indy Blue (#00427C) as the primary anchoring the brand to the city.
              A secondary palette built for legibility across both screens and outdoor contexts.
              Doodle elements to keep the experience warm without undermining clarity.
            </p>
          </div>
        </WIReveal>
        <WIReveal delay={0.15}>
          <div className="cs-label" style={{ marginTop: 56, marginBottom: 12 }}>
            Fig. 6.5 · Style Guide
          </div>
          <WISlideshow images={DESIGN_GUIDE_SLIDES} />
        </WIReveal>
      </div>
    </section>
  );
}

/* ── 8 OUTCOMES ── */
function WIOutcomes() {
  const outcomes = [
    {
      title: 'Earn badges by completing trails.',
      body: 'Completion is rewarded without making exploration feel transactional.',
    },
    {
      title: 'Fill your personal Field Guide with memories.',
      body: 'Every place you visit becomes a permanent part of your city map.',
    },
    {
      title: 'Turn Indianapolis into your own living storybook.',
      body: "The city isn't a destination. It's a collection of stories you've accumulated.",
    },
  ];

  return (
    <section className="cs-section" style={{ paddingTop: 0 }} data-screen-label="14 Outcomes">
      <div className="cs-inner">
        <WIReveal>
          <div className="cs-label">What It Delivers</div>
        </WIReveal>
        <WIReveal delay={0.05}>
          <h2 className="cs-h2">Celebrating every journey.</h2>
        </WIReveal>
        <WIReveal delay={0.1}>
          <div className="wi-outcomes">
            {outcomes.map(o => (
              <div key={o.title} className="wi-outcome-card">
                <span className="wi-outcome-arrow">→</span>
                <div className="wi-outcome-title">{o.title}</div>
                <div className="wi-outcome-body">{o.body}</div>
              </div>
            ))}
          </div>
        </WIReveal>
        <WIReveal delay={0.15}>
          <div className="cs-label" style={{ marginTop: 64, marginBottom: 12 }}>
            Fig. 7.1 · Outcomes
          </div>
          <img
            src="/images/wanderindy/outcomes.png"
            alt="Three outcome illustrations: trail completion badge, memory-filled personal field guide, and Indianapolis city storybook celebrating every journey."
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
          />
        </WIReveal>
        <WIReveal delay={0.2}>
          <div className="wi-closing-quote">
            <div className="wi-closing-quote-text">
              "We didn't design an app. We designed the feeling of discovering a city
              you thought you already knew."
            </div>
            <div className="wi-closing-quote-attr">Team · Wander Indy · Indianapolis</div>
          </div>
        </WIReveal>
      </div>
    </section>
  );
}

/* ── 9 NEXT ── */
function WINext() {
  return (
    <section className="next-project" data-screen-label="15 Navigation">
      <div className="next-project-inner">
        <span className="np-label">Next Project</span>
        <div>
          <div className="np-title">↓ Freetown Village</div>
          <div className="np-meta">UX Research · Product Design · Cultural Technology · 2024</div>
        </div>
        <Link className="np-link" to="/case-study/freetown">Read case study <span>→</span></Link>
      </div>
    </section>
  );
}

/* ── PAGE ── */
export default function WanderIndy() {
  const tweaks = useTweaks(WI_DEFAULTS);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.dataset.page = 'wanderindy';
    return () => { delete document.documentElement.dataset.page; };
  }, []);
  return (
    <>
      <Cursor />
      <Nav />
      <WIHero />
      <WIHeroBand />
      <WIProblem />
      <WIContext />
      <WIProcessResearch />
      <WIProcessUnderstand />
      <WIProcessBuild />
      <WIProcessTest />
      <WIInsight />
      <WISolutionFeatures />
      <WISolutionMobile />
      <WISolutionKiosk />
      <WISolutionSpatial />
      <WISolutionDesignSystem />
      <WIOutcomes />
      <WINext />
      <TweaksPanel tweaks={tweaks} />
    </>
  );
}