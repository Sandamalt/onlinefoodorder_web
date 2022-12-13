import styles from "../styles/Add.module.css";

const AddButton = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className={styles.mainAddButton}>
<<<<<<< HEAD
      Add New Item
=======
      Add New Pizza
>>>>>>> c69594653924d55c8c4bfcd3b10e7ca9c122e7ab
    </div>
  );
};

export default AddButton;
