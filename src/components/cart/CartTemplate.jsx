import { useSelector } from "react-redux";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { EmptyCart } from "./EmptyCart";
import { OrderSummary } from "./OrderSummary";
import { CartItem } from "./CartItem";
import styles from "./cart.module.scss";

export const CartTemplate = () => {
  const state = useSelector((state) => state.handleCart);

  const subtotal = state.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalItems = state.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      <Navbar />
      <div className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>Your Shopping Cart</h1>

        {state.length > 0 ? (
          <div className={styles.cartContainer}>
            <div className={styles.cartContent}>
              <div className={styles.itemsList}>
                <div className={styles.itemsHeader}>
                  <h5>Shopping Cart ({totalItems} items)</h5>
                </div>

                {state.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>

              <div className={styles.orderSummary}>
                <OrderSummary subtotal={subtotal} totalItems={totalItems} />
              </div>
            </div>
          </div>
        ) : (
          <EmptyCart />
        )}
      </div>
      <Footer />
    </>
  );
};
