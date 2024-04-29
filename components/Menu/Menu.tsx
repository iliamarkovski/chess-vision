import Link from 'next/link';
import styles from './Menu.module.scss';
import { Icon } from '@/components/Icon/Icon';
import { menus } from '@/constants/menus';

const Menu = () => {
  return (
    <nav className={styles.nav}>
      {menus.map((menu) => {
        return (
          <Link key={menu.href} href={menu.href} className={styles.link}>
            <span className={styles.card}>
              <Icon className={styles.icon} name={menu.icon} />
            </span>
            {menu.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Menu;
