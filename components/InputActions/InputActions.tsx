'use client';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './InputActions.module.scss';
import { Icon } from '@/components/Icon/Icon';
import { ErrorMessage } from '@/components/ErrorMessage/ErrorMessage';

type Props = {
  onSuccess: (value: string) => void;
  placeholder?: string;
  iconName?: string;
  errorMessage?: string;
  onValidation: (value: string) => boolean;
};

const InputActions = ({
  onSuccess,
  placeholder,
  iconName = 'keyboard_return',
  errorMessage = 'Error occured',
  onValidation,
}: Props) => {
  const [value, setValue] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    setHasError(false);
  }, [value]);

  const clickHandler = () => {
    if (onValidation(value)) {
      onSuccess(value.toLowerCase());
      setValue('');
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  const enterPressHandler = (event: { key: string }) => {
    if (event.key === 'Enter') {
      clickHandler();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.field}>
        <input
          type='text'
          className={cn({
            [styles.input]: true,
            [styles.invalid]: hasError,
          })}
          value={value}
          onChange={(e) => setValue(e.target.value.toUpperCase())}
          onKeyDown={enterPressHandler}
          placeholder={placeholder}
        />

        <button className={styles.button} onClick={clickHandler}>
          <Icon name={iconName} className={styles.icon} />
        </button>
      </div>

      {hasError ? <ErrorMessage text={errorMessage} /> : null}
    </div>
  );
};

export { InputActions };
