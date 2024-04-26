import Link from 'next/link';
import cn from 'classnames';
import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <nav className={styles.nav}>
      <Link href='/square-colors' className={styles.link}>
        <span
          className={cn({
            [styles.icon]: true,
            [styles.guessTheColor]: true,
          })}
        >
          ?
        </span>
        Square Colors
      </Link>
    </nav>
  );
};

export default Menu;
