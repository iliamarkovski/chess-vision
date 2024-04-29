import styles from './ErrorMessage.module.scss';

type Props = {
  text: string;
};

const ErrorMessage = ({ text }: Props) => {
  return <p className={styles.message}>{text}</p>;
};

export { ErrorMessage };
