import styles from "../styles/Footer.module.css";
import Image from "next/image";

{
  /* -------   Start Footer  -----*/
}
const Footer = () => {
  {
    /*  ----- add images and left side ----*/
  }
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            BEST PIZZAS IN SEETHAWAKA <br />
          </h2>
        </div>

        {/* ------- right side -------*/}

        <div className={styles.card}>
          <h1 className={styles.title}> FIND OUR RESTURANTS</h1>
          <p className={styles.text}>
            Lavenro Garden Hotel ,
            <br /> Highlevel Road ,
            <br /> Kosgama.
          </p>

          <p className={styles.text}>
            Travelers Cafe ,
            <br /> Hanwella Road ,
            <br /> Pogoda.
          </p>

          <p className={styles.text}>
            Traverlers Cafe ,
            <br /> Avissawella Road ,
            <br /> Avissawella.
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}> WORKING HOURS </h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 09:00 - 22:00
          </p>
          <p className={styles.text}>
            SATERDAY - SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
