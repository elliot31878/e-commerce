import { Link } from "react-router-dom";
import styles from "./emptyCart.module.scss";

export const EmptyCart = () => {
  return (
    <div className={styles.emptyCart}>
      <div className={styles.emptyContent}>
        <h4>Your Cart is Empty</h4>
        <Link to="/" className={styles.continueShopping}>
          <i className="fas fa-arrow-left"></i> Continue Shopping
        </Link>
      </div>
    </div>
  );
};
