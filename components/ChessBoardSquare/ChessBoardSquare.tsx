import { ReactNode } from 'react';
import cn from 'classnames';
import styles from './ChessBoardSquare.module.scss';
import { LightColorType, DarkColorType } from '@/constants/colors';

type Props = {
  children?: ReactNode;
  color: LightColorType | DarkColorType;
  className?: string | undefined;
};

const ChessBoardSquare = ({ color, children, className = '' }: Props) => {
  return (
    <div
      className={cn({
        [styles.square]: true,
        [styles[color]]: true,
        [className]: className,
      })}
    >
      {children}
    </div>
  );
};

export { ChessBoardSquare };
