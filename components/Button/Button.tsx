import { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
  variant?: 'primary' | 'secondary';
};

const Button = ({ variant = 'primary', ...props }: Props) => {
  return (
    <button
      {...props}
      className={cn({ [styles.button]: true, [styles[variant]]: true })}
    />
  );
};

export { Button };
