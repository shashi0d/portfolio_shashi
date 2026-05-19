import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';
import { TweaksPanel, TweakSection, TweakRadio, TweakColor, TweakToggle, useTweaks } from '../components/TweaksPanel';
import Cursor from '../components/Cursor';
import Reveal from '../components/Reveal';
import Nav from '../components/Nav';



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
        <div className="hero-eyebrow">Design Engineer / HCI Researcher</div>
        <h1 className="hero-name">
          <span className="l1">Shashidhara</span>
          <span className="l2">Narayanappa</span>
        </h1>

        <p className="hero-tagline">
          I research human problems, design the experience, and build the product.
        </p>
        <div className="hero-tags">
          <span className="hero-tag">Research</span>
          <span className="hero-tag">Design</span>
          <span className="hero-tag">Engineering</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- What I Do ---------- */
function WhatIDo() {
  const cols = [
    {
      title: 'Research',
      tagline: 'HCI methods that surface what users feel, not just what they say.',
      chips: ['User interviews', 'Co-design', 'Thematic synthesis', '2 papers'],
    },
    {
      title: 'Design',
      tagline: 'From service blueprints to high-fidelity interaction — the whole experience, not just the screens.',
      chips: ['Figma', 'Service design', 'Interaction design', '0→1'],
    },
    {
      title: 'Build',
      tagline: 'I ship what I design. The prototype already knows what it can become.',
      chips: ['React', 'Unity', 'Python', '3.5 yrs exp'],
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
    tags: [{ label: 'Research', kind: 'research' }, { label: 'VR / Engineering', kind: 'engineering' }, { label: 'Published', kind: 'special' }],
    desc: "A research study examining how accurately facial expressions captured by Meta Quest Pro reflect users' true internal emotional states. Full VR application development, structured user interview sessions, and a published research paper.",
    insight: "Discovered that high-arousal emotional states produced the weakest correlation between facial data and self-report, reshaping the study's core hypothesis mid-research.",
    venue: { label: 'Published · MeaningfulXR 2026', cta: 'Read paper', href: '#' },
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
function HeroRowVR() {
  const p = PROJECTS[0];
  return (
    <div className="hero-row light" data-row="01">
      <RevealX from="right" className="visual">
        <img
          src="/images/mobility/hero.png"
          alt="Mobility as a Social Service — service blueprint"
          className="hero-row-img"
        />
      </RevealX>
       <RevealX from="left" delay={0.15} className="content">
        <div className="hr-num">Project 02</div>
        <div className="hr-tags">
          <span className="pill research">Research</span>
          <span className="pill design">Service Design</span>
          <span className="pill engineering">Speculative Design</span>
        </div>
        <h3 className="hr-title">{p.title}</h3>
        <p className="hr-desc">
          Service design exploring autonomous vehicles as public social infrastructure. Participatory design facilitation with stakeholders, speculative futures methodology.
        </p>
        <p className="hr-insight">
          Stakeholders consistently ranked equity and trust above efficiency, which redirected the entire design direction.
        </p>
        <Link to="/case-study/mobility" className="hr-cta">View case study <span>→</span></Link>
      </RevealX>
    </div>
  );
}

function HeroRowAV() {
  const p = PROJECTS[1];
  return (
    <div className="hero-row dark flip" data-row="02">
      <RevealX from="right" delay={0.15} className="content">
        <div className="hr-num">Project 01</div>
        <div className="hr-tags">
          <span className="pill research-dark">UX Research</span>
          <span className="pill design-dark">Product Design</span>
          <span className="pill design-dark">Cultural Technology</span>
        </div>
        <h3 className="hr-title">{p.title}</h3>
        <p className="hr-desc">
          Research-driven product design for Freetown Village helping young African Americans find cultural grounding through verified history, watch parties, and a personal artifact museum.
        </p>
        <p className="hr-insight">
          The audience didn't distrust history they distrusted the messengers. That insight reframed the entire product strategy around institutional credibility.
        </p>
        <Link to="/case-study/freetown" className="hr-cta">View case study <span>→</span></Link>
      </RevealX>
      <RevealX from="left" className="visual placeholder-dark" aria-hidden="true">
        <img
          src="/images/freetown/hero.png"
          alt="Freetown Village · Cultural Platfor"
          className="hero-row-img"
        />
      </RevealX>
    </div>
  );
}

function WorkTop() {
  return (
    <section className="work-zone-a" id="work">
      <Reveal className="work-label-wrap">
        <div className="work-label">Selected Work</div>
      </Reveal>
      <HeroRowAV />
      <HeroRowVR />
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
          <p style={{ fontSize: '15px', color: 'var(--w-35)', marginTop: '12px', maxWidth: '56ch', lineHeight: 1.6 }}>
            The following papers have been published at peer-reviewed venues.
          </p>
        </Reveal>
        <div className="pub-list" style={{ marginTop: '56px' }}>
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
              <div className="pub-badge">Published</div>
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
            <p>Published HCI researcher. Believer in designs that are not just beautiful, but feasible and viable.</p>
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
          <a className="contact-link" href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">LinkedIn <span className="arr">↗</span></a>
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
  'indigo-violet-pink': 'linear-gradient(135deg, #A5B4FC 0%, #C084FC 50%, #F9A8D4 100%)',
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
