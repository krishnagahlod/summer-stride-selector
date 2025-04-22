
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { RecommendationGroup } from "@/types";
import { Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface RecommendationScreenProps {
  recommendation: RecommendationGroup;
  onRestart: () => void;
}

const RecommendationScreen: React.FC<RecommendationScreenProps> = ({
  recommendation,
  onRestart,
}) => {
  const [showLink, setShowLink] = useState(false);
  const { toast } = useToast();

  const handleCopyLink = () => {
    navigator.clipboard.writeText(recommendation.whatsappLink);
    toast({
      title: "Link copied to clipboard",
      description: "You can now paste it in your browser",
      duration: 3000,
    });
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
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {recommendation.actionPlan.whatsappLink ? (
            !showLink ? (
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={() => setShowLink(true)}
                  className="w-full bg-summer-yellow text-black hover:bg-summer-yellow/90 font-semibold py-5"
                >
                  Show Group Link
                </Button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="space-y-4"
              >
                <div className="p-4 bg-gray-50 rounded-md border border-gray-200 break-all">
                  <p className="text-gray-800 font-mono">{recommendation.actionPlan.whatsappLink}</p>
                </div>
                <div className="flex gap-3">
                  <Button
                    onClick={handleCopyLink}
                    className="flex-1 bg-summer-blue hover:bg-summer-blue/90"
                  >
                    <Check className="mr-2 h-4 w-4" />
                    Copy Link
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => window.open(recommendation.actionPlan.whatsappLink, "_blank")}
                    className="flex-1"
                  >
                    Open Group
                  </Button>
                </div>
              </motion.div>
            )
          ) : (
            <div className="text-center p-4 bg-gray-50 rounded-md border border-gray-200">
              <p className="text-gray-600">WhatsApp group coming soon!</p>
            </div>
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
