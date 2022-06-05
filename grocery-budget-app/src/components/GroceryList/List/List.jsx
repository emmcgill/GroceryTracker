import styles from "./List.module.css"
import ListItem from "../ListItem/ListItem"

const List = (props) => {
  return (
    <>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Items</h2>

        <div className={styles.groceryList}>
          {props.groceryList.map((item) => (
            <ListItem key={item.id} id={item.id} item={item.name} price={item.price} quantity={item.quantity} isNonFoodItem={item.isNonFoodItem} handleDelete={props.handleDelete}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default List