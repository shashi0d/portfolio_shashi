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
  const [paused, setPaused] = useState(false);
  const prev = () => setIdx(i => (i - 1 + images.length) % images.length);
  const next = () => setIdx(i => (i + 1) % images.length);
  const cur = images[idx];
  useEffect(() => {
    if (paused || images.length <= 1) return;
    const id = setInterval(() => setIdx(i => (i + 1) % images.length), 3500);
    return () => clearInterval(id);
  }, [paused, images.length]);
  return (
    <div className="wi-slideshow" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="wi-slideshow-stage">
        <img src={cur.src} alt={cur.alt} className="wi-slideshow-img" />
        {images.length > 1 && (
          <>
            <button className="wi-slideshow-arrow wi-slideshow-arrow--prev" onClick={prev} aria-label="Previous slide">&#8592;</button>
            <button className="wi-slideshow-arrow wi-slideshow-arrow--next" onClick={next} aria-label="Next slide">&#8594;</button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="wi-slideshow-dots">
          {images.map((_, i) => (
            <button key={i} className={`wi-slideshow-dot${i === idx ? ' active' : ''}`} onClick={() => setIdx(i)} aria-label={`Go to slide ${i + 1}`} />
          ))}
        </div>
      )}
    </div>
  );
}

const DESIGN_GUIDE_SLIDES = [
  { src: '/images/wanderindy/styleguide1.png', alt: 'Brand style guide overview logo, illustrated city skyline, product positioning.' },
  { src: '/images/wanderindy/styleguide2.png', alt: 'Color system Indy Blue (#00427C) primary, Warm Coral (#E4572E) accent, Off-White (#F9F7F2) background.' },
  { src: '/images/wanderindy/styleguide3.png', alt: 'Typography Urbanist, geometric sans-serif chosen for fast legibility across app, kiosk, and signage.' },
  { src: '/images/wanderindy/styleguide4.png', alt: 'Iconography NextUI Line Duotone for clean outline forms with subtle depth.' },
  { src: '/images/wanderindy/styleguide5.png', alt: 'Doodle elements hand-drawn accents for onboarding, empty states, and reward screens.' },
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
        <Link className="cs-back" to="/"><span>←</span><span>Back to portfolio</span></Link>
        <div className="cs-eyebrow">
          <span className="cs-eyebrow-pill">Interaction Design</span>
          <span className="cs-eyebrow-pill">Service &amp; Systems</span>
          <span className="cs-eyebrow-pill">Phygital Product</span>
          <span className="cs-eyebrow-pill">2024—2025</span>
        </div>
        <h1 className="cs-title">
          <span className="l1">Wander</span>
          <span className="l2">Indy.</span>
        </h1>
        <p className="cs-sub">
          A mobile and kiosk platform that helps Indianapolis residents discover overlooked
          local places and turns city exploration into visible, rewarding progress.
        </p>
        {/* <div className="cs-meta">
          <div className="cs-meta-cell"><span className="k">Context</span><span className="v">Interaction Design, Indianapolis</span></div>
          <div className="cs-meta-cell"><span className="k">Team</span><span className="v">Agastya · Karuna · Shashidhara · Shraddha · Shwetha</span></div>
          <div className="cs-meta-cell"><span className="k">Role</span><span className="v">Interaction Designer &amp; Prototyper</span></div>
          <div className="cs-meta-cell"><span className="k">Scope</span><span className="v">Research → Hi-Fi prototype (mobile + kiosk)</span></div>
        </div> */}
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

/* ── 3 PROBLEM + CONTEXT ──────────────────────────────────────
   Behavioral framing, not poetic. States the market gap, the
   resulting user behavior, and the HMW. Role/methods on the right.
───────────────────────────────────────────────────────────── */
function WIProblem() {
  return (
    <section className="cs-section" data-screen-label="02 Problem">
      <div className="cs-inner">
        <WIReveal>
          <div className="cs-label">The Problem</div>
        </WIReveal>
        <WIReveal delay={0.05}>
          <h2 className="cs-h2">Residents explore a fraction of their own city.</h2>
        </WIReveal>
        <WIReveal delay={0.1} className="brief-context">
          <div>
            {/* <div className="brief-col-label">The problem</div> */}
            <div className="cs-body" style={{ margin: 0 }}>
              <p>
                Indianapolis has a dense local culture independent shops, murals, pop-up venues 
                but the tools people use to get around optimize for efficiency: shortest route,
                most popular destination, known landmark. None of them optimize for exploration.
              </p>
              <p>
                The behavioral result is predictable. Residents revisit the same handful of places,
                smaller businesses stay outside the foot-traffic path, and there's no reward or
                continuity to going somewhere new. Exploration is possible it's just never
                surfaced, structured, or remembered.
              </p>
              <p style={{ marginBottom: 0 }}>
                <strong>How might we encourage intentional exploration while making progress
                visible and rewarding?</strong>
              </p>
            </div>
          </div>
          <div>
            <div className="skill-block">
              <div className="skill-block-label">My Role</div>
              <div className="cs-body" style={{ margin: 0, fontSize: 15, color: 'var(--ink-2)' }}>
                Interaction design, journey mapping, prototyping (mid-fi to hi-fi), usability testing
              </div>
            </div>
            <div className="skill-block">
              <div className="skill-block-label">Methods</div>
              <div className="skill-chips">
                {['Competitive Analysis', 'Behavioral Segmentation', 'Journey Mapping', 'Paper Prototyping', 'Mid-Fi Wireframing', 'Hi-Fi Prototyping', 'Usability Testing', 'Design System'].map(t => (
                  <span key={t} className="skill-chip">{t}</span>
                ))}
              </div>
            </div>
            <div className="skill-block">
              <div className="skill-block-label">Deliverables</div>
              <div className="skill-chips">
                {['Clickable hi-fi prototype (mobile + kiosk)', 'Interaction system', 'Kiosk placement strategy', 'Design system'].map(t => (
                  <span key={t} className="skill-chip">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </WIReveal>
      </div>

      {/* <WIReveal delay={0.15}>
        <div className="wi-fullbleed">
          <img
            src="/images/wanderindy/problem.png"
            alt="Problem framing: navigation tools optimize for efficiency, hidden local places stay invisible, and residents default to familiar landmarks."
          />
        </div>
      </WIReveal> */}
    </section>
  );
}

/* ── 4 RESEARCH ───────────────────────────────────────────────
   Analytical, not poetic. Four categories studied → four
   findings that became design constraints.
───────────────────────────────────────────────────────────── */
function WIProcessResearch() {
  const findings = [
    'Existing systems optimize navigation, not curiosity.',
    'Public kiosks are treated as information terminals, rarely as engagement tools.',
    'Discovery experiences lack persistence nothing carries between visits.',
    'Few products create any sense of ownership over place.',
  ];
  return (
    <section className="cs-section" data-screen-label="03 Research">
      <div className="cs-inner">
        <WIReveal>
          <span className="wi-phase-pill">01 · Research</span>
        </WIReveal>
        <WIReveal delay={0.05}>
          <h2 className="cs-h2">We studied how cities already move people through space.</h2>
        </WIReveal>
        <WIReveal delay={0.1}>
          <div className="cs-body">
            <p>
              We analyzed four categories: municipal wayfinding systems, tourism platforms,
              public interactive kiosks, and neighborhood discovery products. Legible London and
              LinkNYC anchored the urban-scale references; the Indianapolis Cultural Trail showed
              the city had already invested in guided discovery in physical space.
            </p>
          </div>
        </WIReveal>
        <WIReveal delay={0.12}>
          <div className="wi-rfindings">
            {findings.map((f, i) => (
              <div key={i} className="wi-rfinding">
                <span className="wi-rfinding-n">{String(i + 1).padStart(2, '0')}</span>
                <span className="wi-rfinding-text">{f}</span>
              </div>
            ))}
          </div>
        </WIReveal>
        <WIReveal delay={0.16}>
          <div className="cs-body" style={{ marginTop: 32 }}>
            <p style={{ marginBottom: 0 }}>
              Each finding became a constraint. The persistence gap mattered most it pointed us
              toward a system that <em>remembers</em>: a map that fills in over time, so exploration
              accumulates instead of resetting.
            </p>
          </div>
        </WIReveal>
        <WIReveal delay={0.2}>
          <div className="cs-label" style={{ marginTop: 56, marginBottom: 12 }}>
            Fig. 3.1 · Competitive &amp; Reference Analysis
          </div>
          <div className="wi-journey-map" style={{ boxShadow: 'none' }}>
            <img
              src="/images/wanderindy/prelimresearch.png"
              alt="Research board: municipal wayfinding (Legible London, LinkNYC), Indianapolis access points and Cultural Trail, interactive kiosk deployments, and discovery-product feature analysis."
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
            />
          </div>
        </WIReveal>
      </div>
    </section>
  );
}

/* ── 5 UNDERSTAND ─────────────────────────────────────────────
   Behavioral segmentation tied to design implications, not a
   character study.
───────────────────────────────────────────────────────────── */
function WIProcessUnderstand() {
  const traits = [
    { trait: 'Knows the city at a surface level', impl: 'Surface familiarity, not depth → reveal the overlooked, not the obvious' },
    { trait: 'Wants lightweight, self-directed activity', impl: 'Low planning tolerance → no itineraries; flexible, non-linear trails' },
    { trait: 'Needs a low-friction entry point', impl: 'Hesitates to commit → one-tap activation, no setup' },
  ];
  return (
    <section className="cs-section" style={{ paddingTop: 0 }} data-screen-label="04 Understand">
      <div className="cs-inner">
        <WIReveal>
          <span className="wi-phase-pill">02 · Understand</span>
        </WIReveal>
        <WIReveal delay={0.05}>
          <h2 className="cs-h2">We designed for curiosity without commitment.</h2>
        </WIReveal>
        <WIReveal delay={0.1}>
          <div className="cs-body">
            <p>
              Our primary user already knows the city at a surface level, prefers self-directed
              activity over planned itineraries, and has low tolerance for friction at the entry
              point. Jordan Mitchell, our persona, represented that pattern familiarity without
              depth, interest without a plan. The 8-stage journey map turned her into a working
              constraint: every feature had to move her toward action without adding planning overhead.
            </p>
          </div>
        </WIReveal>
        <WIReveal delay={0.12}>
          <div className="wi-implications">
            {traits.map((t, i) => (
              <div key={i} className="wi-implication">
                <span className="wi-impl-trait">{t.trait}</span>
                <span className="wi-impl-arrow" aria-hidden="true">→</span>
                <span className="wi-impl-design">{t.impl}</span>
              </div>
            ))}
          </div>
        </WIReveal>
        <WIReveal delay={0.16}>
          <div className="cs-label" style={{ marginTop: 56, marginBottom: 12 }}>
            Fig. 4.1 · Persona + 8-Stage Journey Map
          </div>
          <div className="wi-journey-map" style={{ boxShadow: 'none' }}>
            <img
              src="/images/wanderindy/persona.png"
              alt="Jordan Mitchell persona and 8-stage journey map: Actions, Thoughts, Touchpoints, Emotions, and Opportunities from planning through post-visit reflection."
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
            />
          </div>
        </WIReveal>
      </div>
    </section>
  );
}

/* ── 6 BUILD ──────────────────────────────────────────────────
   Less prose, more process intelligence. One sharp observation
   from paper testing carries the narrative.
───────────────────────────────────────────────────────────── */
function WIProcessBuild() {
  return (
    <section className="cs-section" style={{ paddingTop: 0 }} data-screen-label="05 Build">
      <div className="cs-inner">
        <WIReveal>
          <span className="wi-phase-pill">03 · Build</span>
        </WIReveal>
        <WIReveal delay={0.05}>
          <h2 className="cs-h2">Three rounds of prototyping, each validating one layer.</h2>
        </WIReveal>
        <WIReveal delay={0.1}>
          <div className="cs-body">
            <p>
              Testing the paper kiosk by hand surfaced something screens never would have people
              hesitated before tapping a device in public. That one observation added a welcome
              state to the kiosk's entry flow, and shaped how we thought about activation for the
              rest of the project.
            </p>
          </div>
        </WIReveal>
        <WIReveal delay={0.15}>
          <div className="wi-fidelity-steps">
            {[
              { n: '01', label: 'Paper', desc: 'Validated kiosk interaction, navigation clarity, trail structure, and mobile-to-kiosk continuity.' },
              { n: '02', label: 'Mid-Fi', desc: 'Focused on map hierarchy, interaction affordances, onboarding logic, and state visibility.' },
              { n: '03', label: 'Hi-Fi', desc: 'Integrated the visual system, reward mechanics, neighbourhood progression, and cross-platform consistency.' },
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
          <div className="cs-label" style={{ marginTop: 72, marginBottom: 12 }}>Fig. 4.2 · Paper Prototypes Mobile + Kiosk</div>
          <img
            src="/images/wanderindy/paper.png"
            alt="Paper prototype spread: 10 mobile screens and 3 physical kiosk mockups with hand-off documentation."
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
          />
        </WIReveal>
        <WIReveal delay={0.25}>
          <div className="cs-label" style={{ marginTop: 48, marginBottom: 12 }}>Fig. 4.3 · Mid-Fi Wireframes Mobile + Kiosk</div>
          <img
            src="/images/wanderindy/midfi.png"
            alt="Mid-fi wireframe spread: mobile and kiosk screens covering the full flow."
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain', boxShadow: 'none' }}
          />
        </WIReveal>
      </div>
    </section>
  );
}

/* ── 7 TEST ───────────────────────────────────────────────────
   The strongest pattern in the case study finding → design
   response, made visible as structured cards.
───────────────────────────────────────────────────────────── */
function WIProcessTest() {
  const findings = [
    {
      n: '01',
      title: 'Users lacked orientation.',
      body: 'Participants entered the map without understanding what a trail was, what progress meant, or what action was expected.',
      action: 'Introduced a lightweight onboarding sequence before map entry.',
    },
    {
      n: '02',
      title: 'Map interactions lacked confidence.',
      body: 'Users hesitated selecting neighbourhoods affordances were too weak to signal what was tappable.',
      action: 'Expanded tap targets and added stronger interactive states.',
    },
    {
      n: '03',
      title: 'Progress was invisible.',
      body: 'Explored and unexplored districts looked identical, which removed the motivation to keep going.',
      action: 'Built a progressive map-fill: outlined inactive districts, colour-filled completed ones.',
    },
  ];
  return (
    <section className="cs-section" style={{ paddingTop: 0 }} data-screen-label="06 Test">
      <div className="cs-inner">
        <WIReveal>
          <div className="wi-test-body-row">
            <div className="wi-test-text">
              <span className="wi-phase-pill">04 · Test</span>
              <h2 className="cs-h2">Three findings. Three structural decisions.</h2>
              <div className="cs-body" style={{ margin: 0 }}>
                <p>
                  Usability testing on the mid-fi surfaced three issues none cosmetic. Each one
                  changed the interaction model, not just the visuals.
                </p>
              </div>
            </div>
            <div className="wi-test-photo">
              <img src="/images/wanderindy/testing.png" alt="Usability testing session with the mid-fi prototype." />
            </div>
          </div>
        </WIReveal>
        <WIReveal delay={0.12}>
          <div className="wi-findings">
            {findings.map(f => (
              <div key={f.n} className="wi-finding">
                <span className="wi-finding-n">Finding {f.n}</span>
                <div className="wi-finding-title">{f.title}</div>
                <div className="wi-finding-body">{f.body}</div>
                <div className="wi-finding-action"><span>Design response</span>{f.action}</div>
              </div>
            ))}
          </div>
        </WIReveal>
        {/* <WIReveal delay={0.2}>
          <div className="cs-label" style={{ marginTop: 64, marginBottom: 12 }}>Fig. 4.4 · User Testing Insights</div>
          <img
            src="/images/wanderindy/userinsights.png"
            alt="Three testing insights: orientation/onboarding, map tap-target confidence, and explored vs. unexplored progress visibility."
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
          />
        </WIReveal> */}
      </div>
    </section>
  );
}

/* ── 8 SOLUTION behavioral loop + system parts ──────────────
   Reframed from feature marketing to interaction system.
───────────────────────────────────────────────────────────── */
function WISolutionFeatures() {
  const loop = ['Discover', 'Activate', 'Visit', 'Collect', 'Unlock', 'Expand'];
  const features = [
    { n: '01', title: 'Dynamic Field Guide Map', tag: 'Persistence layer', body: 'The home screen and the memory of the system. Neighbourhoods fill in as you visit, so exploration accumulates across sessions instead of resetting.' },
    { n: '02', title: 'Mood-Based Trails', tag: 'Curation layer', body: 'Art, Food, Music, Shopping. The app builds a curated, non-linear route from a single choice structure without an itinerary.' },
    { n: '03', title: '4-Stamp Challenge', tag: 'Focus mechanic', body: 'A bounded goal four locations, not "everything." The constraint lowers the cognitive cost of starting.' },
    { n: '04', title: 'Sensor-Activated Kiosks', tag: 'Activation layer', body: 'Physical entry points that start a trail on tap and serve hyper-local content tied to where you are.' },
    { n: '05', title: 'Badges & Memories', tag: 'Reward layer', body: 'Completion fills a district, unlocks a badge, and adds to a personal record closing the loop and inviting the next one.' },
  ];
  return (
    <section className="cs-section" data-screen-label="07 Solution">
      <div className="cs-inner">
        <WIReveal>
          <div className="cs-label">The Solution</div>
        </WIReveal>
        <WIReveal delay={0.05}>
          <h2 className="cs-h2">One behavioral loop, five system parts.</h2>
        </WIReveal>
        <WIReveal delay={0.1}>
          <div className="cs-body">
            <p>
              WanderIndy is built around a single loop that turns a one-time visit into a
              repeatable habit. Each system part maps to a stage in that loop.
            </p>
          </div>
        </WIReveal>
        <WIReveal delay={0.12}>
          <div className="wi-loop">
            {loop.map((step, i) => (
              <div key={step} className="wi-loop-step">
                <span className="wi-loop-n">{i + 1}</span>
                <span className="wi-loop-label">{step}</span>
                {i < loop.length - 1 && <span className="wi-loop-arrow" aria-hidden="true">→</span>}
              </div>
            ))}
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
          <div className="cs-label" style={{ marginTop: 56, marginBottom: 12 }}>Fig. 6.1 · System Overview</div>
          <img
            src="/images/wanderindy/keyfeatures.png"
            alt="The five system parts: Field Guide Map, Mood-Based Trails, 4-Stamp Challenge, Sensor-Activated Kiosks, and Badges & Memories."
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
          />
        </WIReveal>
      </div>
    </section>
  );
}

/* ── 9 MOBILE ── */
function WISolutionMobile() {
  const screens = ['Splash', 'Explore & Fill Your Map', 'Collect Stamps & Unlock Offers', 'Learn the Stories', 'Welcome back, Jordan'];
  return (
    <section className="cs-section" style={{ paddingTop: 0 }} data-screen-label="08 Mobile">
      <div className="cs-inner">
        <WIReveal><div className="cs-label">Mobile</div></WIReveal>
        <WIReveal delay={0.05}>
          <h2 className="cs-h2">Where the testing decisions became interface.</h2>
        </WIReveal>
        <WIReveal delay={0.1}>
          <div className="cs-body">
            <p>
              The onboarding sequence resolves the orientation finding it frames trails and
              progress before the map opens. The home map resolves the visibility finding 
              completed neighbourhoods fill with colour, inactive ones stay as outlines, so
              progress reads at a glance from the first session.
            </p>
          </div>
        </WIReveal>
        <WIReveal delay={0.15}>
          <div className="wi-phone-row">
            {screens.map((label, i) => (
              <div key={i} className="wi-phone-frame">
                <img className="wi-phone-screen" src={`/images/wanderindy/hifi${i + 1}.png`} alt={`Hi-fi screen: ${label}`} />
              </div>
            ))}
          </div>
        </WIReveal>
      </div>
    </section>
  );
}

/* ── 10 KIOSK leads with the decision rationale ─────────────
   Answers the audit's biggest gap: why physical activation
   over QR signage or geo-fencing.
───────────────────────────────────────────────────────────── */
function WISolutionKiosk() {
  return (
    <section className="cs-section" style={{ paddingTop: 0 }} data-screen-label="09 Kiosk">
      <div className="cs-inner">
        <WIReveal><div className="cs-label">Kiosk</div></WIReveal>
        <WIReveal delay={0.05}>
          <h2 className="cs-h2">Why a physical kiosk not a QR code.</h2>
        </WIReveal>
        <WIReveal delay={0.1}>
          <div className="cs-body">
            <p>
              The kiosk wasn't a given. We weighed it against the two obvious alternatives.
              QR signage only works if you already know to look for it it can't prompt behaviour.
              Geo-fencing triggers passively, which is easy to ignore and quietly erodes trust when
              an app acts without being asked.
            </p>
            <p>
              A kiosk does what neither can: it creates a deliberate, located moment of entry.
              Standing at a kiosk at a neighbourhood's edge is an act of intent and intent was
              exactly the friction we saw in testing, where users hesitated to commit. Making the
              start of a trail a clear public gesture resolves that hesitation. The <strong>Switch
              to Mobile</strong> handoff then carries that intent onto the phone, where the journey
              continues.
            </p>
          </div>
        </WIReveal>
        <WIReveal delay={0.2}>
          <div className="cs-label" style={{ marginTop: 48, marginBottom: 12 }}>Fig. 6.2 · Hi-Fi Kiosk Prototype</div>
          <div className="wi-kiosk-img-row">
            <img src="/images/wanderindy/kiosk1.png" alt="Kiosk landing neighbourhood entry and trail activation." />
            <img src="/images/wanderindy/kiosk2.png" alt="Kiosk place story local business context." />
            <img src="/images/wanderindy/kiosk3.png" alt="Kiosk detail view with primary action." />
          </div>
        </WIReveal>
      </div>
    </section>
  );
}

/* ── 11 SPATIAL ── */
function WISolutionSpatial() {
  return (
    <section className="cs-section" style={{ paddingTop: 0 }} data-screen-label="10 Spatial Design">
      <div className="cs-inner">
        <WIReveal><div className="cs-label">Spatial Design</div></WIReveal>
        <WIReveal delay={0.05}>
          <h2 className="cs-h2">Placement is an interaction decision.</h2>
        </WIReveal>
        <WIReveal delay={0.1}>
          <div className="cs-body">
            <p>
              Four kiosks across Fountain Square, sited at neighbourhood entry points and
              high-traffic intersections so first contact happens <em>before</em> exploration
              begins, not midway through it. The vertical form, modeled on LinkNYC, saves sidewalk
              space and reads from a distance.
            </p>
          </div>
        </WIReveal>
        <WIReveal delay={0.15}>
          <div className="cs-label" style={{ marginTop: 56, marginBottom: 12 }}>Fig. 6.3 · Kiosk Placement Map Fountain Square</div>
          <div className="wi-map-card">
            <img src="/images/wanderindy/kiosk4.png" alt="Map of Fountain Square with four kiosk positions at entry points and intersections." style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} />
          </div>
        </WIReveal>
        <WIReveal delay={0.2}>
          <div className="cs-label" style={{ marginTop: 48, marginBottom: 12 }}>Fig. 6.4 · Kiosk in Context</div>
          <img src="/images/wanderindy/kiosk5.png" alt="Kiosk renders in the outdoor Fountain Square context vertical form, entry-point siting." style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} />
        </WIReveal>
      </div>
    </section>
  );
}

/* ── 12 DESIGN SYSTEM environmental + accessibility reasoning ── */
function WISolutionDesignSystem() {
  return (
    <section className="cs-section" style={{ paddingTop: 0 }} data-screen-label="11 Design System">
      <div className="cs-inner">
        <WIReveal><div className="cs-label">Design Language</div></WIReveal>
        <WIReveal delay={0.05}>
          <h2 className="cs-h2">A system that holds up on a phone and a sidewalk.</h2>
        </WIReveal>
        <WIReveal delay={0.1}>
          <div className="cs-body">
            <p>
              The same visual language had to work on a handheld screen and a sunlit outdoor kiosk.
              That dual context drove the decisions: high-contrast hierarchy for readability at
              distance and in variable light, large touch targets for public use, simplified
              iconography that reads fast, and a palette anchored by Indy Blue for brand recall
              across both surfaces.
            </p>
          </div>
        </WIReveal>
        <WIReveal delay={0.15}>
          <div className="cs-label" style={{ marginTop: 56, marginBottom: 12 }}>Fig. 6.5 · Design System</div>
          <WISlideshow images={DESIGN_GUIDE_SLIDES} />
        </WIReveal>
      </div>
    </section>
  );
}

/* ── 13 IMPACT strategic close, replaces emotional outcomes ── */
function WIImpact() {
  const impacts = [
    { who: 'For residents', what: 'More neighbourhoods explored, repeat engagement, and stronger attachment to place.' },
    { who: 'For local business', what: 'Visibility for spots that sit outside the tourist and foot-traffic path.' },
    { who: 'For the city', what: 'Distributed foot traffic and activated cultural districts beyond the core.' },
  ];
  return (
    <section className="cs-section" style={{ paddingTop: 0 }} data-screen-label="12 Impact">
      <div className="cs-inner">
        <WIReveal><div className="cs-label">Impact</div></WIReveal>
        <WIReveal delay={0.05}>
          <h2 className="cs-h2">What the system is designed to change.</h2>
        </WIReveal>
        <WIReveal delay={0.1}>
          <div className="cs-body">
            <p>
              As a concept, WanderIndy targets behavioural and civic outcomes not just a better
              map, but a measurable shift in how people move through the city.
            </p>
          </div>
        </WIReveal>
        <WIReveal delay={0.12}>
          <div className="wi-impact-grid">
            {impacts.map(x => (
              <div key={x.who} className="wi-impact-item">
                <div className="wi-impact-who">{x.who}</div>
                <div className="wi-impact-what">{x.what}</div>
              </div>
            ))}
          </div>
        </WIReveal>
        <WIReveal delay={0.16}>
          <div className="cs-body" style={{ marginTop: 32 }}>
            <p style={{ marginBottom: 0 }}>
              The phygital model also opens a platform layer. The kiosk network becomes
              infrastructure other programs can plug into event-based trails, seasonal
              activations, and local sponsorship so the system grows beyond its first deployment.
            </p>
          </div>
        </WIReveal>
        <WIReveal delay={0.2}>
          <div className="cs-label" style={{ marginTop: 56, marginBottom: 12 }}>Fig. 7.1 · What It Delivers</div>
          <img
            src="/images/wanderindy/outcomes.png"
            alt="User-facing outcomes: complete trails to earn badges, build a personal field guide, and accumulate a record of the city explored."
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
          />
        </WIReveal>
        <WIReveal delay={0.24}>
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

/* ── 14 NEXT ── */
function WINext() {
  return (
    <section className="next-project" data-screen-label="13 Navigation">
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
      <WIProcessResearch />
      <WIProcessUnderstand />
      <WIProcessBuild />
      <WIProcessTest />
      <WISolutionFeatures />
      <WISolutionMobile />
      <WISolutionKiosk />
      <WISolutionSpatial />
      <WISolutionDesignSystem />
      <WIImpact />
      <WINext />
      <TweaksPanel tweaks={tweaks} />
    </>
  );
}