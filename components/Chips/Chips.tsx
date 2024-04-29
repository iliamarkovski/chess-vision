import styles from './Chips.module.scss';
import { Icon } from '@/components/Icon/Icon';

type Props = {
  items: string[];
  onRemove: (item: string) => void;
};

const Chips = ({ items, onRemove }: Props) => {
  const clickHandler = (item: string) => {
    onRemove(item);
  };

  return (
    <div className={styles.container}>
      {items.map((item) => {
        return (
          <button
            key={item}
            className={styles.button}
            onClick={() => clickHandler(item)}
          >
            {item}
            <Icon name='remove_circle' className={styles.icon} />
          </button>
        );
      })}
    </div>
  );
};

export { Chips };
