import styles from './ItemInput.module.css';
import GroceryList from "../../GroceryList/List/List"
import { useState } from 'react';

const ItemInput = (props) => {

  const [enteredItemName, setEnteredItemName] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredQuantity, setEnteredQuantity] = useState(1);
  const [isNonFoodItem, setNonFoodItem] = useState(false);

  const enteredItemHandler = (e) => {
    setEnteredItemName(e.target.value);
  };
  const enteredPriceHandler = (e) => {
    setEnteredPrice(e.target.value);
  };
  const enteredQuantityHandler = (e) => {
    setEnteredQuantity(e.target.value);
  };

  const foodItemHandler = () => {
    setNonFoodItem(!isNonFoodItem);
  }

  const submitItemHandler = (e) => {
    const groceryItem = {
      name: enteredItemName,
      price: enteredPrice,
      quantity: enteredQuantity,
      isNonFoodItem: isNonFoodItem
    }

    props.onItemSubmission(groceryItem);

    setEnteredItemName("");
    setEnteredPrice("");
    setEnteredQuantity(1);
    setNonFoodItem(false);

    e.preventDefault();
  }

  return (
    <>
      <GroceryList groceryList={props.groceries} handleDelete={props.handleDelete}/>
      <h3 className={styles.title}>Add New Item:</h3>

      <div className={styles.inputWrapper}>
        <div className={styles.inputItem}>
          <label>Item:</label>
          <input
            type="text"
            className={styles.input}
            value={enteredItemName}
            onChange={enteredItemHandler}
          />
        </div>
        <div className={styles.inputItem}>
          <label>Price:</label>
          <input
            type="text"
            className={styles.input}
            value={enteredPrice}
            onChange={enteredPriceHandler}
          />
        </div>
        <div className={styles.inputItem}>
          <label>Qty:</label>
          <input
            type="number"
            className={styles.input}
            value={enteredQuantity}
            onChange={enteredQuantityHandler}
          />
        </div>

        <div className={styles.inputItemCheckBox}>
          <label className={styles.checkBoxLabel}>Non-Food Item:</label>
          <input
            type="checkbox"
            className={styles.checkBoxInput}
            value={isNonFoodItem}
            onChange={foodItemHandler}
            checked={isNonFoodItem}
          />
        </div>
      </div>
      <button className={styles.addItemButton} onClick={submitItemHandler}>
        Add New Item
        </button>
    </>
  )
}

export default ItemInput