import styles from  "../styles/Footer.module.css"
import Image from "next/image"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" layout="fill" alt="" />
            </div>
            <div className={styles.item}>
                <h2 className={styles.motto}>
                    BEST FOODS IN SEETHAWAKA <br />
                </h2>
            </div>
            <div className={styles.card}>
                <h1 className={styles.titile}> FIND OUR RESTURANTS</h1>
                <p className={styles.text}>
                    Lavenro Garden Hotel  #304. 
                    <br /> Highlevel Road , 
                    <br/> Kosgama.
                </p>

                <p className={styles.text}>
                    Travelers Cafe  #304. 
                    <br /> Hanwella Road , 
                    <br/> Pogoda.
                </p>

                <p className={styles.text}>
                    Traverlers Cafe  #304 . 
                    <br /> Avissawella Road , 
                    <br/> Avissawella.
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
    )
}

export default Footer