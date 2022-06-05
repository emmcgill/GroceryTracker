import styles from "./Banner.module.css"

const Banner = (props) => {
  return (
    <div className={styles.wrapper}>
        {props.children}
    </div>
  )
}

export default Banner