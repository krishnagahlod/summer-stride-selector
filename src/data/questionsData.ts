
import { Question, RecommendationGroup } from "@/types";

export const questions: Question[] = [
  {
    id: "goal",
    text: "What do you want to focus on this summer?",
    options: [
      { id: "startup", text: "Work on startup ideas" },
      { id: "internship", text: "Land an internship" },
      { id: "skill", text: "Learn a new skill / do a project" },
      { id: "chill", text: "Chill but do something fun & light" },
      { id: "explore", text: "Still figuring it out" }
    ]
  },
  {
    id: "domain",
    text: "What field or interest area are you inclined toward?",
    isOptional: true,
    options: [
      { id: "tech", text: "Tech (AI, coding)" },
      { id: "finance", text: "Finance / Markets" },
      { id: "design", text: "Design / UI-UX" },
      { id: "marketing", text: "Marketing / Content" },
      { id: "sustainability", text: "Sustainability / Climate" },
      { id: "general", text: "General Exploration" }
    ]
  }
];

export const recommendationGroups: RecommendationGroup[] = [
  {
    id: "startup",
    title: "Startup Explorer Path",
    description: "Great choice! Let's help you explore and validate startup ideas this summer.",
    actionPlan: {
      steps: [
        { text: "List 3–5 real-life problems you've noticed around you" },
        { text: "Think of 2–3 creative or tech-based solutions" },
        { text: "Validate with friends or a simple survey" },
        { text: "Fill a Lean Canvas to frame your idea" },
        { text: "Join a student startup community for support" },
        { text: "Enter an ideathon or college startup challenge" }
      ],
      whatsappLink: "https://chat.whatsapp.com/Dgau6ceYkjU4ItggKPFCS5"
    }
  },
  {
    id: "internship",
    title: "Internship Seeker Path",
    description: "Let's prepare you for landing that perfect internship!",
    actionPlan: {
      steps: [
        { text: "Choose 1–2 domains to explore (tech, finance, marketing, etc.)" },
        { text: "Create or update your resume" },
        { text: "Apply weekly through Internshala, LinkedIn, etc." },
        { text: "Ask seniors or profs for guidance or referrals" },
        { text: "Upskill with project-based online courses" },
        { text: "Do 1–2 mock interviews before the real ones" }
      ],
      whatsappLink: "https://chat.whatsapp.com/CLr4KtPydx24aBKfVSJb6U"
    }
  },
  {
    id: "skill",
    title: "Skill Builder Path",
    description: "Ready to level up your skills? Here's your roadmap!",
    actionPlan: {
      steps: [
        { text: "Pick one key skill: coding, UI/UX, AI, investing, etc." },
        { text: "Choose a hands-on course with exercises (Coursera, NPTEL, etc.)" },
        { text: "Commit to a weekly schedule (e.g., 5 hrs/week)" },
        { text: "Do a project and upload to GitHub/Portfolio" },
        { text: "Share your learning via a blog or short post" },
        { text: "Join a community to ask doubts and get feedback" }
      ]
    }
  },
  {
    id: "chill",
    title: "Balanced Explorer Path",
    description: "A relaxed yet productive summer ahead! Here's how to make it count.",
    actionPlan: {
      steps: [
        { text: "Pick a chill activity: yoga, journaling, digital art, or podcasting" },
        { text: "Spend 2–3 hours/week on it without pressure" },
        { text: "Document your journey with photos or short videos" },
        { text: "Try one new hobby every 2 weeks" },
        { text: "Reflect mid-summer: What's been most joyful?" },
        { text: "Share learnings with friends or on social media" }
      ]
    }
  },
  {
    id: "explore",
    title: "Discovery Path",
    description: "Let's help you explore different possibilities and find what excites you!",
    actionPlan: {
      steps: [
        { text: "Take a free interest or career quiz (e.g., 16personalities)" },
        { text: "Watch videos on careers that sound cool to you" },
        { text: "Talk to 2–3 seniors about their summer experience" },
        { text: "Explore short workshops in different fields" },
        { text: "Set a small weekly challenge to try something new" },
        { text: "Keep a notes app open for ideas and reflections" }
      ]
    }
  }
];

export const getRecommendation = (responses: { questionId: string; selectedOptionId: string }[]): RecommendationGroup => {
  const goalResponse = responses.find(r => r.questionId === "goal");
  
  if (!goalResponse) {
    return recommendationGroups[0];
  }
  
  const recommendation = recommendationGroups.find(r => r.id === goalResponse.selectedOptionId);
  return recommendation || recommendationGroups[0];
};
