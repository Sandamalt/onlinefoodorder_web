import { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [phoneno, setPhoneno] = useState("");

<<<<<<< HEAD
  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
<<<<<<< HEAD
=======
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
>>>>>>> f7c3cf3 (final with fix bugs)
        <h1 className={styles.title}>
          {" "}
          You Will Pay Total Bill after Delivery{" "}
        </h1>
        <div className={styles.item}>
          <label className={styles.label}> Full name </label>
          <input
            placeholder=" Saman Kumara "
<<<<<<< HEAD
=======
        <h1 className={styles.title}> You Will Pay $20 after Delivery </h1>
        <div className={styles.item}>
          <label className={styles.label}> Name Surname </label>
          <input
            placeholder=" Leo Messi "
>>>>>>> c69594653924d55c8c4bfcd3b10e7ca9c122e7ab
=======
>>>>>>> f7c3cf3 (final with fix bugs)
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
<<<<<<< HEAD
<<<<<<< HEAD
          <label className={styles.label}> Delivery Address </label>
          <input
            placeholder=" 244/B , Highlevel Rd, Kosgama "
=======
          <label className={styles.label}> Address </label>
          <input
            placeholder=" 100/A/1 , Getahetta , Avissawella "
>>>>>>> c69594653924d55c8c4bfcd3b10e7ca9c122e7ab
=======
          <label className={styles.label}> Delivery Address </label>
          <input
            placeholder=" 244/B , Highlevel Rd, Kosgama "
>>>>>>> f7c3cf3 (final with fix bugs)
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

<<<<<<< HEAD
=======
        {/* -------- Button  ------*/}

>>>>>>> f7c3cf3 (final with fix bugs)
        <button className={styles.button} onClick={handleClick}>
          Order Now
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
