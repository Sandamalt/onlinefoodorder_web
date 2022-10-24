import styles from "../../styles/Order.module.css";
import Image from "next/image";

const Order = () => {


    const status = 0;

    const statusClass = (index)=> {
        if(index-status <1) return styles.done;
        if(index-status === 1) return styles.inProgress;
        if(index-status >1) return styles.undone;


    }
    return (
        
        <div className={styles.container}>
         <div className={styles.left}>
            <div className={styles.row}>
            <div>
            <table className={styles.table}> <tbody>
                    <tr className={styles.tr}>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Address</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        
                        <td>
                            <span className={styles.id}> 123456789</span>
                        </td>
                        <td>
                            <span className={styles.name}> Saman Kumara</span>
                        </td>
                        <td>
                            <span className={styles.address}> 244/b , Boralugoda , Kosgama</span>
                        </td>
                        
                        <td>
                            <span className={styles.total}>$79.80</span>
                        </td>
                    </tr>
                    

                    
                    </tbody>
                </table>
                </div>

            </div>
            <div className={styles.row}> 
                <div className={statusClass(0)}>
                    <Image className={styles.checkedIcon} src="/img/paid.png" width={30} height={30} alt="" />
                    <span>Payment</span>
                <div className={styles.checkIedcon}>
                <Image src="/img/checked.png" width={20} height={20} alt="" />
                </div>
                </div>

                <div className={statusClass(1)}>
                    <Image className={styles.checkedIcon} src="/img/bake.png" width={30} height={30} alt="" />
                    <span>Prepairing</span>
                <div className={styles.checkedIcon}>
                <Image src="/img/checked.png" width={20} height={20} alt="" />
                </div>
                </div>

                <div className={statusClass(2)}>
                    <Image className={styles.checkedIcon} src="/img/bike.png" width={30} height={30} alt="" />
                    <span> On the Way </span>
                <div className={styles.checkedIcon}>
                <Image src="/img/checked.png" width={20} height={20} alt="" />
                </div>
                </div>

                <div className={statusClass(3)}>
                    <Image className={styles.checkedIcon} src="/img/delivered.png" width={30} height={30} alt="" />
                    <span>Delivered </span>
                <div className={styles.checkedIcon}>
                <Image src="/img/checked.png" width={20} height={20} alt="" />
                </div>
                </div>
            </div>

         </div>
         <div className={styles.right}>
         <div className={styles.wrapper}>
                    <h2 className={styles.title}> CART TOTAL </h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}> Subtotal :</b> $79.60
                </div>

                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}> Discount :</b> $0.00
                </div>

                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}> Total :</b> $79.60
                </div>

                <button disabled className={styles.button}> PAID</button>

                </div>

         </div> 

        </div>
    )
}

export default Order;