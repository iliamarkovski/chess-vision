'use client';
import { useState, useEffect, createContext, useCallback } from 'react';
import { KnightMovesResults } from '@/components/KnightMovesResults/KnightMovesResults';
import { notation } from '@/constants/notation';
import { KnightMovesInput } from '@/components/KnightMovesInput/KnightMovesInput';

type ContextProps = {
  addedMoves: string[];
  addMove: (move: string) => void;
  removeMove: (move: string) => void;
  defaultValue: string;
  complete: boolean;
  toggleComplete: () => void;
};

const defaultValues: ContextProps = {
  addedMoves: [],
  addMove: () => {},
  removeMove: () => {},
  defaultValue: '',
  complete: false,
  toggleComplete: () => {},
};

export const KnightMovesContext = createContext<ContextProps>(defaultValues);

const KnightMoves = () => {
  const [moves, setMoves] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [initValue, setInitValue] = useState<string>('');

  const toggleCompleteHandler = () => {
    setIsComplete((prevComplete) => !prevComplete);
  };

  const removeMoveHandler = (item: string) => {
    setMoves((prevItems) => prevItems.filter((prevItem) => prevItem !== item));
  };

  const addMoveHandler = (item: string) => {
    if (moves.includes(item) || item === initValue) {
      return;
    }

    setMoves((prevItems) => [...prevItems, item]);
  };

  useEffect(() => {
    if (!isComplete) {
      const randomNotation =
        notation[Math.floor(Math.random() * 65)]?.name ||
        notation[0].name + 'I';
      setInitValue(randomNotation?.toUpperCase());
      setMoves([]);
    }
  }, [isComplete]);

  const initialValues: ContextProps = {
    addedMoves: moves,
    addMove: addMoveHandler,
    removeMove: removeMoveHandler,
    defaultValue: initValue,
    complete: isComplete,
    toggleComplete: toggleCompleteHandler,
  };

  return (
    <KnightMovesContext.Provider value={initialValues}>
      <>{!isComplete ? <KnightMovesInput /> : <KnightMovesResults />}</>
    </KnightMovesContext.Provider>
  );
};

export default KnightMoves;
