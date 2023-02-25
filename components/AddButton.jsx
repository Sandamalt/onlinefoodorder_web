import styles from "../styles/Add.module.css";

{
  /*---------- Add button shows  in Landing page --------*/
}

const AddButton = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className={styles.mainAddButton}>
      Add New Item
    </div>
  );
};

export default AddButton;
