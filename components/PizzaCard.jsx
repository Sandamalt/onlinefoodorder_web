import React from "react";
import styles from "../styles/ProductCard.module.css";
import Image from "next/image";
import Link from "next/link";
// import pizzaImg from

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5f28f941bceab332975871bbb21c2cc8e8f6cb90
{
  /*---------  Product card display on landing page ------*/
}

<<<<<<< HEAD
=======
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
>>>>>>> 5f28f941bceab332975871bbb21c2cc8e8f6cb90
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
<<<<<<< HEAD
=======
>>>>>>> f7c3cf3 (final with fix bugs)
>>>>>>> f897d1344edc22ce9fcb3b532aadeedf85952e02
>>>>>>> 5f28f941bceab332975871bbb21c2cc8e8f6cb90
export default PizzaCard;
