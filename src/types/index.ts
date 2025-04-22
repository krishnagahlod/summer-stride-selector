export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
}

export interface UserResponse {
  questionId: string;
  selectedOptionId: string;
}

export interface UserData {
  name?: string;
  responses: UserResponse[];
  timestamp: number;
}

export interface ActionPlan {
  steps: string[];
  whatsappLink?: string;
}

export interface RecommendationGroup {
  id: string;
  title: string;
  description: string;
  whatsappLink: string;
  actionPlan: ActionPlan;
}
