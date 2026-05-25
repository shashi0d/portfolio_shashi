import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';
import '../styles/case-study-mobility.css';
import { TweaksPanel, TweakSection, TweakRadio, TweakColor, TweakToggle, useTweaks } from '../components/TweaksPanel';
import Cursor from '../components/Cursor';
import Reveal from '../components/Reveal';
import ImgPlaceholder from '../components/ImgPlaceholder';
import Nav from '../components/Nav';

const CSReveal = Reveal;

/* ====================================================
   HERO
   ==================================================== */
function CSHero() {
  const heroRef = useRef(null);
  useEffect(() => {
    const t = setTimeout(() => heroRef.current?.classList.add('loaded'), 80);
    return () => clearTimeout(t);
  }, []);
  return (
    <section className="cs-hero hero" ref={heroRef} id="top">
      <div className="cs-hero-inner">
        <Link className="cs-back" to="/"><span>←</span><span>Back to portfolio</span></Link>
        <div className="cs-eyebrow">
          <span className="cs-eyebrow-pill">Research</span>
          <span className="cs-eyebrow-pill">Service Design</span>
          <span className="cs-eyebrow-pill">Co-Design Facilitation</span>
          <span className="cs-eyebrow-pill">2025–2026</span>
        </div>
        <h1 className="cs-title">
          <span className="l1">Mobility as a</span>
          <span className="l2">Social Service.</span>
        </h1>
        <p className="cs-sub">
          Community-grounded research and speculative design exploring autonomous vehicles
          as civic infrastructure in Indianapolis, Indiana.
        </p>
        <div className="cs-meta">
          <div className="cs-meta-cell"><span className="k">Partner</span><span className="v">Toyota Mobility Foundation × Southeast Community Services</span></div>
          <div className="cs-meta-cell"><span className="k">Role</span><span className="v">Research Lead &amp; Service Designer</span></div>
          <div className="cs-meta-cell"><span className="k">Team &amp; Timeline</span><span className="v">4 (HCI, Indiana University) · Academic Year 2025—2026</span></div>
          <div className="cs-meta-cell"><span className="k">Methods</span><span className="v">Ethnographic Interviews · Participatory Research · Co-Design Workshops · Service Blueprinting</span></div>
        </div>
      </div>
    </section>
  );
}

function CSHeroImage() {
  return (
    <section className="cs-hero-image" aria-hidden="true">
      <CSReveal>
        <div className="cs-hero-image-inner">
          {/* <ImgPlaceholder dark tag="HERO · Fig. C.1"
            label={"Warm isometric cover illustration\n— AV parked in residential community, caseworker handing groceries to a resident\nReplace with: report cover image at full resolution."}
            style={{ width: '100%', height: '100%' }}
          /> */}
          <img
            src="/images/mobility/hero.png"
            alt="Mobility as a Social Service service blueprint"
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain', objectPosition: 'bottom' }}
          />
        </div>
      </CSReveal>
    </section>
  );
}

/* ====================================================
   THE BRIEF
   ==================================================== */
function CSBrief() {
  return (
    <section className="cs-section">
      <div className="cs-inner">
        <CSReveal><div className="cs-label">The Challenge</div></CSReveal>
        <CSReveal delay={0.05}>
          <h2 className="cs-h2">Getting to the pantry is the easy part. Getting to <em>everything else</em> is where the system fails.</h2>
        </CSReveal>
        <CSReveal delay={0.1}>
          <div className="cs-body">
            <p>Southeast Community Services (SECS) is a food pantry in Indianapolis but it is also much more. It offers job coaching, financial counseling, health referrals, English language classes, and housing support. Despite high pantry utilization, most neighbors never engage with these wraparound services.</p>
            <p>In parallel, Toyota Mobility Foundation wanted to explore whether autonomous vehicles could serve as genuine community infrastructure not a tech product, but a social service. Our year-long project answered both questions at once.</p>
          </div>
        </CSReveal>
        <CSReveal delay={0.15} className="brief-context">
          <div>
            <div className="brief-col-label">Partners</div>
            <div className="partner-list">
              <div className="partner-row">Toyota Mobility Foundation <span className="partner-role">TMF</span></div>
              <div className="partner-row">Southeast Community Services <span className="partner-role">SECS</span></div>
              <div className="partner-row" style={{fontSize:'14px', fontWeight:500, color:'var(--ink-3)'}}>+ 9 additional stakeholder organisations</div>
            </div>
          </div>
          <div>
            {[
              { label: 'Research', chips: ['AI-Moderated Interviews','Sticker Wall Studies','Focus Groups','Contextual Inquiry','Dedoose Qualitative Coding'] },
              { label: 'Design',   chips: ['Service Blueprinting','Journey Mapping','Persona Development','Speculative Design'] },
              { label: 'Facilitation', chips: ['3 Co-Design Workshops','11 Organisations Engaged','Persona-Anchored Ideation'] },
            ].map(({ label, chips }) => (
              <div className="skill-block" key={label}>
                <div className="skill-block-label">{label}</div>
                <div className="skill-chips">
                  {chips.map((c) => <span key={c} className="skill-chip">{c}</span>)}
                </div>
              </div>
            ))}
          </div>
        </CSReveal>
        <CSReveal delay={0.2} className="stat-row">
          {[['100+','Community participants','Across three field studies'],['12','Qualitative themes','From Dedoose coding'],['5','Research personas','Carried into co-design'],['11','Stakeholder organisations','Engaged in workshops']].map(([n,l,m]) => (
            <div className="stat-cell" key={l}><span className="stat-num">{n}</span><span className="stat-label">{l}</span><span className="stat-meta">{m}</span></div>
          ))}
        </CSReveal>
      </div>
    </section>
  );
}

