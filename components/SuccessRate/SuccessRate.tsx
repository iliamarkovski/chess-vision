import styles from './SuccessRate.module.scss';

type Props = {
  correct: number;
  total: number;
};

const SuccessRate = ({ correct, total }: Props) => {
  const rate = correct > 0 ? (correct / total) * 100 : 0;
  return (
    <h1 className={styles.score}>
      Your success rate is {+rate.toFixed(2)}%{' '}
      <small>
        ({correct}/{total})
      </small>
    </h1>
  );
};

export { SuccessRate };
