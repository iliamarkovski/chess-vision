'use client';
import { useContext } from 'react';
import styles from './ColorGuesserResults.module.scss';
import { ColorGuesserContext } from '@/components/ColorGuesser/ColorGuesser';
import { Button } from '@/components/Button/Button';
import { ChessBoard } from '@/components/ChessBoard/ChessBoard';
import { DarkColorType, LightColorType } from '@/constants/colors';
import { Icon } from '@/components/Icon/Icon';
import { SuccessRate } from '@/components/SuccessRate/SuccessRate';

const ColorGuesserResults = () => {
  const { correctAnswers, toggleComplete } = useContext(ColorGuesserContext);

  return (
    <div className={styles.container}>
      <SuccessRate correct={correctAnswers.length} total={64} />

      <ChessBoard>
        {(square: { name: string; color: LightColorType | DarkColorType }) => (
          <ChessBoard.Square key={square.name} color={square.color}>
            {!correctAnswers.includes(square.name) ? (
              <Icon className={styles.icon} name='close' />
            ) : null}
          </ChessBoard.Square>
        )}
      </ChessBoard>

      <div className={styles.button}>
        <Button type='button' onClick={toggleComplete}>
          Try again
        </Button>
      </div>
    </div>
  );
};

export { ColorGuesserResults };
