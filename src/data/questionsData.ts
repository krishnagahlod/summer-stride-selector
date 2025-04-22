
import { Question, RecommendationGroup } from "@/types";

export const questions: Question[] = [
  {
    id: "goal",
    text: "What's your primary summer goal?",
    options: [
      { id: "skill", text: "Learn a new skill" },
      { id: "internship", text: "Get an internship" },
      { id: "startup", text: "Build a startup from an idea" },
      { id: "project", text: "Work on personal projects" }
    ]
  },
  {
    id: "domain",
    text: "Which domain excites you the most?",
    options: [
      { id: "tech", text: "Tech" },
      { id: "business", text: "Business/Consulting" },
      { id: "research", text: "Research" },
      { id: "creative", text: "Creative Arts" }
    ]
  }
];

export const recommendationGroups: RecommendationGroup[] = [
  {
    id: "tech-skill",
    title: "Tech Skills Group",
    description: "Looks like you're interested in learning new tech skills this summer! Join this group to connect with peers and mentors who are focused on learning coding, design, or other tech skills.",
    whatsappLink: "https://chat.whatsapp.com/example-tech-skills"
  },
  {
    id: "tech-internship",
    title: "Tech Internships Group",
    description: "Looking for a tech internship this summer? Join this group to get insider tips, application strategies, and connect with others on the same path.",
    whatsappLink: "https://chat.whatsapp.com/example-tech-internships"
  },
  {
    id: "tech-startup",
    title: "Tech Startups Group",
    description: "Excited about building a tech startup? This group connects you with like-minded founders, technical co-founders, and mentors from successful startups.",
    whatsappLink: "https://chat.whatsapp.com/example-tech-startups"
  },
  {
    id: "tech-project",
    title: "Tech Projects Group",
    description: "Working on tech projects this summer? Join this group to collaborate, get feedback, and showcase your work to others in the tech community.",
    whatsappLink: "https://chat.whatsapp.com/example-tech-projects"
  },
  {
    id: "business-skill",
    title: "Business Skills Group",
    description: "Improving your business skills this summer? This group offers resources, discussions, and peer learning for various business competencies.",
    whatsappLink: "https://chat.whatsapp.com/example-business-skills"
  },
  {
    id: "business-internship",
    title: "Business Internships Group",
    description: "On the hunt for a business or consulting internship? Connect with others applying to the same companies and get insider tips.",
    whatsappLink: "https://chat.whatsapp.com/example-business-internships"
  },
  {
    id: "business-startup",
    title: "Business Startups Group",
    description: "Building a business this summer? Join fellow entrepreneurs, discuss funding strategies, and get advice on your business model.",
    whatsappLink: "https://chat.whatsapp.com/example-business-startups"
  },
  {
    id: "business-project",
    title: "Business Projects Group",
    description: "Working on business-related projects? Connect with others who can provide feedback and collaborate on your initiatives.",
    whatsappLink: "https://chat.whatsapp.com/example-business-projects"
  },
  {
    id: "research-skill",
    title: "Research Skills Group",
    description: "Looking to develop research skills? This group connects students interested in building expertise in various research methodologies.",
    whatsappLink: "https://chat.whatsapp.com/example-research-skills"
  },
  {
    id: "research-internship",
    title: "Research Internships Group",
    description: "Seeking a research internship this summer? Get tips on finding positions, applying, and making the most of research opportunities.",
    whatsappLink: "https://chat.whatsapp.com/example-research-internships"
  },
  {
    id: "research-startup",
    title: "Research-Based Startups Group",
    description: "Turning research into a startup? Join others commercializing research and bridging the gap between academia and industry.",
    whatsappLink: "https://chat.whatsapp.com/example-research-startups"
  },
  {
    id: "research-project",
    title: "Research Projects Group",
    description: "Working on independent research projects? Connect with peers conducting research and exchange ideas and feedback.",
    whatsappLink: "https://chat.whatsapp.com/example-research-projects"
  },
  {
    id: "creative-skill",
    title: "Creative Skills Group",
    description: "Developing your creative skills this summer? Join others learning new artistic techniques, design principles, or performance skills.",
    whatsappLink: "https://chat.whatsapp.com/example-creative-skills"
  },
  {
    id: "creative-internship",
    title: "Creative Internships Group",
    description: "Looking for internships in creative fields? This group shares opportunities, portfolio tips, and interview advice for creative positions.",
    whatsappLink: "https://chat.whatsapp.com/example-creative-internships"
  },
  {
    id: "creative-startup",
    title: "Creative Startups Group",
    description: "Launching a creative business or studio? Connect with other creative entrepreneurs and discuss the business side of creativity.",
    whatsappLink: "https://chat.whatsapp.com/example-creative-startups"
  },
  {
    id: "creative-project",
    title: "Creative Projects Group",
    description: "Working on creative projects this summer? Share your work, get feedback, and potentially collaborate with other creative students.",
    whatsappLink: "https://chat.whatsapp.com/example-creative-projects"
  }
];

export const getRecommendation = (responses: { questionId: string; selectedOptionId: string }[]): RecommendationGroup => {
  // Find the goal and domain responses
  const goalResponse = responses.find(r => r.questionId === "goal");
  const domainResponse = responses.find(r => r.questionId === "domain");
  
  if (!goalResponse || !domainResponse) {
    // Fallback to default if we don't have both responses
    return recommendationGroups[0];
  }
  
  // Create a composite ID from domain and goal
  const recommendationId = `${domainResponse.selectedOptionId}-${goalResponse.selectedOptionId}`;
  
  // Find the matching recommendation
  const recommendation = recommendationGroups.find(r => r.id === recommendationId);
  
  // Return the recommendation or fallback to the first one
  return recommendation || recommendationGroups[0];
};
