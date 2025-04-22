
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Question, UserResponse } from "@/types";
import { motion, AnimatePresence } from "framer-motion";

interface QuestionnaireFormProps {
  questions: Question[];
  onComplete: (responses: UserResponse[]) => void;
}

const QuestionnaireForm: React.FC<QuestionnaireFormProps> = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<UserResponse[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleNext = () => {
    if (!selectedOption) return;

    const updatedResponses = [...responses];
    
    // Update or add the response for the current question
    const existingResponseIndex = updatedResponses.findIndex(
      (r) => r.questionId === currentQuestion.id
    );
    
    if (existingResponseIndex >= 0) {
      updatedResponses[existingResponseIndex].selectedOptionId = selectedOption;
    } else {
      updatedResponses.push({
        questionId: currentQuestion.id,
        selectedOptionId: selectedOption,
      });
    }
    
    setResponses(updatedResponses);
    
    if (currentQuestionIndex < questions.length - 1) {
      // Move to the next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      
      // Reset selection for the next question
      // Check if we already have an answer for the next question
      const nextQuestionId = questions[currentQuestionIndex + 1].id;
      const existingNextResponse = updatedResponses.find(
        (r) => r.questionId === nextQuestionId
      );
      setSelectedOption(existingNextResponse?.selectedOptionId || null);
    } else {
      // We're done with all questions
      onComplete(updatedResponses);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      
      // Set the selected option to the previously selected one
      const prevQuestionId = questions[currentQuestionIndex - 1].id;
      const existingResponse = responses.find(
        (r) => r.questionId === prevQuestionId
      );
      setSelectedOption(existingResponse?.selectedOptionId || null);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
        <div className="flex space-x-1">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-6 rounded-full ${
                index <= currentQuestionIndex
                  ? "bg-summer-blue"
                  : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="border border-gray-200 shadow-md">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">{currentQuestion.text}</h2>
              
              <RadioGroup className="space-y-3" value={selectedOption || ""} onValueChange={handleOptionSelect}>
                {currentQuestion.options.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <RadioGroupItem 
                      value={option.id} 
                      id={option.id}
                      className="border-summer-blue text-summer-blue"
                    />
                    <Label 
                      htmlFor={option.id}
                      className="flex-1 cursor-pointer py-2"
                    >
                      {option.text}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentQuestionIndex === 0}
                  className="border-gray-300"
                >
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!selectedOption}
                  className="bg-summer-blue hover:bg-summer-blue/90"
                >
                  {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default QuestionnaireForm;
