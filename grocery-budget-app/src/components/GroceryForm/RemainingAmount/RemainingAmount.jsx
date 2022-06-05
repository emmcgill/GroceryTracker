import styles from "./RemainingAmount.module.css";

const RemainingAmount = (props) => {

  const calculateAmount = () => {
      if(props.groceries.length === 0){
        return <h3>200.00</h3>;
      }
      else{
        const initialAmount = props.initialAmount
        const regularTax = 1 + (props.nonFoodTax / 100);
        const foodTax = 1 + (props.foodTax / 100);
        let nonFoodItemTotal = 0;
        let foodItemTotal = 0;

        props.groceries.forEach((item) => {

          if(item.isNonFoodItem === true){
            nonFoodItemTotal += (item.price * item.quantity);
          }else{
            foodItemTotal += (item.price * item.quantity); 
          }
          
        });

        const total = initialAmount - ((nonFoodItemTotal * regularTax) + (foodItemTotal * foodTax))

        return <h3>{total.toFixed(2)}</h3>;
      }
  }

  return (
    <div>
    <h2>Remaining Amount:</h2>
    <div className={styles.amountWrapper}>
      <h3>$</h3>
      {calculateAmount()}
    </div>
  </div>
  )
}

export default RemainingAmount