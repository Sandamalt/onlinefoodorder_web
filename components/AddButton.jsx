import styles from "../styles/Add.module.css";

<<<<<<< HEAD
const AddButton = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className={styles.mainAddButton}>
<<<<<<< HEAD
      Add New Item
=======
      Add New Pizza
>>>>>>> c69594653924d55c8c4bfcd3b10e7ca9c122e7ab
=======
{
  /*---------- Add button shows  in Landing page --------*/
}

const AddButton = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className={styles.mainAddButton}>
      Add New Item
>>>>>>> f7c3cf3 (final with fix bugs)
    </div>
  );
};

export default AddButton;
