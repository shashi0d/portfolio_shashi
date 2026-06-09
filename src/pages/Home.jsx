import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';
import { TweaksPanel, TweakSection, TweakRadio, TweakColor, TweakToggle, useTweaks } from '../components/TweaksPanel';
import Cursor from '../components/Cursor';
import Reveal from '../components/Reveal';
import Nav from '../components/Nav';



/* ---------- Hero photo stack ---------- */
const HERO_PHOTOS = [
  '/images/gallery/1.jpeg',
  '/images/gallery/2.jpeg',
  '/images/gallery/3.jpeg',
  '/images/gallery/4.jpeg',
  '/images/gallery/5.jpeg',
  '/images/gallery/6.jpeg',
  '/images/gallery/7.jpg',
  '/images/gallery/8.jpg',
  '/images/gallery/9.jpg',
];

// Position 0 = back, 1 = middle, 2 = front
// Tighter 9° spread, staggered left offset, darker back cards for depth
const CARD_POSITIONS = [
  { rot: '2deg',  zIndex: 1, leftOffset: '0px',  brightness: 0.55 },
  { rot: '11deg', zIndex: 2, leftOffset: '6px',  brightness: 0.75 },
  { rot: '20deg', zIndex: 3, leftOffset: '12px', brightness: 1.0  },
];

