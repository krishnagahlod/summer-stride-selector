
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center text-center space-y-6 max-w-lg mx-auto"
    >
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-summer-blue to-summer-yellow bg-clip-text text-transparent">
        Summer Plan
      </h1>
      <p className="text-lg text-gray-700">
        Discover the perfect way to make the most of your summer break.
        Whether you're looking to gain new skills, find an internship, 
        start a business, or work on personal projects, we'll help you connect 
        with the right community.
      </p>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button 
          onClick={onStart}
          className="bg-summer-yellow hover:bg-summer-yellow/90 text-black font-medium px-8 py-6 text-lg rounded-xl"
        >
          Start Planning
        </Button>
      </motion.div>
      <div className="mt-8 text-sm text-gray-500">
        For college students looking to make the most of their summer
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;
