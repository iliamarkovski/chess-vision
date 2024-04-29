import { ReactNode } from 'react';
import styles from './Title.module.scss';

type Props = {
  children: ReactNode;
};

const Title = ({ children }: Props) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export { Title };
