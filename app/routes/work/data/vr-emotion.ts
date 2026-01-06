export const vrEmotionProject = {
  id: "vr-emotion",
  title: "Emotion Recognition in Virtual Reality Using Meta Quest Pro",
  description: "Building the first VR emotion dataset with spontaneous facial expressions. Designed the complete research pipeline in Unity, conducting 50 participant sessions to capture genuine emotional reactions across six basic emotions.",
  years: "2024–Present",
  role: "Lead Researcher & VR Developer",
  scope: "VR Development, Research Design, Data Collection, Unity Development",
  media: [
    { name: "SETH Lab", url: "#" },
    { name: "IEEE VR / Meaningful XR / Empathic Computing", url: "#" }
  ],
  hasVideo: false,
  images: [
    "/images/vr-emotion/hero.png",
    "/images/vr-emotion/unity-environment.png",
    "/images/vr-emotion/stimuli.png",
    "/images/vr-emotion/data-collection.png",
    "/images/vr-emotion/multimodal-data.png"
  ],
  
  challenge: "VR research was missing something fundamental. While plenty of studies explored emotions in virtual environments, they all relied on posed, acted expressions. We had no datasets capturing what people's faces actually do when they experience genuine emotions in VR the spontaneous, natural reactions that matter most",
  
  solution: "I designed and built a complete research pipeline from scratch. Using the Meta Quest Pro's built-in facial tracking, I'm collecting spontaneous emotional expressions from 50 university students as they watch validated emotional videos in VR. The result: the first dataset of its kind, capturing natural facial expressions across all six basic emotions in an immersive environment",
  
  sections: [
    {
      header: "BUILDING THE SYSTEM",
      content: "I developed the entire VR environment in Unity, complete with a virtual screen for video playback and real-time avatar mirroring. The Meta Quest Pro captures 63 facial action units at 30 Hz FACS-compatible data that can support everything from frame-based classification to time-series modeling.\n\nThe technical challenge wasn't just building it it was building it right. Data synchronization, timestamp alignment, CSV export pipelines. Every detail mattered",
      visual: "/images/vr-emotion/unity-environment.png"
    },
    {
      header: "CHOOSING THE RIGHT STIMULI",
      content: "Not all emotional videos are created equal. I curated clips from the FilmStim dataset for five emotions (anger, disgust, sadness, surprise, fear) because of their high-definition quality and validated arousal-valence ratings. For happiness, I compiled clips from Friends testing multiple versions to find what actually made people smile.\n\nBetween each emotional clip, participants see a 20-second neutral animation. Not glamorous, but essential for resetting their baseline state",
      visual: "/images/vr-emotion/stimuli.png"
    },
    {
      header: "THE DATA COLLECTION",
      content: "I'm conducting all 50 sessions myself. 30 participants complete, 20 to go. Each 30-minute session requires careful calibration, patient guidance, and meticulous data collection. It's exhausting. It's exhilarating.\n\nEvery session generates: 63 facial action unit values captured at 30 Hz, RGB avatar frames showing real-time expressions, post-session self-reports (emotion identification, intensity ratings), and IRI empathy questionnaire responses",
      visual: "/images/vr-emotion/data-collection.png"
    },
    {
      header: "MULTI-MODAL DATA",
      content: "This isn't just a dataset it's a foundation for future emotion recognition models that understand genuine human reactions in immersive environments. The data supports three recognition strategies: frame-based classification using CNNs on avatar images, time-series modeling of AU vectors using LSTM approaches, and multi-modal fusion for enhanced accuracy",
      visual: "/images/vr-emotion/multimodal-data.png"
    }
  ],
  
  outcomes: {
    metrics: [
      { label: "Participants Completed", value: "30/50" },
      { label: "Data Points per Session", value: "~54,000" },
      { label: "Facial Action Units", value: "63" }
    ],
    text: "First publicly available VR emotion dataset with spontaneous (not posed) expressions. High-fidelity FACS-based tracking across all six basic emotions. Targeting IEEE VR, Meaningful XR, or Empathic Computing conferences."
  },
  
  reflection: "Leading this project taught me what independent research really means. There's no one to ask \"is this right?\" you have to know. From designing the study to debugging Unity crashes at 2 AM to explaining consent forms, every decision is mine. It's the best kind of pressure."
};
