import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";

{
  /* ------ Start NAvigation Bar ------ */
}
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f7c3cf3 (final with fix bugs)
>>>>>>> f897d1344edc22ce9fcb3b532aadeedf85952e02
    /*  ----- Left side of Nav bar */

    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <img src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}> ORDER NOW ! </div>
          <div className={styles.text}>036 20 30 500 </div>
        </div>
      </div>

      {/*  ------- Middle of Nav bar ---- */}

      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}> Homepage </li>
          </Link>
          <li className={styles.listItem}> Product </li>
          <li className={styles.listItem}> Menu </li>

          {/* ------Add Logo------ */}

          <img src="/img/logo.png" alt="" width="130px" height="130px" />
          <li className={styles.listItem}> Events </li>
          <li className={styles.listItem}> Blog </li>
          <Link href={"https://herewecode.io/"} target="_blank">
            <li className={styles.listItem}> Contact </li>
          </Link>
        </ul>
      </div>

      {/* ------- Cart icon and right side ------*/}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <img src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}> ORDER NOW ! </div>
          <div className={styles.text}>036 20 30 500 </div>
        </div>
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}> Homepage </li>
          </Link>
          <li className={styles.listItem}> Product </li>
          <li className={styles.listItem}> Menu </li>
          <img src="/img/logo.png" alt="" width="130px" height="130px" />
          <li className={styles.listItem}> Events </li>
          <li className={styles.listItem}> Blog </li>
          <li className={styles.listItem}> Contact </li>
        </ul>
      </div>

>>>>>>> c69594653924d55c8c4bfcd3b10e7ca9c122e7ab
=======
>>>>>>> f7c3cf3 (final with fix bugs)
>>>>>>> f897d1344edc22ce9fcb3b532aadeedf85952e02
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <div>
              {" "}
              <img src="/img/cart.png" alt="" width="30px" height="30px" />{" "}
            </div>
            <div className={styles.counter}> {quantity} </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
