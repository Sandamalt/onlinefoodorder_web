import React from "react";
import styles from "../styles/ProductCard.module.css";
import Image from "next/image";
import Link from "next/link";
// import pizzaImg from

{
  /*---------  Product card display on landing page ------*/
}

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

export default PizzaCard;
