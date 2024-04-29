'use client';

import Link from 'next/link';
import styles from './BackToHomeButton.module.scss';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/Icon/Icon';

const BackToHomeButton = () => {
  const pathname = usePathname();

  if (pathname === '/') {
    return null;
  }

  return (
    <Link href='/' className={styles.button}>
      <Icon name='home' className={styles.icon} />
      Back to home
    </Link>
  );
};

export { BackToHomeButton };
