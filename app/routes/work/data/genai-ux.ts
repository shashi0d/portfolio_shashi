export const genaiUxProject = {
  id: "genai-ux",
  title: "Opportunities and Challenges for Generative AI in UX Design",
  description: "Investigated how UX professionals and students integrate GenAI tools across the design lifecycle through 25 retrospective interviews, revealing stark differences between ideation success and prototyping limitations.",
  years: "2025",
  role: "Secondary Author, Interview Lead",
  scope: "Qualitative Research, Thematic Analysis, Academic Writing",
  media: [
    { name: "ACM IUI '26 (Under Review)", url: "#" },
    { name: "SETH Lab", url: "#" }
  ],
  hasVideo: false,
  images: [
    "/images/genai-ux/hero.png",
    "/images/genai-ux/word-cloud.png",
    "/images/genai-ux/comparison.png",
    "/images/genai-ux/usage-graph.png",
    "/images/genai-ux/affinity-mapping.png"
  ],
  
  challenge: "GenAI tools like ChatGPT and Midjourney were rapidly transforming how designers work, but we had no clear picture of how they fit into the full design lifecycle. Most research focused only on early-stage ideation, leaving us blind to what was actually happening in prototyping and testing phases",
  
  solution: "We conducted retrospective interviews with 25 UX professionals and students, asking them to walk through past projects and reflect on exactly how, when, and why they used AI tools. By analyzing their real experiences across research, ideation, prototyping, and testing, we uncovered the true patterns of AI adoption and its limitations",
  
  sections: [
    {
      header: "STUDENTS VS. PROFESSIONALS",
      content: "The divide was striking. Students treated ChatGPT as a research assistant helping them draft interview questions, generate ideas, and learn domain knowledge. They experimented freely, unbound by organizational constraints.\n\nProfessionals, on the other hand, were cautious. They used AI to accelerate workflows but expressed deep concerns about accuracy, data privacy, and design fixation. Many worked in companies where GenAI tools were restricted entirely",
      visual: "/images/genai-ux/comparison.png"
    },
    {
      header: "WHERE AI ACTUALLY WORKS",
      content: "AI shined brightest in the early phases. 90% of participants used ChatGPT, primarily for brainstorming, summarizing research, and structuring ideas. Tools like Perplexity and Claude helped gather domain knowledge quickly.\n\nBut the further we moved through the design cycle, the more AI fell short. In prototyping and testing, outputs lacked precision, contextual sensitivity, and the nuance needed for professional work. Designers consistently chose manual work over fighting with generic AI suggestions",
      visual: "/images/genai-ux/usage-graph.png"
    },
    {
      header: "THE FIXATION PROBLEM",
      content: "A recurring theme emerged: design fixation. When designers relied too heavily on AI's first suggestions, they converged too early on mediocre ideas. The AI became a crutch rather than a collaborator.\n\nAs one senior designer put it: \"I always do something on my own first because I don't want to get influenced by its first response\"",
      visual: "/images/genai-ux/quote-card.png"
    },
    {
      header: "MY ROLE",
      content: "As secondary author, I led 5 of the 25 interviews and took charge of deriving themes from the data. The biggest challenge? Managing massive amounts of qualitative data each 1-hour interview generated extensive transcripts.\n\nI used AI itself to help group responses into themes (meta, right?), but I had to carefully prompt it to preserve important details. The synthesis process was extensive: raw transcripts → FigJam affinity mapping → refined themes. It taught me how to balance AI efficiency with human oversight",
      visual: "/images/genai-ux/affinity-mapping.png"
    }
  ],
  
  outcomes: {
    metrics: undefined,
    text: "First comprehensive study of GenAI use across the full UX lifecycle. Clear evidence of phase-specific adoption patterns. Design recommendations for future AI tools including prompt scaffolding interfaces, co-creative feedback loops, divergence control mechanisms, and thematic traceability dashboards.\n\nContributing to academic knowledge of human-AI collaboration in design practice."
  },
  
  reflection: "What I'm most proud of is experiencing firsthand the challenges we were researching. Using AI to analyze research about AI taught me its true limitations it's powerful for speed, but requires constant human judgment to maintain quality and depth."
};
