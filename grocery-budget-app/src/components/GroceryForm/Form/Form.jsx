import styles from "./Form.module.css"
import TotalAmount from "../TotalAmount/TotalAmount"
import TaxAmount from "../TaxAmount/TaxAmount"
import ItemInput from "../ItemInput/ItemInput"
import Spacer from "../../UI/Spacer/Spacer"
import RemainingAmount from "../RemainingAmount/RemainingAmount"
import { useState } from 'react'


const Form = () => {
  const [groceryItems, setGroceryItems] = useState([]);
  const [startingAmount, setStartingAmount] = useState(200.00);
  const [regularTaxAmount, setRegularTaxAmount] = useState(7.0);
  const [foodTaxAmount, setFoodTaxAmount] = useState(2.0);

    const itemSubmissionHandler = (groceryItem) => {

      const newGroceryItem = {
        id: Math.floor(Math.random() * 10000),
        name: groceryItem.name,
        price: groceryItem.price,
        quantity: groceryItem.quantity,
        isNonFoodItem: groceryItem.isNonFoodItem
      }
      
      setGroceryItems((previousState) => {
          return [...previousState, newGroceryItem];
      });
    }

    const pullAmount = (amount) => {
      setStartingAmount(amount);
    }

    const pullRegularTax = (amount) => {
      setRegularTaxAmount(amount);
    }

    const pullFoodTax = (amount) => {
      setFoodTaxAmount(amount);
    }

    const deleteListItem = (id) => {
      if(window.confirm('Are you sure that you want to delete this item?')){
        setGroceryItems(groceryItems.filter((item) => item.id !== id))
      }
    }
    
  return (
    <form action="" className={styles.wrapper}>
        <TotalAmount onSettingTotalAmount={pullAmount} />
        <div className={styles.taxWrapper}>
          <TaxAmount onSettingTaxAmount={pullRegularTax} default={7.0} title={'State & Locality Tax:'}/>
          <TaxAmount onSettingTaxAmount={pullFoodTax} default={2.0} title={'Food Tax:'}/>
        </div>
        <ItemInput onItemSubmission={itemSubmissionHandler} groceries={groceryItems} handleDelete={deleteListItem}/>
        <Spacer />
        <RemainingAmount groceries={groceryItems} initialAmount={startingAmount} nonFoodTax={regularTaxAmount} foodTax={foodTaxAmount}/>
    </form>
  )
}

export default Form