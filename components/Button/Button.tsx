import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

const Button = ({
  ...props
}: Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>) => {
  return <button {...props} className={styles.button} />;
};

export { Button };
