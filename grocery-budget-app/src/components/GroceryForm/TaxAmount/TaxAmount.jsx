import styles from "./TaxAmount.module.css"
import { useState } from "react";

const TaxAmount = (props) => {
  const [enteredTaxAmount, setEnteredTaxAmount] = useState(props.default);

  const taxChangeHandler = (e) => {
    setEnteredTaxAmount(e.target.value);
    props.onSettingTaxAmount(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.text}>{props.title}</h3>
      <div className={styles.inputWrapper}>
        <input
          type="number"
          className={styles.inputTax}
          value={enteredTaxAmount}
          step="0.01"
          onChange={taxChangeHandler}
        />
        <span className={styles.text}>%</span>
      </div>
    </div>
  );
}

export default TaxAmount

/* 

In North Carolina, grocery items are not subject to the state’s statewide sales tax, 
but are subject to a uniform 2% local tax. Candy, 
however, is generally taxed at the full combined sales tax rate.


The State-wide tax rate is 4.75% there is also a locality tax added on top of it. In Cumberland 
County that rate is 2.25%

*/