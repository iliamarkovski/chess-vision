'use client';
import { useContext } from 'react';
import cn from 'classnames';
import styles from './ColorGuesserResults.module.scss';
import { coordinates } from '@/constants/coordinates';
import { ColorGuesserContext } from '@/components/ColorGuesser/ColorGuesser';
import { Button } from '@/components/Button/Button';

const ColorGuesserResults = () => {
  const { correctAnswers, toggleComplete } = useContext(ColorGuesserContext);

  const correctAnswersLength = correctAnswers.length;

  const successRate =
    correctAnswersLength > 0
      ? ((correctAnswersLength / 64) * 100).toFixed(2)
      : 0;

  return (
    <div className={styles.container}>
      <p className={styles.score}>
        {successRate}% <small>({correctAnswersLength}/64)</small>
      </p>

      <div className={styles.board}>
        {coordinates.map((square) => {
          return (
            <div
              key={square.coordinate}
              className={cn({
                [styles.square]: true,
                [styles[square.color]]: true,
                [styles.incorrect]: !correctAnswers.includes(square.coordinate),
              })}
            >
              {square.coordinate}
            </div>
          );
        })}
      </div>

      <div className={styles.button}>
        <Button type='button' onClick={toggleComplete}>
          Play again
        </Button>
      </div>
    </div>
  );
};

export { ColorGuesserResults };
