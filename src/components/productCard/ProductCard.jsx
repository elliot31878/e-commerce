import React from "react";
import PropTypes from "prop-types";
import styles from "./product-card.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addCart, delCart } from "../../redux/action";

export const ProductCard = React.memo(({ product }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.handleCart);
  const cartItem = cart.find((item) => item.id === product.id);

  const isInStock = product.rating.count > 0;
  const isPopular = product.rating.rate >= 4;

  const addProduct = () => {
    dispatch(addCart(product));
  };

  const decreaseProduct = () => {
    dispatch(delCart(product));
  };

  return (
    <article className={`card h-100 shadow-sm border-0 ${styles.card}`}>
      <div className="position-relative">
        <img
          src={product.image}
          className="card-img-top p-3 bg-light"
          alt={product.title}
          style={{ height: "200px", objectFit: "contain" }}
        />

        {isPopular && (
          <span className="position-absolute top-0 start-0 bg-success text-white px-2 py-1 m-2 small rounded">
            Popular
          </span>
        )}
        {!isInStock && (
          <span className="position-absolute top-0 end-0 bg-secondary text-white px-2 py-1 m-2 small rounded">
            Sold Out
          </span>
        )}
      </div>

      <div className="card-body d-flex flex-column">
        <small className="text-muted text-uppercase">{product.category}</small>

        <h3
          className="card-title h5 my-2"
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {product.title}
        </h3>

        <div className="mb-2">
          <span className="text-warning">
            {"★".repeat(Math.round(product.rating.rate))}
            {"☆".repeat(5 - Math.round(product.rating.rate))}
          </span>
          <small className="text-muted ms-2">({product.rating.count})</small>
        </div>

        <div className="mt-auto">
          <p className="card-text h5 fw-bold text-primary mb-3">
            ${product.price.toFixed(2)}
          </p>
        </div>

        {cartItem ? (
          <div className={`d-flex align-items-center justify-content-between`}>
            <div className="d-flex align-items-center">
              <button
                className={`btn ${styles.quantityButton} ${styles.decreaseButton}`}
                onClick={decreaseProduct}
                disabled={cartItem.qty < 1}
              >
                <svg width="16" height="2" viewBox="0 0 16 2" fill="none">
                  <path d="M0 1H16" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
              <span className={`mx-3 ${styles.quantityValue}`}>
                {cartItem.qty}
              </span>
              <button
                className={`btn ${styles.quantityButton} ${styles.increaseButton}`}
                onClick={addProduct}
                disabled={!isInStock}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 0V16M0 8H16"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <button
            className={`btn btn-${isInStock ? "primary" : "secondary"} w-100`}
            disabled={!isInStock}
            onClick={addProduct}
          >
            {isInStock ? "Add to Cart" : "Out of Stock"}
          </button>
        )}
      </div>
    </article>
  );
});

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
