import React from "react";
import styles from "../styles/ProductList.module.css";
import PizzaCard from "./PizzaCard";

function PizzaList({ pizzaList }) {
  return (
    <div className={styles.container}>
<<<<<<< HEAD
      <h1 className={styles.title}>The Best Italian Foods in town</h1>
      <p className={styles.desc}>
        Pizza House is a Italian Foods Restuarant who maneged by Lavenro Garden
        Hotel Kosgama. This is Very Unique and elegent expiriance for people is
        seethawaka area Pizza House have big range of pizza's and other italian
        foods. Such as Pasta , Lasagna and Bevarages. This Restuarant provide
        Online food ordering service and dine in and take away for customers
=======
      <h1 className={styles.title}>The Best Pizza in town</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Incidunt eaque commodi fugit iste, quam
        amet necessitatibus ratione sit blanditiis quas dolorum minima nostrum
        deleniti laboriosam quod ut nisi voluptatibus ullam.
>>>>>>> c69594653924d55c8c4bfcd3b10e7ca9c122e7ab
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
