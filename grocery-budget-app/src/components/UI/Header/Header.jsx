import Banner from "../Banner/Banner"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <Banner>
        <h1 className={styles.title}>Grocery Tracker</h1>
    </Banner>
  )
}

export default Header