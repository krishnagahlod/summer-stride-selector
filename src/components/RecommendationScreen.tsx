
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { RecommendationGroup } from "@/types";
import { ArrowRight } from "lucide-react";

interface RecommendationScreenProps {
  recommendation: RecommendationGroup;
  onRestart: () => void;
}

const RecommendationScreen: React.FC<RecommendationScreenProps> = ({
  recommendation,
  onRestart,
}) => {
  const handleJoinGroup = () => {
    if (recommendation.actionPlan.whatsappLink) {
      window.open(recommendation.actionPlan.whatsappLink, "_blank");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <Card className="border border-gray-200 shadow-lg overflow-hidden">
        <div className="h-20 bg-gradient-to-r from-summer-blue to-summer-yellow" />
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-2">{recommendation.title}</h2>
          <p className="text-gray-700 mb-6">{recommendation.description}</p>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Your Action Plan:</h3>
            <ul className="space-y-3">
              {recommendation.actionPlan.steps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-summer-yellow/20 flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{step.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {recommendation.actionPlan.whatsappLink && recommendation.actionPlan.communityMessage && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="space-y-6"
            >
              <p className="text-gray-700 text-center px-4">{recommendation.actionPlan.communityMessage}</p>
              <motion.div 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={handleJoinGroup}
                  className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold py-6 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Join Now
                  <ArrowRight className="ml-2" />
                </Button>
              </motion.div>
            </motion.div>
          )}
          
          <div className="mt-8 flex justify-center">
            <Button
              variant="ghost"
              onClick={onRestart}
              className="text-gray-500 hover:text-gray-700"
            >
              Start Over
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RecommendationScreen;