function HeroPhotos() {
  // order[posIdx] = cardIdx — which card occupies which position slot
  const orderRef = useRef([0, 1, 2]);
  const [order, setOrder]       = useState([0, 1, 2]);
  const [images, setImages]     = useState([0, 1, 2]); // images[cardIdx] = photoIdx
  const [fadingCard, setFadingCard] = useState(null);  // cardIdx fading out before swap

  useEffect(() => {
    let nextPhoto = 3;
    const id = setInterval(() => {
      const backCardIdx = orderRef.current[0]; // card currently at the back

      // 1. Fade out the back card so image swap is invisible
      setFadingCard(backCardIdx);

      setTimeout(() => {
        // 2. Silently swap image on the (now invisible) back card
        setImages(prev => {
          const copy = [...prev];
          copy[backCardIdx] = nextPhoto % HERO_PHOTOS.length;
          return copy;
        });

        // 3. Rotate positions: mid→back, front→mid, back→front
        //    Back card sweeps from ~4deg to ~27deg (springs to front)
        const cur = orderRef.current;
        const newOrder = [cur[1], cur[2], cur[0]];
        orderRef.current = newOrder;
        setOrder(newOrder);

        // 4. Unfade — card fades in while sweeping to front
        setFadingCard(null);
        nextPhoto++;
      }, 280);
    }, 5000);

    return () => clearInterval(id);
  }, []);

  // Build reverse map: cardToPos[cardIdx] = posIdx
  const cardToPos = [0, 0, 0];
  order.forEach((cardIdx, posIdx) => { cardToPos[cardIdx] = posIdx; });

  return (
    <div className="hero-photos" aria-hidden="true">
      <svg style={{ display: 'none' }}>
        <defs>
          <filter id="rough-border" x="-8%" y="-8%" width="116%" height="116%">
            <feTurbulence type="fractalNoise" baseFrequency="0.055" numOctaves="3" seed="8" result="turbulence" />
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="3.5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
      {[0, 1, 2].map(cardIdx => {
        const pos = CARD_POSITIONS[cardToPos[cardIdx]];
        return (
          <div
            key={cardIdx}
            className={`hero-photo${fadingCard === cardIdx ? ' is-fading' : ''}`}
            style={{
              width: '275px',
              height: '385px',
              '--slot-rot': pos.rot,
              zIndex: pos.zIndex,
              left: pos.leftOffset,
              filter: `brightness(${pos.brightness})`,
            }}
          >
            <img src={HERO_PHOTOS[images[cardIdx]]} alt="" className="hero-photo-img" />
            <svg className="photo-border" viewBox="0 0 275 385" preserveAspectRatio="none" aria-hidden="true">
              <rect x="2" y="2" width="271" height="381" rx="6"
                fill="none" stroke="rgba(255,255,255,0.78)" strokeWidth="2.5"
                filter="url(#rough-border)" />
            </svg>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const heroRef = useRef(null);
  useEffect(() => {
    const t = setTimeout(() => heroRef.current?.classList.add('loaded'), 80);
    return () => clearTimeout(t);
  }, []);
  return (
    <section className="hero" id="top" ref={heroRef}>
      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-eyebrow">Shashidhara Narayanappa</div>
          <h1 className="hero-name">
            {/* <span className="l1">I <span className="l2">research</span> human problems, <span className="l2">design</span> the experience, and <span className="l2">build</span> the product.</span> */}
            {/* <span className="l2">Narayanappa</span> */}
            <span className='l1'>Research, design, and engineering, accelerated by AI. <span className='l2'>0 -&gt; 1 </span></span>
          </h1>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="num">3.5 yrs</span>
              <span className="lbl">Software Development</span>
            </div>
            <div className="divider" />
            <div className="hero-stat">
              <span className="num">2</span>
              <span className="lbl">Published Papers</span>
            </div>
            <div className="divider" />
            <div className="hero-stat">
              <span className="num">8+</span>
              <span className="lbl">Projects shipped</span>
            </div>
          </div>
          {/* <p className="hero-tagline">
           Shashidhara Narayanappa
          </p> */}
          {/* <div className="hero-tags">
            <span className="hero-tag">Research</span>
            <span className="hero-tag">Design</span>
            <span className="hero-tag">Engineering</span>
          </div> */}
        </div>
        {/* <HeroPhotos /> */}
      </div>
    </section>
  );
}

/* ---------- What I Do ---------- */
function WhatIDo() {
  const cols = [
  {
    title: 'Research',
    tagline: 'HCI-trained. 100+ participants, two published papers, and AI-moderated interviews built into the process.',
    chips: ['User interviews', 'Co-design', 'Speculative design', '2 publications'],
  },
  {
    title: 'Design',
    tagline: 'Service blueprints to XR interaction. I design for the edge cases most people forget exist.',
    chips: ['Figma', 'Service design', 'XR / Immersive UX', '0→1 products'],
  },
  {
    title: 'Build',
    tagline: 'I don\'t hand off to engineers. Four years shipping production apps, building responsive web applications.',
    chips: ['React + TypeScript', 'Three.js / Unity', 'Firebase', '4 yrs exp'],
  },
];
  return (
    <section className="whatido">
      <div className="whatido-grid">
        {cols.map((c, i) => (
          <Reveal key={c.title} className="wi-col" delay={i * 0.1}>
            <h3 className="wi-title">{c.title}</h3>
            <p className="wi-tagline">{c.tagline}</p>
            <div className="wi-chips">
              {c.chips.map(ch => <span key={ch} className="wi-chip">{ch}</span>)}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Project data ---------- */
const PROJECTS = [
  {
    num: '01', title: 'Autonomous Mobility as a Social Service',
    tags: [{ label: 'Research', kind: 'research' }, { label: 'Service Design', kind: 'design' }, { label: 'Speculative Design', kind: 'design' }],
    desc: 'A service design project reframing autonomous vehicles as public social infrastructure rather than product. Grounded in participatory design facilitation and speculative futures methodology to envision equitable mobility systems.',
    insight: 'Participatory sessions revealed that equity and trust, not efficiency, were the primary concerns users had about AV systems.',
    caseStudyPath: '/case-study/mobility',
  },
  {
    num: '02', title: 'Freetown Village',
    tags: [{ label: 'UX Research', kind: 'research' }, { label: 'Product Design', kind: 'design' }, { label: 'Cultural Technology', kind: 'design' }],
    desc: 'Research-driven product design for a living history museum in Indianapolis — helping young African Americans find cultural grounding through verified history, watch parties, and a personal artifact museum.',
    insight: "Research revealed the audience didn't distrust history itself — they distrusted the messengers, which reframed the entire product strategy around institutional credibility.",
    caseStudyPath: '/case-study/freetown',
  },
  {
    num: '03', title: 'KEDS Play',
    tags: [{ label: 'Research', kind: 'research' }, { label: 'Participatory Design', kind: 'design' }, { label: 'ACM CHI', kind: 'special' }],
    desc: 'Co-design sessions facilitated with children to understand play and learning patterns. Contributed to transcript coding, qualitative analysis, and paper preparation. Submitted to ACM CHI, the premier venue in HCI research.',
    insight: "Children's most generative play patterns only emerged after adults left the room, a finding that reframed the entire facilitation approach.",
    venue: { label: 'Under review · ACM CHI', cta: 'Read draft', href: '#' },
  },
  {
    num: '04', title: 'VR Emotion Recognition',
    tags: [{ label: 'Research', kind: 'research' }, { label: 'VR / Engineering', kind: 'engineering' }, { label: 'Accepted', kind: 'special' }],
    desc: "A research study examining how accurately facial expressions captured by Meta Quest Pro reflect users' true internal emotional states. Full VR application development, structured user interview sessions, and an accepted research paper.",
    insight: "Discovered that high-arousal emotional states produced the weakest correlation between facial data and self-report, reshaping the study's core hypothesis mid-research.",
    venue: { label: 'Accepted · MeaningfulXR 2026', cta: 'Read paper', href: '#' },
    caseStudyPath: '/case-study/vr',
  },
  {
    num: '05', title: 'CMS Website Redesign',
    tags: [{ label: 'UX Redesign', kind: 'design' }, { label: 'React', kind: 'engineering' }, { label: 'Engineering', kind: 'engineering' }],
    desc: 'Complete visual and UX overhaul of a React-based CMS platform. Revamped the design system using Ant Design, resolved key experience friction points, and elevated visual quality. Designed and engineered.',
    insight: 'The core friction was not visual design but the mental model mismatch between how editors thought about content and how the system modeled it.',
  },
];

/* ---------- Horizontal reveal ---------- */
function RevealX({ children, from = 'left', delay = 0, className = '', ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) { el.classList.add('in'); io.unobserve(el); } }); },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal-x from-${from} ${className}`} style={{ '--reveal-delay': `${delay}s` }} {...rest}>
      {children}
    </div>
  );
}

/* ---------- Hero rows (Zone A) ---------- */
function HeroRowWanderIndy() {
  return (
    <div className="hero-row" data-row="01">
      <RevealX from="left" className="visual">
        <img
          src="/images/wanderindy/hero.png"
          alt="Wander Indy — phygital city discovery system for Indianapolis"
          className="hero-row-img"
        />
      </RevealX>
      <RevealX from="right" delay={0.1} className="content">
        <div className="hr-eyebrow">01 / Interaction Design</div>
        <h3 className="hr-title">A phygital city discovery system. Mobile app and physical kiosks across Indianapolis.</h3>
        <p className="hr-desc">Behavioral loop design turning city exploration into visible, rewarding progress through discovery, visits, collection, and expansion.</p>
        <div className="hr-section-label">Methods Used</div>
        <div className="hr-tags">
          <span className="pill">Journey Mapping</span>
          <span className="pill">Paper Prototyping</span>
          <span className="pill">Hi-Fi Prototyping</span>
          <span className="pill">Usability Testing</span>
          <span className="pill">Design System</span>
        </div>
        <div className="hr-section-label">My Role</div>
        <p className="hr-role">Interaction Designer + Prototyper + Usability Testing</p>
        <Link to="/case-study/wander-indy" className="hr-cta">View case study <span>→</span></Link>
      </RevealX>
    </div>
  );
}

function HeroRowFreetown() {
  return (
    <div className="hero-row flip" data-row="02">
      <RevealX from="right" delay={0.1} className="content">
        <div className="hr-eyebrow">02 / UX Research + Product Design</div>
        <h3 className="hr-title">End-to-end product design for a cultural platform reconnecting young Black Americans to verified history.</h3>
        <p className="hr-desc">From semi-structured interviews to a live proof of concept, including a navigable 3D artifact museum and streaming UI.</p>
        <div className="hr-section-label">Methods Used</div>
        <div className="hr-tags">
          <span className="pill">User Interviews</span>
          <span className="pill">Affinity Mapping</span>
          <span className="pill">Persona Development</span>
          <span className="pill">Product Architecture</span>
          <span className="pill">Service Roadmapping</span>
        </div>
        <div className="hr-section-label">My Role</div>
        <p className="hr-role">UX Researcher + Product Designer + 0 to 1 Product Strategy</p>
        <Link to="/case-study/freetown" className="hr-cta">View case study <span>→</span></Link>
      </RevealX>
      <RevealX from="left" className="visual">
        <img
          src="/images/freetown/hero.png"
          alt="Freetown Village — cultural platform"
          className="hero-row-img"
        />
      </RevealX>
    </div>
  );
}

function HeroRowMobility() {
  return (
    <div className="hero-row" data-row="03">
      <RevealX from="left" className="visual">
        <img
          src="/images/mobility/hero.png"
          alt="Mobility as a Social Service — service blueprint"
          className="hero-row-img"
        />
      </RevealX>
      <RevealX from="right" delay={0.1} className="content">
        <div className="hr-eyebrow">03 / Service Design + Research</div>
        <h3 className="hr-title">Reframing autonomous vehicles as civic infrastructure for food-access equity.</h3>
        <p className="hr-desc">100+ participants, 3 co-design workshops, 11 stakeholder organizations. Reframing transportation as a coordination problem, not a mobility problem.</p>
        <div className="hr-section-label">Methods Used</div>
        <div className="hr-tags">
          <span className="pill">AI-Moderated Interviews</span>
          <span className="pill">Co-Design Workshops</span>
          <span className="pill">Service Blueprinting</span>
          <span className="pill">Speculative Design</span>
          <span className="pill">Qualitative Coding</span>
        </div>
        <div className="hr-section-label">My Role</div>
        <p className="hr-role">Research Lead + Service Designer + Co-Design Facilitation</p>
        <Link to="/case-study/mobility" className="hr-cta">View case study <span>→</span></Link>
      </RevealX>
    </div>
  );
}

function WorkTop() {
  return (
    <section className="work-zone-a" id="work">
      <Reveal className="work-label-wrap">
        {/* <div className="section-label">Work</div> */}
        <h2 className="section-title" style={{ marginTop: '12px' }}>Selected Work</h2>
        <p style={{ fontSize: '15px', color: 'var(--ink-3)', marginTop: '12px', maxWidth: '56ch', lineHeight: 1.6 }}>
          A selection of research-driven projects from concept to shipped product.
        </p>
      </Reveal>
      <HeroRowWanderIndy />
      <HeroRowFreetown />
      <HeroRowMobility />
    </section>
  );
}

/* ---------- Supporting grid (Zone B) ---------- */
function SupCard({ p, idx }) {
  const inner = (
    <>
      <span className="sup-num">Project {p.num}</span>
      <div className="sup-tags">
        {p.tags.map((t) => <span key={t.label} className={`pill ${t.kind}`}>{t.label}</span>)}
      </div>
      <h3 className="sup-title">{p.title}</h3>
      <p className="sup-desc">{p.desc}</p>
      <p className="sup-insight">{p.insight}</p>
      {p.venue && <div className="sup-venue">{p.venue.label}</div>}
      <span className="sup-cta">{p.venue ? p.venue.cta : 'View project'} <span>→</span></span>
    </>
  );
  if (p.caseStudyPath) {
    return (
      <Reveal as={Link} to={p.caseStudyPath} className="sup-card" delay={idx * 0.1}>
        {inner}
      </Reveal>
    );
  }
  return (
    <Reveal as="a" href="#" className="sup-card" delay={idx * 0.1}>
      {inner}
    </Reveal>
  );
}

function WorkBottom() {
  return (
    <section className="work-zone-b">
      <div className="work-grid">
        {PROJECTS.slice(2).map((p, i) => <SupCard p={p} idx={i} key={p.num} />)}
      </div>
    </section>
  );
}

/* ---------- Publications ---------- */
const PUBLICATIONS = [
  {
    title: 'Towards emotionally-aware immersive technologies: Recognition of spontaneous emotional expressions in VR using in-built facial tracking',
    venue: 'Meaningful XR Conference, 2026',
    role: 'First Author',
    venueHref: 'https://www.meaningfulxr.org/home',
  },
  {
    title: 'Co-designing VR for supporting empathy development and social-decision making in children',
    venue: 'IDC — Interaction Design and Children, 2026',
    role: 'Second Author',
    venueHref: null,
  },
];

function Publications() {
  return (
    <section className="publications" id="publications">
      <div className="publications-inner">
        <Reveal>
          <div className="section-label">Research</div>
          <h2 className="section-title" style={{ color: '#FAFAFA' }}>Publications</h2>
          <p style={{ fontSize: '15px', color: 'var(--w-45)', marginTop: '12px', maxWidth: '56ch', lineHeight: 1.6 }}>
            The following papers have been accepted at peer-reviewed venues.
          </p>
        </Reveal>
        <div className="pub-list" style={{ marginTop: '32px' }}>
          {PUBLICATIONS.map((p, i) => (
            <Reveal key={i} delay={i * 0.1} className="pub-item">
              <div>
                {p.venueHref ? (
                  <a className="pub-venue" href={p.venueHref} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                    {p.venue} ↗
                  </a>
                ) : (
                  <div className="pub-venue">{p.venue}</div>
                )}
                <p className="pub-title">{p.title}</p>
                <div className="pub-authors">{p.role}</div>
              </div>
              <div className="pub-badge">Accepted</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
const SKILLS = [
  { label: 'Research',    items: ['User Interviews','Participatory Design','Speculative Design','Service Design','Usability Testing','Qualitative Analysis'] },
  { label: 'Design',      items: ['UX Design','Interaction Design','Service Design','Figma','Information Architecture','Prototyping'] },
  { label: 'Engineering', items: ['React','JavaScript','TypeScript','Unity','Python','Ant Design','REST APIs'] },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <Reveal>
          <div className="section-label">About</div>
          <h2 className="section-title">A brief introduction.</h2>
        </Reveal>
        <div className="about-grid">
          <Reveal className="bio">
            <p>
              I am a Design Engineer with 3.5 years of full-stack development and a Master&rsquo;s in Human-Computer Interaction.
              I <span className="pop">research</span> human problems, <span className="pop">design</span> the experience, and <span className="pop">ship</span> the product.
            </p>
            <p>HCI researcher with accepted publications. Believer in designs that are not just beautiful, but feasible and viable.</p>
          </Reveal>
          <Reveal className="skills" delay={0.15}>
            {SKILLS.map((g) => (
              <div key={g.label}>
                <div className="skill-group-label">{g.label}</div>
                <div className="skill-tags">
                  {g.items.map((s) => <span className="skill-tag" key={s}>{s}</span>)}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <Reveal>
          <div className="section-label contact-label">Contact</div>
          <h2 className="contact-heading">
            <span className="l1">Let&rsquo;s work</span>
            <span className="l2">together.</span>
          </h2>
        </Reveal>
        <Reveal as="p" className="contact-sub" delay={0.15}>
          Open to full-time roles, research collaborations, and freelance work.
        </Reveal>
        <Reveal className="contact-links" delay={0.25}>
          <a className="contact-link" href="mailto:shashidharprakash33@gmail.com">Email <span className="arr">↗</span></a>
          <a className="contact-link" href="https://www.linkedin.com/in/meetshashi/" target="_blank" rel="noreferrer">LinkedIn <span className="arr">↗</span></a>
          <a className="contact-link" href="https://linktr.ee/meetshashi" target="_blank" rel="noreferrer">Linktree <span className="arr">↗</span></a>
        </Reveal>
        <div className="contact-foot">
          <span>Shashidhara Narayanappa</span>
          <span>Designed with care.</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- App ---------- */
const DEFAULTS = { accent: '#6366F1', gradient: 'indigo-violet-pink', density: 'default', showCursor: true, showStrip: true };
const ACCENT_OPTIONS = ['#6366F1', '#7C3AED', '#0EA5E9', '#10B981', '#F43F5E'];
const GRADIENTS = {
  'indigo-violet-pink': 'linear-gradient(135deg, #6366F1 0%, #A855F7 50%, #EC4899 100%)',
  'blue-cyan':          'linear-gradient(135deg, #93C5FD 0%, #67E8F9 100%)',
  'violet-rose':        'linear-gradient(135deg, #C4B5FD 0%, #FDA4AF 100%)',
  'emerald-cyan':       'linear-gradient(135deg, #6EE7B7 0%, #67E8F9 100%)',
  'mono':               'linear-gradient(135deg, #FAFAFA 0%, #A1A1AA 100%)',
};

export default function Home() {
  const [t, setTweak] = useTweaks(DEFAULTS);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', t.accent);
    document.documentElement.style.setProperty('--accent-soft', `${t.accent}0a`);
    document.documentElement.style.setProperty('--grad', GRADIENTS[t.gradient] || GRADIENTS['indigo-violet-pink']);
    const pad = t.density === 'compact' ? '72px' : t.density === 'airy' ? '128px' : '96px';
    document.documentElement.style.setProperty('--section-pad-y', pad);
    document.body.setAttribute('data-density', t.density);
  }, [t.accent, t.gradient, t.density]);

  useEffect(() => {
    return () => {
      document.documentElement.style.removeProperty('--accent');
      document.documentElement.style.removeProperty('--accent-soft');
      document.documentElement.style.removeProperty('--grad');
      document.documentElement.style.removeProperty('--section-pad-y');
      document.body.removeAttribute('data-density');
    };
  }, []);

  return (
    <>
      {t.showCursor && <Cursor />}
      <Nav variant="home" />
      <main>
        <Hero />
        {t.showStrip && <WhatIDo />}
        <WorkTop />
        {/* <WorkBottom /> */}
        <Publications />
        <About />
        <Contact />
      </main>
      <TweaksPanel title="Tweaks">
        <TweakSection label="Gradient">
          <TweakRadio label="Palette" value={t.gradient} onChange={(v) => setTweak('gradient', v)}
            options={[
              { value: 'indigo-violet-pink', label: 'Indigo · Pink' },
              { value: 'blue-cyan',          label: 'Blue · Cyan' },
              { value: 'violet-rose',        label: 'Violet · Rose' },
              { value: 'emerald-cyan',       label: 'Emerald · Cyan' },
              { value: 'mono',               label: 'Monochrome' },
            ]}
          />
        </TweakSection>
        <TweakSection label="Accent">
          <TweakColor label="Interactive color" value={t.accent} onChange={(v) => setTweak('accent', v)} options={ACCENT_OPTIONS} />
        </TweakSection>
        <TweakSection label="Layout">
          <TweakRadio label="Density" value={t.density} onChange={(v) => setTweak('density', v)}
            options={[{ value: 'compact', label: 'Compact' }, { value: 'default', label: 'Default' }, { value: 'airy', label: 'Airy' }]}
          />
          <TweakToggle label="What I Do strip" value={t.showStrip} onChange={(v) => setTweak('showStrip', v)} />
        </TweakSection>
        <TweakSection label="Cursor">
          <TweakToggle label="Custom cursor" value={t.showCursor} onChange={(v) => setTweak('showCursor', v)} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}
