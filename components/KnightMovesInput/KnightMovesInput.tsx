import { useContext } from 'react';

import { KnightMovesContext } from '@/components/KnightMoves/KnightMoves';

import { Button } from '@/components/Button/Button';
import { Chips } from '@/components/Chips/Chips';
import { InputActions } from '@/components/InputActions/InputActions';
import { Title } from '@/components/Title/Title';
import { isNotationValid } from '@/utils/validation';

import styles from './KnightMovesInput.module.scss';

const KnightMovesInput = () => {
  const { defaultValue, addedMoves, removeMove, addMove, toggleComplete } =
    useContext(KnightMovesContext);

  return (
    <div className={styles.card}>
      <Title>
        Possible moves for a knight on <span>{defaultValue || 'XX'}</span>?
      </Title>

      <div className={styles.actions}>
        {addedMoves.length > 0 ? (
          <Chips items={addedMoves} onRemove={removeMove} />
        ) : null}

        <InputActions
          onValidation={isNotationValid}
          onSuccess={addMove}
          placeholder='Enter move...'
          errorMessage='Please enter a valid chess notation!'
        />
      </div>

      <Button
        onClick={toggleComplete}
        disabled={addedMoves.length === 0}
        variant='secondary'
      >
        See results
      </Button>
    </div>
  );
};

export { KnightMovesInput };
