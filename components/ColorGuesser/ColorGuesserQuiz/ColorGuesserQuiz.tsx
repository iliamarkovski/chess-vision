'use client';
import { useContext, useState, useEffect } from 'react';
import styles from './ColorGuesserQuiz.module.scss';
import { ColorGuesserContext } from '@/components/ColorGuesser/ColorGuesser';
import { colors } from '@/constants/colors';
import { shuffle } from '@/utils/shuffle';
import { CoordinatesType } from '@/constants/coordinates';
import { Button } from '@/components/Button/Button';
import { coordinates } from '@/constants/coordinates';

const ColorGuesserQuiz = () => {
  const [counter, setCounter] = useState<number>(0);
  const [shuffledItems, setShuffledItems] = useState<CoordinatesType[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([]);
  const { setAnswers, toggleComplete } = useContext(ColorGuesserContext);

  useEffect(() => {
    setShuffledItems(shuffle(coordinates));
  }, []);

  const clickHandler = (color: string) => {
    const isCorrect = shuffledItems[counter].color === color;
    setCounter((prevCounter) => (prevCounter += 1));

    if (counter + 1 < 64) {
      if (isCorrect) {
        setCorrectAnswers((prevCorrectAnswers) => [
          ...prevCorrectAnswers,
          shuffledItems[counter].coordinate,
        ]);
      }
    } else {
      const lastAnswer = isCorrect ? [shuffledItems[counter].coordinate] : [];

      setAnswers([...correctAnswers, ...lastAnswer]);
      toggleComplete();
    }
  };

  return (
    <>
      <div className={styles.card}>
        <span className={styles.progress}>{counter + 1} / 64</span>

        <h1 className={styles.title}>{shuffledItems[counter]?.coordinate}</h1>

        <div className={styles.buttons}>
          <Button
            type='button'
            onClick={() => {
              clickHandler(colors.light);
            }}
          >
            {colors.light}
          </Button>

          <Button
            type='button'
            onClick={() => {
              clickHandler(colors.dark);
            }}
          >
            {colors.dark}
          </Button>
        </div>
      </div>
    </>
  );
};

export { ColorGuesserQuiz };
