import React from "react";
import styles from "../styles/ProductList.module.css";
import PizzaCard from "./PizzaCard";

function PizzaList({ pizzaList }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The Best Italian Foods in town</h1>
      <p className={styles.desc}>
        Pizza House is a Italian Foods Restuarant who maneged by Lavenro Garden
        Hotel Kosgama. This is Very Unique and elegent expiriance for people is
        seethawaka area Pizza House have big range of pizza's and other italian
        foods. Such as Pasta , Lasagna and Bevarages. This Restuarant provide
        Online food ordering service and dine in and take away for customers
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
}

export default PizzaList;
