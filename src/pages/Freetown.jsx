import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';
import '../styles/case-study-mobility.css';
import '../styles/case-study-freetown.css';
import { TweaksPanel, useTweaks } from '../components/TweaksPanel';
import Cursor from '../components/Cursor';
import Reveal from '../components/Reveal';
import Nav from '../components/Nav';

const FT_DEFAULTS = { accent: '#C97B3E', gradient: 'warm-terracotta' };

const FTReveal = Reveal;

function FTVideo({ src, label }) {
  return (
    <video
      src={src}
      className="ft-feature-video"
      autoPlay
      muted
      loop
      playsInline
      aria-label={label}
    />
  );
}

/* ── 1 HERO ── */
function FTHero() {
  const heroRef = useRef(null);
  useEffect(() => {
    const t = setTimeout(() => heroRef.current?.classList.add('loaded'), 80);
    return () => clearTimeout(t);
  }, []);
  return (
    <section className="cs-hero hero" ref={heroRef} id="top" data-screen-label="01 Case Study Hero">
      <div className="cs-hero-inner">
        <Link className="cs-back" to="/">
          <span>←</span><span>Back to portfolio</span>
        </Link>
        <div className="cs-eyebrow">
          <span className="cs-eyebrow-pill">UX Research</span>
          <span className="cs-eyebrow-pill">Product Design</span>
          <span className="cs-eyebrow-pill">Cultural Technology</span>
          <span className="cs-eyebrow-pill">2025—2026</span>
        </div>
        <h1 className="cs-title">
          <span className="l1">Freetown Village:</span>
          <span className="l2">Reconnecting Roots.</span>
        </h1>
        <p className="cs-sub">
          A research-driven product design for Freetown Village helping young African
          Americans find cultural grounding in a world of incomplete, untrustworthy stories.
        </p>
        <div className="cs-meta">
          <div className="cs-meta-cell">
            <span className="k">Client</span>
            <span className="v">Freetown Village, Indianapolis</span>
          </div>
          <div className="cs-meta-cell">
            <span className="k">Role</span>
            <span className="v">UX Researcher &amp; Product Designer</span>
          </div>
          <div className="cs-meta-cell">
            <span className="k">Team &amp; Timeline</span>
            <span className="v">CARS · 4-person multidisciplinary · Academic Year 2025—2026</span>
          </div>
          <div className="cs-meta-cell">
            <span className="k">Methods</span>
            <span className="v">Qualitative Interviews · Persona Development · HMW Synthesis · UI Design · Service Roadmapping</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 2 HERO IMAGE ── */
function FTHeroImage() {
  return (
    <section className="ft-hero-image" aria-hidden="false">
      <FTReveal>
        <div className="ft-hero-image-inner has-img" role="img" aria-label="Reconnecting Roots Freetown Village cover">
          <video
            src="https://res.cloudinary.com/dhb554man/video/upload/v1779202574/Freetown_Village_meekvq.mp4"
            className="ft-hero-video"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Freetown Village Reconnecting Roots hero video"
          />
        </div>
      </FTReveal>
    </section>
  );
}

/* ── 3 BRIEF ── */
function FTBrief() {
  return (
    <section className="cs-section" data-screen-label="02 The Brief">
      <div className="cs-inner">
        <FTReveal>
          <div className="cs-label">The Challenge</div>
        </FTReveal>
        <FTReveal delay={0.05}>
          <h2 className="cs-h2">
            Where do you go when every story online feels <em style={{ fontStyle: 'italic' }}>incomplete?</em>
          </h2>
        </FTReveal>
        <FTReveal delay={0.1}>
          <div className="cs-body">
            <p>
              Freetown Village is a living history museum in Indianapolis one of the few institutions
              in the country dedicated to bringing African American heritage to life through immersive
              performance and storytelling. Their programs are powerful. But their reach stopped at the door.
            </p>
            <p>
              Young African Americans wanted to engage with their culture digitally but found only two
              extremes: academic content that felt distant, or social media clips they couldn&rsquo;t trust.
              Freetown had the credibility and the content. They needed a product that could bridge the gap.
            </p>
          </div>
        </FTReveal>

        <FTReveal delay={0.15} className="brief-context">
          <div>
            <div className="brief-col-label">Partner</div>
            <div className="partner-list">
              <div className="partner-row">Freetown Village <span className="partner-role">Indianapolis</span></div>
              <div className="partner-row" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--ink-3)' }}>
                Cultural Heritage · EdTech
              </div>
            </div>
          </div>
          <div>
            <div className="skill-block">
              <div className="skill-block-label">Research</div>
              <div className="skill-chips">
                {['Semi-structured Interviews', 'Thematic Affinity Mapping', 'HMW Framing', 'Persona Development'].map(t => (
                  <span key={t} className="skill-chip">{t}</span>
                ))}
              </div>
            </div>
            <div className="skill-block">
              <div className="skill-block-label">Design</div>
              <div className="skill-chips">
                {['Product Architecture', 'Interactive Streaming UI', 'Artifact Shop Flows', 'Service Roadmapping'].map(t => (
                  <span key={t} className="skill-chip">{t}</span>
                ))}
              </div>
            </div>
            <div className="skill-block">
              <div className="skill-block-label">Strategy</div>
              <div className="skill-chips">
                {['Phased Product Roadmap', 'Cost Modeling', 'Tiered Revenue Strategy', 'Vendor Selection'].map(t => (
                  <span key={t} className="skill-chip">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </FTReveal>

        <FTReveal delay={0.2}>
          <div className="cs-label" style={{ marginTop: '80px', marginBottom: '12px' }}>Audience context · Fig. 1.1</div>
          <div className="ft-stat-cards">
            <div className="ft-stat-card">
              <div className="fts-num">79%</div>
              <div className="fts-label">of Black teens want to learn deeper history</div>
              <div className="fts-source">Source · National youth media study, 2024</div>
            </div>
            <div className="ft-stat-card">
              <div className="fts-num">18%</div>
              <div className="fts-label">trust social media for accurate historical information</div>
              <div className="fts-source">Source · National youth media study, 2024</div>
            </div>
          </div>
        </FTReveal>
      </div>
    </section>
  );
}

/* ── 3b ORG RESEARCH ── */
function FTOrgResearch() {
  return (
    <section className="cs-section" data-screen-label="02b Org Research">
      <div className="cs-inner">
        <FTReveal>
          <div className="cs-label">Stakeholder Research</div>
        </FTReveal>
        <FTReveal delay={0.05}>
          <h2 className="cs-h2">
            The org had a problem too  <br />
            one the users couldn&rsquo;t see.
          </h2>
        </FTReveal>
        <FTReveal delay={0.1}>
          <p className="cs-body">
            Before speaking to users, we spoke to Freetown Village leadership,
            artists, and historians. What we found was a second design problem
            running in parallel: the organization&rsquo;s sustainability was
            structurally fragile.
          </p>
        </FTReveal>
        <FTReveal delay={0.15}>
          <div className="cs-label" style={{ marginTop: '56px', marginBottom: '12px' }}>
            Fig. 2.1 · Organizational research findings
          </div>
          <div className="ft-org-findings">
            {[
              { stat: '~80%', label: 'of revenue from grants', note: 'Competitive cycles with no revenue floor between awards' },
              { stat: '100%', label: 'strongest engagement: in-person', note: 'Zero digital equivalent of the live performance experience existed' },
              { stat: '0', label: 'experiential digital presence', note: 'Current website is informational only no participation, no return draw' },
            ].map((f) => (
              <div className="ft-org-finding" key={f.stat}>
                <div className="ftof-stat">{f.stat}</div>
                <div className="ftof-label">{f.label}</div>
                <div className="ftof-note">{f.note}</div>
              </div>
            ))}
          </div>
        </FTReveal>
        <FTReveal delay={0.2}>
          <div className="ft-problem-statement">
            <div className="cs-label" style={{ marginBottom: '16px' }}>Problem Statement · HMW</div>
            <div className="ft-hmw">
              How might we help people experience African American history together
              and build lasting cultural ownership while enabling Freetown Village
              to scale its mission sustainably beyond physical space?
            </div>
          </div>
        </FTReveal>
      </div>
    </section>
  );
}

/* ── 4 RESEARCH ── */
const MATRIX_ROWS = [
  { name: 'Participant 1', trust: true,  inter: false, comm: true,  note: 'YouTube history rabbit holes; distrusts viral takes' },
  { name: 'Participant 2',  trust: true,  inter: true,  comm: false, note: 'Wants stories he can step into, not scroll past' },
  { name: 'Participant 3',  trust: false, inter: true,  comm: true,  note: 'Craves shared cultural moments with friends' },
  { name: 'Participant 4',    trust: true,  inter: true,  comm: true,  note: 'Three needs co-occur the universal pattern' },
];

function FTResearch() {
  return (
    <section className="cs-section" data-screen-label="03 Research">
      <div className="cs-inner">
        <FTReveal>
          <div className="cs-label">Research Approach</div>
        </FTReveal>
        <FTReveal delay={0.05}>
          <h2 className="cs-h2">
            Four conversations.<br />
            One <span className="grad">universal feeling.</span>
          </h2>
        </FTReveal>
        <FTReveal delay={0.1}>
          <p className="cs-body">
            We conducted in-depth qualitative interviews with four participants, each navigating the tension between wanting cultural connection and finding the
            available content either inaccessible or inauthentic. We weren&rsquo;t looking for statistics.
            We were looking for the human story beneath the problem.
          </p>
          <p className="cs-body" style={{ marginTop: '18px' }}>
            What emerged from the synthesis was a pattern of cultural isolation dressed in digital convenience.
          </p>
        </FTReveal>

        <FTReveal delay={0.15}>
          <div className="cs-label" style={{ marginTop: '72px', marginBottom: '12px' }}>Methods used</div>
          <div className="skill-chips" style={{ gap: '8px' }}>
            {['Semi-structured interviews', 'Thematic affinity mapping', 'HMW (How Might We) framing', 'Persona development'].map(t => (
              <span key={t} className="skill-chip" style={{ fontSize: '13px', padding: '8px 16px' }}>{t}</span>
            ))}
          </div>
        </FTReveal>

        <FTReveal delay={0.2}>
          <div className="cs-label" style={{ marginTop: '72px', marginBottom: '12px' }}>Fig. 3.1 · Research participant × theme matrix</div>
          <div className="ft-matrix-scroll">
          <div className="ft-matrix">
            <div className="ftm-cell head">Participant</div>
            <div className="ftm-cell head">Trust</div>
            <div className="ftm-cell head">Interactivity</div>
            <div className="ftm-cell head">Community</div>
            <div className="ftm-cell head">Most-cited tension</div>
            {MATRIX_ROWS.map((r) => (
              <>
                <div key={`${r.name}-n`} className="ftm-cell row">{r.name}</div>
                <div key={`${r.name}-t`} className="ftm-cell"><span className={`ftm-dot ${r.trust ? '' : 'empty'}`} /></div>
                <div key={`${r.name}-i`} className="ftm-cell"><span className={`ftm-dot ${r.inter ? '' : 'empty'}`} /></div>
                <div key={`${r.name}-c`} className="ftm-cell"><span className={`ftm-dot ${r.comm ? '' : 'empty'}`} /></div>
                <div key={`${r.name}-note`} className="ftm-cell"><span className="ftm-note">{r.note}</span></div>
              </>
            ))}
          </div>
          </div>
        </FTReveal>
      </div>
    </section>
  );
}

/* ── 5 PERSONA ── */
function FTPersona() {
  return (
    <section className="cs-section" style={{ paddingTop: '40px' }} data-screen-label="04 Persona Jordan">
      <div className="cs-inner">
        <FTReveal>
          <div className="cs-label">The Persona</div>
        </FTReveal>
        <FTReveal delay={0.05}>
          <h2 className="cs-h2">
            <em style={{ fontStyle: 'italic' }}>An untethered boat with no anchor.</em><br />
            That&rsquo;s how Jordan described himself.
          </h2>
        </FTReveal>
        <FTReveal delay={0.1}>
          <div className="cs-body">
            <p>
              Jordan, 23, works in Indianapolis&rsquo;s creative sector. He consumes history through
              YouTube rabbit holes, Reddit threads, and podcasts. He genuinely wants to know where he
              comes from but every story he finds online either feels academic and cold, or
              emotionally manipulative and trauma-centered.
            </p>
            <p>He doesn&rsquo;t distrust history. He distrusts the messengers.</p>
            <p>
              Jordan became our design compass. Every feature decision ran through a single question:
              <em style={{ fontStyle: 'italic' }}> does this make Jordan feel anchored, or does it leave him drifting?</em>
            </p>
          </div>
        </FTReveal>

        <FTReveal delay={0.15}>
          <div className="ft-jordan">
            <div className="ft-jordan-portrait">
              <img
                src="/images/freetown/jordan.png"
                alt="Jordan persona portrait"
                className="ft-jordan-img"
              />
            </div>
            <div className="ft-jordan-content">
              <div className="ft-jordan-label">Persona · The cultural seeker</div>
              <div className="ft-jordan-name">Jordan, 23</div>
              <div className="ft-jordan-tag">Indianapolis · Creative sector · High digital literacy</div>
              <div className="ft-jordan-facts">
                <div className="ftjf-row">
                  <span className="ftjf-k">Digital diet</span>
                  <span className="ftjf-v">YouTube history channels, Reddit threads, narrative podcasts</span>
                </div>
                <div className="ftjf-row">
                  <span className="ftjf-k">What he wants</span>
                  <span className="ftjf-v">Cultural grounding to know where he comes from, from a source he can trust</span>
                </div>
                <div className="ftjf-row">
                  <span className="ftjf-k">What blocks him</span>
                  <span className="ftjf-v">Academic content feels distant; social media feels manipulative</span>
                </div>
                <div className="ftjf-row">
                  <span className="ftjf-k">Values</span>
                  <span className="ftjf-v">Authenticity, depth, community, agency in his own story</span>
                </div>
              </div>
            </div>
          </div>
        </FTReveal>

        <FTReveal delay={0.2}>
          <div className="ft-pullquote">
            <div className="ft-pullquote-mark">Pull quote · Interview 04</div>
            <div className="ft-pullquote-text">
              &ldquo;I want to know where I come from, but every story online feels incomplete.&rdquo;
            </div>
            <div className="ft-pullquote-cite">  Jordan, 23 · Indianapolis</div>
          </div>
        </FTReveal>
      </div>
    </section>
  );
}

/* ── 5b COMPETITIVE ── */
function FTCompetitive() {
  const platforms = [
    {
      type: 'Content-Rich Platforms',
      examples: 'Wikipedia, Smithsonian Digital',
      strengths: ['Extensive archives', 'Professional curation'],
      weaknesses: ['Passive consumption only', 'Low return visits'],
      verdict: 'High quality. Low engagement.',
      gap: 'No participation, no community, no sense of ownership.',
    },
    {
      type: 'Streaming Platforms',
      examples: 'YouTube, Netflix',
      strengths: ['Massive reach', 'High production value'],
      weaknesses: ['Algorithm-driven', 'No verified cultural context'],
      verdict: 'High reach. Low trust.',
      gap: 'No authentication of historical accuracy. Trauma content dominates.',
    },
    {
      type: 'Community Platforms',
      examples: 'Discord, Reddit, Facebook Groups',
      strengths: ['Active participation', 'Community connection'],
      weaknesses: ['Shallow cultural depth', 'No progression system'],
      verdict: 'High engagement. Shallow depth.',
      gap: 'Community without content. Connection without grounding.',
    },
    {
      type: 'EdTech Platforms',
      examples: 'Duolingo, MasterClass',
      strengths: ['Progression mechanics', 'Structured learning paths'],
      weaknesses: ['Transactional model', 'No cultural identity layer'],
      verdict: 'Good structure. Wrong frame.',
      gap: 'Optimised for knowledge transfer, not identity building.',
    },
  ];

  return (
    <section className="cs-section" data-screen-label="04b Competitive Analysis">
      <div className="cs-inner">
        <FTReveal>
          <div className="cs-label">Competitive Analysis</div>
        </FTReveal>
        <FTReveal delay={0.05}>
          <h2 className="cs-h2">
            Four platform types.<br />
            <span className="grad">None of them Jordan&rsquo;s answer.</span>
          </h2>
        </FTReveal>
        <FTReveal delay={0.1}>
          <p className="cs-body">
            We mapped four categories of platforms Jordan already used or had tried and abandoned.
            Each solved part of the problem. None combined trusted content, shared experience,
            and personal progression in a single place. That gap is the product.
          </p>
        </FTReveal>
        <FTReveal delay={0.15}>
          <div className="cs-label" style={{ marginTop: '56px', marginBottom: '12px' }}>
            Fig. 4b.1 · Competitive landscape four platform types
          </div>
          <div className="ft-comp-grid">
            {platforms.map((p) => (
              <div className="ft-comp-card" key={p.type}>
                <div className="ftcc-type">{p.type}</div>
                <div className="ftcc-examples">{p.examples}</div>
                <div className="ftcc-verdict">{p.verdict}</div>
                <div className="ftcc-gap">{p.gap}</div>
              </div>
            ))}
          </div>
        </FTReveal>
        <FTReveal delay={0.2}>
          <div className="ft-comp-conclusion">
            <span className="ft-comp-conclusion-label">The gap</span>
            No platform combined Freetown&rsquo;s three requirements:
            historian-verified trust, participatory shared experience, and
            personal cultural ownership that accumulates over time.
          </div>
        </FTReveal>
      </div>
    </section>
  );
}

/* ── 6 SYNTHESIS ── */
const PILLARS = [
  {
    key: 'trust', n: '01', name: 'Trust',
    body: 'Freetown’s institutional credibility plus historian-verified content addresses the authenticity gap that social media cannot.',
    tag: 'Authenticity gap → institutional credibility',
  },
  {
    key: 'interactivity', n: '02', name: 'Interactivity',
    body: 'Passive content makes Jordan feel like an observer of his own history. He needs to be a participant choosing, responding, contributing.',
    tag: 'Observer → participant',
  },
  {
    key: 'community', n: '03', name: 'Community',
    body: 'Cultural isolation is the core wound. Shared experiences even digital ones are the antidote. Belonging is the metric.',
    tag: 'Isolation → belonging',
  },
  {
    key: 'continuity', n: '04', name: 'Continuity',
    body: 'A single interaction is not a cultural relationship. Jordan needs to accumulate something over time a growing museum, a climbing rank, a collection that proves he showed up. Progression builds identity.',
    tag: 'One-time visit → ongoing relationship',
  },
];

function FTSynthesis() {
  return (
    <section className="cs-section dark" data-screen-label="05 Synthesis Three Pillars">
      <div className="cs-inner">
        <FTReveal>
          <div className="cs-label">The Insight</div>
        </FTReveal>
        <FTReveal delay={0.05}>
          <h2 className="cs-h2" style={{ maxWidth: '24ch' }}>
            Jordan doesn&rsquo;t need more content.<br />
            He needs a reason to <span className="grad">trust it &mdash;</span><br />
            and someone to experience it with.
          </h2>
        </FTReveal>
        <FTReveal delay={0.1}>
          <p className="cs-body">
            From four interviews and synthesis across dozens of coded themes, three non-negotiable user
            needs emerged. Not features. <strong style={{ color: '#FBF1DE' }}>Needs.</strong> The product
            architecture flows entirely from these three words.
          </p>
        </FTReveal>
        <FTReveal delay={0.15}>
          <div className="cs-label" style={{ marginTop: '72px', marginBottom: '12px', color: 'rgba(255,250,240,0.45)' }}>
            Fig. 5.1 · How might we help Jordan find his cultural anchor?
          </div>
        </FTReveal>
        <div className="ft-pillars">
          {PILLARS.map((p, i) => (
            <FTReveal key={p.key} delay={i * 0.08} className={`ft-pillar ${p.key}`}>
              <span className="ft-pillar-num">Pillar {p.n}</span>
              <span className="ft-pillar-name">{p.name}</span>
              <p className="ft-pillar-body">{p.body}</p>
              <span className="ft-pillar-tag">{p.tag}</span>
            </FTReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 6b IDEATION ── */
function FTIdeation() {
  const concepts = [
    { n: '01', title: 'Static Digital Archive', verdict: 'Rejected', reason: 'Passive consumption the exact failure mode we were trying to solve.' },
    { n: '02', title: 'Course-Based Learning', verdict: 'Rejected', reason: 'Too transactional. Knowledge transfer, not identity building.' },
    { n: '03', title: 'Community Forum Only', verdict: 'Rejected', reason: 'Community without content. High engagement, no grounding.' },
    { n: '04', title: 'Pure Streaming Platform', verdict: 'Rejected', reason: 'Content without participation. Solved trust, broke interactivity.' },
    { n: '05', title: 'Streaming + Progression Hybrid', verdict: 'Advanced', reason: 'Combined shared experience with personal ownership. Moved to testing.' },
    { n: '06', title: 'Live Watch Party + Museum', verdict: 'Selected', reason: 'All three needs addressed. Every feature traceable to research.' },
  ];

  const principles = [
    { n: '01', name: 'Trust before scale', body: 'Cultural authenticity is non-negotiable. A platform that reaches millions but misrepresents history is worse than a small platform that gets it right.' },
    { n: '02', name: 'Participation over consumption', body: 'Active engagement drives retention. Jordan needs to contribute to the experience, not just receive it.' },
    { n: '03', name: 'Community over virality', body: 'Depth of cultural connection matters more than reach. We are not building for the algorithm.' },
    { n: '04', name: 'Progression builds identity', body: 'Ownership creates lasting engagement. The museum grows. The connection deepens. The identity anchors.' },
  ];

  return (
    <section className="cs-section" data-screen-label="05b Ideation">
      <div className="cs-inner">
        <FTReveal>
          <div className="cs-label">Ideation</div>
        </FTReveal>
        <FTReveal delay={0.05}>
          <h2 className="cs-h2">
            Six concepts entered.<br />
            <span className="grad">One survived.</span>
          </h2>
        </FTReveal>
        <FTReveal delay={0.1}>
          <p className="cs-body">
            With the three pillars and problem statement locked, we deliberately explored
            experience models before committing to any solution. Low-fidelity sketches focused
            on experience flow how users enter, where emotional peaks occur, what motivates
            return visits not UI polish.
          </p>
        </FTReveal>

        <FTReveal delay={0.15}>
          <div className="cs-label" style={{ marginTop: '64px', marginBottom: '12px' }}>
            Fig. 5b.1 · Concepts explored and rejection rationale
          </div>
          <div className="ft-concepts">
            {concepts.map((c) => (
              <div className={`ft-concept ${c.verdict === 'Selected' ? 'selected' : c.verdict === 'Advanced' ? 'advanced' : 'rejected'}`} key={c.n}>
                <div className="ftc-num">{c.n}</div>
                <div className="ftc-title">{c.title}</div>
                <div className={`ftc-verdict ${c.verdict.toLowerCase()}`}>{c.verdict}</div>
                <div className="ftc-reason">{c.reason}</div>
              </div>
            ))}
          </div>
        </FTReveal>

        <FTReveal delay={0.2}>
          <div className="cs-label" style={{ marginTop: '80px', marginBottom: '12px' }}>
            Design principles · Four filters applied to every decision
          </div>
          <div className="ft-principles">
            {principles.map((p) => (
              <div className="ft-principle" key={p.n}>
                <div className="ftp-num">{p.n}</div>
                <div className="ftp-name">{p.name}</div>
                <div className="ftp-body">{p.body}</div>
              </div>
            ))}
          </div>
        </FTReveal>
      </div>
    </section>
  );
}

/* ── Prototype CTA card ── */
function FTPrototypeCTA() {
  return (
    <a href={'https://freetown-village.netlify.app/'} target="_blank" rel="noopener noreferrer" className="ft-prototype-cta">
      <div className="ft-prototype-cta-glow" />
      <span className="ft-prototype-cta-eyebrow">Fig. 6.4 · Community feature</span>
      <div className="ft-prototype-cta-icon" aria-hidden="true">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="32" height="32" rx="8" stroke="#F4D7A2" strokeWidth="1.5" strokeOpacity="0.35" />
          <rect x="7" y="8" width="10" height="8" rx="2" fill="#F4D7A2" fillOpacity="0.18" stroke="#F4D7A2" strokeWidth="1" strokeOpacity="0.5" />
          <rect x="19" y="8" width="10" height="8" rx="2" fill="#F4D7A2" fillOpacity="0.08" stroke="#F4D7A2" strokeWidth="1" strokeOpacity="0.3" />
          <rect x="7" y="20" width="10" height="8" rx="2" fill="#F4D7A2" fillOpacity="0.08" stroke="#F4D7A2" strokeWidth="1" strokeOpacity="0.3" />
          <rect x="19" y="20" width="10" height="8" rx="2" fill="#D4A848" fillOpacity="0.45" stroke="#D4A848" strokeWidth="1" strokeOpacity="0.8" />
          <path d="M23 23l3 3m0 0l-3 3m3-3h-5" stroke="#F4D7A2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="ft-prototype-cta-title">Browse, share, belong.</div>
      <p className="ft-prototype-cta-desc">
        Museums, leaderboards, discussion threads all linked. See the full community
        interaction flow in the live Figma prototype.
      </p>
      <div className="ft-prototype-cta-btn">
        View live prototype <span aria-hidden="true">→</span>
      </div>
    </a>
  );
}

/* ── 7 SOLUTION ── */
function FTSolution() {
  return (
    <section className="cs-section" data-screen-label="06 Design Solution">
      <div className="cs-inner">
        <FTReveal>
          <div className="cs-label">The Solution</div>
        </FTReveal>
        <FTReveal delay={0.05}>
          <h2 className="cs-h2">
            Three features.<br />
            One <span className="grad">cultural anchor.</span>
          </h2>
        </FTReveal>
        <FTReveal delay={0.1}>
          <p className="cs-body">
            Every feature was scored against the three pillars before it earned a place in the product.
            What follows is the shortlist that survived.
          </p>
        </FTReveal>

        {/* Feature 1 */}
        <FTReveal className="ft-feature-watch-wrap">
          <div className="ft-feature-dual-content">
            <div className="ft-feature-content">
              <div className="ft-feature-label">01 · Trust + Community</div>
              <h3 className="ft-feature-title">Watch history together.</h3>
              <div className="ft-feature-body">
                <p>
                  Scheduled and on-demand streaming of Freetown&rsquo;s performances with real-time chat,
                  live quizzes, emoji reactions, and community presence indicators. Historian-verified content.
                  No ads. No algorithm gaming the emotional stakes.
                </p>
                <p>
                  The watch party transforms passive viewing into active learning and replaces cultural
                  isolation with a shared room.
                </p>
              </div>
              <div className="ft-ux-insight">
                <strong>Vendor decision:</strong> Powered by Vimeo Advanced flat-rate pricing regardless of
                viewer count, with built-in polls, Q&amp;A, and chat. Professional and ad-free.
              </div>
            </div>
            <div className="ft-feature-content">
              <div className="ft-feature-label">Live experience</div>
              <h3 className="ft-feature-title">Interact, question, and connect in the room.</h3>
              <div className="ft-feature-body">
                <p>
                  The live watch UI surfaces participation as the headline action. Real-time chat sits where
                  a comment thread would normally hide. Quizzes appear inline. Reactions register on the timeline,
                  not on a sidebar nobody opens. Points earned during the watch flow directly into the museum.
                </p>
              </div>
                           <div className="ft-ux-insight">
                <span className="ft-ux-insight-label">UX Insight</span>
                History is remembered socially, not individually.
              </div>
            </div>

          </div>
          <div className="ft-feature-full-video">
            <FTVideo
              src="https://res.cloudinary.com/dhb554man/video/upload/v1779202581/Watch_party_umihgw.mp4"
              label="Fig. 6.1 · Watch party UI"
            />
          </div>
        </FTReveal>

        {/* Feature 2 */}
        <FTReveal className="ft-feature">
          <div className="ft-feature-visual">
            <FTVideo
              src="https://res.cloudinary.com/dhb554man/video/upload/v1779202577/3d_museum_xejxbg.mp4"
              label="Fig. 6.3 · Artifact shop UI"
            />
          </div>
          <div className="ft-feature-content">
            <div className="ft-feature-label">02 · Interactivity + Community</div>
            <h3 className="ft-feature-title">Build something you can own.</h3>
            <div className="ft-feature-body">
              <p>
                Users earn contribution points through watch party participation answering quizzes,
                joining chats, attending events. Points unlock digital artifacts: masks, sculptures,
                historical objects, each with educational context and story.
              </p>
              <p>
                The museum is personal proof of a cultural journey. Not a grade. Not a badge.
                A collection that says: <em style={{ fontStyle: 'italic' }}>I was here, I learned this, this is part of me.</em>
              </p>
            </div>
            <div className="ft-ux-insight">
              <strong>Launch scope:</strong> 25+ artifacts at full launch. Optional purchases $12–$18 per item.
              3D models hosted via Sketchfab the same platform used by museums and cultural heritage
              institutions worldwide.
            </div>
            <div className="ft-ux-insight">
              <span className="ft-ux-insight-label">UX Insight</span>
              Ownership makes learning feel real. A badge disappears. A museum stays.
            </div>
          </div>
        </FTReveal>

        {/* Feature 3 */}
        <FTReveal className="ft-feature flip">
          <div className="ft-feature-visual">
            <FTPrototypeCTA href="#" />
          </div>
          <div className="ft-feature-content">
            <div className="ft-feature-label">03 · Community</div>
            <h3 className="ft-feature-title">Find your people in the archive.</h3>
            <div className="ft-feature-body">
              <p>
                Browse other users&rsquo; museums. Share artifact stories. Climb the leaderboard. Join discussion
                forums around specific performances and historical topics.
              </p>
              <p>
                This is the feature that transforms the platform from content delivery into cultural
                community the difference between watching alone and <strong>belonging somewhere.</strong>
              </p>
            </div>
            <div className="ft-ux-insight">
              <span className="ft-ux-insight-label">UX Insight</span>
              Shared experiences amplify meaning. Community is the retention mechanism.
            </div>
          </div>
        </FTReveal>
      </div>
    </section>
  );
}

/* ── 7b PROTOTYPE TEST ── */
function FTPrototypeTest() {
  const findings = [
    { label: 'Watch Parties were intuitive', detail: 'Users joined, reacted, and chatted without instruction. The live presence indicators were called out positively across all sessions.' },
    { label: '3D Museum needed clearer onboarding', detail: 'Users understood the value of artifacts but struggled to initiate their first museum visit without guidance. First-time experience flow was redesigned.' },
    { label: 'Ownership > gamification', detail: 'Users cared more about what the artifact meant than the points it cost. Point labels were de-emphasised; artifact stories were elevated in the UI.' },
  ];

  const iterations = [
    { change: 'Simplified museum onboarding', detail: 'Added contextual tooltips and a guided first-time experience to the 3D museum entry flow.' },
    { change: 'Clearer progression explanation', detail: 'Made the points-to-artifact relationship explicit on the shop page. Users needed to see the full loop before engaging.' },
    { change: 'Elevated artifact stories', detail: 'Moved educational context above the points/price label. Meaning first. Transaction second.' },
    { change: 'Ethical donation prompts', detail: 'Contextual giving opportunities added that never block content access cultural access is not paywalled.' },
  ];

  return (
    <section className="cs-section" data-screen-label="06b Prototype and Test">
      <div className="cs-inner">
        <FTReveal>
          <div className="cs-label">Prototype · Test · Iterate</div>
        </FTReveal>
        <FTReveal delay={0.05}>
          <h2 className="cs-h2">
            What we assumed.<br />
            <span className="grad">What users corrected.</span>
          </h2>
        </FTReveal>
        <FTReveal delay={0.1}>
          <p className="cs-body">
            We validated through three fidelity stages low-fidelity flow sketches for
            structural decisions, mid-fidelity for interaction clarity, and a clickable
            prototype for usability testing. Testing focused on two core flows:
            joining a watch party and unlocking a first artifact.
          </p>
        </FTReveal>

        <FTReveal delay={0.15}>
          <div className="cs-label" style={{ marginTop: '64px', marginBottom: '12px' }}>
            Fidelity progression
          </div>
          <div className="ft-fidelity-row">
            {['Low-fidelity · Flow validation', 'Mid-fidelity · Interaction clarity', 'Clickable prototype · Usability testing'].map((f, i) => (
              <div className="ft-fidelity-step" key={f}>
                <span className="ftfs-n">0{i + 1}</span>
                <span className="ftfs-label">{f}</span>
              </div>
            ))}
          </div>
        </FTReveal>

        <FTReveal delay={0.2}>
          <div className="cs-label" style={{ marginTop: '72px', marginBottom: '12px' }}>
            Fig. 6b.1 · Key testing findings
          </div>
          <div className="ft-findings">
            {findings.map((f) => (
              <div className="ft-finding" key={f.label}>
                <div className="ftfi-label">{f.label}</div>
                <div className="ftfi-detail">{f.detail}</div>
              </div>
            ))}
          </div>
        </FTReveal>

        <FTReveal delay={0.25}>
          <div className="cs-label" style={{ marginTop: '72px', marginBottom: '12px' }}>
            Iterations made after testing
          </div>
          <div className="ft-iterations">
            {iterations.map((it, i) => (
              <div className="ft-iteration" key={it.change}>
                <span className="ftit-n">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <div className="ftit-change">{it.change}</div>
                  <div className="ftit-detail">{it.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </FTReveal>
      </div>
    </section>
  );
}

/* ── 8 BUSINESS CASE ── */
const TIERS = [
  {
    name: 'Free', price: '$0', per: '',
    headline: 'Basic exploration',
    body: 'Museum room with starter artifacts, performance clip access, and public chats. Open to anyone curious enough to look.',
    tag: 'Free tier',
  },
  {
    name: 'Digital Historian', price: '$6.99', per: '/ month',
    headline: 'The Jordan tier',
    body: 'Full museum unlock, one watch party per month, all chats, all clips. Designed for the cultural seeker who shows up consistently.',
    tag: 'Featured',
    featured: true,
    jordan: 'Jordan’s projected subscription',
  },
  {
    name: 'Cultural Curator', price: '$19.99', per: '/ month',
    headline: 'Unlimited access',
    body: 'Unlimited watch parties, private rooms for groups, merchandise access, early performance drops. For the community builders.',
    tag: 'Premium tier',
  },
];

const ROADMAP = [
  {
    n: '01', month: 'Month 5', label: 'Soft Launch',
    title: 'VOD platform + basic watch parties',
    list: [
      'Vimeo-powered streaming infrastructure',
      'Performance browse + watch UI',
      'Basic chat + emoji reactions',
      'Free tier + Digital Historian launch',
    ],
    cost: '$9K – $12K',
  },
  {
    n: '02', month: 'Month 7', label: 'Expansion',
    title: 'Live events + private rooms',
    list: [
      'Live performance streaming',
      'Cultural Curator tier introduction',
      'Private rooms for friend groups',
      'In-watch quizzes + points system',
    ],
    cost: '$8K – $11K',
  },
  {
    n: '03', month: 'Month 11', label: 'Full Platform',
    title: '3D museums + cultural curator',
    list: [
      'Sketchfab-hosted 3D artifact museums',
      'Discussion forums + topic threads',
      'Optional artifact purchases ($12–$18)',
      'Public museum browsing + leaderboard',
    ],
    cost: '$10K – $14K',
  },
];

function FTBusiness() {
  return (
    <section className="cs-section" data-screen-label="07 Business Case">
      <div className="cs-inner">
        <FTReveal>
          <div className="cs-label">Product Strategy</div>
        </FTReveal>
        <FTReveal delay={0.05}>
          <h2 className="cs-h2">
            A product with a mission still needs a <span className="grad">model.</span>
          </h2>
        </FTReveal>
        <FTReveal delay={0.1}>
          <div className="cs-body">
            <p>
              We didn&rsquo;t just design screens. We designed a path to sustainability because a
              culturally important platform that can&rsquo;t fund itself eventually disappears.
            </p>
            <p>
              The business model is tiered and mission-aligned: a free exploration tier keeps access open,
              while Digital Historian ($6.99/month) and Cultural Curator ($19.99/month) tiers generate the
              revenue to sustain operations. At <strong style={{ color: 'var(--ink)' }}>37 Digital Historian
              subscribers</strong>, the platform covers its monthly operating costs.
            </p>
          </div>
        </FTReveal>

        <FTReveal delay={0.15}>
          <div className="cs-label" style={{ marginTop: '72px', marginBottom: '12px' }}>Fig. 7.1 · Pricing tiers</div>
          <div className="ft-pricing">
            {TIERS.map((t) => (
              <div key={t.name} className={`ft-tier ${t.featured ? 'featured' : ''}`}>
                <span className="ft-tier-tag">{t.tag}</span>
                <span className="ft-tier-name">{t.name}</span>
                <div className="ft-tier-price">
                  {t.price}
                  {t.per && <span className="ftp-per">{t.per}</span>}
                </div>
                <div className="ft-tier-headline">{t.headline}</div>
                <div className="ft-tier-body">{t.body}</div>
                {t.jordan && <div className="ft-tier-jordan">&rarr; {t.jordan}</div>}
              </div>
            ))}
          </div>
        </FTReveal>

        <FTReveal delay={0.2}>
          <div className="cs-label" style={{ marginTop: '96px', marginBottom: '12px' }}>Fig. 7.2 · Phased roadmap</div>
          <h3 className="cs-h3" style={{ maxWidth: '28ch', marginBottom: '8px' }}>
            From soft launch to full platform in eleven months.
          </h3>
        </FTReveal>

        <FTReveal delay={0.25}>
          <div className="ft-roadmap">
            {ROADMAP.map((p) => (
              <div className="ft-phase" key={p.n}>
                <span className="ft-phase-marker" />
                <span className="ft-phase-num">Phase {p.n} · {p.label}</span>
                <span className="ft-phase-month">{p.month}</span>
                <h4 className="ft-phase-title">{p.title}</h4>
                <ul className="ft-phase-list">
                  {p.list.map((it) => <li key={it}>{it}</li>)}
                </ul>
                <div className="ft-phase-cost">
                  <span className="ftpc-k">Build cost</span>
                  <span className="ftpc-v">{p.cost}</span>
                </div>
              </div>
            ))}
          </div>
        </FTReveal>

        <FTReveal delay={0.3}>
          <div className="ft-breakeven">
            <span className="ftbe-label">Break-even</span>
            <span>Month 9–10 at 37+ paying Digital Historian subscribers.</span>
          </div>
        </FTReveal>
      </div>
    </section>
  );
}

/* ── 9 REFLECTION ── */
function FTReflection() {
  return (
    <section className="cs-section" data-screen-label="08 Reflection">
      <div className="cs-inner">
        <FTReveal>
          <div className="cs-label">What I Learned</div>
        </FTReveal>
        <FTReveal delay={0.05}>
          <h2 className="cs-h2">
            Designing for <em style={{ fontStyle: 'italic' }}>belonging</em> is harder than designing for utility.
          </h2>
        </FTReveal>
        <FTReveal delay={0.1}>
          <div className="ft-reflection-quote">
            &ldquo;This platform doesn&rsquo;t just teach history. It helps people feel <em>connected to who they are.</em>&rdquo;
          </div>
        </FTReveal>
        <FTReveal delay={0.15}>
          <div className="cs-body" style={{ fontSize: '19px', maxWidth: '72ch', color: 'var(--ink)', lineHeight: 1.6 }}>
            <p>
              The most important design decision we made wasn&rsquo;t a UI choice it was the decision
              <em style={{ fontStyle: 'italic' }}> not to call this an educational platform.</em> Education implies
              a transaction: content goes in, knowledge comes out. What Jordan needed was identity reinforcement.
              That framing changed everything.
            </p>
            <p>
              Framing the three needs as <strong>Trust, Interactivity, and Community</strong> before touching a
              single wireframe gave the team a shared decision filter. When features got proposed that
              didn&rsquo;t serve at least one of these, they didn&rsquo;t make the cut. Constraints are creative
              gifts when they&rsquo;re grounded in research.
            </p>
            <p>
              The business model section taught me that responsible design doesn&rsquo;t end at handoff.
              Recommending Vimeo over Mux saved Freetown <strong>$5,000/month at scale</strong>. That&rsquo;s
              not a UX decision but it keeps the platform alive, which means the UX decision matters.
            </p>
          </div>
        </FTReveal>
      </div>
    </section>
  );
}

/* ── 10 NEXT ── */
function FTNext() {
  return (
    <section className="next-project" data-screen-label="09 Next">
      <div className="next-project-inner">
        <span className="np-label">Next Project</span>
        <div>
          <div className="np-title">&darr; Mobility as a Social Service</div>
          <div className="np-meta">Service Design · Research · Workshop Facilitation · 2025–2026</div>
        </div>
        <Link className="np-link" to="/case-study/mobility">Read case study <span>&rarr;</span></Link>
      </div>
    </section>
  );
}

/* ── PAGE ── */
export default function Freetown() {
  const tweaks = useTweaks(FT_DEFAULTS);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.dataset.page = 'freetown';
    return () => { delete document.documentElement.dataset.page; };
  }, []);
  return (
    <>
      <Cursor />
      <Nav />
      <FTHero />
      <FTHeroImage />
      <FTBrief />
      <FTOrgResearch />
      <FTResearch />
      <FTPersona />
      <FTCompetitive />
      <FTSynthesis />
      <FTIdeation />
      <FTSolution />
      <FTPrototypeTest />
      <FTBusiness />
      <FTReflection />
      <FTNext />
      <TweaksPanel tweaks={tweaks} />
    </>
  );
}
