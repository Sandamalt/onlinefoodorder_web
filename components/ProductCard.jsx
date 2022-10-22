import styles from '../styles/ProductCard.module.css';
import Image from 'next/image';

const ProductCard = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/pizza.png" alt="" width="500" height="500" />
            <h1 className={styles.title}> Chilli Chicken Pizza </h1>
            <span className={styles.price}> $19.90 </span>
            <p className={styles.desc}>
                This Pizza is in Chilli chicken and cheese
            </p>
        </div>
    );
};

export default ProductCard ;