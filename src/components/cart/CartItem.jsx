import { useDispatch } from "react-redux";
import { addCart, delCart } from "../../redux/action";

import styles from "./cartItem.module.scss";

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.cartItem}>
      <div className={styles.itemImage}>
        <img src={item.image} alt={item.title} />
      </div>

      <div className={styles.itemDetails}>
        <h6>{item.title}</h6>
        <p>${item.price.toFixed(2)} each</p>
      </div>

      <div className={styles.itemControls}>
        <div className={styles.quantityControls}>
          <button
            onClick={() => dispatch(delCart(item))}
            disabled={item.qty <= 1}
            className={styles.quantityButton}
          >
            <i className="fas fa-minus"></i>
          </button>
          <span>{item.qty}</span>
          <button
            onClick={() => dispatch(addCart(item))}
            className={styles.quantityButton}
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <p className={styles.itemTotal}>
          ${(item.price * item.qty).toFixed(2)}
        </p>
        <button
          onClick={() => dispatch(delCart(item))}
          className={styles.removeButton}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
