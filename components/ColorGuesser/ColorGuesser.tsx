'use client';
import { useState, createContext } from 'react';
import { ColorGuesserResults } from '@/components/ColorGuesser/ColorGuesserResults/ColorGuesserResults';
import { ColorGuesserQuiz } from '@/components/ColorGuesser/ColorGuesserQuiz/ColorGuesserQuiz';

type ContextProps = {
  complete: boolean;
  toggleComplete: () => void;
  correctAnswers: string[];
  setAnswers: (updatedAnswers: string[]) => void;
};

const defaultValues: ContextProps = {
  complete: false,
  correctAnswers: [],
  toggleComplete: () => {},
  setAnswers: () => {},
};

export const ColorGuesserContext = createContext<ContextProps>(defaultValues);

const ColorGuesser = () => {
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [answers, setAnswers] = useState<string[]>([]);

  const toggleCompleteHandler = () => {
    setIsComplete((prevComplete) => !prevComplete);
  };

  const setAnswersHandler = (updatedAnswers: string[]) => {
    setAnswers(updatedAnswers);
  };

  const initialValues: ContextProps = {
    complete: isComplete,
    toggleComplete: toggleCompleteHandler,
    correctAnswers: answers,
    setAnswers: setAnswersHandler,
  };

  return (
    <ColorGuesserContext.Provider value={initialValues}>
      {!isComplete ? <ColorGuesserQuiz /> : <ColorGuesserResults />}
    </ColorGuesserContext.Provider>
  );
};

export { ColorGuesser };
