// Design System Constants

export const COLORS = {
  // Base
  background: '#FFFFFF',
  text: '#0A0A0A',
  textSecondary: '#6B7280',

  // Project Accents
  genai: '#3B82F6',      // Electric Blue
  vrEmotion: '#8B5CF6',  // Deep Purple
  wanderIndy: '#F97316', // Warm Coral
  growthOps: '#10B981',  // Emerald Green
} as const;

export const TYPOGRAPHY = {
  fontFamily: {
    sans: 'Inter, system-ui, sans-serif',
    display: 'Space Grotesk, Inter, sans-serif',
    mono: 'JetBrains Mono, monospace',
  },
} as const;

export const PROJECT_CATEGORIES = {
  RESEARCH: 'Research',
  DESIGN: 'Design',
  DEVELOPMENT: 'Development',
} as const;

export const PROJECTS = [
  {
    id: "growthops",
    title: "GrowthOps Dashboard",
    shortTitle: "SMB Operations",
    description: "Unified dashboard transforming operational chaos into clarity for small business founders",
    year: "2024",
    role: "Technical Architecture & Integration Strategy",
    color: COLORS.growthOps,
    image: "/images/growthops/card.png",
    tags: ["User Research", "Dashboard Design", "AI Integration"],
    categories: [PROJECT_CATEGORIES.RESEARCH, PROJECT_CATEGORIES.DESIGN],
  },
  {
    id: "genai-ux",
    title: "GenAI in UX Design",
    shortTitle: "AI + Design",
    description: "How UX professionals integrate AI tools across the design lifecycle",
    year: "2025",
    role: "Research Lead",
    color: COLORS.genai,
    image: "/images/genai-ux/card.png",
    tags: ["Qualitative Research", "AI", "UX"],
    categories: [PROJECT_CATEGORIES.RESEARCH],
  },
  {
    id: "vr-emotion",
    title: "VR Emotion Recognition",
    shortTitle: "Emotion in VR",
    description: "Building the first spontaneous emotion dataset in virtual reality",
    year: "2024",
    role: "Lead Researcher",
    color: COLORS.vrEmotion,
    image: "/images/vr-emotion/card.png",
    tags: ["VR Development", "Data Collection", "Unity"],
    categories: [PROJECT_CATEGORIES.RESEARCH, PROJECT_CATEGORIES.DEVELOPMENT],
  },
  {
    id: "wanderindy",
    title: "WanderIndy",
    shortTitle: "Urban Explorer",
    description: "Transforming Indianapolis into an interactive storybook",
    year: "2025",
    role: "UX Lead",
    color: COLORS.wanderIndy,
    image: "/images/wanderindy/card.png",
    tags: ["Interaction Design", "Public Space", "Prototyping"],
    categories: [PROJECT_CATEGORIES.RESEARCH, PROJECT_CATEGORIES.DESIGN],
  },
] as const;
