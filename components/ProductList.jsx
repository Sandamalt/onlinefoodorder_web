import style from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

const ProductList = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}> Best Foods in Avissawella </h1>
            <p className={style.desc}>
                Lavenro Garden is a good hotel and resturant for the people who lives in Avissawella.
                there are have so many foods and drinks. you can take away and dine in their resturant.
                or you can order any foods from web just click and select food.
               
            </p>

            <div className={style.wrapper}>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
             </div>

        </div>
    );
};

export default ProductList;