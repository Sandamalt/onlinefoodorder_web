import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'

import styles from '../styles/Home.module.css'

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;
  if (myCookie.token === process.env.TOKEN) {
    admin = true
  }
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data.response,
      admin,
    }, 
  };
}

export default function Home({ pizzaList, admin }) {

  const [close, setClose] = useState(true)

  return (
    <div className={styles.container}>
      <Head>
        <title style={{fontWeight: 700}}>Dineout - The best Pizza restaurant </title>
        <meta name="description" content="Find best pizza restaurants in India offering discounts on food & drinks, check out menu, reviews and also book a table through dineout for free." />
      </Head>
      <Featured />
      
      <PizzaList pizzaList={pizzaList} />
    </div>
  )
}
