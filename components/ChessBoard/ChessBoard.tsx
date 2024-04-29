import { Fragment, ReactNode } from 'react';
import { ChessBoardSquare } from '@/components/ChessBoardSquare/ChessBoardSquare';
import styles from './ChessBoard.module.scss';
import { notation } from '@/constants/notation';
import { NotationType } from '@/constants/notation';

type Props = {
  children: (square: NotationType) => ReactNode;
};

const ChessBoard = ({ children }: Props) => {
  return (
    <div className={styles.grid}>
      <div className={styles.rank}>
        <span>8</span>
        <span>7</span>
        <span>6</span>
        <span>5</span>
        <span>4</span>
        <span>3</span>
        <span>2</span>
        <span>1</span>
      </div>

      <div className={styles.board}>
        {notation.map((square) => (
          <Fragment key={square.name}>{children(square)}</Fragment>
        ))}
      </div>

      <div className={styles.file}>
        <span>a</span>
        <span>b</span>
        <span>c</span>
        <span>d</span>
        <span>e</span>
        <span>f</span>
        <span>g</span>
        <span>h</span>
      </div>
    </div>
  );
};

export { ChessBoard };

ChessBoard.Square = ChessBoardSquare;
