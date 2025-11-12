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

// SEO Configuration
export const SEO = {
  siteName: "Shashidhara Narayanappa",
  siteUrl: "https://shashidhara.com", // Update with your actual domain
  authorName: "Shashidhara Narayanappa",
  twitterHandle: "@yourhandle", // Update with your Twitter handle
  defaultImage: "/images/og-default.png",
} as const;

export const PROJECTS = [
  {
    id: "growthops",
    title: "GrowthOps Dashboard",
    shortTitle: "SMB Operations",
    description: "Unified dashboard transforming operational chaos into clarity for small business founders",
    seoDescription: "UX case study: Designed unified operations dashboard for small businesses, integrating tools like QuickBooks and Salesforce with AI-powered insights. User research, dashboard design, and technical architecture.",
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
    seoDescription: "Qualitative research study investigating how 25 UX professionals and students integrate GenAI tools like ChatGPT across the design lifecycle. Academic research submitted to ACM IUI '26.",
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
    seoDescription: "VR research project building the first spontaneous emotion recognition dataset in virtual reality. Developing Unity-based VR environments to capture 63 facial action units at 30Hz for emotion analysis.",
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
    seoDescription: "UX design case study: Urban exploration wayfinding system transforming Indianapolis into an interactive experience. Mobile app and kiosk design with mood-based trails and stamp challenges.",
    year: "2025",
    role: "UX Lead",
    color: COLORS.wanderIndy,
    image: "/images/wanderindy/card.png",
    tags: ["Interaction Design", "Public Space", "Prototyping"],
    categories: [PROJECT_CATEGORIES.RESEARCH, PROJECT_CATEGORIES.DESIGN],
  },
] as const;

// Tool Categories
export const TOOL_CATEGORIES = {
  DESIGN: 'Design',
  RESEARCH: 'Research',
  DEVELOPMENT: 'Development',
  PRODUCTIVITY: 'Productivity',
} as const;

// Tools & AI
export const TOOLS = [
  {
    name: "ChatGPT",
    category: TOOL_CATEGORIES.DESIGN,
    description: "Accelerates ideation, user research synthesis, and content drafting. Essential for rapid prototyping of conversation flows and generating diverse design concepts.",
    url: "https://chat.openai.com",
    icon: "🤖",
  },
  {
    name: "Claude",
    category: TOOL_CATEGORIES.RESEARCH,
    description: "Long-form qualitative analysis and thematic synthesis. Perfect for processing interview transcripts and extracting deep insights from user research data.",
    url: "https://claude.ai",
    icon: "🧠",
  },
  {
    name: "Midjourney",
    category: TOOL_CATEGORIES.DESIGN,
    description: "Visual concept exploration and mood board generation. Transforms abstract ideas into tangible visual directions for design systems and branding.",
    url: "https://midjourney.com",
    icon: "🎨",
  },
  {
    name: "Figma",
    category: TOOL_CATEGORIES.DESIGN,
    description: "Complete design system and prototyping platform. Where ideas transform into interactive, pixel-perfect experiences through collaborative design.",
    url: "https://figma.com",
    icon: "✏️",
  },
  {
    name: "GitHub Copilot",
    category: TOOL_CATEGORIES.DEVELOPMENT,
    description: "AI pair programmer accelerating development workflows. Handles boilerplate, suggests patterns, and speeds up implementation of research prototypes.",
    url: "https://github.com/features/copilot",
    icon: "💻",
  },
  {
    name: "Notion AI",
    category: TOOL_CATEGORIES.PRODUCTIVITY,
    description: "Research note organization and literature review synthesis. Transforms scattered thoughts into structured knowledge bases for project documentation.",
    url: "https://notion.so",
    icon: "📝",
  },
  {
    name: "Perplexity",
    category: TOOL_CATEGORIES.RESEARCH,
    description: "Academic research and domain knowledge discovery. Provides cited, accurate information for understanding new research areas and technical concepts.",
    url: "https://perplexity.ai",
    icon: "🔍",
  },
  {
    name: "v0 by Vercel",
    category: TOOL_CATEGORIES.DEVELOPMENT,
    description: "Rapid UI component generation from natural language. Accelerates frontend development with production-ready React components.",
    url: "https://v0.dev",
    icon: "⚡",
  },
] as const;

// Lab Projects
export const LAB_PROJECTS = [
  {
    id: "example-project",
    title: "Example Project",
    description: "A brief description of your experimental coding project and what it explores",
    image: "/images/lab/example.png",
    tags: ["React", "Next.js", "TypeScript"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    year: "2025",
  },
  // Add your actual projects here
] as const;
