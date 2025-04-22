
export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
  isOptional?: boolean;
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

export interface ActionStep {
  text: string;
  isCompleted?: boolean;
}

export interface ActionPlan {
  steps: ActionStep[];
  whatsappLink?: string;
  communityMessage?: string;
}

export interface RecommendationGroup {
  id: string;
  title: string;
  description: string;
  actionPlan: ActionPlan;
}
