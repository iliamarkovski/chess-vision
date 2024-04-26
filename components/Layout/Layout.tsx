import { ReactNode } from 'react';
import styles from './Layout.module.scss';
import { BackToHomeButton } from '@/components/BackToHomeButton/BackToHomeButton';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <main className={styles.layout}>
      <div className={styles.wrapper}>
        <BackToHomeButton />
        <div className={styles.content}>{children}</div>
      </div>
    </main>
  );
};

export { Layout };
