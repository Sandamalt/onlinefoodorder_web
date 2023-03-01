import { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [phoneno, setPhoneno] = useState("");

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5f28f941bceab332975871bbb21c2cc8e8f6cb90
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
<<<<<<< HEAD
=======
=======
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
>>>>>>> f897d1344edc22ce9fcb3b532aadeedf85952e02
>>>>>>> 5f28f941bceab332975871bbb21c2cc8e8f6cb90
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
<<<<<<< HEAD
=======
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
>>>>>>> f897d1344edc22ce9fcb3b532aadeedf85952e02
>>>>>>> 5f28f941bceab332975871bbb21c2cc8e8f6cb90
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
          <label className={styles.label}> Delivery Address </label>
          <input
            placeholder=" 244/B , Highlevel Rd, Kosgama "
=======
<<<<<<< HEAD
          <label className={styles.label}> Delivery Address </label>
          <input
            placeholder=" 244/B , Highlevel Rd, Kosgama "
=======
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
>>>>>>> f897d1344edc22ce9fcb3b532aadeedf85952e02
>>>>>>> 5f28f941bceab332975871bbb21c2cc8e8f6cb90
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

<<<<<<< HEAD
        {/* -------- Button  ------*/}

=======
<<<<<<< HEAD
        {/* -------- Button  ------*/}

=======
<<<<<<< HEAD
=======
        {/* -------- Button  ------*/}

>>>>>>> f7c3cf3 (final with fix bugs)
>>>>>>> f897d1344edc22ce9fcb3b532aadeedf85952e02
>>>>>>> 5f28f941bceab332975871bbb21c2cc8e8f6cb90
        <button className={styles.button} onClick={handleClick}>
          Order Now
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
