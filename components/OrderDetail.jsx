import { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [phoneno, setPhoneno] = useState("");

  {
    /* ----------  Cash on delivery form details ------*/
  }

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  {
    /* ------ Starting form -----*/
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          {" "}
          You Will Pay Total Bill after Delivery{" "}
        </h1>
        <div className={styles.item}>
          <label className={styles.label}> Full name </label>
          <input
            placeholder=" Saman Kumara "
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>

        <div className={styles.item}>
          <label className={styles.label}> Phone Number </label>
          <input
            placeholder=" 07x xxx xxx "
            type="text"
            className={styles.input}
            onChange={(e) => setPhoneno(e.target.value)}
          />
        </div>

        <div className={styles.item}>
          <label className={styles.label}> Delivery Address </label>
          <input
            placeholder=" 244/B , Highlevel Rd, Kosgama "
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        {/* -------- Button  ------*/}

        <button className={styles.button} onClick={handleClick}>
          Order Now
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
