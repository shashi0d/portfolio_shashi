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
} as const;

export const TYPOGRAPHY = {
  fontFamily: {
    sans: 'Inter, system-ui, sans-serif',
    display: 'Space Grotesk, Inter, sans-serif',
    mono: 'JetBrains Mono, monospace',
  },
} as const;

export const PROJECTS = [
  {
    id: "genai-ux",
    title: "GenAI in UX Design",
    shortTitle: "AI + Design",
    description: "How UX professionals integrate AI tools across the design lifecycle",
    year: "2025",
    role: "Research Lead",
    color: COLORS.genai,
    tags: ["Qualitative Research", "AI", "UX"],
  },
  {
    id: "vr-emotion",
    title: "VR Emotion Recognition",
    shortTitle: "Emotion in VR",
    description: "Building the first spontaneous emotion dataset in virtual reality",
    year: "2024",
    role: "Lead Researcher",
    color: COLORS.vrEmotion,
    tags: ["VR Development", "Data Collection", "Unity"],
  },
  {
    id: "wanderindy",
    title: "WanderIndy",
    shortTitle: "Urban Explorer",
    description: "Transforming Indianapolis into an interactive storybook",
    year: "2025",
    role: "UX Lead",
    color: COLORS.wanderIndy,
    tags: ["Interaction Design", "Public Space", "Prototyping"],
  },
] as const;
