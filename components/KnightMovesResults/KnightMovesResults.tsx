import cn from 'classnames';
import styles from './KnightMovesResults.module.scss';
import { ChessBoard } from '@/components/ChessBoard/ChessBoard';
import { LightColorType, DarkColorType } from '@/constants/colors';
import { Icon } from '@/components/Icon/Icon';
import { Button } from '@/components/Button/Button';
import { SuccessRate } from '@/components/SuccessRate/SuccessRate';
import { useContext } from 'react';
import { KnightMovesContext } from '@/components/KnightMoves/KnightMoves';
import { possibleMoves } from '@/utils/possibleMoves';

const KnightMovesResults = () => {
  const { addedMoves, defaultValue, toggleComplete } =
    useContext(KnightMovesContext);
  const correctMoves = possibleMoves(defaultValue);
  const correctAnsweredMoves = addedMoves.filter((move) =>
    correctMoves.includes(move)
  );

  const isCorrect = (move: string) => {
    return correctMoves.includes(move) && addedMoves.includes(move);
  };

  const isIncorrect = (move: string) => {
    return addedMoves.includes(move) && !correctMoves.includes(move);
  };

  return (
    <div className={styles.container}>
      <SuccessRate
        correct={correctAnsweredMoves.length}
        total={correctMoves.length}
      />

      <ChessBoard>
        {(square: { name: string; color: LightColorType | DarkColorType }) => (
          <ChessBoard.Square
            key={square.name}
            color={square.color}
            className={cn({
              [styles.active]: correctMoves.includes(square.name),
            })}
          >
            {square.name === defaultValue.toLowerCase() ? (
              <Icon className={styles.knightIcon} name='knight' />
            ) : null}

            {isCorrect(square.name) ? (
              <Icon
                className={cn({
                  [styles.icon]: true,
                  [styles.correct]: true,
                })}
                name='check'
              />
            ) : null}
            {isIncorrect(square.name) ? (
              <Icon
                className={cn({
                  [styles.icon]: true,
                  [styles.incorrect]: true,
                })}
                name='close'
              />
            ) : null}
          </ChessBoard.Square>
        )}
      </ChessBoard>

      <Button type='button' onClick={toggleComplete}>
        Try again
      </Button>
    </div>
  );
};

export { KnightMovesResults };