/* ====================================================
   RESEARCH
   ==================================================== */
function CSResearch() {
  return (
    <section className="cs-section" style={{paddingTop:'40px'}}>
      <div className="cs-inner">
        <CSReveal><div className="cs-label">The Research Phase</div></CSReveal>
        <CSReveal delay={0.05}>
          <h2 className="cs-h2">We started with <span className="grad">100 neighbors.</span><br /> At 3 partner pantry across Indianapolis</h2>
        </CSReveal>
        <CSReveal delay={0.1}>
          <p className="cs-body">Over Fall 2025, we conducted three complementary field studies directly inside the pantry environment. The methods were not chosen independently they were designed as a system, each reaching a different depth and breadth of community voice.</p>
        </CSReveal>

        {[
          {
            flip: false, tag: 'Individual voices at scale.', h: 'Method 01: AI-Moderated Rapid Interviews',
            body: "We deployed AI-moderated audio interviews on tablets in the SECS driveway. The format reduced barriers for neighbors with limited literacy, removed the social pressure of face-to-face disclosure, and enabled branching logic to adapt to each participant's reality.",
            stats: [['27','interviews completed'],['5','conducted in Spanish']],
            img: {src:"/images/mobility/fig_2_3_1.png", tag:'Fig. 2.3.1', label:"AI INTERVIEW SETUP\nTablet on stand in the SECS outdoor driveway." },
          },
          {
            flip: true, tag: 'Patterns across the queue.', h: 'Method 02: Interactive Sticker Walls',
            body: "Four large-format visual walls were installed along the outdoor walk-in queue. Neighbors responded with stickers no writing required. 2–5 minutes per person, accessible across literacy levels, languages, and technology comfort.",
            stats: [['100+','neighbors participated over two weeks']],
            img: { src:"/images/mobility/fig_2_3_2.png",tag:'Fig. 2.3.2 · Page 14', label:"STICKER WALL PHOTO GRID (3×3)\nFour large-format participatory walls along the outdoor queue." },
          },
          {
            flip: false, tag: 'Collective sense-making in the room.', h: 'Method 03: Focus Groups with Insight Box',
            body: "We facilitated focus groups using a tactile method: participants drew their ideal home meal on paper plates. The meal became a metaphor for support, resources, and what is missing.",
            stats: [['4–8','participants per session'],['90–120','minutes each']],
            img: {src:"/images/mobility/fig_2_3_3.png", tag:'Fig. 2.3.3 · Page 15', label:"FOCUS GROUP / INSIGHT BOX\nParticipants drawing ideal meals on paper plates.\nReplace with: focus-group photo grid from report." },
          },
        ].map((m, i) => (
          <CSReveal key={m.tag} className={`method-block${m.flip ? ' flip' : ''}`}>
            <div className="method-visual">
              <img src={m.img.src} alt={m.img.label} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain', objectPosition: 'bottom' }} />
            </div>
            <div className="method-content">
              <div className="method-tag">{m.tag}</div>
              <h3 className="cs-h3">{m.h}</h3>
              <div className="cs-body" style={{marginTop:18}}><p>{m.body}</p></div>
              <div className="method-stats">
                {m.stats.map(([n,l]) => <div className="ms-row" key={l}><span className="ms-num">{n}</span><span className="ms-lbl">{l}</span></div>)}
              </div>
            </div>
          </CSReveal>
        ))}

        <CSReveal className="methods-compare">
          <div className="methods-compare-label">What each method reached</div>
          <div className="table-scroll">
          <div className="compare-grid">
            <div className="compare-cell head" /><div className="compare-cell head">Study 01: AI Interviews</div><div className="compare-cell head">Study 02: Sticker Walls</div><div className="compare-cell head">Study 03: Insight Box</div>
            <div className="compare-cell row-label">Participants</div><div className="compare-cell">~27 individuals</div><div className="compare-cell">100+ walk-in neighbors</div><div className="compare-cell">4–8 per session</div>
            <div className="compare-cell row-label">Duration</div><div className="compare-cell">10–15 min each</div><div className="compare-cell">2–5 min each</div><div className="compare-cell">90–120 min</div>
            <div className="compare-cell row-label">What it reached</div><div className="compare-cell">Individual barriers, motivations, aspirations</div><div className="compare-cell">Collective priorities, service awareness patterns</div><div className="compare-cell">Emotional depth, aspirational futures</div>
            <div className="compare-cell row-label">Language access</div><div className="compare-cell">English + Spanish</div><div className="compare-cell">English + Spanish </div><div className="compare-cell">English</div>
          </div>
          </div>
        </CSReveal>
      </div>
    </section>
  );
}

