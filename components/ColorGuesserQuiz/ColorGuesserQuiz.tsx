'use client';
import { useContext, useState, useEffect } from 'react';
import styles from './ColorGuesserQuiz.module.scss';
import { ColorGuesserContext } from '@/components/ColorGuesser/ColorGuesser';
import { colors } from '@/constants/colors';
import { shuffle } from '@/utils/shuffle';
import { NotationType } from '@/constants/notation';
import { Button } from '@/components/Button/Button';
import { notation } from '@/constants/notation';
import { Title } from '@/components/Title/Title';

const ColorGuesserQuiz = () => {
  const [counter, setCounter] = useState<number>(0);
  const [shuffledNotation, setShuffledNotation] = useState<NotationType[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([]);
  const { setAnswers, toggleComplete } = useContext(ColorGuesserContext);

  useEffect(() => {
    setShuffledNotation(shuffle(notation));
  }, []);

  const clickHandler = (color: string) => {
    const isCorrect = shuffledNotation[counter].color === color;
    setCounter((prevCounter) => (prevCounter += 1));

    if (counter + 1 < 64) {
      if (isCorrect) {
        setCorrectAnswers((prevCorrectAnswers) => [
          ...prevCorrectAnswers,
          shuffledNotation[counter].name,
        ]);
      }
    } else {
      const lastAnswer = isCorrect ? [shuffledNotation[counter].name] : [];

      setAnswers([...correctAnswers, ...lastAnswer]);
      toggleComplete();
    }
  };

  const title = shuffledNotation[counter]?.name.toUpperCase() ?? 'XX';

  return (
    <>
      <div className={styles.card}>
        <header className={styles.header}>
          <span className={styles.progress}>{counter + 1} / 64</span>
          <Title>
            What color is <span>{title}</span>?
          </Title>
        </header>

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
