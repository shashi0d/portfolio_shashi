import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';
import '../styles/case-study-mobility.css';
import '../styles/case-study-vr.css';
import { TweaksPanel, useTweaks } from '../components/TweaksPanel';
import Cursor from '../components/Cursor';
import Reveal from '../components/Reveal';
import Nav from '../components/Nav';

const VR_DEFAULTS = { accent: '#0EA5E9', gradient: 'teal-cyan' };

const VRReveal = Reveal;

/* ── 1 HERO ── */
function VRHero() {
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
          <span>HCI Research</span><span className="sep" />
          <span>VR Development</span><span className="sep" />
          <span>Affective Computing</span><span className="sep" />
          <span>2025—2026</span>
        </div>
        <h1 className="cs-title">
          <span className="l1">When VR can&rsquo;t</span>
          <span className="l2">read your face.</span>
        </h1>
        <p className="cs-sub">
          A published empirical study on the limits and potential of spontaneous emotion recognition
          in virtual reality — and what it means for the future of emotionally-aware immersive systems.
        </p>
        <div className="cs-meta">
          <div className="cs-meta-cell">
            <span className="k">Conference</span>
            <span className="v">MeaningfulXR 2026 · Accepted</span>
          </div>
          <div className="cs-meta-cell">
            <span className="k">Role</span>
            <span className="v">VR Developer · Protocol Designer · Lead Interviewer · First Author</span>
          </div>
          <div className="cs-meta-cell">
            <span className="k">Team</span>
            <span className="v">4-person research lab · Indiana University</span>
          </div>
          <div className="cs-meta-cell">
            <span className="k">Tools</span>
            <span className="v">Unity · Meta Quest Pro · FACS · Python</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── HERO IMAGE ── */
function VRHeroImage() {
  return (
    <section className="vr-hero-image" aria-label="Headset with facial tracking overlay">
      <VRReveal>
        <div className="vr-hero-image-inner">
          <span className="vr-hero-image-note">Fig. H · Schematic — Meta Quest Pro · Inward-facing IR · 30Hz</span>
          <div className="vr-headset">
            <span className="vr-meta-mark">M E T A</span>
            <span className="vr-bridge" />
          </div>
          <svg className="vr-facs-marks" viewBox="0 0 1280 560" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <g transform="translate(0,-10)">
              <line x1="430" y1="180" x2="490" y2="220" />
              <line x1="850" y1="180" x2="790" y2="220" />
              <text x="380" y="172">AU01 · Inner Brow</text>
              <text x="852" y="172">AU02 · Outer Brow</text>
              <circle cx="430" cy="180" r="3" />
              <circle cx="850" cy="180" r="3" />
            </g>
            <g>
              <line x1="320" y1="320" x2="430" y2="320" />
              <line x1="960" y1="320" x2="850" y2="320" />
              <text x="200" y="316">AU06 · Cheek Raiser (L)</text>
              <text x="970" y="316">AU06 · Cheek Raiser (R)</text>
              <circle cx="320" cy="320" r="3" />
              <circle cx="960" cy="320" r="3" />
            </g>
            <g>
              <line x1="500" y1="430" x2="640" y2="400" />
              <line x1="780" y1="430" x2="640" y2="400" />
              <text x="430" y="450">AU12 · Lip Corner Puller</text>
              <text x="780" y="450">AU15 · Lip Corner Depressor</text>
              <circle cx="500" cy="430" r="3" />
              <circle cx="780" cy="430" r="3" />
            </g>
          </svg>
          <div className="vr-hero-image-readout">
            <span className="k">N participants</span><span className="v">37</span>
            <span className="k">AUs tracked</span><span className="v">70 @ 30Hz</span>
            <span className="k">Stimuli</span><span className="v">6 emotions</span>
            <span className="k">Threshold</span><span className="v">T = 0.05 · ≥10 frames</span>
          </div>
        </div>
      </VRReveal>
    </section>
  );
}

/* ── 2 THESIS ── */
function VRThesis() {
  return (
    <section className="vr-thesis" data-screen-label="02 The Thesis">
      <VRReveal className="vr-thesis-inner">
        <div className="vr-thesis-mark">The premise</div>
        <p className="vr-thesis-text">
          Most VR systems are <em>emotion-blind</em> — and the sensors inside headsets that were
          supposed to change this turn out to be far less reliable than the field assumed.
        </p>
      </VRReveal>
    </section>
  );
}

/* ── 3 BACKGROUND ── */
function VRBackground() {
  return (
    <section className="cs-section" style={{ paddingTop: '40px' }} data-screen-label="03 Background & Role">
      <div className="cs-inner">
        <VRReveal>
          <div className="cs-label">The Context</div>
        </VRReveal>
        <VRReveal delay={0.05}>
          <h2 className="cs-h2">
            Could VR finally <em style={{ fontStyle: 'italic' }}>sense</em> how users feel?
          </h2>
        </VRReveal>

        <VRReveal delay={0.1} className="vr-context">
          <div className="cs-body">
            <p>
              VR is expanding rapidly into health therapy, social skills training, and education — domains where
              emotional miscommunication has real consequences. As headsets like the Meta Quest Pro introduced
              built-in facial tracking, researchers began asking a basic question: when a VR headset detects a
              facial pattern, does it actually reflect what the person felt?
            </p>
            <p>
              The field lacked empirical evidence. Most existing emotion-recognition datasets use posed or acted
              expressions — not the subtle, spontaneous reactions real users have in immersive environments.
              We set out to find out — and what we found challenged our own hypothesis.
            </p>
          </div>

          <div className="vr-context-card">
            <span className="ct-head">My contributions</span>
            <div className="vr-contrib">
              <span className="ct-tag">VR Environment Development</span>
              <span className="ct-title">Built the stimulus environment in Unity</span>
              <span className="ct-body">
                Unity 6000.0.41f1 — a controlled neutral space with a virtual screen 2 m in front of participants,
                optimised for experimental validity.
              </span>
            </div>
            <div className="vr-contrib">
              <span className="ct-tag">Protocol Design</span>
              <span className="ct-title">Drafted the full study protocol</span>
              <span className="ct-body">
                Stimuli selection criteria, session flow, headset calibration, data capture pipeline, and the
                post-session interview guide.
              </span>
            </div>
            <div className="vr-contrib">
              <span className="ct-tag">Session Facilitation</span>
              <span className="ct-title">Ran all 37 participant sessions end-to-end</span>
              <span className="ct-body">
                From onboarding and headset fitting through the structured post-session interviews.
              </span>
            </div>
            <div className="vr-contrib">
              <span className="ct-tag">Analysis &amp; Writing</span>
              <span className="ct-title">Led analysis and wrote the paper</span>
              <span className="ct-body">
                FACS convergence analysis, AU activation thresholds, synthesis. Accepted to MeaningfulXR 2026 as
                first author.
              </span>
            </div>
          </div>
        </VRReveal>
      </div>
    </section>
  );
}

/* ── 4 SETUP ── */
const VR_STIMULI = [
  { emo: 'Happiness', stim: 'MELD clip — comedic reunion',    src: 'MELD' },
  { emo: 'Sadness',   stim: 'Filmstim — funeral excerpt',     src: 'Filmstim' },
  { emo: 'Disgust',   stim: 'Filmstim — visceral medical',    src: 'Filmstim' },
  { emo: 'Fear',      stim: 'Filmstim — horror cold open',    src: 'Filmstim' },
  { emo: 'Anger',     stim: 'Filmstim — confrontation',       src: 'Filmstim' },
  { emo: 'Surprise',  stim: 'Filmstim — sudden reveal',       src: 'Filmstim' },
];

function VRSetup() {
  return (
    <section className="cs-section" style={{ paddingTop: '40px' }} data-screen-label="04 Research Setup">
      <div className="cs-inner">
        <VRReveal>
          <div className="cs-label">The Research Setup</div>
        </VRReveal>
        <VRReveal delay={0.05}>
          <h2 className="cs-h2">
            Six emotions. Thirty-seven people.<br />
            One controlled VR room.
          </h2>
        </VRReveal>
        <VRReveal delay={0.1}>
          <p className="cs-body">
            We designed a protocol that mattered: a fully validated stimulus set, a debrief structure
            engineered to <em style={{ fontStyle: 'italic' }}>prevent demand characteristics</em>, and an
            independent annotation pipeline so the data itself wouldn&rsquo;t be coloured by what we hoped to find.
          </p>
        </VRReveal>

        <VRReveal delay={0.15} className="vr-process">
          <div className="vr-step">
            <span className="vs-num">Step 01 / Stimuli</span>
            <span className="vs-title">Six validated clips, calibrated for VR.</span>
            <span className="vs-body">
              Selected from the Filmstim database (with MELD for happiness) — each designed to elicit a discrete
              emotion. Each clip was reviewed for ecological validity inside an immersive context.
            </span>
            <div className="vs-stat">
              <span className="vss-num">6</span>
              <span className="vss-lbl">Discrete emotions</span>
            </div>
          </div>
          <div className="vr-step">
            <span className="vs-num">Step 02 / VR Session</span>
            <span className="vs-title">A controlled Unity environment, no distractions.</span>
            <span className="vs-body">
              37 participants (54.1% female, diverse racial composition) wore the Meta Quest Pro in a neutral
              virtual room. The clip played on a screen 2 m in front of them. Facial Action Units recorded at 30Hz
              via inward-facing IR. <strong>Participants did not know the study was about emotion recognition
              until after the headset was removed.</strong>
            </span>
            <div className="vs-stat">
              <span className="vss-num">37</span>
              <span className="vss-lbl">Participants · 30Hz capture</span>
            </div>
          </div>
          <div className="vr-step">
            <span className="vs-num">Step 03 / Debrief &amp; Analysis</span>
            <span className="vs-title">Self-report after all stimuli — then convergence analysis.</span>
            <span className="vs-body">
              Each participant completed a 10-minute structured interview rating each video on a 5-point Likert
              scale. We compared self-report to FACS-based AU patterns using the FACS Investigator&rsquo;s Guide
              (Ekman &amp; Friesen, 1978; Clark et al., 2020).
            </span>
            <div className="vs-stat">
              <span className="vss-num">10 min</span>
              <span className="vss-lbl">Per-participant interview</span>
            </div>
          </div>
        </VRReveal>

        <VRReveal delay={0.05} className="vr-stim">
          {VR_STIMULI.map((s) => (
            <div className="vr-stim-cell" key={s.emo}>
              <span className="vsc-emo">{s.emo}</span>
              <span className="vsc-stim">{s.stim}</span>
              <span className="vsc-src">Source: {s.src}</span>
            </div>
          ))}
        </VRReveal>

        <VRReveal className="vr-meth">
          <div className="vr-meth-content">
            <div className="cs-label">How we measured convergence</div>
            <h3 className="cs-h3" style={{ maxWidth: '22ch' }}>
              Not accuracy in isolation — alignment between felt and shown.
            </h3>
            <div className="cs-body">
              <p>
                The Meta Quest Pro captures 70 Action Units — anatomically-based descriptions of individual facial
                muscle movements — at 30Hz via infrared cameras. Each AU is measured as a continuous activation
                value from 0 (no movement) to 1 (maximum contraction).
              </p>
              <p>
                We defined a threshold of T = 0.05 sustained for at least 10 consecutive frames (~0.33 s) to
                filter single-frame noise. <strong>Convergence</strong> — alignment between self-reported emotion
                and the facial pattern — was the core metric.
              </p>
              <p>
                Four researchers independently annotated peak emotional intervals for each stimulus, then reached
                consensus. Only frames inside the agreed intervals were analysed.
              </p>
            </div>
          </div>

          <div className="vr-meth-readout">
            <span className="mr-label">Measurement Spec</span>
            <div className="mr-spec">
              <span className="k">AUs</span><span className="v">70 channels</span>
              <span className="k">Rate</span><span className="v">30 Hz</span>
              <span className="k">Threshold</span><span className="v"><span className="acc">T = 0.05</span></span>
              <span className="k">Min frames</span><span className="v">≥ 10 (~0.33 s)</span>
              <span className="k">Sensor</span><span className="v">Inward-facing IR</span>
              <span className="k">Annotators</span><span className="v">4 · consensus</span>
              <span className="k">Self-report</span><span className="v">5-point Likert</span>
            </div>
            <div className="vr-au-mini">
              <div className="ml-h">AU06 · Cheek Raiser — bilateral activation example</div>
              <svg viewBox="0 0 360 70" width="100%" height="70" aria-hidden="true">
                <defs>
                  <linearGradient id="auFill" x1="0" x2="1">
                    <stop offset="0" stopColor="rgba(94,234,212,0.35)" />
                    <stop offset="1" stopColor="rgba(94,234,212,0.05)" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="50" x2="360" y2="50" stroke="rgba(245,199,122,0.6)" strokeDasharray="3 3" strokeWidth="1" />
                <text x="6" y="46" fontSize="8" fontFamily="JetBrains Mono, ui-monospace" fill="rgba(245,199,122,0.85)" letterSpacing="0.04em">T = 0.05</text>
                <path d="M0,60 L20,58 L40,52 L60,38 L80,22 L100,15 L120,18 L140,28 L160,40 L180,48 L200,55 L220,52 L240,44 L260,32 L280,26 L300,30 L320,42 L340,52 L360,58"
                      fill="none" stroke="#5EEAD4" strokeWidth="1.3" />
                <path d="M0,62 L20,60 L40,54 L60,42 L80,28 L100,22 L120,26 L140,34 L160,44 L180,52 L200,58 L220,55 L240,48 L260,38 L280,34 L300,38 L320,46 L340,55 L360,60"
                      fill="none" stroke="#93C5FD" strokeWidth="1.3" />
                <text x="358" y="14" textAnchor="end" fontSize="8" fontFamily="JetBrains Mono, ui-monospace" fill="#5EEAD4" letterSpacing="0.04em">AU06-L</text>
                <text x="358" y="26" textAnchor="end" fontSize="8" fontFamily="JetBrains Mono, ui-monospace" fill="#93C5FD" letterSpacing="0.04em">AU06-R</text>
              </svg>
            </div>
          </div>
        </VRReveal>
      </div>
    </section>
  );
}

/* ── 5 INSIGHT ── */
const VR_BARS = [
  { name: 'Happiness', pct: 56.8, tone: 'amber' },
  { name: 'Sadness',   pct: 40.5, tone: '' },
  { name: 'Anger',     pct: 21.6, tone: '' },
  { name: 'Disgust',   pct: 10.8, tone: 'coral' },
  { name: 'Fear',      pct: 8.1,  tone: 'coral' },
  { name: 'Surprise',  pct: 0.0,  tone: 'zero' },
];

function VRInsight() {
  return (
    <section className="cs-section dark" data-screen-label="05 The Insight">
      <div className="cs-inner">
        <VRReveal>
          <div className="cs-label">The Finding</div>
        </VRReveal>
        <VRReveal delay={0.05}>
          <h2 className="cs-h2">
            Not all emotions wear their<br />faces on the <span className="grad">outside.</span>
          </h2>
        </VRReveal>
        <VRReveal delay={0.1}>
          <p className="cs-body">
            The most striking result wasn&rsquo;t that recognition was poor. It was that the failure was
            <em style={{ fontStyle: 'italic' }}> emotion-specific</em> — and that told us something more interesting
            than a global accuracy number ever could.
          </p>
          <p className="cs-body" style={{ marginTop: '18px' }}>
            Happiness showed strong convergence. <strong>Disgust</strong> and <strong>fear</strong> — the emotions
            that matter most in high-stakes VR applications like therapy and exposure training — barely surfaced
            on the face at all, despite participants reporting genuine emotional intensity. Anger inverted the
            problem: the headset detected the canonical pattern in 83.8% of trials, while only 24.3% of
            participants reported feeling angry.
          </p>
        </VRReveal>

        <VRReveal delay={0.05} className="vr-chart-block">
          <div className="vr-chart-head">
            <div>
              <div className="vc-label">Fig. 5.1 · Self-report ↔ facial pattern convergence</div>
              <h3>Per-emotion agreement rate between felt experience and detected facial pattern.</h3>
            </div>
            <div className="vr-chart-legend">
              <span className="lg amber">Above average</span>
              <span className="lg">Neutral</span>
              <span className="lg coral">High-stakes failure</span>
            </div>
          </div>

          <div className="vr-bars">
            {VR_BARS.map((b) => (
              <div className={`vr-bar-row ${b.tone}`} key={b.name}>
                <span className="vr-bar-name">{b.name}</span>
                <div className="vr-bar-track">
                  <div className="vr-bar-fill" style={{ '--w': `${b.pct}%` }} />
                </div>
                <span className="vr-bar-val">{b.pct.toFixed(1)}%</span>
              </div>
            ))}
          </div>

          <div className="vr-bar-axis">
            <span className="ax-empty" />
            <div className="ax-ticks">
              <span>0%</span><span>25%</span><span>50%</span><span>75%</span>
            </div>
            <span className="ax-unit">100%</span>
          </div>

          <div className="vr-chart-note">
            <div className="cn amber">
              <span className="cn-key">Happiness</span>
              <div className="cn-val">56.8%</div>
              <div className="cn-body">The only emotion where felt experience and visible expression aligned strongly. Smiling is socially rehearsed; the face does the work it&rsquo;s practiced for.</div>
            </div>
            <div className="cn coral">
              <span className="cn-key">Disgust · Fear</span>
              <div className="cn-val">10.8% / 8.1%</div>
              <div className="cn-body">Participants reported strong felt emotion (70.3% for disgust) — but the canonical facial pattern barely registered. These are the emotions VR therapy depends on.</div>
            </div>
            <div className="cn">
              <span className="cn-key">Anger — inverted</span>
              <div className="cn-val">21.6%</div>
              <div className="cn-body">The headset detected the canonical anger pattern in 83.8% of trials. Only 24.3% of participants said they felt angry. The face moved without the feeling.</div>
            </div>
          </div>
        </VRReveal>

        <VRReveal className="vr-pull">
          <div className="vr-pull-mark">From the paper · p. 23</div>
          <div className="vr-pull-text">
            &ldquo;Failure to detect canonical facial patterns should not be interpreted as confirmation of the
            <em> absence of emotion.</em>&rdquo;
          </div>
          <div className="vr-pull-cite">— Narayanappa et al., MeaningfulXR 2026</div>
        </VRReveal>
      </div>
    </section>
  );
}

/* ── 6 IMPLICATIONS ── */
const IMPLICATIONS = [
  {
    n: '01',
    t: 'Uncertainty-aware adaptation',
    b: 'VR systems should not adapt experiences when recognition confidence is low. In therapy, education, and wellbeing contexts, strong behavioural adjustments based on uncertain emotion inference can cause more harm than no adaptation at all.',
    tag: 'For VR therapy · exposure training',
  },
  {
    n: '02',
    t: 'Multimodal + user-controlled',
    b: 'Facial cues alone are insufficient. Systems need multimodal sensing (voice, physiological signals, gaze) and explicit user feedback mechanisms — manual overrides, self-report check-ins, opt-out controls — to prevent erroneous inferences from affecting the experience.',
    tag: 'For affective computing platforms',
  },
  {
    n: '03',
    t: 'Culturally calibrated models',
    b: 'Emotional expression norms vary substantially across cultural groups. Our diverse sample produced non-canonical facial patterns for several emotions. Models trained on homogeneous datasets will fail disproportionately for underrepresented groups.',
    tag: 'For ML model development',
  },
];

function VRImplications() {
  return (
    <section className="cs-section" data-screen-label="06 Design Implications">
      <div className="cs-inner">
        <VRReveal>
          <div className="cs-label">Design Implications</div>
        </VRReveal>
        <VRReveal delay={0.05}>
          <h2 className="cs-h2">
            What this means for the next generation of <span className="grad">emotionally-aware</span> systems.
          </h2>
        </VRReveal>
        <VRReveal delay={0.1}>
          <p className="cs-body">
            The implication is profound: VR systems that treat facial detection as a proxy for felt emotion will
            be wrong in predictable, emotion-specific ways. Three design directions follow directly from the data.
          </p>
        </VRReveal>

        <div className="vr-impl-grid">
          {IMPLICATIONS.map((c, i) => (
            <VRReveal key={c.n} delay={i * 0.06} className="vr-impl">
              <span className="imp-num">Implication {c.n}</span>
              <h4 className="imp-title">{c.t}</h4>
              <p className="imp-body">{c.b}</p>
              <span className="imp-tag">{c.tag}</span>
            </VRReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 7 OUTCOMES ── */
const VR_METRICS = [
  { num: '37',  lbl: 'Participants recruited',       meta: 'Diverse sample · 54.1% female' },
  { num: '6',   lbl: 'Emotions studied',             meta: 'Across validated stimuli sets' },
  { num: '3',   lbl: 'Contributions to the field',   meta: 'Convergence method · design implications · cultural calibration evidence' },
  { num: '1',   lbl: 'Published paper',              meta: 'MeaningfulXR 2026 · Accepted' },
];

function VROutcomes() {
  return (
    <section className="cs-section" data-screen-label="07 Outcomes">
      <div className="cs-inner">
        <VRReveal>
          <div className="cs-label">Outcomes</div>
        </VRReveal>
        <VRReveal delay={0.05}>
          <h2 className="cs-h2">What the work produced.</h2>
        </VRReveal>

        <VRReveal delay={0.1} className="vr-metrics">
          {VR_METRICS.map((m) => (
            <div key={m.num} className="vr-metric">
              <span className="vm-num">{m.num}</span>
              <span className="vm-lbl">{m.lbl}</span>
              <span className="vm-meta">{m.meta}</span>
            </div>
          ))}
        </VRReveal>

        <VRReveal className="reflection">
          <div className="cs-label" style={{ marginBottom: '16px' }}>Reflection</div>
          <h3 className="cs-h3" style={{ maxWidth: '24ch' }}>What this project taught me.</h3>
          <div className="cs-body" style={{ fontSize: '19px', maxWidth: '72ch', color: 'var(--ink)' }}>
            <p>
              This was my first time leading a study from end to end — not contributing to one, but owning it.
              Building the VR environment in Unity meant thinking simultaneously about experimental control
              (no visual distractions, consistent rendering) and participant experience (headset comfort, session
              pacing, consent and safety).
            </p>
            <p>
              The most important decision I made wasn&rsquo;t technical — it was the interview timing. We debriefed
              participants after <em style={{ fontStyle: 'italic' }}>all</em> stimuli, rather than after each one,
              because asking about emotions mid-session would have primed them to perform. That single protocol
              choice determined whether we captured spontaneous reactions or socially managed ones. The fact that
              we found such stark divergence in disgust and fear tells me we got it right.
            </p>
            <p>
              I went into this study expecting to validate the Meta Quest Pro&rsquo;s emotion-sensing capabilities.
              I came out with a paper arguing for their fundamental limitations.
              <strong> That&rsquo;s what good research does.</strong>
            </p>
          </div>
        </VRReveal>

        <VRReveal className="vr-pub">
          <div>
            <div className="vr-pub-tag">Publication</div>
            <div className="vr-pub-title">
              Towards emotionally-aware immersive technologies: Recognition of spontaneous emotional expressions
              in VR using in-built facial tracking.
            </div>
            <div className="vr-pub-meta">
              First author · Narayanappa, S. et al. · A 4-person research lab, Indiana University.
            </div>
          </div>
          <div className="vr-pub-cta">
            <div className="vp-row">
              <span className="vp-k">Venue</span>
              <span className="vp-v">MeaningfulXR 2026</span>
            </div>
            <div className="vp-row">
              <span className="vp-k">Status</span>
              <span className="vp-v">Accepted</span>
            </div>
            <div className="vp-row">
              <span className="vp-k">Method</span>
              <span className="vp-v">Mixed (structured interview + FACS)</span>
            </div>
            <div className="vp-row">
              <span className="vp-k">Sample</span>
              <span className="vp-v">N = 37 · 6 stimuli · 70 AUs @ 30Hz</span>
            </div>
          </div>
        </VRReveal>
      </div>
    </section>
  );
}

/* ── 8 NEXT ── */
function VRNext() {
  return (
    <section className="vr-next-grid" data-screen-label="08 Next">
      <div className="vr-next-inner">
        <span className="np-label">Next case studies</span>
        <Link className="vr-next-tile" to="/case-study/wander-indy">
          <span className="vnt-eyebrow">Interaction Design · Prototyping</span>
          <span className="vnt-title">Wander Indy</span>
          <span className="vnt-meta">Phygital discovery system for Indianapolis · mobile + kiosk</span>
          <span className="vnt-arrow">View case study  →</span>
        </Link>
        <Link className="vr-next-tile" to="/case-study/freetown">
          <span className="vnt-eyebrow">UX Research · Product</span>
          <span className="vnt-title">Reconnecting Roots — Freetown Village</span>
          <span className="vnt-meta">Cultural belonging through digital community design</span>
          <span className="vnt-arrow">View case study  →</span>
        </Link>
      </div>
    </section>
  );
}

/* ── PAGE ── */
export default function VR() {
  const tweaks = useTweaks(VR_DEFAULTS);
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <Cursor />
      <Nav />
      <VRHero />
      <VRHeroImage />
      <VRThesis />
      <VRBackground />
      <VRSetup />
      <VRInsight />
      <VRImplications />
      <VROutcomes />
      <VRNext />
      <TweaksPanel tweaks={tweaks} />
    </>
  );
}