/* ====================================================
   SYNTHESIS
   ==================================================== */
function CSSynthesis() {
  const findings = [
    { n:'01', t:'Barriers are systemic, not individual', b:"Built into how services are scheduled, how spaces are designed, how information is communicated. Individual-level solutions don't scale." },
    { n:'02', t:'Neighbors are already solving these problems', b:'Informally, imperfectly, and at great personal cost: strategic trip chaining, proxy pantry pickups, informal carpools. The resilience is real. So is the unsustainability.' },
    { n:'03', t:'Any intervention must design around how neighbors actually live', b:'Not how service providers assume they live. These are not edge cases. They are the norm.' },
  ];
  return (
    <section className="cs-section dark">
      <div className="cs-inner">
        <CSReveal><div className="cs-label">Synthesis</div></CSReveal>
        <CSReveal delay={0.05}><h2 className="cs-h2">Nine themes. One reframe.</h2></CSReveal>
        <CSReveal delay={0.1}><p className="cs-body">Qualitative data from all three studies was systematically coded in Dedoose, producing twelve thematic categories. When we placed those themes side by side, one pattern emerged clearly:</p></CSReveal>
        <CSReveal delay={0.15} className="synthesis-quote">
          <div className="q-mark">The reframe</div>
          <div className="q-text">&ldquo;Transportation is not primarily a mobility problem. It is a coordination problem.&rdquo;</div>
        </CSReveal>
        <CSReveal delay={0.05}><p className="cs-body">The barrier isn&rsquo;t distance. It&rsquo;s the cascade of constraints  caregiving schedules, unpredictable shifts, language, stigma, carrying capacity  that transportation cuts across. When we named this in our report to SECS, it changed what the design needed to do.</p></CSReveal>
        <div className="findings-grid">
          {findings.map((f, i) => (
            <CSReveal key={f.n} delay={i * 0.08} className="finding-card">
              <span className="finding-num">{f.n} /</span>
              <h4 className="finding-title">{f.t}</h4>
              <p className="finding-body">{f.b}</p>
            </CSReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====================================================
   PERSONAS
   ==================================================== */
const PERSONAS = [
  { num:'01', name:'Arthur',src:"/images/mobility/arthur.png", label:'Homebound', facts:'Age 68 · Retired · Lives alone · No vehicle', story:"His hips hurt after 40 years of manual labor. He reaches the pantry by catching rides from neighbors  but hates asking. Increasingly, he stays home and skips meals rather than feel like a burden.", needs:"A door-to-door service that doesn't require asking anyone. Dignity means independence, not assistance that feels like charity." },
  { num:'02', name:'Maria',src:"/images/mobility/maria.png", label:'Volunteer Neighbour', facts:'Age 52 · School administrator + caregiver · High tech literacy', story:"She picks up food for two other families at the pantry. She runs the neighborhood group chat and organizes shared meals. She is also burning out. Everyone leans on Maria; Maria has no one to lean on.", needs:"Infrastructure that formalizes what she already does  so one person no longer has to carry the entire neighbor network." },
  { num:'03', name:'Joel',src:"/images/mobility/joel.png", label:'Working Hungry', facts:'Age 48 · Blended household of 7 · Low-wage, unpredictable schedule', story:"Both adults work low-wage jobs. Joel's challenge isn't motivation  it's that every system designed to help him assumes time and flexibility he doesn't have.", needs:"On-demand access that works around unpredictable schedules, without advance applications or proving need." },
  { num:'04', name:'Sarah', src:"/images/mobility/sarah.png",label:'Transportation Paradox', facts:'Age 35 · Single parent, 2 children · Owns a car; variable shifts', story:"She saved for a year to buy a used car. The car enabled her job  but created new financial pressure. When her car broke down, she couldn't work, reach the pantry, or get her children to school, all at once.", needs:"A mobility backup that doesn't require nothing going wrong. Multi-stop coordination in a single trip." },
  { num:'05', name:'Maya',src:"/images/mobility/maya.png", label:'No Transportation', facts:'Age 45 · Caregiver for son + aging mother · No car · Walks to pantry weekly', story:"Maya walks to the pantry almost every week. She can only carry what fits in her hands, so she leaves food on the shelf every visit. Survival prevents growth  not lack of will.", needs:"A ride that carries more than she can. A system that helps her access job coaching.", anchor: true },
];

function CSPersonas() {
  return (
    <section className="cs-section">
      <div className="cs-inner">
        <CSReveal><div className="cs-label">From Data to People</div></CSReveal>
        <CSReveal delay={0.05}><h2 className="cs-h2">Five analytical instruments, built from real patterns in real data.</h2></CSReveal>
        <CSReveal delay={0.1}><p className="cs-body">We developed five representative personas from the research. In Spring 2026, they were placed on workshop tables, and every stakeholder group voted on which person they were designing for before generating a single AV concept.</p></CSReveal>
        <div className="persona-grid">
          {PERSONAS.map((p, i) => (
            <CSReveal key={p.num} delay={i * 0.06} className={`persona-card${p.anchor ? ' anchor' : ''}`}>
              <div className="persona-portrait cs-img" style={{position:'relative'}}>
                <img
                src={p.src}
                alt={p.label}
                style={{ width: '100%', height: '100%', objectFit: "contain"}}
                />
                      </div>
              <span className="persona-num">Persona {p.num}</span>
              <div><div className="persona-name">{p.name}</div><div className="persona-label">{p.label}</div></div>
              <p className="persona-facts">{p.facts}</p>
              <p className="persona-story">{p.story}</p>
              <div className="persona-needs"><span className="needs-label">What she/he needs</span>{p.needs}</div>
            </CSReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====================================================
   WORKSHOPS
   ==================================================== */
const WORKSHOPS = [
  { n:'01', date:'Feb 6, 2026', who:'TMF Internal Team', sub:'Toyota Mobility Foundation core team.', persona:'Arthur · Maya', quote:'"The AV is not a vehicle. It is a coordination platform. Its value is not the ride  it\'s what the ride makes possible."' },
  { n:'02', date:'Feb 25, 2026', who:'Senior Pantry Volunteers', sub:'Long-tenured volunteers who run the day-to-day of SECS.', persona:'Maya', quote:'"The pantry is social infrastructure, not a distribution point. An AV that removes human presence misunderstands what the pantry is."' },
  { n:'03', date:'Mar 13, 2026', who:'Community System Stakeholders', sub:'11 organisations across hunger relief, mobility, planning, and logistics.', persona:'Arthur', quote:'"For Arthur, the delivery person may be the only human contact of the day. Relational engagement is a design requirement, not a feature."' },
];

const STAKEHOLDERS = [
  {name:'Indy Hunger Network',meta:'Coalition'},{name:'Shepherd Community Center',meta:'Direct Services'},{name:'IndyGo',meta:'Public Transit'},{name:'Indiana MPO Council',meta:'Planning'},{name:'Nine 13 Logistics',meta:'Mobility'},{name:'Gleaners Food Bank',meta:'Distribution'},{name:'Common Ground at Faith',meta:'Community'},{name:'Toyota Mobility Foundation',meta:'Funder'},{name:'Purdue University',meta:'Academic'},{name:'Butler University',meta:'Academic'},
];

function CSWorkshops() {
  return (
    <section className="cs-section">
      <div className="cs-inner">
        <CSReveal><div className="cs-label">Co-Design &amp; Workshops</div></CSReveal>
        <CSReveal delay={0.05}><h2 className="cs-h2">Three workshops. Three layers of the system. One design direction.</h2></CSReveal>
        <CSReveal delay={0.1}><p className="cs-body">Spring 2026 asked a different question: what would a mobility system need to do to actually serve these people? We facilitated three co-design workshops across different layers of the food pantry ecosystem.</p></CSReveal>
        <div className="workshop-row">
          {WORKSHOPS.map((w, i) => (
            <CSReveal key={w.n} delay={i * 0.08} className="workshop-card">
              <div className="workshop-date"><span className="ws-num">Workshop {w.n}</span><span>{w.date}</span><span className="ws-persona">Persona: {w.persona}</span></div>
              <div className="workshop-who">{w.who}<span className="ws-sub">{w.sub}</span></div>
              <div className="workshop-finding">{w.quote}</div>
            </CSReveal>
          ))}
        </div>
        <CSReveal className="stakeholders">
          <div className="sh-label">11 stakeholder organisations engaged across the program</div>
          <div className="sh-grid">
            {STAKEHOLDERS.map((s) => <div className="sh-cell" key={s.name}><span className="sh-name">{s.name}</span><span className="sh-meta">{s.meta}</span></div>)}
          </div>
        </CSReveal>
        <CSReveal delay={0.1} style={{marginTop:'96px'}}>
          <div className="cs-label" style={{marginBottom:'18px'}}>Workshop structure</div>
          <div className="flow-steps">
            {[{n:'01',t:'Understand the System'},{n:'02',t:'Identify Failure Points'},{n:'03',t:'Ideate AV Possibilities'},{n:'04',t:'Build & Evaluate'}].map((s) => (
              <div className="flow-step" key={s.n}><span className="step-num">Step {s.n}</span><span className="step-title">{s.t}</span></div>
            ))}
          </div>
        </CSReveal>
        <CSReveal style={{marginTop:'96px'}}>
          <div className="cs-label" style={{marginBottom:'18px'}}>What the workshops produced</div>
          <h3 className="cs-h3" style={{maxWidth:'24ch', marginBottom:'8px'}}>Six design principles for AV-as-social-service.</h3>
        </CSReveal>
        <div className="principles-grid">
          {[
            {n:'01',t:'Coordination, not conveyance',b:"The AV's value is not the ride. It is what the ride makes possible: multi-stop routing, time returned to the person, carrying capacity."},
            {n:'02',t:'Reach for those the system cannot serve',b:'Any system that optimises for the neighbor who can already mostly get there is not solving the problem.'},
            {n:'03',t:'Automate logistics to protect human connection',b:'AV deployment should automate the logistics load so human time is freed for relational work.'},
            {n:'04',t:'Flexible mode, on-demand service',b:'Transport food to people, or transport people to food  the answer is both, depending on who and when.'},
            {n:'05',t:'Trust built through demonstration',b:'Not information campaigns. A working pilot that people can see and test.'},
            {n:'06',t:'Sustainable model with measurable outcomes',b:'Each trip generates data that improves scheduling and demand forecasting.'},
          ].map((p, i) => (
            <CSReveal key={p.n} delay={i * 0.05} className="principle-card">
              <span className="principle-num">Principle {p.n}</span>
              <h4 className="principle-title">{p.t}</h4>
              <p className="principle-body">{p.b}</p>
            </CSReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====================================================
   DESIGN SOLUTION
   ==================================================== */
function ReachVis({ kind }) {
  if (kind === 'before') {
    return (
      <svg viewBox="0 0 280 200" width="100%" height="100%" style={{maxHeight:240}} aria-hidden="true">
        <defs>
          <radialGradient id="rb"><stop offset="0%" stopColor="rgba(99,102,241,0.18)" /><stop offset="100%" stopColor="rgba(99,102,241,0)" /></radialGradient>
        </defs>
        <circle cx="140" cy="100" r="78" fill="url(#rb)" />
        <circle cx="140" cy="100" r="78" fill="none" stroke="rgba(99,102,241,0.35)" strokeDasharray="3 4" strokeWidth="1" />
        <circle cx="140" cy="100" r="10" fill="#09090B" />
        <text x="140" y="103" textAnchor="middle" fontSize="9" fontWeight="700" fill="#FAFAFA">HUB</text>
        {[[20,40],[50,170],[240,40],[260,150],[220,180]].map(([x,y],i) => <circle key={i} cx={x} cy={y} r="3.5" fill="#A1A1AA" />)}
        <text x="140" y="195" textAnchor="middle" fontSize="9" fill="#71717A">~walking radius</text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 280 200" width="100%" height="100%" style={{maxHeight:240}} aria-hidden="true">
      <defs>
        <radialGradient id="ra"><stop offset="0%" stopColor="rgba(99,102,241,0.18)" /><stop offset="100%" stopColor="rgba(99,102,241,0)" /></radialGradient>
        <radialGradient id="ra2"><stop offset="0%" stopColor="rgba(192,132,252,0.10)" /><stop offset="100%" stopColor="rgba(192,132,252,0)" /></radialGradient>
      </defs>
      <circle cx="140" cy="100" r="120" fill="url(#ra2)" />
      <circle cx="140" cy="100" r="78" fill="url(#ra)" />
      <circle cx="140" cy="100" r="120" fill="none" stroke="rgba(192,132,252,0.4)" strokeDasharray="4 4" strokeWidth="1" />
      <circle cx="140" cy="100" r="78" fill="none" stroke="rgba(99,102,241,0.45)" strokeDasharray="3 4" strokeWidth="1" />
      {[[20,40],[50,170],[240,40],[260,150],[220,180]].map(([x,y],i) => <line key={i} x1={140} y1={100} x2={x} y2={y} stroke="rgba(99,102,241,0.35)" strokeWidth="1" strokeDasharray="2 3" />)}
      {[[20,40],[50,170],[240,40],[260,150],[220,180]].map(([x,y],i) => <circle key={'p'+i} cx={x} cy={y} r="4.5" fill="#6366F1" />)}
      <circle cx="140" cy="100" r="10" fill="#09090B" />
      <text x="140" y="103" textAnchor="middle" fontSize="9" fontWeight="700" fill="#FAFAFA">HUB</text>
    </svg>
  );
}

function CSSolution() {
  return (
    <section className="cs-section">
      <div className="cs-inner">
        <CSReveal><div className="cs-label">The Design Solution</div></CSReveal>
        <CSReveal delay={0.05}><h2 className="cs-h2"><span className="grad">On-demand AV</span> as a service bridge.</h2></CSReveal>
        <CSReveal delay={0.1}><p className="cs-body">The design is not a transportation product. It is a community mobility service where autonomous vehicles extend the pantry&rsquo;s geographic and temporal reach. The AV absorbs the access cost. The pantry hub remains the anchor.</p></CSReveal>
        <div className="capability-grid">
          {[
            {l:'Capability 01',t:'Transportation',b:"The system builds the route around the neighbor's schedule before they request it  multi-stop, pantry-first, no fare."},
            {l:'Capability 02',t:'Community Services Access',b:"Inside the AV, a display terminal connects to community services. During transit, the neighbor can access job coaching, financial counseling, health referrals."},
            {l:'Capability 03',t:'Storage & Carrying Capacity',b:"The AV carries what the neighbor cannot. The carrying calculation that determines how much Maya takes home each week no longer applies."},
          ].map((c, i) => (
            <CSReveal key={c.l} delay={i * 0.08} className="capability">
              <span className="capability-label">{c.l}</span>
              <h3 className="capability-title">{c.t}</h3>
              <p className="capability-body">{c.b}</p>
            </CSReveal>
          ))}
        </div>
        <CSReveal style={{marginTop:'120px'}}>
          <div className="cs-label" style={{marginBottom:'24px'}}>Fig. 5.1 · Reach diagram</div>
          <h3 className="cs-h3" style={{maxWidth:'28ch'}}>The AV extends what the pantry hub can reach  in distance and in time.</h3>
          <img src={'/images/mobility/hero-inner.png'} alt={'design solution'} style={{ width: '100%', height: '100%', objectFit: "contain", objectPosition:"bottom"}} />
        </CSReveal>
        {/* <CSReveal delay={0.1} className="reach-diagram">
          <div className="reach-panel before">
            <span className="rp-label">Before · Pantry hub alone</span>
            <span className="rp-title">Reach contracted by everyday constraints</span>
            <div className="rp-vis"><ReachVis kind="before" /></div>
            <p className="rp-foot">Walking distance, weather, carrying capacity, bus fare, and shift timing all shrink the pantry&rsquo;s effective service radius.</p>
          </div>
          <div className="reach-panel after">
            <span className="rp-label">After · Pantry hub + AV service</span>
            <span className="rp-title">Reach extended in geography <em>and</em> time</span>
            <div className="rp-vis"><ReachVis kind="after" /></div>
            <p className="rp-foot">Geographic reach extends to workplaces, schools, and homes. A second layer extends community services into transit time.</p>
          </div>
        </CSReveal> */}
        <CSReveal className="points-callout">
          <h3 className="points-title">A points-based access model  like SNAP, but for movement.</h3>
          <div className="points-body">
            <p>Neighbors enroll through the pantry and receive a monthly mobility allocation. Pantry trips draw the fewest points. Engaging with community services during transit earns bonus points.</p>
            <p>The system rewards the behaviors it was designed to enable  and converts usage into the data the program needs to keep itself funded.</p>
          </div>
        </CSReveal>
      </div>
    </section>
  );
}

/* ====================================================
   SERVICE BLUEPRINT
   ==================================================== */
function CSBlueprint() {
  return (
    <section className="cs-section">
      <div className="cs-inner">
        <CSReveal><div className="cs-label">Service Blueprint</div></CSReveal>
        <CSReveal delay={0.05}><h2 className="cs-h2">Seven phases. Four swim lanes. One human journey.</h2></CSReveal>
        <CSReveal delay={0.1}><p className="cs-body">The service blueprint maps the full operational structure across Maya&rsquo;s journey  from the moment her shift ends through pickup, in-vehicle experience, pantry arrival, and return home.</p></CSReveal>
        <CSReveal className="blueprint-block">
          <div className="blueprint-img cs-img" style={{height:620}}>
            <span className="placeholder-tag">Fig. 7.1 · Page 43</span>
            <span className="placeholder-label">{"SERVICE EXPERIENCE BLUEPRINT\nFull spread: 7 phases × 4 swim lanes\nReplace with: blueprint page exported at 300dpi+"}</span>
          </div>
          <div className="blueprint-value-strip">
            {[['Phase 01–02','Time saved'],['Phase 02–03','No fare tradeoff'],['Phase 03','Career growth'],['Phase 04','Full week groceries'],['Phase 05','Transit connectivity'],['Phase 04–06','Community connection'],['Phase 06','Trust & dignity'],['Phase 07','Energy for family']].map(([k,v]) => (
              <div className="value-pill" key={v}><span className="vl">{k}</span>{v}</div>
            ))}
          </div>
        </CSReveal>
        <CSReveal className="blueprint-phases">
          <div>
            <div className="column-heading">Seven phases</div>
            <div className="phases-list">
              {['Trigger & Need Pre-Trip','Pickup & Routing','In-Vehicle Experience','Pantry Hub Arrival','Micro-Transit Connect','Return Home','Post-Trip'].map((p,i) => (
                <div className="phase-row" key={p}><span className="pn">{String(i+1).padStart(2,'0')}</span><span className="pt">{p}</span></div>
              ))}
            </div>
          </div>
          <div>
            <div className="column-heading">Four lanes</div>
            <div className="lanes-list">
              {[['Maya (User)','Her lived journey  what she does, sees, feels.'],['Frontstage','Everything Maya can perceive  vehicle, terminal, staff.'],['Backstage','Hidden system operations  routing, dispatch, profile sync.'],['Support Process','Infrastructure  partner integrations, data, funding loops.']].map(([n,t]) => (
                <div className="lane-row" key={n}><span className="ln">{n}</span><span className="lt">{t}</span></div>
              ))}
            </div>
          </div>
        </CSReveal>
      </div>
    </section>
  );
}

/* ====================================================
   OUTCOMES
   ==================================================== */
function CSOutcomes() {
  return (
    <section className="cs-section">
      <div className="cs-inner">
        <CSReveal><div className="cs-label">Outcomes</div></CSReveal>
        <CSReveal delay={0.05}><h2 className="cs-h2">What the work moved.</h2></CSReveal>
        <div className="outcomes-grid">
          {[
            {stat:'3 / 3',label:'Pantry stakeholders rated concept clarity 4/5',body:'Discussion moved immediately to implementation, not explanation.'},
            {stat:'4 / 5',label:'Concept clarity score',body:'The first question stakeholders asked was "how do we build this?" not "what is this?"'},
            {stat:'#1',   label:'Most-valued feature across stakeholder responses',body:'Connecting neighbors to clinics, job centers, and schools  not the ride itself.'},
          ].map((o, i) => (
            <CSReveal key={o.stat} delay={i * 0.08} className="outcome-card">
              <span className="outcome-stat">{o.stat}</span>
              <span className="outcome-label">{o.label}</span>
              <p className="outcome-body">{o.body}</p>
            </CSReveal>
          ))}
        </div>
        <CSReveal className="reflection">
          <div className="cs-label" style={{marginBottom:'16px'}}>Reflection</div>
          <h3 className="cs-h3" style={{maxWidth:'24ch'}}>What this project taught me.</h3>
          <div className="cs-body" style={{fontSize:'19px', maxWidth:'72ch', color:'var(--ink)'}}>
            <p>This project changed how I think about &ldquo;the user.&rdquo; The most important insights didn&rsquo;t come from formal interviews. They came from people who had already designed workarounds. The best service design doesn&rsquo;t replace these systems. It learns from them.</p>
            <p>I also learned that workshop facilitation is a political act. Who&rsquo;s in the room, who speaks first, who feels safe enough to push back  these decisions shape the output as much as any design method.</p>
            <p>The gap between food pantry use and service engagement wasn&rsquo;t a motivational problem. It was a structural one. <strong>That reframe was the whole project.</strong></p>
          </div>
        </CSReveal>
      </div>
    </section>
  );
}

/* ====================================================
   PROTOTYPE CTA
   ==================================================== */
function CSProto() {
  return (
    <section className="proto-cta">
      <div className="proto-cta-inner">
        <CSReveal>
          <div className="cs-label">Interactive Experience</div>
          <h2>Follow Maya through a single day with the service running.</h2>
        </CSReveal>
        <CSReveal delay={0.1}>
          <p>The full project includes an interactive stakeholder-facing experience  a horizontal-scroll narrative following Maya through the service as designed.</p>
          <a className="proto-link" href="https://mobility-as-social-service.vercel.app" target="_blank" rel="noopener noreferrer">
            View the interactive prototype <span className="arr">↗</span>
          </a>
          <div className="proto-url">https://mobility-as-social-service.vercel.app</div>
        </CSReveal>
      </div>
    </section>
  );
}

function CSNext() {
  return (
    <section className="next-project">
      <div className="next-project-inner">
        <span className="np-label">Next Case Study</span>
        <div>
          <div className="np-title">↓ Wander Indy</div>
          <div className="np-meta">Interaction Design · Prototyping · Phygital Systems · 2024—2025</div>
        </div>
        <Link className="np-link" to="/case-study/wander-indy">Read case study <span>→</span></Link>
      </div>
    </section>
  );
}

/* ====================================================
   APP
   ==================================================== */
const CS_DEFAULTS = { accent: '#6366F1', gradient: 'indigo-violet-pink', showCursor: true };
const CS_GRADIENTS = {
  'indigo-violet-pink': 'linear-gradient(135deg, #A5B4FC 0%, #C084FC 50%, #F9A8D4 100%)',
  'blue-cyan': 'linear-gradient(135deg, #93C5FD 0%, #67E8F9 100%)',
  'violet-rose': 'linear-gradient(135deg, #C4B5FD 0%, #FDA4AF 100%)',
  'emerald-cyan': 'linear-gradient(135deg, #6EE7B7 0%, #67E8F9 100%)',
  'mono': 'linear-gradient(135deg, #FAFAFA 0%, #A1A1AA 100%)',
};
const CS_ACCENTS = ['#6366F1', '#7C3AED', '#0EA5E9', '#10B981', '#F43F5E'];

export default function Mobility() {
  const [t, setTweak] = useTweaks(CS_DEFAULTS);
  useEffect(() => {
    document.documentElement.style.setProperty('--accent', t.accent);
    document.documentElement.style.setProperty('--accent-soft', `${t.accent}0a`);
    document.documentElement.style.setProperty('--grad', CS_GRADIENTS[t.gradient] || CS_GRADIENTS['indigo-violet-pink']);
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    document.documentElement.style.setProperty('--accent', t.accent);
    document.documentElement.style.setProperty('--accent-soft', `${t.accent}0a`);
    document.documentElement.style.setProperty('--grad', CS_GRADIENTS[t.gradient] || CS_GRADIENTS['indigo-violet-pink']);
  }, [t.accent, t.gradient]);
  return (
    <>
      {t.showCursor && <Cursor />}
      <Cursor />
      <Nav />
      <main>
        <CSHero />
        <CSHeroImage />
        <CSBrief />
        <CSResearch />
        <CSSynthesis />
        <CSPersonas />
        <CSWorkshops />
        <CSSolution />
        {/* <CSBlueprint /> */}
        <CSOutcomes />
        <CSProto />
        <CSNext />
      </main>
      <TweaksPanel title="Tweaks">
        <TweakSection label="Gradient">
          <TweakRadio label="Palette" value={t.gradient} onChange={(v) => setTweak('gradient', v)}
            options={[{value:'indigo-violet-pink',label:'Indigo · Pink'},{value:'blue-cyan',label:'Blue · Cyan'},{value:'violet-rose',label:'Violet · Rose'},{value:'emerald-cyan',label:'Emerald · Cyan'},{value:'mono',label:'Monochrome'}]}
          />
        </TweakSection>
        <TweakSection label="Accent">
          <TweakColor label="Interactive color" value={t.accent} onChange={(v) => setTweak('accent', v)} options={CS_ACCENTS} />
        </TweakSection>
        <TweakSection label="Cursor">
          <TweakToggle label="Custom cursor" value={t.showCursor} onChange={(v) => setTweak('showCursor', v)} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}
