import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from '../../redux/balanceSlice';
import styles from './Balance.module.css';
import { useState } from 'react';

function Balance() {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.balance.value);
  const [value, setValue] = useState();

  return (
    <div className={styles.container}>
      <input
        type="number"
        value={value}
        onChange={e => setValue(Number(e.target.value))}
      />
      <p className={styles.balanceText}>Balance: {balance} credits</p>
      <button
        onClick={() => dispatch(deposit(value))}
        className={styles.button}
      >
        Deposit credits
      </button>
      <button
        onClick={() => dispatch(withdraw(value))}
        className={styles.button}
      >
        Withdraw credits
      </button>
    </div>
  );
}

export default Balance;
