import React from 'react'
import styles from './ListItem.module.css'

const ListItem = (props) => {
  const checkIfNonFood = () => {
    if(props.isNonFoodItem === true){
      return <p className={styles.nonFood}><em>NF</em></p>
    }else{
      return <p className={styles.isFood}><em>NF</em></p>
    }
  }
  return (
    <div className={styles.item}>
        <p>{props.item}</p>
        <p>${props.price}</p>
        <p>Qty: {props.quantity}</p>
        {checkIfNonFood()}
        <p className={styles.delete} onClick={() => props.handleDelete(props.id)}>X</p>
    </div>
  )
}

export default ListItem