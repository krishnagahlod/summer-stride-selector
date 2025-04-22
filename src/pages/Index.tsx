
import React, { useState } from "react";
import WelcomeScreen from "@/components/WelcomeScreen";
import QuestionnaireForm from "@/components/QuestionnaireForm";
import RecommendationScreen from "@/components/RecommendationScreen";
import { questions, getRecommendation } from "@/data/questionsData";
import { UserResponse } from "@/types";
import { motion } from "framer-motion";

type Step = "welcome" | "questionnaire" | "recommendation";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<Step>("welcome");
  const [userResponses, setUserResponses] = useState<UserResponse[]>([]);

  const handleStart = () => {
    setCurrentStep("questionnaire");
  };

  const handleQuestionnaireComplete = (responses: UserResponse[]) => {
    setUserResponses(responses);
    
    // Log the response for demonstration
    // In a real application, you would send this to a database
    console.log("User responses:", {
      responses,
      timestamp: Date.now()
    });
    
    setCurrentStep("recommendation");
  };

  const handleRestart = () => {
    setUserResponses([]);
    setCurrentStep("welcome");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-summer-lightblue/30">
      <div className="container px-4 py-12 mx-auto">
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center min-h-[80vh]"
        >
          {currentStep === "welcome" && (
            <WelcomeScreen onStart={handleStart} />
          )}

          {currentStep === "questionnaire" && (
            <QuestionnaireForm
              questions={questions}
              onComplete={handleQuestionnaireComplete}
            />
          )}

          {currentStep === "recommendation" && (
            <RecommendationScreen
              recommendation={getRecommendation(userResponses)}
              onRestart={handleRestart}
            />
          )}
        </motion.div>

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>© 2025 Summer Plan | Helping students make the most of summer</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
