import React from 'react';
import { useState } from 'react';
import styles from './TotalAmount.module.css';

const TotalAmount = (props) => {
    const [enteredStartingAmount, setEnteredStartingAmount] = useState("200.00");



    const amountChangeHandler = (e) => {
      setEnteredStartingAmount(e.target.value);
      props.onSettingTotalAmount(e.target.value);
    }
  
    return (
        <>
            <h2>Starting Amount:</h2>
            <div className={styles.wrapper}>
                <span>$</span><input type="number" className={styles.input} value={enteredStartingAmount} min="0.00" step="0.01" onChange={amountChangeHandler}/>
            </div>
        </>
    )
}

export default TotalAmount