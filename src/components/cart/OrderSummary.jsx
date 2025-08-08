import { Link } from "react-router-dom";
import styles from "./orderSummary.module.scss";

export const OrderSummary = ({ subtotal, totalItems }) => {
  const shipping = 30.0;

  return (
    <div className={styles.summaryCard}>
      <div className={styles.summaryHeader}>
        <h5>Order Summary</h5>
      </div>
      <div className={styles.summaryBody}>
        <div className={styles.summaryRow}>
          <span>Subtotal ({totalItems} items)</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className={styles.summaryRow}>
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className={styles.summaryTotal}>
          <span>Total</span>
          <span>${(subtotal + shipping).toFixed(2)}</span>
        </div>

        <Link to="/checkout" className={styles.checkoutButton}>
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};
