import React from "react";
import styles from "../styles/ProductCard.module.css";
import Image from "next/image";
import Link from "next/link";
// import pizzaImg from

<<<<<<< HEAD
{
  /*---------  Product card display on landing page ------*/
}

=======
<<<<<<< HEAD
function PizzaCard({ pizza }) {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <Image src={pizza.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>$ {pizza.prices[0]}</span>
      <p className={styles.desc}>{pizza.desc}</p>
    </div>
  );
}

=======
{
  /*---------  Product card display on landing page ------*/
}

>>>>>>> f897d1344edc22ce9fcb3b532aadeedf85952e02
function PizzaCard({ pizza }) {
  return (
    //product image link to page

    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <Image src={pizza.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>$ {pizza.prices[0]}</span>
      <p className={styles.desc}>{pizza.desc}</p>
    </div>
  );
}

<<<<<<< HEAD
=======
>>>>>>> f7c3cf3 (final with fix bugs)
>>>>>>> f897d1344edc22ce9fcb3b532aadeedf85952e02
export default PizzaCard;
