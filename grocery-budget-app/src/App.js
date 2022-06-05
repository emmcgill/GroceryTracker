import styles from "./App.module.css";
import Header from './components/UI/Header/Header';
import Footer from "./components/UI/Footer/Footer";
import Form from "./components/GroceryForm/Form/Form";

function App() {
  return (
    <div className={styles.app}>
    <Header />
    <Form />
    <Footer />
    </div>
  );
}

export default App;
